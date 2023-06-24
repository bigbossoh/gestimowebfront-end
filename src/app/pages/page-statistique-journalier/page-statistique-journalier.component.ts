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
  GetStatLoyerParAnneeActions,
  GetStatLoyerParPeriodeActions,
} from './../../ngrx/appelloyer/appelloyer.actions';
import { AppelLoyerStateEnum } from './../../ngrx/appelloyer/appelloyer.reducer';
import { AppelLoyerState } from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { map } from 'rxjs/operators';
import { GetAllAnneeActions } from './../../ngrx/annee/annee.actions';
import { AnneeState, AnneeStateEnum } from './../../ngrx/annee/annee.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Chart } from 'chart.js';

export interface data {
  [key: string]: any;
}

@Component({
  selector: 'app-page-statistique-journalier',
  templateUrl: './page-statistique-journalier.component.html',
  styleUrls: ['./page-statistique-journalier.component.css'],
})
export class PageStatistiqueJournalierComponent implements OnInit, data {
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
  @Input() chapitre = 0;
  v_impayer_annee = 0;
  v_payer_annee = 0;
  v_impayer_mois = 0;
  v_payer_mois = 0;
  v_user_id: number = 0;
  v_agence = 0;
  v_jour: any;
  v_encaissemnt: number = 0;

  //chart variables
  chartdata: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [ ];

  chartdataannee: any;
  labeldataannee: any[] = [];
  realdataannee: any[] = [];
  colordataannee: any[] = [ ];

