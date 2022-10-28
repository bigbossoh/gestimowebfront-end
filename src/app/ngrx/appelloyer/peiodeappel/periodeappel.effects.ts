import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap ,tap} from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';

import { GetAllPeriodeActionsError, GetAllPeriodeActionsSuccess, GetAllPeriodeByAnneeActionsError, GetAllPeriodeByAnneeActionsSuccess, PeriodeActions, PeriodeActionsTypes } from './periodeappel.actions';


@Injectable()
export class PeriodeEffects {
    constructor(private apiService: ApiService, private effectActions: Actions) { }


    //LISTE DES APPEL LOYER
    getAllPeriodeAnneeEffect: Observable<Action> = createEffect(() =>
        this.effectActions.pipe(
            ofType(PeriodeActionsTypes.GET_PERIODE_BY_ANNEE),
            mergeMap((action: PeriodeActions) => {
                return this.apiService.findAllPeriodeByAnnee(action.payload).pipe(
                    map((periodes) => new GetAllPeriodeByAnneeActionsSuccess(periodes)),
                    catchError((err) => of(new GetAllPeriodeByAnneeActionsError(err.message)))
                );
            }),
            tap((resultat) => {
               console.log("Les appels de la periodes sont : ");
               console.log(resultat);

                }
           )
        )
    );
   //LISTE DES APPEL LOYER
   getAllPeriodeEffect: Observable<Action> = createEffect(() =>
   this.effectActions.pipe(
       ofType(PeriodeActionsTypes.GET_PERIODE),
       mergeMap(() => {
           return this.apiService.findAllPeriode().pipe(
               map((periodes) => new GetAllPeriodeActionsSuccess(periodes)),
               catchError((err) => of(new GetAllPeriodeActionsError(err.message)))
           );
       }),
       tap((resultat) => {
          console.log("Les appels de la periodes sont : ");
          console.log(resultat);

           }
      )
   )
);
}
