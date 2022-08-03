import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { SiteActions, CreateNewSiteActionSuccess, CreateNewSiteActionError, DeleteSiteAction, DeleteSiteActionSuccess, DeleteSiteActionError } from './site.actions';
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationType } from '../../enum/natification-type.enum';
import {
  SiteActionsTypes,
  GetAllSitesActionsError,
  GetAllSitesActionsSuccess,
} from './site.actions';

@Injectable()
export class SiteEffects {
  constructor(private apiService: ApiService, private effectActions: Actions, private notificationService: NotificationService,) { }
  getAllSitesEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(SiteActionsTypes.GET_ALL_SITES),
      mergeMap(() => {
        return this.apiService.findAllSites().pipe(
          map((sites) => new GetAllSitesActionsSuccess(sites)),
          catchError((err) => of(new GetAllSitesActionsError(err.message)))
        );
      })
    )
  );
  createNewSiteEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(SiteActionsTypes.CREATE_NEW_SITE),
    mergeMap((action:SiteActions) => {
      return this.apiService.saveSite(action.payload).pipe(
        map((sites) => new CreateNewSiteActionSuccess(sites)),
        catchError((err) => of(new CreateNewSiteActionError(err.message)))
      );
    }),
    tap(( bookCollection) => {
      if (bookCollection.payload ==true) {
        this.sendErrorNotification(NotificationType.SUCCESS,'Création du site éffectué avec succes!');
      } else {
        this.sendErrorNotification(NotificationType.ERROR,'');
      }
    })
  )
  );
// DELETE EFFECTS
deleteSiteEffect: Observable<Action> = createEffect(() =>
this.effectActions.pipe(
  ofType(SiteActionsTypes.DELETE_SITE),
  mergeMap((action: SiteActions) =>
  {
    return this.apiService.deleteSite(action.payload).pipe(
      map((sites) => new DeleteSiteActionSuccess(sites)),
      catchError((err) => of(new DeleteSiteActionError(err.message)))
    );
  }),
  tap(( bookCollection) => {
    if (bookCollection.payload ==true) {
      this.sendErrorNotification(NotificationType.SUCCESS,'Supression du site éffectué avec succes!');
    } else {
      this.sendErrorNotification(NotificationType.ERROR,'');
    }
  })
)
);
  //MESSAGE NOTIFICATION
  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
}
