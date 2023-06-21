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
import { formatDate, registerLocaleData } from '@angular/common';
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

  RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any) {

    const pich = new Chart(id, {
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
          display: false,
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
    this.v_impayer_mois = data.impayerPeriode;
    if (data.statPeriode!=null) {


      this.chartdata=[data.statPeriode];
      this.labeldata.push(data.statPeriode.periode);
      this.realdata.push(data.statPeriode.impayer);
      this.colordata.push("Red");
      this.realdata.push(data.statPeriode.payer);
      this.colordata.push("Green");



      this.RenderChart(this.labeldata,this.realdata,this.colordata,"pie","piechart");
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

    // alert(
    //   this.selectedDate + ' ' + this.annee_model + ' ' + this.periode_model
    // );
    // this.getImpayerParAnnee(this.annee_model);
    // this.getPayerParAnnee(this.annee_model);
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

  /*CHART DATA*/
  chart: any;
  isButtonVisible = false;

  visitorsChartDrilldownHandler = (e: any) => {
    this.chart.options = this.visitorsDrilldownedChartOptions;
    this.chart.options.data = this.options[e.dataPoint.name];
    this.chart.options.title = { text: e.dataPoint.name };
    this.chart.render();
    this.isButtonVisible = true;
  };

  visitorsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: 'light2',
    axisY: {
      gridThickness: 0,
      lineThickness: 1,
    },
    data: [],
  };

  newVSReturningVisitorsOptions = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Statistiques par Période',
    },
    subtitles: [
      {
        text: 'Click on Any Segment to Drilldown',
        backgroundColor: '#2eacd1',
        fontSize: 16,
        fontColor: 'white',
        padding: 5,
      },
    ],
    data: [],
  };

  options: data = {
    'Statistiques par Période': [
      {
        type: 'pie',
        name: 'Statistiques par Période',
        startAngle: 90,
        cursor: 'pointer',
        explodeOnClick: false,
        showInLegend: true,
        legendMarkerType: 'square',
        click: this.visitorsChartDrilldownHandler,
        indexLabelPlacement: 'inside',
        indexLabelFontColor: 'white',
        dataPoints: [
          {
            y: this.v_impayer_mois,
            name: 'Loyers impayés ',
            color: '#058dc7',
            indexLabel: '62.56%',
          },
          {
            y: this.v_payer_mois,
            name: 'Loyer payés',
            color: '#50b432',
            indexLabel: '37.44%',
          },
        ],
      },
    ],
    'Loyers impayés ': [
      {
        color: '#058dc7',
        name: 'Loyers impayés ',
        type: 'column',
        dataPoints: [
          { label: 'Jan', y: 42600 },
          { label: 'Feb', y: 44960 },
          { label: 'Mar', y: 46160 },
          { label: 'Apr', y: 48240 },
          { label: 'May', y: 48200 },
          { label: 'Jun', y: 49600 },
          { label: 'Jul', y: 51560 },
          { label: 'Aug', y: 49280 },
          { label: 'Sep', y: 46800 },
          { label: 'Oct', y: 57720 },
          { label: 'Nov', y: 59840 },
          { label: 'Dec', y: 54400 },
        ],
      },
    ],
    'Loyer payés': [
      {
        color: '#50b432',
        name: 'Loyer payés',
        type: 'column',
        dataPoints: [
          { label: 'Jan', y: 21800 },
          { label: 'Feb', y: 25040 },
          { label: 'Mar', y: 23840 },
          { label: 'Apr', y: 24760 },
          { label: 'May', y: 25800 },
          { label: 'Jun', y: 26400 },
          { label: 'Jul', y: 27440 },
          { label: 'Aug', y: 29720 },
          { label: 'Sep', y: 29200 },
          { label: 'Oct', y: 31280 },
          { label: 'Nov', y: 33160 },
          { label: 'Dec', y: 31400 },
        ],
      },
    ],
  };

  handleClick(event: Event) {
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options['Statistiques par Période'];
    this.chart.render();
    this.isButtonVisible = false;
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options['Statistiques par Période'];
    this.chart.render();
  }
  /** FIN DATA */
}
