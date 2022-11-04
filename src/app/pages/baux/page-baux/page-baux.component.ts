import { UserService } from 'src/app/services/user/user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ClotureOperationActions,
  GetAllOperationActions,
} from 'src/app/ngrx/baux/baux.actions';
import { BauxState, BauxStateEnum } from 'src/app/ngrx/baux/baux.reducer';
import { OperationDto } from '../../../../gs-api/src/models/operation-dto';
import { GetAllAppelLoyerActions } from '../../../ngrx/appelloyer/appelloyer.actions';

import {
  AppelLoyerState,
  AppelLoyerStateEnum,
} from '../../../ngrx/appelloyer/appelloyer.reducer';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ModifLoyerBailComponent } from '../modif-loyer-bail/modif-loyer-bail.component';
import { SupprimerOperationActions } from '../../../ngrx/baux/baux.actions';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

export interface DialogData {
  bienimmo: any;
  id: number;
}
@Component({
  selector: 'app-page-baux',
  templateUrl: './page-baux.component.html',
  styleUrls: ['./page-baux.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PageBauxComponent implements OnInit {
  columnsToDisplay = [
    'bail',
    'debut',
    'fin',
    'Montant Caution',
    'Bail en cours',
    'Actions',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement?: OperationDto;
  pageSize = [5, 10, 15, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  appelloyerState$: Observable<AppelLoyerState> | null = null;
  bauxState$: Observable<BauxState> | null = null;
  public totalRecords: number | undefined;
  readonly BauxStateEnum = BauxStateEnum;
  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;
  public user?: UtilisateurRequestDto;
  v_agence: number=0;
  constructor(
    public dialog: MatDialog,
    private store: Store<any>,
    private userService: UserService
  ) {}
  openModifMontantDialog(loyer: number): void {
    const dialolRef = this.dialog.open(ModifLoyerBailComponent, {
      data: { id: loyer },
    });
    dialolRef.afterClosed().subscribe(() => {});
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    if (this.user.idAgence != undefined) {
      this.v_agence = this.user.idAgence;
    } else {
      this.v_agence=0
    }
    this.store.dispatch(new GetAllOperationActions(this.user.idAgence));
    this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
    this.store.pipe(map((state) => state.bauxState)).subscribe((data) => {
      if (data.baux.length > 0) {
        this.totalRecords = data.baux.length;
        this.dataSource.data = data.baux;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  onActionEmmit($event: any) {
    this.ngOnInit();
  }
  onDetailClick(state: any) {}
  onDeleteBail(idBail: any, nomBail: any) {
    if (confirm('Vous allez Suprimer le Bail ' + nomBail)) {
      this.store.dispatch(new SupprimerOperationActions(idBail));
      this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
      this.store.pipe(map((state) => state.bauxState)).subscribe((data) => {
        if (data.baux.length > 0) {
          this.totalRecords = data.baux.length;
          this.dataSource.data = data.baux;
          this.dataSource.paginator = this.paginator;
        }
      });
    }
  }

  onModifClick(state: any) {}
  onDeleteClick(state: any) {}
  chargerAppels(evt: any) {
    this.store.dispatch(new GetAllAppelLoyerActions(evt));
    this.appelloyerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
