import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { EncaissementActionsTypes, EncaissementActions, SaveEncaissementActionsSuccess, SaveEncaissementActionsError } from './reglement.actions';
import { NotificationType } from '../../enum/natification-type.enum';
import { NotificationService } from '../../services/notification/notification.service';

@Injectable()
export class Encaissementffects {
  constructor(private apiService: ApiService, private effectActions: Actions,private notificationService: NotificationService) { }
  getAllQuartierByIdCommuneEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EncaissementActionsTypes.SAVE_ENCAISSEMENT),
      mergeMap((action: EncaissementActions) => {
        return this.apiService.saveEncaissement(action.payload).pipe(
          map((quartier) => new SaveEncaissementActionsSuccess(quartier)),
          catchError((err) => of(new SaveEncaissementActionsError(err.message)))
        );
      })
      ,
      tap((resultat) => {
        console.log("le resultat est");
        console.log(resultat.payload);


        if (resultat.payload==true) {
          this.sendErrorNotification(
            NotificationType.SUCCESS,
            "Enregistrement éffectué avec succès !"
          );
        } else {
          this.sendErrorNotification(
            NotificationType.ERROR,
            resultat.payload
          );
        } })
      )
    )  ;
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

