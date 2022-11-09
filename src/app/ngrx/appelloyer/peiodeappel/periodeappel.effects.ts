import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap ,tap} from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';

import { GetAllPeriodeActionsError, GetAllPeriodeActionsSuccess, GetAllPeriodeByAnneeActionsError, GetAllPeriodeByAnneeActionsSuccess, PeriodeActions, PeriodeActionsTypes } from './periodeappel.actions';


@Injectable()
export class PeriodeEffects {

  constructor(private apiService: ApiService,
    private userService: UserService,
    private effectActions: Actions) {

    }


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
   getAllPeriodeParAnneeEffect: Observable<Action> = createEffect(() =>
   this.effectActions.pipe(
       ofType(PeriodeActionsTypes.GET_PERIODE),
     mergeMap((actions: PeriodeActions) => {

           return this.apiService.findAllPeriodeChiffreEtLettreByAnnee(actions.payload).pipe(
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
   getAllPeriodeEffect: Observable<Action> = createEffect(() =>
   this.effectActions.pipe(
       ofType(PeriodeActionsTypes.GET_PERIODE),
     mergeMap((actions: PeriodeActions) => {

           return this.apiService.findAllPeriode(actions.payload).pipe(
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
