import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { SaveBailVillaActions } from 'src/app/ngrx/bail-villa/bailvilla.actions';
import { BailVillaState } from 'src/app/ngrx/bail-villa/bailvilla.reducer';
import { GetAllMagasinActions } from 'src/app/ngrx/magasin/magasin.actions';
import { MagasinState, MagasinStateEnum } from 'src/app/ngrx/magasin/magasin.reducer';
import { GetAllLocatairesActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import { UtilisteurState, UtilisteurStateEnum } from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { GetAllVillaActions } from 'src/app/ngrx/villa/villa.action';
import { VillaState, VillaStateEnum } from 'src/app/ngrx/villa/villa.reducer';
import { NotificationService } from 'src/app/services/notification/notification.service';

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

  utilisateurState$: Observable<UtilisteurState> | null = null;
  villaState$: Observable<VillaState> | null = null;
  magasinState$: Observable<MagasinState> | null = null;
  bailvillaState$: Observable<BailVillaState> | null = null;

  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  readonly VillaStateEnum = VillaStateEnum;
  readonly MagasinStateEnum = MagasinStateEnum;


  ngSelectTypeContrat = "Bail";
  listTypeContrat: string[] = [];
  constructor(private fb: FormBuilder, private store: Store<any>, private notificationService: NotificationService) {
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
  onSaveBailVilla() {

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
      idAgence: [1],
      designationBail: [""],
      abrvCodeBail: ['BAIL-VILLA'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0],
      dateDebut: [""],
      dateFin: [""],
      idstudio: [0],
      idUtilisateur: [0]
    });
    //FORM POUR APPARTEMENT
    this.bailAppartementForm = this.fb.group({
      id: [0],
      idAgence: [1],
      designationBail: [""],
      abrvCodeBail: ['BAIL-VILLA'],
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
      idAgence: [1],
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
      idAgence: [1],
      designationBail: [""],
      abrvCodeBail: ['BAIL-VILLA'],
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
