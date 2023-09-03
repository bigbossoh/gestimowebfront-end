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
  SommeDueEntreDeuxDatesActions,
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
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = [
    'chapitre',
    'commune',
    'bien',
    'periode',
    'bail',
    'montantpaye',
    'dateencaisse',
    'montantloyer',
    'typepaiement',
    'solde',
    'Status',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  pageSize = [5, 10, 15, 20, 50, 100];

  public totalRecords: number | undefined;
  public totalRecordsSuivi: number | undefined;
  suiviDepense$: Observable<SuiviDepenseState> | null = null;
  encaissementLoyer$: Observable<EncaissementState> | null = null;
  encaissementLoyerSomme$: Observable<EncaissementState> | null = null;
  loyerDueSomme$: Observable<EncaissementState> | null = null;
  filtreAppel: any;

  readonly SuiviDepenseStateEnum = SuiviDepenseStateEnum;
  readonly SuiviDepenseStateEnumDeuxDate = SuiviDepenseStateEnum;
  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly EncaissementSommeStateEnum = EncaissementStateEnum;

  debut = new Date();
  fin = new Date();
  public user?: UtilisateurRequestDto;
  loyerTotal: any;
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
  ngOnInit(): void {
    this.getListPaiementloyerEntreDeuxDate(this.debut, this.fin);
    this.getSommeEncaissementEntreDeuxDate(this.debut, this.fin);
    this.loyerDueEntreDeuxDate(this.debut, this.fin);
  }
  ngAfterViewInit() {
    //this.dataSource = new MatTableDataSource(this.EmpData);
    this.dataSource.paginator = this.paginator;
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
  loyerDueEntreDeuxDate(debut: any, fin: any) {
    this.user = this.userService.getUserFromLocalCache();
    const jourDebut = formatDate(debut, 'dd-MM-yyyy', this._locale);
    const jourFin = formatDate(fin, 'dd-MM-yyyy', this._locale);
    this.store.dispatch(
      new SommeDueEntreDeuxDatesActions({
        idAgence: this.user?.idAgence,
        datefin: jourFin,
        datedebut: jourDebut,
      })
    );
    this.loyerDueSomme$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
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
          console.log(data.encaissementsLoyer);
          this.dataSource.data = data.encaissementsLoyer;
          this.dataSource.paginator = this.paginator;
          this.totalRecords = data.encaissementsLoyer.length;
        }
      });
  }
}
