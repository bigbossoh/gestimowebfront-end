import { formatDate } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  GetSuiviDepenseDeuxDateActions,
  GetSuiviDepenseTotalActions,
} from 'src/app/ngrx/journal-caisse/journal-caisse.actions';
import {
  SuiviDepenseState,
  SuiviDepenseStateEnum,
} from 'src/app/ngrx/journal-caisse/journal-caisse.reducer';
import {
  SommeEncaissementEntreDeuxDatesActions,
  TotalEncaissementEntreDeuxDatesActions,
} from 'src/app/ngrx/reglement/reglement.actions';
import {
  EncaissementState,
  EncaissementStateEnum,
} from 'src/app/ngrx/reglement/reglement.reducer';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-consultation-reglement-loyer-periode',
  templateUrl: './page-consultation-reglement-loyer-periode.component.html',
  styleUrls: ['./page-consultation-reglement-loyer-periode.component.css'],
})
export class PageConsultationReglementLoyerPeriodeComponent implements OnInit {
  @ViewChild('paginatorSuivi') paginatorSuivi!: MatPaginator;
  @ViewChild(MatSort) sortSuivi!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  suiviDepenseState$: Observable<SuiviDepenseState> | null = null;
  displayedColumnsSuiviDepense = [
    'id',
    'dateEncaissement',
    'codeTransaction',
    'montantDepense',
    'designation',
    'modePaiement',
    'operationType',
  ];
  displayedColumns = [
    'chapitre',
    'commune',
    'bien',
    'periode',
    'bail',
    'montantpaye',
    'montantloyer',
    'typepaiement',
    'solde',
    'Status',
    'pourcent',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  dataSourceSuivi: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20, 50, 100];
  pageSizeSuivi = [5, 10, 15, 20, 50, 100];
  public totalRecords: number | undefined;
  public totalRecordsSuivi: number | undefined;
  suiviDepense$: Observable<SuiviDepenseState> | null = null;
  encaissementLoyer$: Observable<EncaissementState> | null = null;
  encaissementLoyerSomme$: Observable<EncaissementState> | null = null;

  filtreAppel: any;

  readonly SuiviDepenseStateEnum = SuiviDepenseStateEnum;
  readonly SuiviDepenseStateEnumDeuxDate = SuiviDepenseStateEnum;
  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly EncaissementSommeStateEnum = EncaissementStateEnum;

  debut = new Date();
  fin = new Date();
  public user?: UtilisateurRequestDto;
  constructor(
    private store: Store<any>,
    private _adapter: DateAdapter<Date>,
    private userService: UserService,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSourceSuivi.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    if (this.dataSourceSuivi.paginator) {
      this.dataSourceSuivi.paginator.firstPage();
    }
  }
  applyFilterOption(event: any) {
    this.dataSource.filter = event.trim().toLowerCase();
    this.dataSourceSuivi.filter = event.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    if (this.dataSourceSuivi.paginator) {
      this.dataSourceSuivi.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.getAllSuiviDepenseParPeriode(this.debut, this.fin);
    this.getListEncaissementParPeriode(this.debut, this.fin);
    this.getListPaiementloyerEntreDeuxDate(this.debut, this.fin);
    this.getSommeEncaissementEntreDeuxDate(this.debut, this.fin);
  }
  ngAfterViewInit() {
    //this.dataSource = new MatTableDataSource(this.EmpData);
    this.dataSource.paginator = this.paginator;
    this.dataSourceSuivi.paginator = this.paginatorSuivi;
  }
  getAllSuiviDepenseParPeriode(debut: any, fin: any) {
    this.user = this.userService.getUserFromLocalCache();
    const jourDebut = formatDate(debut, 'dd-MM-yyyy', this._locale);
    const jourFin = formatDate(fin, 'dd-MM-yyyy', this._locale);
    this.store.dispatch(
      new GetSuiviDepenseTotalActions({
        idAgence: this.user?.idAgence,
        fin: jourFin,
        debut: jourDebut,
      })
    );
    this.suiviDepense$ = this.store.pipe(
      map((state) => state.suiviDepenseState)
    );
  }

  getSommeEncaissementEntreDeuxDate(debut: any, fin: any) {
    this.user = this.userService.getUserFromLocalCache();
    const jourDebut = formatDate(debut, 'dd-MM-yyyy', this._locale);
    const jourFin = formatDate(fin, 'dd-MM-yyyy', this._locale);
    this.store.dispatch(
      new SommeEncaissementEntreDeuxDatesActions({
        idAgence: this.user?.idAgence,
        datefin: jourFin,
        datedebut: jourDebut,
      })
    );
    this.encaissementLoyerSomme$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
  }

  getListEncaissementParPeriode(debut: any, fin: any) {
    this.user = this.userService.getUserFromLocalCache();
    const jourDebut = formatDate(debut, 'dd-MM-yyyy', this._locale);
    const jourFin = formatDate(fin, 'dd-MM-yyyy', this._locale);
    this.store.dispatch(
      new GetSuiviDepenseDeuxDateActions({
        idAgence: this.user?.idAgence,
        fin: jourFin,
        debut: jourDebut,
      })
    );
    this.suiviDepenseState$ = this.store.pipe(
      map((state) => state.suiviDepenseState)
    );
    this.store
      .pipe(map((state) => state.suiviDepenseState))
      .subscribe((data) => {
        console.log(data);
        this.dataSourceSuivi.data = [];
        this.dataSourceSuivi.paginator = null;
        this.totalRecordsSuivi = 0;
        if (data.suiviDepenses.length != 0) {
          this.dataSourceSuivi.data = data.suiviDepenses;
          this.dataSourceSuivi.paginator = this.paginatorSuivi;
          this.totalRecordsSuivi = data.suiviDepenses.length;
        }
      });
  }
  // LISTE DES PAIEMENTS ENTRE DEUX DATES
  getListPaiementloyerEntreDeuxDate(debut: any, fin: any) {
    this.user = this.userService.getUserFromLocalCache();
    const jourDebut = formatDate(debut, 'dd-MM-yyyy', this._locale);
    const jourFin = formatDate(fin, 'dd-MM-yyyy', this._locale);
    this.store.dispatch(
      new TotalEncaissementEntreDeuxDatesActions({
        idAgence: this.user?.idAgence,
        datefin: jourFin,
        datedebut: jourDebut,
      })
    );
    this.encaissementLoyer$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        console.log('**** the date to encaissement is');
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (data.encaissementsLoyer.length != 0) {
          this.dataSource.data = data.encaissementsLoyer;
          this.dataSource.paginator = this.paginator;
          this.totalRecords = data.encaissementsLoyer.length;
        }
      });
  }
}
