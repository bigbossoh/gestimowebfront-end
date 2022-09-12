import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { GetAllAppartementActionsSuccess, GetAllAppartementActionsError } from './appartement.actions';
import {
  AppartementActions,
  AppartementctionsTypes as AppartementActionsTypes,
  GetAllAppartementLibreActionsError,
  GetAllAppartementLibreActionsSuccess,
  SaveAppartementActionsError,
  SaveAppartementActionsSuccess,
} from './appartement.actions';

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
  //LISTE DES APPARTEMENT LIBRE
  getAllAppartementLibreEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppartementActionsTypes.GET_ALL_APPARTEMENT_LIBRE),
      mergeMap((action) => {
        return this.apiService.findAllAppartementLibre().pipe(
          map(
            (appartement) =>
              new GetAllAppartementLibreActionsSuccess(appartement)
          ),
          catchError((err) =>
            of(new GetAllAppartementLibreActionsError(err.message))
          )
        );
      })
    )
  );
  //LISTE DES APPARTEMENT
  getAllAppartementEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppartementActionsTypes.GET_ALL_APPARTEMENT),
      mergeMap(() => {
        return this.apiService.findAllAppartement().pipe(
          map(
            (appartement) =>
              new GetAllAppartementActionsSuccess(appartement)
          ),
          catchError((err) =>
            of(new GetAllAppartementActionsError(err.message))
          )
        );
      }), tap((resultat) => {
        console.log("Le resultat est le suivant");
        console.log(resultat);
        
        
        if (resultat.payload != null) {

        } else {

        }
      })
    )
  );
}
