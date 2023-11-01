import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { NotificationType } from "src/app/enum/natification-type.enum";
import { NotificationService } from "src/app/services/notification/notification.service";
import { ApiService } from "src/gs-api/src/services";
import { GetListReservationActionsError, GetListReservationActionsSuccess, ReservationActionTypes, ReservationActions } from "./reservation.actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { EncaissementActionsTypes } from "../reglement/reglement.actions";

@Injectable()
export class ReservationEffects {
  constructor(
    private apiService: ApiService,
    private effectActions: Actions,
    private notificationService: NotificationService
  ) {}
  listReservationEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(ReservationActionTypes.GET_LISTE_RESERVATION),
    mergeMap((action: ReservationActions) => {
      return this.apiService
        .allreservation()
        .pipe(
          map((quartier) => new GetListReservationActionsSuccess(quartier)),
          catchError((err) =>
            of(new GetListReservationActionsError(err.message))
          )
        );
    }),
    tap((resultat) => {

      if (
        resultat.type == ReservationActionTypes.GET_LISTE_RESERVATION_ERROR
      )
      {
        this.sendErrorNotification(NotificationType.ERROR, resultat.payload);
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
