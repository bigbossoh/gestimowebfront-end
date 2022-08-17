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
import { GetAllStudioActions } from '../../../ngrx/studio/studio.actions';
import {
  StudioState,
  StudioStateEnum,
} from '../../../ngrx/studio/studio.reducer';
import { VillaState } from 'src/app/ngrx/villa/villa.reducer';
import { VillaStateEnum } from '../../../ngrx/villa/villa.reducer';
import { GetAllVillaActions } from '../../../ngrx/villa/villa.action';

@Component({
  selector: 'app-page-bien-immobilier',
  templateUrl: './page-bien-immobilier.component.html',
  styleUrls: ['./page-bien-immobilier.component.css'],
})
export class PageBienImmobilierComponent implements OnInit {
  studioState$: Observable<StudioState> | null = null;
  magasinState$: Observable<MagasinState> | null = null;
  appartementState$: Observable<AppartementState> | null = null;
  villaState$: Observable<VillaState> | null = null;

  bienState$: Observable<BienImmobilierState> | null = null;
  villeState$: Observable<VilleState> | null = null;
  commeState$: Observable<CommunesState> | null = null;

  readonly AppartementEnum = AppartementStateEnum;
  readonly MagasinStateEnum = MagasinStateEnum;
  readonly StudioStateEnum = StudioStateEnum;
  readonly VillaStateEnum = VillaStateEnum;

  readonly VilleStateEnum = VilleStateEnum;
  readonly CommunesStateEnum = CommunesStateEnum;
  readonly BienImmobilierStateEnum = BienImmobilierStateEnum;

  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    // RECUPERER LES APPARTEMENTS DANS LE STORES
    this.store.dispatch(new GetAllAppartementActions({}));
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );
    // RECUPERER LES MAGASINS DANS LE STORES
    this.store.dispatch(new GetAllMagasinActions({}));
    this.magasinState$ = this.store.pipe(map((state) => state.magasinState));

    // RECUPERER LES STUDIOS DANS LE STORES
    this.store.dispatch(new GetAllStudioActions({}));
    this.studioState$ = this.store.pipe(map((state) => state.studioState));
    // RECUPERER LES VILLAS DANS LE STORES
    this.store.dispatch(new GetAllVillaActions({}));
    this.villaState$ = this.store.pipe(map((state) => state.villaState));
    // RECUPERER LES BIENS
    this.store.dispatch(new GetAllBiensActions({}));
    this.bienState$ = this.store.pipe(map((state) => state.biensState));

    //RECUPERER LES VILLES
    this.store.dispatch(new GetAllVilleActions({}));
    this.villeState$ = this.store.pipe(map((state) => state.villeState));
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
}
