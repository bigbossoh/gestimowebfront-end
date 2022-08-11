import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ApiService } from 'src/gs-api/src/services';
import {
  UtilisateurActionsTypes,
  GetAllProprietairesActionsError,
  GetAllProprietairesActionsSuccess,
  GetAllLocatairesActionsSuccess,
  GetAllLocatairesActionsError,
} from './utilisateur.actions';

@Injectable()
export class UtilisateurEffects {
  constructor(private apiService: ApiService, private effectActions: Actions,private notificationService:NotificationService) { }
  getAllProprietairesEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES),
      mergeMap((action) => {
        return this.apiService.getAllProprietaireByOrder().pipe(
          map(
            (proprietaires) =>
              new GetAllProprietairesActionsSuccess(proprietaires)
          ),
          catchError((err) => of(new GetAllProprietairesActionsError(err.message)))
        );
      }),tap((proprio)=>{
        if(proprio.payload.indexOf('Error') < 0){
          this.sendErrorNotification(NotificationType.SUCCESS,'La liste des propriétaires a été chargées avec succès')
        }else{
          this.sendErrorNotification(NotificationType.ERROR,'Une erreur a été rencontré')
        }
      })
    )
  );
  //LISTE DES LOCATAIRES
  getAlllocatairesEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UtilisateurActionsTypes.GET_ALL_LOCATAIRES),
      mergeMap((action) => {
        return this.apiService.getAllLocatairesByOrder().pipe(
          map(
            (locatires) =>
              new GetAllLocatairesActionsSuccess(locatires)
          ),
          catchError((err) => of(new GetAllLocatairesActionsError(err.message)))
        );
      }),
      tap((locataire)=>{
        console.log(locataire.payload.length);

        if(locataire.payload.indexOf('Error') < 0){
          this.sendErrorNotification(NotificationType.SUCCESS,'La liste des locataires ('+(locataire.payload.length)+')  a été chargées avec succès')
        }else{
          this.sendErrorNotification(NotificationType.ERROR,'Une erreur a été rencontré')
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
