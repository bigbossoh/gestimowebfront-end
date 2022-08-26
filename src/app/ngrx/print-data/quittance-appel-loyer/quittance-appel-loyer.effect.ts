import { Injectable } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  QuittanceAppelLoyerActionsType,
  QuittanceAppelLoyerActions,
  PrintQuittanceLoyerActionsSuccess,
  PrintQuittanceLoyerActionsError,
} from './quittance-appel-loyer.action';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';


@Injectable()
export class QuittanceAppelLoyerEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) {}
  printQuittanceAppelLoyerEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(QuittanceAppelLoyerActionsType.PRINT_QUITTANCE),
      mergeMap((action: QuittanceAppelLoyerActions) => {
        return this.apiService.quittancePeriode(action.payload)
          .pipe(

            map(
              (quittances) => new PrintQuittanceLoyerActionsSuccess(quittances)
            ),
            catchError((err) =>
              of(new PrintQuittanceLoyerActionsError(err.message))
            )
          );
      }),
      tap((resultat) => {
        // let file = new Blob([resultat.payload], { type: 'application/pdf' })
        // let fileURL = URL.createObjectURL(file);
        console.log('***** Le resultat est *********');
        console.log(resultat);
        console.log(resultat.payload.indexOf('probleme'));
       // console.log(fileURL);

        if (resultat.payload.indexOf('probleme') < 0) {
         // window.open(fileURL);
         alert('Good !');
        } else {
          alert('Erreur lor du telechagement !');
        }
      })
    )
  );
}
