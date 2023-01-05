import { NotificationType } from 'src/app/enum/natification-type.enum';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/gs-api/src/services';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  JournalCaisseActions,
  SuiviDepenseActionsTypes,
  SaveSuiviDepenseActionsSuccess,
  SaveSuiviDepenseActionsError,
  GetAllSuiviDepenseActionsSuccess,
  GetAllSuiviDepenseActionsError,
} from './journal-caisse.actions';
@Injectable()
export class SuiviDepenseEffects {
  constructor(
    private apiService: ApiService,
    private effectActions: Actions,
    private notificationService: NotificationService
  ) {}
  saveSuiviDepenseEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(SuiviDepenseActionsTypes.SAVE_SUIVI_DEPENSE),
      mergeMap((action: JournalCaisseActions) => {
        return this.apiService.saveSuivieDepense(action.payload).pipe(
          map((suivis) => new SaveSuiviDepenseActionsSuccess(suivis)),
          catchError((err) => of(new SaveSuiviDepenseActionsError(err.message)))
        );
      }),
      tap((resultat) => {
        if (
          resultat.type == SuiviDepenseActionsTypes.SAVE_SUIVI_DEPENSE_SUCCES
        ) {
          this.sendErrorNotification(
            NotificationType.SUCCESS,
            'Enregistrement réussi .'
          );
        }
        if (
          resultat.type == SuiviDepenseActionsTypes.SAVE_SUIVI_DEPENSE_ERROR
        ) {
          this.sendErrorNotification(
            NotificationType.ERROR,
            resultat.payload.toString()
          );
        }
      })
    )
  );
  //GET ALL SUIVI DEPESNSE
  getAllSuiviDepenseEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(SuiviDepenseActionsTypes.GET_ALL_SUIVI_DEPENSE),
      mergeMap((action: JournalCaisseActions) =>
      {
          return this.apiService
          .getAllEncaissementSuivieDepenseParAgence(action.payload)
          .pipe(
            map((suivis) => new GetAllSuiviDepenseActionsSuccess(suivis)),
            catchError((err) =>
              of(new GetAllSuiviDepenseActionsError(err.message))
            )
          );
      }),
      tap((resultat) => {
        if (
          resultat.type == SuiviDepenseActionsTypes.GET_ALL_SUIVI_DEPENSE_ERROR
        ) {
          this.sendErrorNotification(
            NotificationType.ERROR,
            resultat.payload.toString()
          );
        }
      })
    )
  );
  private sendErrorNotification(
    notificationType: NotificationType,
    message: string
  ): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(
        notificationType,
        'An error occurred. Please try again.'
      );
    }
  }
}
