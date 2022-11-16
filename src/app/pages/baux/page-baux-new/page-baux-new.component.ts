import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllAppartementLibreActions } from 'src/app/ngrx/appartement/appartement.actions';
import {
  AppartementState,
  AppartementStateEnum,
} from 'src/app/ngrx/appartement/appartement.reducer';
import { SaveBailAppartementActions } from 'src/app/ngrx/bail-appartement/bailappartement.actions';
import { BailAppartementState } from 'src/app/ngrx/bail-appartement/bailappartement.reducer';
import { SaveBailMagasinActions } from 'src/app/ngrx/bail-magasin/bailmagasin.actions';
import { BailMagasinState } from 'src/app/ngrx/bail-magasin/bailmagasin.reducer';
import { SaveBailVillaActions } from 'src/app/ngrx/bail-villa/bailvilla.actions';
import { BailVillaState } from 'src/app/ngrx/bail-villa/bailvilla.reducer';
import { GetAllMagasinLibreActions } from 'src/app/ngrx/magasin/magasin.actions';
import {
  MagasinState,
  MagasinStateEnum,
} from 'src/app/ngrx/magasin/magasin.reducer';

import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { GetAllVillaLibreActions } from 'src/app/ngrx/villa/villa.action';
import { VillaState, VillaStateEnum } from 'src/app/ngrx/villa/villa.reducer';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { GetAllLocatairesActions } from '../../../ngrx/utulisateur/utilisateur.actions';

@Component({
  selector: 'app-page-baux-new',
  templateUrl: './page-baux-new.component.html',
  styleUrls: ['./page-baux-new.component.css'],
})
export class PageBauxNewComponent implements OnInit {
  submitted = false;
  nombreMoisCautionApp = 0;
  montantLoyerApp = 0;
  montantCautionApp = 0;

  nombreMoisCautionMag = 0;
  montantLoyerMag = 0;
  montantCautionMag = 0;

  nombreMoisCautionVil = 0;
  montantLoyerVil = 0;
  montantCautionVil = 0;
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

  bailvillaState$: Observable<BailVillaState> | null = null;
  bailMagasinState$: Observable<BailMagasinState> | null = null;
  bailAppartementState$: Observable<BailAppartementState> | null = null;

  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  readonly VillaStateEnum = VillaStateEnum;
  readonly MagasinStateEnum = MagasinStateEnum;
  readonly AppartementStateEnum = AppartementStateEnum;

  ngSelectTypeContrat = 'Bail';
  listTypeContrat: string[] = [];
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private userService: UserService,
    public dialogRef: MatDialogRef<PageBauxNewComponent>
  ) {
    this.listTypeContrat = ['Bail Appartement', 'Bail Magasin', 'Bail Villa'];
  }

  calculMontantCautionApp() {
    // this.montantCautionApp = 0;

    this.montantCautionApp = this.montantLoyerApp * this.nombreMoisCautionApp;
  }
  calculMontantCautionMag() {
    this.montantCautionMag = this.montantLoyerMag * this.nombreMoisCautionMag;
  }
  calculMontantCautionVil() {
    console.log(
      'here calculMontantCautionVil',
      this.montantLoyerVil,
      this.nombreMoisCautionVil
    );
    this.montantCautionVil = this.montantLoyerVil * this.nombreMoisCautionVil;
  }

  //SAVE BAIL APPARTEMENT
  onSaveBailAppartement() {
    this.submitted = true;
    console.log('Le bail appartement est le suivant : ');
    console.log(this.bailAppartementForm?.value);
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
    console.log('Le formulaire est le suivant');
    console.log(this.bailMagainForm?.value);

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

    //GET ALL APPARTEMENT LIBRE
    this.store.dispatch(new GetAllAppartementLibreActions(this.user.idAgence));
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );
    //GET ALL LOCATAIRE
    this.store.dispatch(new GetAllLocatairesActions(this.user.idAgence));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    //GET ALL VILLA
    this.store.dispatch(new GetAllVillaLibreActions(this.user.idAgence));
    this.villaState$ = this.store.pipe(map((state) => state.villaState));
    //GET ALL MAGASIN
    this.store.dispatch(new GetAllMagasinLibreActions(this.user.idAgence));
    this.magasinState$ = this.store.pipe(map((state) => state.magasinState));

    this.formGroup = this.fb.group({
      idTypeContrat: [''],
    });
    //FORM POUR BAIL STUDIO

    //FORM POUR APPARTEMENT
    this.bailAppartementForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
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
      idLocataire: ['', Validators.required],
    });
    //FORM POUR BAIL VILLA
    this.bailvillaForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
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
      idLocataire: ['', Validators.required],
    });
    //FORM BAIL POUR MAGASIN
    this.bailMagainForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
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
      idLocataire: ['', Validators.required],
    });
  }
}
