import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { NotificationType } from '../../enum/natification-type.enum';
import { NotificationService } from '../../services/notification/notification.service';
import {
  ImmeublesActionsTypes,
  GetAllImmeublesActionsError,
  GetAllImmeublesActionsSuccess,
  ImmeublesActions,
  SaveImmeublesActionsSuccess,
  SaveImmeublesActionsError,
} from './immeuble.actions';

@Injectable()
export class ImmeubleEffects {
  constructor(private apiService: ApiService, private effectActions: Actions,private notificationService: NotificationService) { }
  getAllImmeubleffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ImmeublesActionsTypes.GET_ALL_IMMEUBLES),
      mergeMap((action) => {
        return this.apiService.affichageDesImmeubles().pipe(
          map((immeubles) => new GetAllImmeublesActionsSuccess(immeubles)),
          catchError((err) => of(new GetAllImmeublesActionsError(err.message.messages)))
        );
      })
    )
  );
  //SAVE EFFECTS
  saveImmeubleEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ImmeublesActionsTypes.SAVE_IMMEUBLES),
      mergeMap((action: ImmeublesActions) => {
        return this.apiService.saveImmeuble(action.payload).pipe(
          map((immeuble) => new SaveImmeublesActionsSuccess(immeuble)),
          catchError((err) => of(new SaveImmeublesActionsError(err.message)))
        );
      }),
      tap((bookCollection) => {
        console.log('Les collection sont avec le payload :');
        console.log(bookCollection.type);


        if (bookCollection.payload !=null) {
          this.sendErrorNotification(NotificationType.SUCCESS,"Création de l'Immeuble éffectué avec succes!");
        } else {
          this.sendErrorNotification(NotificationType.ERROR,'');
        }
      })
    )
  );

  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
}
