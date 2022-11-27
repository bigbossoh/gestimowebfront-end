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
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

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
  public user?: UtilisateurRequestDto;
  periode_model =
    this.selectedDate.getFullYear() + '-' + this.selectedDate.getMonth();
  annee_model = this.selectedDate.getFullYear();
  v_impayer_annee = 0;
  v_payer_annee = 0;
  v_impayer_mois = 0;
  v_payer_mois = 0;
  v_user_id: number = 0;
  v_agence = 0;
  constructor(
    private store: Store<any>,
    private _adapter: DateAdapter<Date>,

    private userService: UserService,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }

  getEncaissementPayerJour(jour: any) {
    // jour = jour.replaceAll('/', '-');
    //jour = jour.replace('/', '-');
    const jour2 = jour.replaceAll('/', '-');
    console.log(jour2);

    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new TotalEncaissementParJourActions({
        jour: jour2,
        idAgence: this.user.idAgence,
      })
    );
    this.totalEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_annee = data.impayerAnnee;
    });
  }

  getImpayerParPeriode(periode: string) {
    this.user = this.userService.getUserFromLocalCache();

    this.store.dispatch(
      new GetImpayerLoyerParPeriodeActions({
        periode: periode,
        idAgence: this.user!.idAgence,
      })
    );
    this.appelLoyerImpayerMoisState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_mois = data.impayerPeriode;
    });
  }
  getImpayerParAnnee(annee: number) {
    this.user = this.userService.getUserFromLocalCache();

    this.store.dispatch(
      new GetImayerLoyerParAnneeActions({
        idAgence: this.user!.idAgence,
        annee: annee,
      })
    );
    this.appelLoyerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_annee = data.impayerAnnee;
    });
  }
  getPayerParAnnee(annee: number) {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new GetPayerLoyerParAnneeActions({
        idAgence: this.user!.idAgence,
        annee: annee,
      })
    );
    this.appelLoyerPayerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_payer_annee = data.payerAnnee;
    });
  }

  getPayerParPeriode(periode: any) {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new GetPayerLoyerParPeriodeActions({
        periode: periode,
        idAgence: this.user!.idAgence,
      })
    );
    this.appelLoyerPayerMoisState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_payer_mois = data.payerPeriode;
    });
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetAllAnneeActions(this.user!.idAgence));
    this.anneeState$ = this.store.pipe(map((state) => state.anneeState));

    this.store.dispatch(new GetAllPeriodeActions(this.user!.idAgence));
    this.periodeState$ = this.store.pipe(map((state) => state.periodeState));
    //alert("1: " + this.selectedDate + " " + this.annee_model + " " + this.periode_model)

    // INITIALISER LES IMPAYES PAR ANNEE
    this.store.dispatch(
      new GetImayerLoyerParAnneeActions({
        idAgence: this.user!.idAgence,
        annee: this.annee_model,
      })
    );
    this.appelLoyerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_annee = data.impayerAnnee;
    });

    // FIN INITIALISER LES IMPAYER PAR ANNEE
    // PAYER PAR ANNEE
    this.store.dispatch(
      new GetPayerLoyerParAnneeActions({
        idAgence: this.user!.idAgence,
        annee: this.annee_model,
      })
    );
    this.appelLoyerPayerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_payer_annee = data.payerAnnee;
    });
    //FIN PAYER PAR ANNEE
    this.getEncaissementPayerJour(this.selectedDate);
    alert(
      this.selectedDate + ' ' + this.annee_model + ' ' + this.periode_model
    );
    // this.getImpayerParAnnee(this.annee_model);
    // this.getPayerParAnnee(this.annee_model);
    // IMPAYER PAR PERIODE
    this.getImpayerParPeriode(this.periode_model);
    // FIN IMPAYER PAR PERIODE

    // PAYER PAR PERIODE
    this.getPayerParPeriode(this.annee_model);
    // FIN PAYER PAR PERIODE
  }
  longText = ``;
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
