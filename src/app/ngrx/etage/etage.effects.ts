import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  EtagesActions,
  EtagesActionsTypes,
  GetAllEtagesActions,
  GetAllEtagesActionsError,
  GetAllEtagesActionsSuccess,
  GetAllEtagesByImmeubleActionsError,
  GetAllEtagesByImmeubleActionsSuccess,
  SaveEtageActionsError,
  SaveEtageActionsSuccess,
} from './etage.actions';

@Injectable()
export class EtageEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }
  getAllEtageByImmeubleIdseffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EtagesActionsTypes.GET_ALL_ETAGES_BY_IMMEUBLE),
      mergeMap((action: EtagesActions) => {
        return this.apiService.findEtageByIdPays(action.payload).pipe(
          map((immeubles) => new GetAllEtagesByImmeubleActionsSuccess(immeubles)),
          catchError((err) => of(new GetAllEtagesByImmeubleActionsError(err.error.errors)))
        );
      })
    )
  );
  //SAVE EFFECTS
  saveStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EtagesActionsTypes.SAVE_ETAGE),
      mergeMap((action: EtagesActions) => {
        return this.apiService.saveEtage(action.payload).pipe(
          map((etage) => new SaveEtageActionsSuccess(etage)),
          catchError((err) => of(new SaveEtageActionsError(err.error.errors)))
        );
      })
    )
  );
}
