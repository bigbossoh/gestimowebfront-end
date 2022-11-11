import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
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
import { PrintServiceService } from '../../../services/Print/print-service.service';


@Injectable()
export class QuittanceAppelLoyerEffects {
  public user?: UtilisateurRequestDto;
  constructor(private apiService: PrintServiceService, private effectActions: Actions,
    private userService: UserService) { }
  printQuittanceAppelLoyerEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(QuittanceAppelLoyerActionsType.PRINT_QUITTANCE),
      mergeMap((action: QuittanceAppelLoyerActions) => {
        this.user = this.userService.getUserFromLocalCache();
        return this.apiService.printQuittanceByPeriode(action.payload,"sablin severin",this.user.idAgence)
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
        console.log('***** Le resultat est du telechargement est le suivant : *********');
        console.log(resultat);

        if (resultat.type==QuittanceAppelLoyerActionsType.PRINT_QUITTANCE_SUCCES) {
          const fileURL = URL.createObjectURL(resultat.payload);
          window.open(fileURL);
        }
        if (resultat.type==QuittanceAppelLoyerActionsType.PRINT_QUITTANCE_ERROR){
          alert('Erreur lor du telechagement !'+resultat.payload);
        }
      })
    )
  );
}
