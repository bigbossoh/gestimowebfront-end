import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { NotificationType } from '../../enum/natification-type.enum';
import { NotificationService } from '../../services/notification/notification.service';
import {
  EtagesActions,
  EtagesActionsTypes,
  GetAllEtagesActionsError,
  GetAllEtagesActionsSuccess,
  GetAllEtagesByImmeubleActionsError,
  GetAllEtagesByImmeubleActionsSuccess,
  SaveEtageActionsError,
  SaveEtageActionsSuccess,
} from './etage.actions';

@Injectable()
export class EtageEffects {
  constructor(private apiService: ApiService, private effectActions: Actions
  ,private notificationService: NotificationService) { }

  //GET ALL ETAGE PAR IMMEUBLE
  getAllEtageByImmeubleIdEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EtagesActionsTypes.GET_ALL_ETAGES_BY_IMMEUBLE),
      mergeMap((action: EtagesActions) => {
        console.log("l'action étage est le suivant");
        console.log(action.payload);
        return this.apiService.affichageDesEtageParImmeuble(action.payload).pipe(
          map((immeubles) => new GetAllEtagesByImmeubleActionsSuccess(immeubles)),
          catchError((err) => of(new GetAllEtagesByImmeubleActionsError(err.error.errors)))
        );
      }),
      // tap((resultat) => {
      //   console.log("Le resultat pour étage est le suivant : ");
      //   console.log(resultat.payload);

      //   if (resultat.payload!=null) {
      //     this.sendErrorNotification(
      //       NotificationType.ERROR,
      //       resultat.payload.toString()
      //     );
      //   } })
    )
  );

    //GET ALL ETAGE PAR IMMEUBLE
    getAllEtageEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EtagesActionsTypes.GET_ALL_ETAGES),
      mergeMap(() => {
        return this.apiService.findAllEtage().pipe(
          map((etages) => new GetAllEtagesActionsSuccess(etages)),
          catchError((err) => of(new GetAllEtagesActionsError(err.error.errors)))
        );
      }),
      tap((resultat) => {
        if (resultat.payload!=null) {
          this.sendErrorNotification(
            NotificationType.ERROR,
            resultat.payload.toString()
          );
        } })
      )
  );
  //SAVE EFFECTS
  saveStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EtagesActionsTypes.SAVE_ETAGE),
      mergeMap((action: EtagesActions) => {
        return this.apiService.saveEtage(action.payload).pipe(
          map((etage) => new SaveEtageActionsSuccess(etage)),
          catchError((err) => of(new SaveEtageActionsError(err.error.errors)))
        );
      }),
      tap((resultat) => {
        if (resultat.payload != null) {
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
