import { Component, OnInit } from '@angular/core';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from '../../../ngrx/utulisateur/utlisateur.reducer';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserService } from '../../../services/user/user.service';
import { GetAllLocatairesActions } from '../../../ngrx/utulisateur/utilisateur.actions';
import { map } from 'rxjs/operators';
import {
  EncaissementState,
  EncaissementStateEnum,
} from '../../../ngrx/reglement/reglement.reducer';
import { UtilisateurRequestDto } from '../../../../gs-api/src/models/utilisateur-request-dto';
import { SaveEncaissementActions } from '../../../ngrx/reglement/reglement.actions';
import { BauxState, BauxStateEnum } from '../../../ngrx/baux/baux.reducer';
import { GetAllBientaireByLocatairesActions, GetAllperiodeByBienActions as GetAllPeriodeByBienActions } from '../../../ngrx/baux/baux.actions';

@Component({
  selector: 'app-page-reglement-individuel',
  templateUrl: './page-reglement-individuel.component.html',
  styleUrls: ['./page-reglement-individuel.component.css'],
})
export class PageReglementIndividuelComponent implements OnInit {
  public user?: UtilisateurRequestDto;
  encaissementform?: FormGroup;
  submitted = false;

  moisPaiement = "";
  getBauxBybien$: Observable<BauxState> | null = null;
  getBienBylocatairestate$: Observable<BauxState> | null = null;
  saveEncaissementState$: Observable<EncaissementState> | null = null;

  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly BauxStateEnum = BauxStateEnum;
  readonly BauxImmeubleStateEnum = BauxStateEnum;

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();

    //GET ALL LOCATAIRE
    this.store.dispatch(new GetAllLocatairesActions({}));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.encaissementform = this.fb.group({
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
      idAppelLoyer: [],
      modePaiement: ['ESPESE_MAGISER'],
      operationType: ['CREDIT'],
      montantEncaissement: [0],
      intituleDepense: [''],
      entiteOperation: ['MAGISER'],
    });
  }
  onSaveEncaissement() {
    this.submitted = true;
    if (this.encaissementform?.invalid) {
      return;
    }
    console.log('le formulaire est le suivant : ');

    console.log(this.encaissementform?.value);

    this.submitted = false;
    this.store.dispatch(
      new SaveEncaissementActions(this.encaissementform?.value)
    );
    this.saveEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
  }
  getBienByLocataire(loca: string) {
    this.store.dispatch(new GetAllBientaireByLocatairesActions(loca));
    this.getBienBylocatairestate$ = this.store.pipe(
      map((state) => state.bauxState)
    );
  }
  getBauxBybien(periode: string) {
       this.store.dispatch(new GetAllPeriodeByBienActions(periode));
    this.getBauxBybien$ = this.store.pipe(
      map((state) => state.bauxState)
    );
    this.store.pipe(
      map((state) => state.bauxState)
    ).subscribe(
      (data) => {
        console.log('Bonjour')
        alert(data.loyers.periodeLettre);
        this.moisPaiement=data.loyers.periodeLettre
      }
    );
  }
}
