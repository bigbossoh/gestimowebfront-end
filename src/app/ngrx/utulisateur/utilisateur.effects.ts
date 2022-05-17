import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { GetAllBiensActionsError } from '../bien-immobilier/bienimmobilier.actions';
import {
  UtilisateurActionsTypes,
  GetAllProprietairesActionsError,
  GetAllProprietairesActionsSuccess,
} from './utilisateur.actions';

@Injectable()
export class UtilisateurEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }
  getAllBienseffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES),
      mergeMap((action) => {
        return this.apiService.getAllProprietaireByOrder().pipe(
          map(
            (proprietaires) =>
              new GetAllProprietairesActionsSuccess(proprietaires)
          ),
          catchError((err) => of(new GetAllBiensActionsError(err.message)))
        );
      })
    )
  );
}
