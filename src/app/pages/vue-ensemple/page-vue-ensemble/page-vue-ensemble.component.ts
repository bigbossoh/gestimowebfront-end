import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { StatistiqueService } from '../../../services/statistique_dashboard/statistique.service';
import { UserService } from '../../../services/user/user.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApiService } from 'src/gs-api/src/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StatistiqueChartState } from 'src/app/ngrx/statistique-chart/statistiquechart.reducer';
import { GetAllStatistiquePeriodeAction } from 'src/app/ngrx/statistique-chart/statistiquechart.action';
import { map } from 'rxjs/operators';
import { EtablissementState } from 'src/app/ngrx/etablissement/etablissement.reducer';
import { GetDefaultEtabNameActions } from 'src/app/ngrx/etablissement/etablisement.action';

export interface data {
  [key: string]: any;
}

@Component({
  selector: 'app-page-vue-ensemble',
  templateUrl: './page-vue-ensemble.component.html',
  styleUrls: ['./page-vue-ensemble.component.css'],
})
export class PageVueEnsembleComponent implements OnInit, data {
  listeTOUTUser: number = 0;
  totalUtilisateur = 0;
  totalLocatireActifParAgence = 0;
  totalLocataireParAgence = 0;
  totalBailActif: number = 0;
  totalBauxNonActif: number = 0;
  totalPieces: number = 70;
  totalBiens: number = 0;
  totalBiensOQp: number = 0;
  PrcentagePiece: number = 0;
  idAgence: any = 0;
  totalequipement: number = 250;
  totquipement: number = 0;
  prcentagetotquipement: number = 0;
  totsignal: number = 0;
  PrcentageBiens: number = 0;
  public user?: UtilisateurRequestDto;
  chapitre: any;
  chartType: ChartType = 'line';
  dataset: ChartDataSets[] = [];
  labels: Label[] = [];
  chartOptions: any = {
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 16,
        usePointStyle: true,
      },
    },
  };

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'month',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartPlugins = [];
  chartState$: Observable<StatistiqueChartState> | null = null;
  etablissementState$: Observable<EtablissementState> | null = null;
  idEtabl:any;
  constructor(
    private statistique: StatistiqueService,
    private userService: UserService,
    private apiService: ApiService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
this.idAgence=this.user?.idAgence
    this.store.dispatch(new GetDefaultEtabNameActions(this.user.id));
    this.etablissementState$ = this.store.pipe(map((state) => state.etablissementState));
    this.store.pipe(map((state) => state.etablissementState)).subscribe(
      data=>{
        if (data.dataState == 'Loaded') {
       //   alert("ALERTE DE NAZAIRE *** "+data.etabname.chapite)
          this.idEtabl = data.etabname.chapite;
          this.getNombreBienImmobiliers(this.idEtabl,this.user?.idAgence);
          this.getNombreBienImmobiliersOqp(this.idEtabl,this.user?.idAgence);
          this.getNbreLocataire(this.user?.idAgence);
          this.getIdAgence();
          this.getNbreLocataireActif(this.user?.idAgence);
          this.getNbrebauxActif(this.user?.idAgence);
          this.getNbrebauxNonActif(this.user?.idAgence);
        }
      }
    )



    const startMonth = '2023-01';
    const endMonth = '2023-12';

    this.store.dispatch(
      new GetAllStatistiquePeriodeAction({
        idAgence: this.user.idAgence,
        datedebut: '01-01-2023',
        datefin: '01-12-2023',
      })
    );
    this.chartState$ = this.store.pipe(
      map((state) => state.statistiqueChartState)
    );
    this.store
      .pipe(map((state) => state.statistiqueChartState))
      .subscribe((data) => {

      });
  }
  private getIdAgence(): number {
    return this.userService.getUserFromLocalCache().idAgence!;
  }

  public getNombreBienImmobiliers(chapitre: any,agence:any) {
   // alert(chapitre)
    this.statistique.getAllBienImmobilier(chapitre,agence).subscribe(
      (response) => {
        console.log("####### ###### ####");
        console.log(response);

        this.totalBiens = response.length;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNombreBienImmobiliersOqp(chapitre: any,agence:any) {
    this.statistique.getAllBienImmobilierOccuper(chapitre,agence).subscribe(
      (response) => {
        this.totalBiensOQp = response.length;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  ngAfterViewInit(){
    this.ngOnInit();
  }
  private getNbreLocataire(agence:any) {
    this.statistique.getAllLocatire(agence).subscribe(
      (response) => {
        this.totalLocataireParAgence = response.length;
        // alert(this.totalLocataireParAgence)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getNbreLocataireActif(agence:any) {
    this.statistique.getAlllocataireAyantBail(agence).subscribe(
      (resp) => {
        this.totalLocatireActifParAgence = resp.length;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  private getNbrebauxActif(agence:any) {
    this.statistique.getAllBauxActif(agence).subscribe(
      (resp) => {
        this.totalBailActif = resp;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getNbrebauxNonActif(agence:any) {
    this.statistique.getAllBauxNonActif(agence).subscribe(
      (resp) => {
        this.totalBauxNonActif = resp;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  /*CHART DATA*/
  chart: any;
	isButtonVisible = false;

	visitorsChartDrilldownHandler = (e: any) => {
		this.chart.options = this.visitorsDrilldownedChartOptions;
		this.chart.options.data = this.options[e.dataPoint.name];
		this.chart.options.title = { text: e.dataPoint.name }
		this.chart.render();
		this.isButtonVisible = true;
	}

	visitorsDrilldownedChartOptions = {
		animationEnabled: true,
		theme: "light2",
		axisY: {
			gridThickness: 0,
			lineThickness: 1
		},
		data: []
	};

	newVSReturningVisitorsOptions = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "New vs Loyer payés"
		},
		subtitles: [{
			text: "Click on Any Segment to Drilldown",
			backgroundColor: "#2eacd1",
			fontSize: 16,
			fontColor: "white",
			padding: 5
		}],
		data: []
	};

	options: data = {
		"New vs Loyer payés": [{
			type: "pie",
			name: "New vs Loyer payés",
			startAngle: 90,
			cursor: "pointer",
			explodeOnClick: false,
			showInLegend: true,
			legendMarkerType: "square",
			click: this.visitorsChartDrilldownHandler,
			indexLabelPlacement: "inside",
			indexLabelFontColor: "white",
			dataPoints: [
				{ y: 551160, name: "Loyers impayés ", color: "#058dc7", indexLabel: "62.56%" },
				{ y: 329840, name: "Loyer payés", color: "#50b432", indexLabel: "37.44%" }
			]
		}],
		"Loyers impayés ": [{
			color: "#058dc7",
			name: "Loyers impayés ",
			type: "column",
			dataPoints: [
				{ label: "Jan", y: 42600 },
				{ label: "Feb", y: 44960 },
				{ label: "Mar", y: 46160 },
				{ label: "Apr", y: 48240 },
				{ label: "May", y: 48200 },
				{ label: "Jun", y: 49600 },
				{ label: "Jul", y: 51560 },
				{ label: "Aug", y: 49280 },
				{ label: "Sep", y: 46800 },
				{ label: "Oct", y: 57720 },
				{ label: "Nov", y: 59840 },
				{ label: "Dec", y: 54400 }
			]
		}],
		"Loyer payés": [{
			color: "#50b432",
			name: "Loyer payés",
			type: "column",
			dataPoints: [
				{ label: "Jan", y: 21800 },
				{ label: "Feb", y: 25040 },
				{ label: "Mar", y: 23840 },
				{ label: "Apr", y: 24760 },
				{ label: "May", y: 25800 },
				{ label: "Jun", y: 26400 },
				{ label: "Jul", y: 27440 },
				{ label: "Aug", y: 29720 },
				{ label: "Sep", y: 29200 },
				{ label: "Oct", y: 31280 },
				{ label: "Nov", y: 33160 },
				{ label: "Dec", y: 31400 }
			]
		}]
	};

	handleClick(event: Event) {
		this.chart.options = this.newVSReturningVisitorsOptions;
		this.chart.options.data = this.options["New vs Loyer payés"];
		this.chart.render();
		this.isButtonVisible = false;
	  }

	getChartInstance(chart: object) {
		this.chart = chart;
		this.chart.options = this.newVSReturningVisitorsOptions;
		this.chart.options.data = this.options["New vs Loyer payés"];
		this.chart.render();
	}
  /** FIN DATA */
}
