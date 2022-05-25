import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { GetAllOperationActionsError, GetAllOperationActionsSuccess, OperationActionsTypes } from './baux.actions';

@Injectable()
export class BauxEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }


  //LISTE DES APPARTEMENT
  getAllBauxEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(OperationActionsTypes.GET_ALL_BAIL),
      mergeMap((action) => {
        return this.apiService.findAllOperations().pipe(
          map(
            (operations) =>
              new GetAllOperationActionsSuccess(operations)
          ),
          catchError((err) => of(new GetAllOperationActionsError(err.message)))
        );
      })
    )
  );
}
