import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { AppartementActions, AppartementctionsTypes as AppartementActionsTypes, GetAllAppartementActionsError, GetAllAppartementActionsSuccess, SaveAppartementActionsError, SaveAppartementActionsSuccess } from './appartement.actions';

@Injectable()
export class AppartementEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  //SAVE EFFECTS
  saveAppartementEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppartementActionsTypes.SAVE_APPARTEMENT),
      mergeMap((action: AppartementActions) => {
        return this.apiService.saveAppartement(action.payload).pipe(
          map((appart) => new SaveAppartementActionsSuccess(appart)),
          catchError((err) => of(new SaveAppartementActionsError(err.message)))
        );
      })
    )
  );
  //LISTE DES APPARTEMENT
  getAllMagasinsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppartementActionsTypes.GET_ALL_APPARTEMENT),
      mergeMap((action) => {
        return this.apiService.findAllAppartement().pipe(
          map(
            (appartement) =>
              new GetAllAppartementActionsSuccess(appartement)
          ),
          catchError((err) => of(new GetAllAppartementActionsError(err.message)))
        );
      })
    )
  );
}
