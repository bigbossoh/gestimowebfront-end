import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllAppartementMeubleParCategorieActions } from 'src/app/ngrx/appartement/appartement.actions';
import {
  AppartementState,
  AppartementStateEnum,
} from 'src/app/ngrx/appartement/appartement.reducer';
import { ListChambreCategorieActions } from 'src/app/ngrx/categoriechambre/categoriechambre.actions';
import {
  CategorieChambreState,
  CategorieChambreStateEnum,
} from 'src/app/ngrx/categoriechambre/categoriechambre.reducer';
import { ListPrixChambreParCategorieActions } from 'src/app/ngrx/prix-par-categorie-chambre/prix-par-categorie-chambre.action';
import {
  PrixParCategorieChambreState,
  PrixParCategorieChambreStateEnum,
} from 'src/app/ngrx/prix-par-categorie-chambre/prix-par-categorie-chambre.reducers';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { NewCategorieChambreComponent } from './new-categorie-chambre/new-categorie-chambre.component';
import { NewPrixCategorieChambreComponent } from '../bien-immobilier/new-prix-categorie-chambre/new-prix-categorie-chambre.component';

@Component({
  selector: 'app-categorie-appartement',
  templateUrl: './categorie-appartement.component.html',
  styleUrls: ['./categorie-appartement.component.css'],
})
export class CategorieAppartementComponent implements OnInit {
  listeDesCategorieChambre$: Observable<CategorieChambreState> | null = null;
  readonly CategorieChambreStateEnum = CategorieChambreStateEnum;

  listePrixParCategorieChambre$: Observable<PrixParCategorieChambreState> | null =
    null;
  readonly PrixParCategorieChambreStateEnum = PrixParCategorieChambreStateEnum;

  public user?: UtilisateurRequestDto;
  selectedRowIndex: any;
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSizeAppel = [5, 10, 15, 20, 40];

  displayedPrixColumns: string[] = [
    'nombreDeJour',
    'nbrDiffJour',
    'prix',
    'actionsPrix',
  ];
  dataSourcePrix: MatTableDataSource<any> = new MatTableDataSource();
  pageSizePrix = [5, 10, 15, 20, 40];

  displayedColumnsAppart: string[] = ['appartement', 'actions'];
  dataSourceAppart: MatTableDataSource<any> = new MatTableDataSource();
  pageSizeAppelAppart = [5, 10, 15, 20, 40];

  appartementState$: Observable<AppartementState> | null = null;
  readonly AppartementStateEnum = AppartementStateEnum;

  @ViewChild('paginator') paginatorCategorieChambre!: MatPaginator;
  @ViewChild(MatSort) sortAppel!: MatSort;
  currentUser: any;
  dataLoading: boolean = true;
  listPrixParCategorie: any;
  varCategorie: any;
  constructor(
    private store: Store<any>,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    // this.etablissement = this.userService.getDefaultChapitre(this.user.id);

    this.store.dispatch(new ListChambreCategorieActions(this.user.idAgence));
    this.listeDesCategorieChambre$ = this.store.pipe(
      map((state) => state.categorieChambreState)
    );
    this.store
      .pipe(map((state) => state.categorieChambreState))
      .subscribe((data) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (data.dataState == 'Loaded') {
          this.dataSource.data = data.listCategorieChambre;
          this.dataSource.paginator = this.paginatorCategorieChambre;
        }
      });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewCategorieChambreComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
  openDialogPrix() {
    const dialogRef = this.dialog.open(NewPrixCategorieChambreComponent, {
      data: { cate: this.varCategorie },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getListPrixParCategorie(this.selectedRowIndex);
    });
  }
  highlight(row: any) {
    this.varCategorie = row;
    this.selectedRowIndex = row.id;
  }
  getListPrixParCategorie(idCat: any) {
    this.store.dispatch(new ListPrixChambreParCategorieActions(idCat));
    this.listePrixParCategorieChambre$ = this.store.pipe(
      map((state) => state.prixParCategorieChambreState)
    );
    this.store
      .pipe(map((state) => state.prixParCategorieChambreState))
      .subscribe((data) => {
        this.dataSourcePrix.data = [];
        this.dataSourcePrix.paginator = null;
        if (data.dataState == 'Loaded') {
          this.dataSourcePrix.data = data.listPrixParCategorieChambre;
          this.dataSourcePrix.paginator = this.paginatorCategorieChambre;
        }
      });
  }
  getAllAppaartementByCategorie(idCat: any) {
    this.store.dispatch(new GetAllAppartementMeubleParCategorieActions(idCat));
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );
    this.store
      .pipe(map((state) => state.appartementState))
      .subscribe((data) => {
        this.dataSourceAppart.data = [];
        this.dataSourceAppart.paginator = null;
        if (data.dataState == 'Loaded') {
          this.dataSourceAppart.data = data.appartementsCatego;
          this.dataSourceAppart.paginator = this.paginatorCategorieChambre;
        }
      });
  }
}
