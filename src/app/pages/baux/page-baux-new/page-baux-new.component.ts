import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { GetAllAppartementLibreActions } from 'src/app/ngrx/appartement/appartement.actions';
import {
  AppartementState,
  AppartementStateEnum,
} from 'src/app/ngrx/appartement/appartement.reducer';
import { SaveBailAppartementActions } from 'src/app/ngrx/bail-appartement/bailappartement.actions';
import { BailAppartementState } from 'src/app/ngrx/bail-appartement/bailappartement.reducer';
import { SaveBailMagasinActions } from 'src/app/ngrx/bail-magasin/bailmagasin.actions';
import { BailMagasinState } from 'src/app/ngrx/bail-magasin/bailmagasin.reducer';
import { SaveBailStudioActions } from 'src/app/ngrx/bail-studio/bailstudio.actions';
import { BailStudioState } from 'src/app/ngrx/bail-studio/bailvilla.reducer';
import { SaveBailVillaActions } from 'src/app/ngrx/bail-villa/bailvilla.actions';
import { BailVillaState } from 'src/app/ngrx/bail-villa/bailvilla.reducer';
import { GetAllMagasinLibreActions } from 'src/app/ngrx/magasin/magasin.actions';
import {
  MagasinState,
  MagasinStateEnum,
} from 'src/app/ngrx/magasin/magasin.reducer';
import { GetAllStudioLibreActions } from 'src/app/ngrx/studio/studio.actions';
import {
  StudioState,
  StudioStateEnum,
} from 'src/app/ngrx/studio/studio.reducer';
import { GetAllLocatairesActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { GetAllVillaLibreActions } from 'src/app/ngrx/villa/villa.action';
import { VillaState, VillaStateEnum } from 'src/app/ngrx/villa/villa.reducer';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-baux-new',
  templateUrl: './page-baux-new.component.html',
  styleUrls: ['./page-baux-new.component.css'],
})
export class PageBauxNewComponent implements OnInit {
  submitted = false;
  nombreMoisCaution = 0;
  montantLoyer = 0;
  montantCaution = 0;
  formGroup?: FormGroup;
  bailvillaForm?: FormGroup;
  bailMagainForm?: FormGroup;
  bailStudioForm?: FormGroup;
  bailAppartementForm?: FormGroup;
  public user?: UtilisateurRequestDto;

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

  ngSelectTypeContrat = 'Bail';
  listTypeContrat: string[] = [];
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private userService: UserService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<PageBauxNewComponent>
  ) {
    this.listTypeContrat = [
      'Bail Appartement',
      'Bail Magasin',
      'Bail Studio',
      'Bail Villa',
    ];
  }
  private sendErrorNotification(
    notificationType: NotificationType,
    message: string
  ): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(
        notificationType,
        'An error occurred. Please try again.'
      );
    }
  }
  calculMontan() {
    this.montantCaution = 0;
    this.montantCaution = this.montantLoyer * this.nombreMoisCaution;
  }
  //SAVE BAIL STUDIO
  onSaveBailStudio() {
    this.submitted = true;
    if (this.bailStudioForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveBailStudioActions(this.bailStudioForm?.value));
    this.bailStudiotState$ = this.store.pipe(
      map((state) => state.bailStudioState)
    );

    alert(' BAIL STUDIO');
    if (this.bailStudiotState$) {
      this.sendErrorNotification(
        NotificationType.SUCCESS,
        'Enregistrement réussi'
      );
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec');
    }
    this.onClose();
  }
  //SAVE BAIL APPARTEMENT
  onSaveBailAppartement() {
    this.submitted = true;
    if (this.bailAppartementForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(
      new SaveBailAppartementActions(this.bailAppartementForm?.value)
    );
    this.bailAppartementState$ = this.store.pipe(
      map((state) => state.bailAppartementState)
    );
    this.onClose();
  }
  //SAVE BAIL MAGASIN
  onSaveBailMagasin() {
    this.submitted = true;
    if (this.bailMagainForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveBailMagasinActions(this.bailMagainForm?.value));
    this.bailMagasinState$ = this.store.pipe(
      map((state) => state.bailMagasinState)
    );
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
  //SAVE BAIL VILLA
  onSaveBailVilla() {
    this.submitted = true;
    if (this.bailvillaForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveBailVillaActions(this.bailvillaForm?.value));
    this.bailvillaState$ = this.store.pipe(
      map((state) => state.bailvillaState)
    );
this.onClose();
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    //GET ALL STUDIO
    this.store.dispatch(new GetAllStudioLibreActions({}));
    this.studioState$ = this.store.pipe(map((state) => state.studioState));
    //GET ALL APPARTEMENT
    this.store.dispatch(new GetAllAppartementLibreActions({}));
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );
    //GET ALL LOCATAIRE
    this.store.dispatch(new GetAllLocatairesActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    //GET ALL VILLA
    this.store.dispatch(new GetAllVillaLibreActions({}));
    this.villaState$ = this.store.pipe(map((state) => state.villaState));
    //GET ALL MAGASIN
    this.store.dispatch(new GetAllMagasinLibreActions({}));
    this.magasinState$ = this.store.pipe(map((state) => state.magasinState));

    this.formGroup = this.fb.group({
      idTypeContrat: [''],
    });
    //FORM POUR BAIL STUDIO
    this.bailStudioForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: ['', Validators.required],
      abrvCodeBail: ['BAIL-STUDIO'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      idStudio: ['', Validators.required],
      idUtilisateur: ['', Validators.required],
    });
    //FORM POUR APPARTEMENT
    this.bailAppartementForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: ['', Validators.required],
      abrvCodeBail: ['BAIL-APPARTEMENT'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0, Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      idAppartement: ['', Validators.required],
      idUtilisateur: ['', Validators.required],
    });
    //FORM POUR BAIL VILLA
    this.bailvillaForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: ['', Validators.required],
      abrvCodeBail: ['BAIL-VILLA'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0, Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      idVilla: ['', Validators.required],
      idUtilisateur: ['', Validators.required],
    });
    //FORM BAIL POUR MAGASIN
    this.bailMagainForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      designationBail: ['', Validators.required],
      abrvCodeBail: ['BAIL-MAGASIN'],
      enCoursBail: [true],
      archiveBail: [false],
      montantCautionBail: [0],
      nbreMoisCautionBail: [0],
      nouveauMontantLoyer: [0, Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      idMagasin: ['', Validators.required],
      idUtilisateur: ['', Validators.required],
    });
  }
}
