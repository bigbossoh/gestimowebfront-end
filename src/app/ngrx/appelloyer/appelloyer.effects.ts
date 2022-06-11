import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  GetAllAppartementLibreActionsError,
  GetAllAppartementLibreActionsSuccess,
} from '../appartement/appartement.actions';
import {
  AppelLoyerctionsTypes,
  GetAllAppelLoyerActionsError,
  GetAllAppelLoyerActionsSuccess,
  AppelLoyerActions,
} from './appelloyer.actions';

@Injectable()
export class AppelLoyerEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) {}

  //LISTE DES APPARTEMENT
  getAllBauxEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppelLoyerctionsTypes.GET_ALL_APPELLOYER),
      mergeMap((action: AppelLoyerActions) => {
        return this.apiService.listDesLoyersParBail(action.payload).pipe(
          map((appelloyers) => new GetAllAppelLoyerActionsSuccess(appelloyers)),
          catchError((err) => of(new GetAllAppelLoyerActionsError(err.message)))
        );
      })
    )
  );
}
