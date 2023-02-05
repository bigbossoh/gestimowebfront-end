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

  leBonbien: any;
  leLocataire: any;
  leBail: any;
  idDBail = 0;

  submitted = false;
  periode: string = '';

  moisPaiement = '2022-12';
  getBauxBybien$: Observable<EncaissementState> | null = null;
  listeEncaissementBien$: Observable<EncaissementState> | null = null;
  getBienBylocatairestate$: Observable<BauxState> | null = null;
  saveEncaissementState$: Observable<EncaissementState> | null = null;

  affichierformulaire = 0;
  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly BauxStateEnum = BauxStateEnum;
  readonly BauxBienStateEnum = EncaissementStateEnum;
  readonly EncaissBienStateEnum = EncaissementStateEnum;

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  montant_Loyer: number = 0;
  idDeAppel: any;

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
    this.leBonbien = 0;
    this.leBail = 0;
    this.leLocataire = 0;
    this.montant_Loyer = 0;
    this.idDBail = 0;
    this.idDeAppel = 0;
    this.user = this.userService.getUserFromLocalCache();

    //RAMENER TOUS LES LOCATAIRES QUI ONT UN BAIL ACTIF
    this.store.dispatch(new GetAllLocatairesBailActions(this.user.idAgence));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.store.pipe(map((state) => state.utilisateurState)).subscribe(
      (data) => {
        if (data.locataireBail.length > 0)
        {
          console.log("Le bail est le suivant qui est bon trop bon meme :::: :::: ::: ");
          console.log(data);
          console.log("::::: ::::: :::::: :::: :::: ::::: ::::: :: ::: :");
          this.leLocataire = data.locataireBail[0]['id'];
        }
      },
      () => {}
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
    this.saveEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
  }
  getBienByLocataire(loca: number) {
    this.store.dispatch(new GetAllBientaireByLocatairesActions(loca));
    this.getBienBylocatairestate$ = this.store.pipe(
      map((state) => state.bauxState)
    );
    this.store.pipe(map((state) => state.bauxState)).subscribe(
      (data) => {
        if (data.baux.length > 0) {
          this.leBonbien = data.baux[0].idBienImmobilier;
          this.affichierformulaire = 1;
          this.idDBail = data.baux[0].id;
          this.leBail = data.baux[0];
          this.idDeAppel = data.baux[0].idFirstAppel;
        }
      }
      //() => {}
    );

    this.store.dispatch(
      new GetAllPeriodeReglementByBienActions(this.leBonbien)
    );
    this.getBauxBybien$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
  }
  getBauxBybien(p: any) {
    this.affichierformulaire = p;
    this.store.dispatch(new GetAllPeriodeReglementByBienActions(p));
    this.getBauxBybien$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        console.log('Les baudelaise');
        console.log(data);
      });
    this.store.dispatch(new GetEncaissementBienActions(p));
    this.listeEncaissementBien$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (data.encaissements.length > 0) {
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
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (donnee.encaissements.length > 0) {
          this.dataSource.data = donnee.encaissements;
          this.dataSource.paginator = this.paginator;
        }
      });
  }
}
