import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  GetAllAppelLoyerByPeriodeActionsSuccess,
  GetAllAppelLoyerByPeriodeActionsError,
  GetAllAppelLoyerAnneeActionsSuccess,
  GetAllAppelLoyerAnneeActionsError,
  GetImayerLoyerParAnneeActionsSuccess,
  GetImayerLoyerParAnneeActionsError,
  GetPayerLoyerParAnneeActionsSuccess,
  GetPayerLoyerParAnneeActionsError,
  GetImpayerLoyerParPeriodeActionsError,
  GetImpayerLoyerParPeriodeActionsSuccess,
  GetPayerLoyerParPeriodeActionsSuccess,
  GetPayerLoyerParPeriodeActionsError
} from './appelloyer.actions';
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
  getImpayerParPeriodeEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(AppelLoyerctionsTypes.GET_IMPAYER_LOYER_PAR_PERIODE),
    mergeMap((action: AppelLoyerActions) => {
      return this.apiService.impayeLoyerParMois(action.payload).pipe(
        map(
          (appelloyers) =>
            new GetImpayerLoyerParPeriodeActionsSuccess(appelloyers)
        ),
        catchError((err) =>
          of(new GetImpayerLoyerParPeriodeActionsError(err.message))
        )
      );
    })
  )
  );
  getPayerParPeriodeEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(AppelLoyerctionsTypes.GET_PAYER_LOYER_PAR_PERIODE),
    mergeMap((action: AppelLoyerActions) => {
      return this.apiService.payeLoyerParMois(action.payload).pipe(
        map(
          (appelloyers) =>
            new GetPayerLoyerParPeriodeActionsSuccess(appelloyers)
        ),
        catchError((err) =>
          of(new GetPayerLoyerParPeriodeActionsError(err.message))
        )
      );
    })
  )
);
  getImpayerParAnneeEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppelLoyerctionsTypes.GET_IMPAYER_LOYER_PAR_ANNEE),
      mergeMap((action: AppelLoyerActions) => {
        return this.apiService.impayeLoyerParAnnee(action.payload).pipe(
          map(
            (appelloyers) =>
              new GetImayerLoyerParAnneeActionsSuccess(appelloyers)
          ),
          catchError((err) =>
            of(new GetImayerLoyerParAnneeActionsError(err.message))
          )
        );
      })
    )
  );
  //GET LES PAYER PAR ANNEES
  getPayerParAnneeEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(AppelLoyerctionsTypes.GET_PAYER_LOYER_PAR_ANNEE),
    mergeMap((action: AppelLoyerActions) => {
      return this.apiService.payeLoyerParAnnee(action.payload).pipe(
        map(
          (appelloyers) =>
            new GetPayerLoyerParAnneeActionsSuccess(appelloyers)
        ),
        catchError((err) =>
          of(new GetPayerLoyerParAnneeActionsError(err.message))
        )
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
          map(
            (appelloyers) =>
              new GetAllAppelLoyerByPeriodeActionsSuccess(appelloyers)
          ),
          catchError((err) =>
            of(new GetAllAppelLoyerByPeriodeActionsError(err.message))
          )
        );
      })
    )
  );

  //LISTE DES APPEL LOYER
  getAllAppelByAnneeEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AppelLoyerctionsTypes.GET_ALL_APPELLOYER_ANNEE),
      mergeMap((action: AppelLoyerActions) => {
        return this.apiService
          .findAllPeriodeChiffreEtLettreByAnnee(action.payload)
          .pipe(
            map((annees) => new GetAllAppelLoyerAnneeActionsSuccess(annees)),
            catchError((err) =>
              of(new GetAllAppelLoyerAnneeActionsError(err.message))
            )
          );
      })
    )
  );
}
