import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { GetAllAppartementActions } from 'src/app/ngrx/appartement/appartement.actions';
import { AppartementState, AppartementStateEnum } from 'src/app/ngrx/appartement/appartement.reducer';
import { SaveBailAppartementActions } from 'src/app/ngrx/bail-appartement/bailappartement.actions';
import { BailAppartementState } from 'src/app/ngrx/bail-appartement/bailappartement.reducer';
import { SaveBailMagasinActions } from 'src/app/ngrx/bail-magasin/bailmagasin.actions';
import { BailMagasinState } from 'src/app/ngrx/bail-magasin/bailmagasin.reducer';
import { SaveBailStudioActions } from 'src/app/ngrx/bail-studio/bailstudio.actions';
import { BailStudioState } from 'src/app/ngrx/bail-studio/bailvilla.reducer';
import { SaveBailVillaActions } from 'src/app/ngrx/bail-villa/bailvilla.actions';
import { BailVillaState } from 'src/app/ngrx/bail-villa/bailvilla.reducer';
import { GetAllMagasinActions } from 'src/app/ngrx/magasin/magasin.actions';
import { MagasinState, MagasinStateEnum } from 'src/app/ngrx/magasin/magasin.reducer';
import { GetAllStudioActions } from 'src/app/ngrx/studio/studio.actions';
import { StudioState, StudioStateEnum } from 'src/app/ngrx/studio/studio.reducer';
import { GetAllLocatairesActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import { UtilisteurState, UtilisteurStateEnum } from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { GetAllVillaActions } from 'src/app/ngrx/villa/villa.action';
import { VillaState, VillaStateEnum } from 'src/app/ngrx/villa/villa.reducer';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-baux-new',
  templateUrl: './page-baux-new.component.html',
  styleUrls: ['./page-baux-new.component.css']
})
export class PageBauxNewComponent implements OnInit {

  formGroup?: FormGroup;
  bailvillaForm?: FormGroup;
  bailMagainForm?: FormGroup;
  bailStudioForm?: FormGroup;
  bailAppartementForm?: FormGroup;
  public user?:UtilisateurRequestDto;

  utilisateurState$: Observable<UtilisteurState> | null = null;
  villaState$: Observable<VillaState> | null = null;
  magasinState$: Observable<MagasinState> | null = null;
  appartementState$: Observable<AppartementState> | null = null;
  studioState$: Observable<StudioState> | null = null;

  bailvillaState$: Observable<BailVillaState> | null = null;
  bailMagasinState$: Observable<BailMagasinState> | null = null;
  bailAppartementState$: Observable<BailAppartementState> | null = null;
  bailStudiotState$: Observable<BailStudioState> | null = null;

  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  readonly VillaStateEnum = VillaStateEnum;
  readonly MagasinStateEnum = MagasinStateEnum;
  readonly AppartementStateEnum = AppartementStateEnum;
  readonly StudioStateEnum = StudioStateEnum;


  ngSelectTypeContrat = "Bail";
  listTypeContrat: string[] = [];
  constructor(private fb: FormBuilder, private store: Store<any>,  private userService:UserService, private notificationService: NotificationService) {
    this.listTypeContrat = [
      'Bail Appartement',
      'Bail Magasin',
      'Bail Studio',
      'Bail Villa',

    ];
  }
  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
  //SAVE BAIL STUDIO
  onSaveBailStudio() {

    this.store.dispatch(new SaveBailStudioActions(this.bailStudioForm?.value))
    this.bailStudiotState$ = this.store.pipe(map((state) => state.bailStudioState))

    alert(' BAIL STUDIO')
    if (this.bailStudiotState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  //SAVE BAIL APPARTEMENT
  onSaveBailAppartement() {

    this.store.dispatch(new SaveBailAppartementActions(this.bailAppartementForm?.value))
    this.bailAppartementState$ = this.store.pipe(map((state) => state.bailAppartementState))
    console.warn(this.bailAppartementState$);
    alert(' BAIL APPARTEMENT')
    if (this.bailAppartementState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  //SAVE BAIL MAGASIN
  onSaveBailMagasin() {
    this.store.dispatch(new SaveBailMagasinActions(this.bailMagainForm?.value))
    this.bailMagasinState$ = this.store.pipe(map((state) => state.bailMagasinState))
    console.warn(this.bailMagasinState$);

    if (this.bailMagasinState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  //SAVE BAIL VILLA
  onSaveBailVilla() {
  console.log(this.bailvillaForm?.value);

    this.store.dispatch(new SaveBailVillaActions(this.bailvillaForm?.value))
    this.bailvillaState$ = this.store.pipe(map((state) => state.bailvillaState))
    console.warn(this.bailvillaState$);

    if (this.bailvillaState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    //GET ALL STUDIO
    this.store.dispatch(new GetAllStudioActions({}));
    this.studioState$ = this.store.pipe(
      map((state) => state.studioState)
    );
    //GET ALL APPARTEMENT
    this.store.dispatch(new GetAllAppartementActions({}));
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );
    //GET ALL LOCATAIRE
    this.store.dispatch(new GetAllLocatairesActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    //GET ALL VILLA
    this.store.dispatch(new GetAllVillaActions({}));
    this.villaState$ = this.store.pipe(
      map((state) => state.villaState)
    );
    //GET ALL MAGASIN
    this.store.dispatch(new GetAllMagasinActions({}));
    this.magasinState$ = this.store.pipe(
      map((state) => state.magasinState)
    );

    this.formGroup = this.fb.group({
      idTypeContrat: [""]
    });
    //FORM POUR BAIL STUDIO
    this.bailStudioForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: [""],
      abrvCodeBail: ['BAIL-STUDIO'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0],
      dateDebut: [""],
      dateFin: [""],
      idStudio: [0],
      idUtilisateur: [0]
    });
    //FORM POUR APPARTEMENT
    this.bailAppartementForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: [""],
      abrvCodeBail: ['BAIL-APPARTEMENT'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0],
      dateDebut: [""],
      dateFin: [""],
      idAppartement: [0],
      idUtilisateur: [0]
    });
    //FORM POUR BAIL VILLA
    this.bailvillaForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: [""],
      abrvCodeBail: ['BAIL-VILLA'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0],
      dateDebut: [""],
      dateFin: [""],
      idVilla: [0],
      idUtilisateur: [0]
    });
    //FORM BAIL POUR MAGASIN
    this.bailMagainForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: [""],
      abrvCodeBail: ['BAIL-MAGASIN'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0],
      dateDebut: [""],
      dateFin: [""],
      idMagasin: [0],
      idUtilisateur: [0]
    });
  }

}
