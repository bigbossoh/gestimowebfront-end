import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllBiensActions } from 'src/app/ngrx/bien-immobilier/bienimmobilier.actions';

import {
  BienImmobilierState,
  BienImmobilierStateEnum,
} from 'src/app/ngrx/bien-immobilier/bienimmobilier.reducer';
import { GetAllCommunesByVilleActions } from 'src/app/ngrx/commune/commune.actions';
import { CommunesState, CommunesStateEnum } from 'src/app/ngrx/commune/commune.reducer';
import { GetAllVilleAsActions } from 'src/app/ngrx/ville/ville.actions';
import { VilleState, VilleStateEnum } from 'src/app/ngrx/ville/ville.reducer';

@Component({
  selector: 'app-page-bien-immobilier',
  templateUrl: './page-bien-immobilier.component.html',
  styleUrls: ['./page-bien-immobilier.component.css'],
})
export class PageBienImmobilierComponent implements OnInit {
  bienState$: Observable<BienImmobilierState> | null = null;
  villeState$: Observable<VilleState> | null = null;
  commeState$: Observable<CommunesState> | null = null;

  readonly VilleStateEnum = VilleStateEnum;
  readonly CommunesStateEnum = CommunesStateEnum;
  readonly BienImmobilierStateEnum = BienImmobilierStateEnum;
  constructor(private store: Store<any>) { }
  ngOnInit(): void {
    this.store.dispatch(new GetAllBiensActions({}));
    this.bienState$ = this.store.pipe(map((state) => state.biensState));
    this.store.dispatch(new GetAllVilleAsActions({}));
    this.villeState$ = this.store.pipe(map((state) => state.villeState));
  }
  onEditdele(id: any) { }
  findCommuneByPays(pays: any) {
    this.store.dispatch(new GetAllCommunesByVilleActions(pays.target.value));
    this.commeState$ = this.store.pipe(map((state) => state.communeState),)

  }
}
