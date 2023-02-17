import { GetAllAppelLoyerByBienActions, GetAllSmsByLocataireActions } from './../../../ngrx/appelloyer/appelloyer.actions';
import {
  AppelLoyerState,
  AppelLoyerStateEnum,
} from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { BauxState, BauxStateEnum } from './../../../ngrx/baux/baux.reducer';
import {
  GetEncaissementBienActions,
  GetAllPeriodeReglementByBienActions,
} from './../../../ngrx/reglement/reglement.actions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllLocatairesBailActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import {
  EncaissementState,
  EncaissementStateEnum,
} from 'src/app/ngrx/reglement/reglement.reducer';
import { GetAllBientaireByLocatairesActions } from 'src/app/ngrx/baux/baux.actions';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-page-compte-client',
  templateUrl: './page-compte-client.component.html',
  styleUrls: ['./page-compte-client.component.css'],
})
export class PageCompteClientComponent implements OnInit {
  displayedColumns = [
    'idEncaiss',
    'Datedepaiement',
    'Periode',
    'Loyer',
    'MontantPaye',
    'ModedeReglement',
    'soldedumois',
    'Status',
    'Actions',
  ];
  displayedColumnsAppel = [
    'idEncaiss',
    'Periode',
    'Loyer',
    'solde',
    'Status',
    'Actions',
  ];
  displayedColumnsSms = [
    'dateEnvoi',
    'destinaireNomPrenom',
    'typeMessage',
    'textMessage',
    'envoer',
    'Actions',
  ];


  dataSourceAppel: MatTableDataSource<any> = new MatTableDataSource();
  pageSizeAppel = [5, 10, 15, 20, 40];

  @ViewChild('paginator') paginatorAppel!: MatPaginator;
  @ViewChild(MatSort) sortAppel!: MatSort;

  appelLoyerState$: Observable<AppelLoyerState> | null = null;
  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;

  smsState$: Observable<AppelLoyerState> | null = null;
  readonly SmsStateEnum = AppelLoyerStateEnum;


  dataSourceSms: MatTableDataSource<any> = new MatTableDataSource();
  pageSizeSms = [5, 10, 15, 20];
  @ViewChild('paginatorSms') paginatorSms!: MatPaginator;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20];

  @ViewChild('paginatorEncaissenent') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  public user?: UtilisateurRequestDto;

  listeEncaissementBien$: Observable<EncaissementState> | null = null;
  readonly EncaissementStateEnum = EncaissementStateEnum;

  locataire: any;
  constructor(private store: Store<any>, private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();

    //RAMENER TOUS LES LOCATAIRES QUI ONT UN BAIL ACTIF
    this.store.dispatch(new GetAllLocatairesBailActions(this.user.idAgence));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.store
      .pipe(map((state) => state.utilisateurState))
      .subscribe((data) => {
        if (data.locataireBail.lenght > 0)
        {
          console.log("Le Loca Bail::: ");
          console.log(data.locataireBail);
          this.locataire = data.locataireBail[0];
        }
      });
  }
  ngAfterViewInit()
  {
    this.dataSourceAppel.paginator = this.paginatorAppel;
    this.dataSource.paginator = this.paginator;
    this.dataSourceSms.paginator = this.paginatorSms;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSourceAppel.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceAppel.paginator) {
      this.dataSourceAppel.paginator.firstPage();
    }
  }
  applyFilterAppel(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSourceAppel.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceAppel.paginator) {
      this.dataSourceAppel.paginator.firstPage();
    }
  }

  getAllEncaissementByBienImmobilier(p: any) {
    this.store.dispatch(new GetEncaissementBienActions(p.idBien));
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((donnee) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (donnee.encaissements.length > 0) {
          this.dataSource.data = donnee.encaissements;
          this.dataSource.paginator = this.paginator;
        }
      });
  }
  getAllAppelLoyerByBien(bien: any) {
    this.store.dispatch(new GetAllAppelLoyerByBienActions(bien.idBien));
    this.appelLoyerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {

      this.dataSourceAppel.data = [];
      this.dataSourceAppel.paginator = null;
      if (data.appelloyers.length > 0)
      {
        console.log('Mes Appels sont les suivants : : : :');
        console.log(data.appelloyers);
        this.dataSourceAppel.data = data.appelloyers;
        this.dataSourceAppel.paginator = this.paginatorAppel;
      }
    });
  }
  getAllSmsByLocataire(locatire: any)
  {
    this.store.dispatch(new GetAllSmsByLocataireActions(locatire.username));
  
    this.smsState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {

      this.dataSourceSms.data = [];
      this.dataSourceSms.paginator = null;
      console.log('Mes SMS sont les suivants : : : :');
      console.log(data.smss);
      if (data.smss.length > 0)
      {
        console.log('Mes SMS sont les suivants : : : :');
        console.log(data.smss);
        this.dataSourceSms.data = data.smss;
        this.dataSourceSms.paginator = this.paginatorSms;
      }
    });
  }
}
