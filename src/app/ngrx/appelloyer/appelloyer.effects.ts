import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { GetAllAppelLoyerByPeriodeActionsSuccess, GetAllAppelLoyerByPeriodeActionsError, GetAllAppelLoyerAnneeActionsSuccess, GetAllAppelLoyerAnneeActionsError } from './appelloyer.actions';
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

  //LISTE DES APPEL LOYER
  getAllAppelEffect: Observable<Action> = createEffect(() =>
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
  //LISTES DES APPEL LOYER PAR PERIODE
  //LISTE DES APPEL LOYER
  getAllAppelByPeriodeEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppelLoyerctionsTypes.GET_ALL_APPELLOYER_BY_PERIODE),
      mergeMap((action: AppelLoyerActions) => {
        return this.apiService.AppelLoyersParPeriode(action.payload).pipe(
          map((appelloyers) => new GetAllAppelLoyerByPeriodeActionsSuccess(appelloyers)),
          catchError((err) => of(new GetAllAppelLoyerByPeriodeActionsError(err.message)))
        );
      })
    )
  );
//LISTE DES APPEL LOYER
getAllAppelByAnneeEffect: Observable<Action> = createEffect(() =>
this.effectActions.pipe(
  ofType(AppelLoyerctionsTypes.GET_ALL_APPELLOYER_ANNEE),
  mergeMap((action:AppelLoyerActions) => {
    return this.apiService.findAllPeriodeChiffreEtLettreByAnnee(action.payload).pipe(
      map((annees) => new GetAllAppelLoyerAnneeActionsSuccess(annees)),
      catchError((err) => of(new GetAllAppelLoyerAnneeActionsError(err.message)))
    );
  })
)
);


}
