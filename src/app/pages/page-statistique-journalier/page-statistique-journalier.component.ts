import { TotalEncaissementParJourActions } from './../../ngrx/reglement/reglement.actions';
import {
  EncaissementState,
  EncaissementStateEnum,
} from './../../ngrx/reglement/reglement.reducer';
import { GetAllPeriodeActions } from './../../ngrx/appelloyer/peiodeappel/periodeappel.actions';
import { PeriodeStateEnum } from 'src/app/ngrx/appelloyer/peiodeappel/periodeappel.reducer';
import { PeriodeState } from './../../ngrx/appelloyer/peiodeappel/periodeappel.reducer';
import {
  GetImayerLoyerParAnneeActions,
  GetImpayerLoyerParPeriodeActions,
  GetPayerLoyerParAnneeActions,
  GetPayerLoyerParPeriodeActions,
} from './../../ngrx/appelloyer/appelloyer.actions';
import { AppelLoyerStateEnum } from './../../ngrx/appelloyer/appelloyer.reducer';
import { AppelLoyerState } from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { map } from 'rxjs/operators';
import { GetAllAnneeActions } from './../../ngrx/annee/annee.actions';
import { AnneeState, AnneeStateEnum } from './../../ngrx/annee/annee.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-page-statistique-journalier',
  templateUrl: './page-statistique-journalier.component.html',
  styleUrls: ['./page-statistique-journalier.component.css'],
})
export class PageStatistiqueJournalierComponent implements OnInit {
  anneeState$: Observable<AnneeState> | null = null;
  appelLoyerState$: Observable<AppelLoyerState> | null = null;
  appelLoyerPayerState$: Observable<AppelLoyerState> | null = null;
  appelLoyerPayerMoisState$: Observable<AppelLoyerState> | null = null;
  appelLoyerImpayerMoisState$: Observable<AppelLoyerState> | null = null;
  periodeState$: Observable<PeriodeState> | null = null;
  totalEncaissementState$: Observable<EncaissementState> | null = null;

  readonly PeriodeStateEnum = PeriodeStateEnum;
  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;
  readonly AppelLoyerPayerStateEnum = AppelLoyerStateEnum;
  readonly AppelLoyerPayerMoisStateEnum = AppelLoyerStateEnum;
  readonly AppelLoyerImpayerMoisStateEnum = AppelLoyerStateEnum;
  readonly AnneeStateEnum = AnneeStateEnum;
  selectedDate = new Date();
  periode_model =
    this.selectedDate.getFullYear() + '-' + this.selectedDate.getMonth();
  annee_model = this.selectedDate.getFullYear();
  v_impayer_annee = 0;
  v_payer_annee = 0;
  v_impayer_mois = 0;
  v_payer_mois = 0;

  constructor(
    private store: Store<any>,
    private _adapter: DateAdapter<Date>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }
  getImpayerParAnnee(annee: number) {
    this.store.dispatch(new GetImayerLoyerParAnneeActions(annee));
    this.appelLoyerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_annee = data.impayerAnnee;
    });
  }
  getEncaissementPayerJour(jour: any) {
    jour = jour.replace('/', '-');
    jour = jour.replace('/', '-');
    this.store.dispatch(new TotalEncaissementParJourActions(jour));
    this.totalEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_annee = data.impayerAnnee;
    });
  }
  getPayerParAnnee(annee: number) {

    this.store.dispatch(new GetPayerLoyerParAnneeActions(annee));
    this.appelLoyerPayerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_payer_annee = data.payerAnnee;
    });
  }
  getImpayerParPeriode(periode: any) {
    this.store.dispatch(new GetImpayerLoyerParPeriodeActions(periode));
    this.appelLoyerImpayerMoisState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_mois = data.impayerPeriode;
    });
  }

  getPayerParPeriode(periode: any) {

    this.store.dispatch(new GetPayerLoyerParPeriodeActions(periode));
    this.appelLoyerPayerMoisState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_payer_mois = data.payerPeriode;
    });
  }
  ngOnInit(): void {
    this.store.dispatch(new GetAllAnneeActions({}));
    this.anneeState$ = this.store.pipe(map((state) => state.anneeState));

    this.store.dispatch(new GetAllPeriodeActions({}));
    this.periodeState$ = this.store.pipe(map((state) => state.periodeState));
    this.getEncaissementPayerJour(this.selectedDate);
    this.getImpayerParAnnee(this.annee_model);
    this.getPayerParAnnee(this.annee_model);
    this.getImpayerParPeriode(this.periode_model);
    this.getPayerParPeriode(this.annee_model);
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  toppings = new FormControl('');

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
}
