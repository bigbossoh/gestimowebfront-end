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
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  public user?: UtilisateurRequestDto;

  getLesdonne: any;
  leBonbien: Observable<any> | null = null;
  leBienSelect = '';
  submitted = false;
  periode: string = '';
  bien: number = 0;
  moisPaiement = '2022-12';
  getBauxBybien$: Observable<EncaissementState> | null = null;
  listeEncaissementBien$: Observable<EncaissementState> | null = null;
  getBienBylocatairestate$: Observable<BauxState> | null = null;
  saveEncaissementState$: Observable<EncaissementState> | null = null;
  leBienEncaisse = 0;
  affichierformulaire = 0;

  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly BauxStateEnum = BauxStateEnum;
  readonly BauxBienStateEnum = EncaissementStateEnum;
  readonly EncaissBienStateEnum = EncaissementStateEnum;
  locataire: any;
  constructor(private store: Store<any>, private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();

    //RAMENER TOUS LES LOCATAIRES QUI ONT UN BAIL ACTIF
    this.store.dispatch(new GetAllLocatairesBailActions(this.user.idAgence));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.store.pipe(
      map((state) => state.utilisateurState)
    ).subscribe(data =>
    {
      if (data.locataireBail.lenght>0) {
        console.log("My DAta est :::::");
        console.log(data.locataireBail);
        this.locataire=data.locataireBail[0]
      }


    });
  }
  ngAfterViewInit(): void {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
}
