import { formatDate } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetSuiviDepenseDeuxDateActions, GetSuiviDepenseTotalActions } from 'src/app/ngrx/journal-caisse/journal-caisse.actions';
import {
  SuiviDepenseState,
  SuiviDepenseStateEnum,
} from 'src/app/ngrx/journal-caisse/journal-caisse.reducer';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-consultation-reglement-loyer-periode',
  templateUrl: './page-consultation-reglement-loyer-periode.component.html',
  styleUrls: ['./page-consultation-reglement-loyer-periode.component.css'],
})
export class PageConsultationReglementLoyerPeriodeComponent implements OnInit {
  @ViewChild(MatPaginator) paginatorSuivi!: MatPaginator;
  @ViewChild(MatSort) sortSuivi!: MatSort;
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
    'periode',
    'bail',
    'montantloyer',
    'solde',
    'Status',
    'Actions',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  dataSourceSuivi: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20, 50, 100];
  public totalRecords: number | undefined;
  suiviDepense$: Observable<SuiviDepenseState> | null = null;

  filtreAppel: any;

  readonly SuiviDepenseStateEnum = SuiviDepenseStateEnum;
  readonly SuiviDepenseStateEnumDeuxDate = SuiviDepenseStateEnum;
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
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterOption(event: any) {
    this.dataSource.filter = event.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {this.getAllEncaissementParPeriode(this.debut,this.fin)}
  getAllEncaissementParPeriode(debut: any, fin: any) {
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
      if (data.dataState == 'Loaded') {
        console.log(data.suiviDepenses);
        this.dataSourceSuivi.data = data.suiviDepenses;
        this.dataSourceSuivi.paginator = this.paginatorSuivi;
      }
    });
  }

}
