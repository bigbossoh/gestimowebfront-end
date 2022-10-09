import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from '../../../ngrx/utulisateur/utlisateur.reducer';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserService } from '../../../services/user/user.service';
import { GetAllLocatairesBailActions } from '../../../ngrx/utulisateur/utilisateur.actions';
import { map } from 'rxjs/operators';
import {
  EncaissementState,
  EncaissementStateEnum,
} from '../../../ngrx/reglement/reglement.reducer';
import { UtilisateurRequestDto } from '../../../../gs-api/src/models/utilisateur-request-dto';
import {
  SaveEncaissementActions,
  GetAllPeriodeReglementByBienActions,
  GetEncaissementBienActions,
} from '../../../ngrx/reglement/reglement.actions';
import { BauxState, BauxStateEnum } from '../../../ngrx/baux/baux.reducer';

import { GetAllBientaireByLocatairesActions } from '../../../ngrx/baux/baux.actions';

@Component({
  selector: 'app-page-reglement-individuel',
  templateUrl: './page-reglement-individuel.component.html',
  styleUrls: ['./page-reglement-individuel.component.css'],
})
export class PageReglementIndividuelComponent implements OnInit {
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

  public user?: UtilisateurRequestDto;
  encaissementform?: FormGroup;
  getLesdonne: any;
   leBonbien :Observable<any> | null = null;;
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

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private userService: UserService
  ) {}
  compareObjects(o1: any, o2: any): boolean {
    return o1 !== o2;
  }
  compareAppels(o1: any, o2: any): boolean {
    return o1 == o2;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();

    //GET ALL LOCATAIRE
    this.store.dispatch(new GetAllLocatairesBailActions({}));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );

    this.encaissementform = this.fb.group({
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
      idAppelLoyer: [],
      modePaiement: ['ESPESE_MAGISER'],
      operationType: ['CREDIT'],
      montantEncaissement: [0],
      intituleDepense: [''],
      entiteOperation: ['MAGISER'],
    });
  }
  onSaveEncaissement() {

    this.submitted = true;
    if (this.encaissementform?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(
      new SaveEncaissementActions(this.encaissementform?.value)
    );
    this.saveEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
   // this.store.dispatch(new GetEncaissementBienActions(this.bien));
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((donnee) => {
        console.log('Les encaissemnts sont les suivants : ');
        console.log(donnee.encaissements);
        if (donnee.encaissements.length>0) {
          this.dataSource.data = donnee.encaissements;
          this.dataSource.paginator = this.paginator;
        }
      });
  }
  getBienByLocataire(loca: string) {
console.log("nous sommes dans get bien by locataire");

    this.store.dispatch(new GetAllBientaireByLocatairesActions(loca));
    this.getBienBylocatairestate$ = this.store.pipe(
      map((state) => state.bauxState)
    );

  }
  getBauxBybien(p: any) {
    this.bien = p;
    this.affichierformulaire = p;
    this.leBienEncaisse = p;
    this.store.dispatch(new GetAllPeriodeReglementByBienActions(p));
    this.getBauxBybien$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store.dispatch(new GetEncaissementBienActions(p));
    this.listeEncaissementBien$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        console.log('Les encaissemnts sont les suivants pour Baux : ');
        console.log(data.encaissements);
        if (data.encaissements.length>0) {
          this.dataSource.data = data.encaissements;
          this.dataSource.paginator = this.paginator;
        }

      });
  }
  getAllEncaissementByBienImmobilier(p: any) {

    this.store.dispatch(new GetEncaissementBienActions(p));
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((donnee) => {
        console.log('Les encaissemnts sont les suivants : ');
        console.log(donnee.encaissements);
        if (donnee.encaissements.length>0) {
          this.dataSource.data = donnee.encaissements;
          this.dataSource.paginator = this.paginator;
        }
      });
  }
}
