import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap,tap } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ApiService } from 'src/gs-api/src/services';
import { ClotureOperationActionsError, ClotureOperationActionsSuccess, GetAllOperationActionsError, GetAllOperationActionsSuccess, OperationActions, OperationActionsTypes } from './baux.actions';

@Injectable()
export class BauxEffects {
  constructor(private apiService: ApiService, private effectActions: Actions,
    private notificationService: NotificationService) { }


  //LISTE DES BAUX
  getAllBauxEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(OperationActionsTypes.GET_ALL_BAIL),
      mergeMap(() => {
        return this.apiService.findAllOperations().pipe(
          map(
            (operations) =>
              new GetAllOperationActionsSuccess(operations)
          ),
          catchError((err) => of(new GetAllOperationActionsError(err.message)))
        );
      })
    )
  );
// CLOTURE DES BAUX
clotureBauxEffect: Observable<Action> = createEffect(() =>
this.effectActions.pipe(
  ofType(OperationActionsTypes.CLOTURE_BAIL),
  mergeMap((action:OperationActions) => {
    return this.apiService.clotureBail(action.payload).pipe(
      map(
        (operations) =>
          new ClotureOperationActionsSuccess(operations)
      ),
      catchError((err) => of(new ClotureOperationActionsError(err.message)))
    );
  }),
  tap((resultat) => {
    console.log('Resultat effect save Agence', resultat);
    if (resultat.payload == true) {
      this.sendErrorNotification(
        NotificationType.SUCCESS,
        "Le Bail a été cloturé avec succès."
      );
    } else {
      this.sendErrorNotification(
        NotificationType.ERROR,
        'Une erreur a été rencontrée.'
      );
    }
  })
)
);
  // Notification
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
