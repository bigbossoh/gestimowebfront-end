

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
import { SaveEncaissementActions, GetAllPeriodeReglementByBienActions, GetEncaissementBienActions } from '../../../ngrx/reglement/reglement.actions';
import { BauxState, BauxStateEnum } from '../../../ngrx/baux/baux.reducer';

import { GetAllBientaireByLocatairesActions } from '../../../ngrx/baux/baux.actions';


@Component({
  selector: 'app-page-reglement-individuel',
  templateUrl: './page-reglement-individuel.component.html',
  styleUrls: ['./page-reglement-individuel.component.css'],
})
export class PageReglementIndividuelComponent implements OnInit {
  public user?: UtilisateurRequestDto;
  encaissementform?: FormGroup;
  getLesdonne: any;
leBienSelect=""
  submitted = false;
  periode: string = '';
  bien: string = '';
  moisPaiement = '2022-12';
  getBauxBybien$: Observable<EncaissementState> | null = null;
  listeEncaissementBien$: Observable<EncaissementState> | null = null;
  getBienBylocatairestate$: Observable<BauxState> | null = null;
  saveEncaissementState$: Observable<EncaissementState> | null = null;

  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly BauxStateEnum = BauxStateEnum;
  readonly BauxBienStateEnum = EncaissementStateEnum;
  readonly EncaissBienStateEnum = EncaissementStateEnum;

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private userService: UserService
  ) {}
  compareObjects(o1: any, o2: any): boolean {
    // alert(o1 + " le  " + o1)
    // this.leBienSelect = o1.codeAbrvBienImmobilier;
    // alert('Le bon Bien '+o1.codeAbrvBienImmobilier)
    return o1 !== o2
  }
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
      idAppelLoyer: [1],
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
  getBauxBybien(p: any) {

    this.store.dispatch(new GetAllPeriodeReglementByBienActions(p));
    this.getBauxBybien$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store.dispatch(new GetEncaissementBienActions(p));
    this.listeEncaissementBien$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store.pipe(
      map((state) => state.encaissementState)
    ).subscribe((data) => {
      console.log('les data ');
      this.getLesdonne=data.appelloyers
console.log(this.getLesdonne.idAgence  );


    });
  }
}
