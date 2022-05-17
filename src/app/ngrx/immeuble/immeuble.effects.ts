import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  ImmeublesActionsTypes,
  GetAllImmeublesActionsError,
  GetAllImmeublesActionsSuccess,
} from './immeuble.actions';

@Injectable()
export class ImmeubleEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }
  getAllBienseffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ImmeublesActionsTypes.GET_ALL_IMMEUBLES),
      mergeMap((action) => {
        return this.apiService.findAllImmeuble().pipe(
          map((immeubles) => new GetAllImmeublesActionsSuccess(immeubles)),
          catchError((err) => of(new GetAllImmeublesActionsError(err.message)))
        );
      })
    )
  );
}