  RenderChart(labeldata:any,maindata:any,colordata:any,type:any) {

    const pich = new Chart("piechart", {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: '# of Votes',
            data: maindata,
            borderWidth: 1,
            backgroundColor:colordata
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        scales: {
          xAxes: [
            {
              display: true,

            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });
  }
  RenderChartAnnee(labeldata:any,maindata:any,colordata:any,type:any) {

    const pich = new Chart("piechartannee", {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: '# of Votes',
            data: maindata,
            borderWidth: 1,
            backgroundColor:colordata
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        scales: {
          xAxes: [
            {
              display: true,

            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });
  }
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
    const jour2 = jour.replaceAll('/', '-');

    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new TotalEncaissementParJourActions({
        jour: jour2,
        idAgence: this.user.idAgence,
        chapitre: this.chapitre,
      })
    );
    this.totalEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
  }
// statt perionde
getStatPeriode(periode:string){
  this.user = this.userService.getUserFromLocalCache();

  this.store.dispatch(
    new GetStatLoyerParPeriodeActions({
      periode: periode,
      idAgence: this.user!.idAgence,
      chapitre: this.chapitre,
    })
  );
  this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
    if (data.statPeriode!=null) {
      this.chartdata=[];
      if (this.labeldata.length>0) {
        this.labeldata.splice(0,this.labeldata.length);
      }
     if (this.realdata.length>0) {
      this.realdata.splice(0,this.realdata.length);
     }
     if (this.colordata.length>0) {
      this.colordata.splice(0,this.colordata.length);
     }
      this.chartdata=[data.statPeriode];
      this.realdata.push(data.statPeriode.impayer);
      this.labeldata.push("Impayé");
      this.colordata.push("Red");
      this.realdata.push(data.statPeriode.payer);
      this.labeldata.push("Payé");
      this.colordata.push("Green");
      this.RenderChart(this.labeldata,this.realdata,this.colordata,"pie");
    }
  });

};

  getImpayerParPeriode(periode: string) {
    this.user = this.userService.getUserFromLocalCache();

    this.store.dispatch(
      new GetImpayerLoyerParPeriodeActions({
        periode: periode,
        idAgence: this.user!.idAgence,
        chapitre: this.chapitre,
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
        chapitre: this.chapitre,
      })
    );
    this.appelLoyerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_annee = data.impayerAnnee;

    });
  }
  getStatParAnnee(annee: number) {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new GetStatLoyerParAnneeActions({
        idAgence: this.user!.idAgence,
        annee: annee,
        chapitre: this.chapitre,
      })
    );

    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      if (data.statAnnee!=null) {
        this.chartdataannee=[];
        if (this.labeldataannee.length>0) {
          this.labeldataannee.splice(0,this.labeldataannee.length);
        }
       if (this.realdataannee.length>0) {
        this.realdataannee.splice(0,this.realdataannee.length);
       }
       if (this.colordataannee.length>0) {
        this.colordataannee.splice(0,this.colordataannee.length);
       }
        this.chartdataannee=[data.statAnnee];
        this.realdataannee.push(data.statAnnee.impayer);
        this.labeldataannee.push("Impayé");
        this.colordataannee.push("Red");
        this.realdataannee.push(data.statAnnee.payer);
        this.labeldataannee.push("Payé");
        this.colordataannee.push("Green");
        this.RenderChartAnnee(this.labeldataannee,this.realdataannee,this.colordataannee,"pie");
      }
    });
  }
  getPayerParAnnee(annee: number) {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new GetPayerLoyerParAnneeActions({
        idAgence: this.user!.idAgence,
        annee: annee,
        chapitre: this.chapitre,
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
        chapitre: this.chapitre,
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
    this.chapitre = 0;
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetAllAnneeActions(this.user!.idAgence));
    this.anneeState$ = this.store.pipe(map((state) => state.anneeState));
    this.periode_model =
      this.selectedDate.getFullYear() +
      '-' +
      (this.selectedDate.getMonth() + 1);
    if (this.selectedDate.getMonth() < 10) {
      this.periode_model =
        this.selectedDate.getFullYear() +
        '-0' +
        (this.selectedDate.getMonth() + 1);
    }
    //alert(this.periode_model)
    this.store.dispatch(new GetAllPeriodeActions(this.user!.idAgence));
    this.periodeState$ = this.store.pipe(map((state) => state.periodeState));
    //alert("1: " + this.selectedDate + " " + this.annee_model + " " + this.periode_model)

    // INITIALISER LES IMPAYES PAR ANNEE
    this.store.dispatch(
      new GetImayerLoyerParAnneeActions({
        idAgence: this.user!.idAgence,
        annee: this.annee_model,
        chapitre: this.chapitre,
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
        chapitre: this.chapitre,
      })
    );
    this.appelLoyerPayerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_payer_annee = data.payerAnnee;
    });
    //FIN PAYER PAR ANNEE
    // ENCAISSEMENT JOURNALIER
    const date_du_jour = formatDate(this.selectedDate, 'dd-MM-yyyy', 'en');
    this.store.dispatch(
      new TotalEncaissementParJourActions({
        jour: date_du_jour,
        idAgence: this.user.idAgence,
        chapitre: this.chapitre,
      })
    );
    this.totalEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        this.v_encaissemnt = data.montantEncaisse;
      });
    // FIN ANCAISSEMENT JOURNALIER
    // IMPAYER PAR PERIODE
    this.store.dispatch(
      new GetImpayerLoyerParPeriodeActions({
        periode: this.periode_model,
        idAgence: this.user!.idAgence,
        chapitre: this.chapitre,
      })
    );
    this.appelLoyerImpayerMoisState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_impayer_mois = data.impayerPeriode;
    });
    // FIN IMPAYER PAR PERIODE

    // PAYER PAR PERIODE
    this.store.dispatch(
      new GetPayerLoyerParPeriodeActions({
        periode: this.periode_model,
        idAgence: this.user!.idAgence,
        chapitre: this.chapitre,
      })
    );
    this.appelLoyerPayerMoisState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.v_payer_mois = data.payerPeriode;
    });
    // FIN PAYER PAR PERIODE
  }
  ngAfterViewInit(): void {
    this.getStatPeriode(this.periode_model);
    this.getStatParAnnee(this.annee_model);
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
