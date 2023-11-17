import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { ApiService } from "src/gs-api/src/services";
import { CommunesActionsTypes, CommunesActions, GetAllCommunesByVilleActionsSuccess, GetAllCommunesByVilleActionsError } from "../commune/commune.actions";
import { ClotureCaisseActions, ClotureCaisseActionsTypes, GetCountInitClotureCaisseActionsError, GetCountInitClotureCaisseActionsSuccess } from "./cloturecaisse.actions";
import { NotificationType } from "src/app/enum/natification-type.enum";
import { NotificationService } from "src/app/services/notification/notification.service";

@Injectable()
export class ClotureCaisseffects {
  constructor(private apiService: ApiService, private effectActions: Actions, private notificationService: NotificationService) { }
  getCountInitCloture: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ClotureCaisseActionsTypes.COUNT_ALL_CLOTURE_INIT),
      mergeMap((action: ClotureCaisseActions) => {
        return this.apiService.countInitClotureByCaissiaireAndChampitre(action.payload).pipe(
          map((cloturesCaisse) => new GetCountInitClotureCaisseActionsSuccess(cloturesCaisse)),
          catchError((err) => of(new GetCountInitClotureCaisseActionsError(err.message)))
        );
      }),
      tap((resultat) => {
        if (
          resultat.type ==
          ClotureCaisseActionsTypes.COUNT_ALL_CLOTURE_INIT_ERROR
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
