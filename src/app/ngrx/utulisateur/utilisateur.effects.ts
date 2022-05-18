import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  UtilisateurActionsTypes,
  GetAllProprietairesActionsError,
  GetAllProprietairesActionsSuccess,
  GetAllLocatairesActionsSuccess,
  GetAllLocatairesActionsError,
} from './utilisateur.actions';

@Injectable()
export class UtilisateurEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }
  getAllProprietairesEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES),
      mergeMap((action) => {
        return this.apiService.getAllProprietaireByOrder().pipe(
          map(
            (proprietaires) =>
              new GetAllProprietairesActionsSuccess(proprietaires)
          ),
          catchError((err) => of(new GetAllProprietairesActionsError(err.message)))
        );
      })
    )
  );
  //LISTE DES LOCATAIRES
  getAlllocatairesEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UtilisateurActionsTypes.GET_ALL_LOCATAIRES),
      mergeMap((action) => {
        return this.apiService.getAllLocatairesByOrder().pipe(
          map(
            (locatires) =>
              new GetAllLocatairesActionsSuccess(locatires)
          ),
          catchError((err) => of(new GetAllLocatairesActionsError(err.message)))
        );
      })
    )
  );
}
