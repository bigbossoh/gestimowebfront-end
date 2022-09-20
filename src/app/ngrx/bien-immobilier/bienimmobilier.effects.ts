import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  BienImmobilierActionsTypes,
  GetAllBiensActionsError,
  GetAllBiensActionsSuccess,
} from './bienimmobilier.actions';

@Injectable()
export class BienEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }
  getAllBienseffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(BienImmobilierActionsTypes.GET_ALL_BIENS),
      mergeMap(() => {
        return this.apiService.findAllBien().pipe(
          map((biens) => new GetAllBiensActionsSuccess(biens)),
          catchError((err) => of(new GetAllBiensActionsError(err.message)))
        );
      })
    )
  );
}
