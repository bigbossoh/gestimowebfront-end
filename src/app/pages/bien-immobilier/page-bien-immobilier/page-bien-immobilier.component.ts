import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllBiensActions } from 'src/app/ngrx/bien-immobilier/bienimmobilier.actions';

import {
  BienImmobilierState,
  BienImmobilierStateEnum,
} from 'src/app/ngrx/bien-immobilier/bienimmobilier.reducer';
import { GetAllCommunesByVilleActions } from 'src/app/ngrx/commune/commune.actions';
import {
  CommunesState,
  CommunesStateEnum,
} from 'src/app/ngrx/commune/commune.reducer';
import { GetAllVilleActions } from 'src/app/ngrx/ville/ville.actions';
import { VilleState, VilleStateEnum } from 'src/app/ngrx/ville/ville.reducer';
import { GetAllAppartementActions } from '../../../ngrx/appartement/appartement.actions';
import {
  AppartementState,
  AppartementStateEnum,
} from '../../../ngrx/appartement/appartement.reducer';
import {
  MagasinState,
  MagasinStateEnum,
} from '../../../ngrx/magasin/magasin.reducer';
import { GetAllMagasinActions } from '../../../ngrx/magasin/magasin.actions';

import { VillaState } from 'src/app/ngrx/villa/villa.reducer';
import { VillaStateEnum } from '../../../ngrx/villa/villa.reducer';
import { GetAllVillaActions } from '../../../ngrx/villa/villa.action';
import { MatDialog } from '@angular/material/dialog';
import { PageBienImmobilierNewComponent } from '../page-bien-immobilier-new/page-bien-immobilier-new.component';
import { BienImmobilierAffiheDto } from '../../../../gs-api/src/models/bien-immobilier-affihe-dto';


@Component({
  selector: 'app-page-bien-immobilier',
  templateUrl: './page-bien-immobilier.component.html',
  styleUrls: ['./page-bien-immobilier.component.css'],
})
export class PageBienImmobilierComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'Code',
    'Denomination',
    'Proprietaire',
    'Status',
    'Actions',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  magasinState$: Observable<MagasinState> | null = null;
  bienImmobilierState$: Observable<BienImmobilierState> | null = null;
  appartementState$: Observable<AppartementState> | null = null;
  villaState$: Observable<VillaState> | null = null;

  public totalRecords: number | undefined;

  villeState$: Observable<VilleState> | null = null;
  commeState$: Observable<CommunesState> | null = null;

  readonly AppartementEnum = AppartementStateEnum;
  readonly MagasinStateEnum = MagasinStateEnum;

  readonly VillaStateEnum = VillaStateEnum;

  readonly VilleStateEnum = VilleStateEnum;
  readonly CommunesStateEnum = CommunesStateEnum;
  readonly BienImmobilierStateEnum = BienImmobilierStateEnum;

  constructor(private store: Store<any>,public dialog: MatDialog) {}
  ngAfterViewInit(): void {
    this.ngOnInit();
  }
  ngOnInit(): void {
    //RECUPERER TOUS LES BIENS
    this.store.dispatch(new GetAllBiensActions({}));
    this.bienImmobilierState$ = this.store.pipe(
      map((state) => state.biensState)
    );
    this.store.pipe(map((state) => state.biensState)).subscribe((data) => {
      if (data.bienImmoblilier.length > 0) {
        this.totalRecords = data.bienImmoblilier.length;
        this.dataSource.data = data.bienImmoblilier;
        this.dataSource.paginator = this.paginator;
        console.log(data.bienImmoblilier);
      }
    });

    // RECUPERER LES APPARTEMENTS DANS LE STORES
    this.store.dispatch(new GetAllAppartementActions({}));
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );
    // RECUPERER LES MAGASINS DANS LE STORES
    this.store.dispatch(new GetAllMagasinActions({}));
    this.magasinState$ = this.store.pipe(map((state) => state.magasinState));

    // RECUPERER LES VILLAS DANS LE STORES
    this.store.dispatch(new GetAllVillaActions({}));
    this.villaState$ = this.store.pipe(map((state) => state.villaState));

    //RECUPERER LES VILLES
    this.store.dispatch(new GetAllVilleActions({}));
    this.villeState$ = this.store.pipe(map((state) => state.villeState));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onActionEvent(event: any) {
    this.ngOnInit();
  }
  onEditdele(id: any) {}
  findCommuneByPays(pays: any) {
    this.store.dispatch(new GetAllCommunesByVilleActions(pays.target.value));
    this.commeState$ = this.store.pipe(map((state) => state.communeState));
    this.ngOnInit();
  }
  onEditBien(bien: any) {
    const dialolRef = this.dialog.open(PageBienImmobilierNewComponent, {
      data:{bienimmo:bien}
      //  width: '1024px',
    });
  }
}
