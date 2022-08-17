import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/gs-api/src/services';

import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import {
  AgenceActionsType,
  SaveAgenceActionsSuccess,
  SaveAgenceActionsError,
  AgenceActions,
  GetAllAgenceActionsSuccess,
  GetAllAgenceActionsError,
} from './agence.actions';

@Injectable()
export class AgenceEffects {
  constructor(
    private apiService: ApiService,
    private effectActions: Actions,
    private notificationService: NotificationService
  ) {}
  saveAgenceEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AgenceActionsType.SAVE_AGENCE),
      mergeMap((action: AgenceActions) => {
        console.log('mergemap effect save Agence', action.payload);

        return this.apiService.authenticateAgence(action.payload).pipe(
          map((save) => new SaveAgenceActionsSuccess(save)),
          catchError((err) => of(new SaveAgenceActionsError(err.message)))
        );
      }),
      tap((resultat) => {
        if (resultat.payload == true) {
          this.sendErrorNotification(
            NotificationType.SUCCESS,
            "La création de l'agence a été effectuée avec succès"
          );
        } else {
          this.sendErrorNotification(
            NotificationType.ERROR,
            'Une erreur a été rencontrée'
          );
        }
      })
    )
  );

  // GET ALL AGENTS EFFECTS
  getAllAgenceEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(AgenceActionsType.GET_ALL_AGENCE),
    mergeMap(() => {
      return this.apiService.getAllAgenceByOrderAgence().pipe(
        map((save) => new GetAllAgenceActionsSuccess(save)),
        catchError((err) => of(new GetAllAgenceActionsError(err.message)))
      );
    }),
    tap((resultat) => {
      console.log("Les agences");


      console.warn(resultat.payload);

      if (resultat.payload != []) {
        this.sendErrorNotification(
          NotificationType.SUCCESS,
          "Les Agences on été chargées avec succès"
        );
      } else {
        this.sendErrorNotification(
          NotificationType.ERROR,
          'Une erreur a été rencontrée'
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
