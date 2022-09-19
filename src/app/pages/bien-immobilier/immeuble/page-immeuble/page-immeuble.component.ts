import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ImmeubleState,
  ImmeubleStateEnum,
} from '../../../../ngrx/immeuble/immeuble.reducer';
import { GetAllBiensActions } from '../../../../ngrx/bien-immobilier/bienimmobilier.actions';
import {
  BienImmobilierState,
  BienImmobilierStateEnum,
} from '../../../../ngrx/bien-immobilier/bienimmobilier.reducer';
import { map } from 'rxjs/operators';
import { GetAllImmeublesActions } from '../../../../ngrx/immeuble/immeuble.actions';
import {
  VilleState,
  VilleStateEnum,
} from '../../../../ngrx/ville/ville.reducer';
import {
  CommunesState,
  CommunesStateEnum,
} from 'src/app/ngrx/commune/commune.reducer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface ImmeubleData {}
@Component({
  selector: 'app-page-immeuble',
  templateUrl: './page-immeuble.component.html',
  styleUrls: ['./page-immeuble.component.css'],
})
export class PageImmeubleComponent implements OnInit {
  displayedColumns = ['Code', 'Dénomination', 'Propriétaire', 'Actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [2, 5, 10, 15, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  villeState$: Observable<VilleState> | null = null;

  commeState$: Observable<CommunesState> | null = null;
  bienState$: Observable<BienImmobilierState> | null = null;
  immeubleState$: Observable<ImmeubleState> | null = null;

  readonly VilleStateEnum = VilleStateEnum;
  readonly ImmeubleStateEnum = ImmeubleStateEnum;
  readonly BienImmobilierStateEnum = BienImmobilierStateEnum;
  readonly CommunesStateEnum = CommunesStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    // RECUPERER LES BIENS
    this.store.dispatch(new GetAllBiensActions({}));
    this.bienState$ = this.store.pipe(map((state) => state.biensState));

    // RECUPERR LES IMMEUBLES
    this.store.dispatch(new GetAllImmeublesActions({}));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));

    this.store.pipe(map((state) => state.immeubleState)).subscribe((data) => {
      this.dataSource.data = data.immeubles;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
