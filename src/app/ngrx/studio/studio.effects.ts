import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ApiService } from 'src/gs-api/src/services';
import {
  GetAllStudioActionsSuccess,
  GetAllStudioActionsError,
} from './studio.actions';
import {
  GetAllStudioLibreActionsSuccess,
  GetAllStudioLibreActionsError,
  SaveStudioActionsSuccess,
  SaveStudioctionsError,
  StudioActions,
  StudioActionsTypes,
} from './studio.actions';

@Injectable()
export class StudioEffects {
  constructor(
    private apiService: ApiService,
    private effectActions: Actions,
    private notificationService: NotificationService
  ) {}

  //SAVE EFFECTS
  saveStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(StudioActionsTypes.SAVE_STUDIO),
      mergeMap((action: StudioActions) => {
        return this.apiService.saveStudio(action.payload).pipe(
          map((studio) => new SaveStudioActionsSuccess(studio)),
          catchError((err) => of(new SaveStudioctionsError(err.message)))
        );
      }),
      tap((studioCollection) => {
        if (studioCollection.payload == true) {
          this.sendErrorNotification(
            NotificationType.SUCCESS,
            'Création du site éffectuée avec succes!'
          );
        } else {
          this.sendErrorNotification(NotificationType.ERROR, '');
        }
      })
    )
  );
  //LISTE DES STUDIO
  getAllStudioLibreEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(StudioActionsTypes.GET_ALL_STUDIO_LIBRE),
      mergeMap((action) => {
        return this.apiService.findAllStudiosLibre().pipe(
          map((studios) => new GetAllStudioLibreActionsSuccess(studios)),
          catchError((err) =>
            of(new GetAllStudioLibreActionsError(err.message))
          )
        );
      })
    )
  );
  //LISTE DES STUDIO
  getAllStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(StudioActionsTypes.GET_ALL_STUDIO),
      mergeMap((action) => {
        return this.apiService.findAllStudios().pipe(
          map((studios) => new GetAllStudioActionsSuccess(studios)),
          catchError((err) => of(new GetAllStudioActionsError(err.message)))
        );
      })
    )
  );
  //MESSAGE NOTIFICATION
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
