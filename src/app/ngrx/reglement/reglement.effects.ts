
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  EncaissementActionsTypes,
  EncaissementActions,
  SaveEncaissementActionsSuccess,
  SaveEncaissementActionsError,
  GetAllPeriodeReglementByBienActionsSuccess,
  GetAllPeriodeReglementByBienActionsError,
  GetLocataireEncaissementActionsSuccess,
  GetLocataireEncaissementActionsError,
} from './reglement.actions';
import { NotificationType } from '../../enum/natification-type.enum';
import { NotificationService } from '../../services/notification/notification.service';
import { OperationActions } from '../baux/baux.actions';
import { GetEncaissementBienActionsSuccess, GetEncaissementBienActionsError, TotalEncaissementParJourActionsSuccess, TotalEncaissementParJourActionsError, GetListImayerLocataireEncaissementPeriodeActionsSuccess, GetListImayerLocataireEncaissementPeriodeActionsError } from './reglement.actions';

@Injectable()
export class Encaissementffects {
  constructor(
    private apiService: ApiService,
    private effectActions: Actions,
    private notificationService: NotificationService
  ) {}
  saveEncaissementEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EncaissementActionsTypes.SAVE_ENCAISSEMENT),
      mergeMap((action: EncaissementActions) => {
        return this.apiService.saveEncaissementAvecretourDeListe(action.payload).pipe(
          map((quartier) => new SaveEncaissementActionsSuccess(quartier)),
          catchError((err) => of(new SaveEncaissementActionsError(err.message)))
        );
      }),
      tap((resultat) => {
        if (resultat.type == EncaissementActionsTypes.SAVE_ENCAISSEMENT_SUCCES) {
          this.sendErrorNotification(
            NotificationType.SUCCESS,
            'Enregistrement éffectué avec succès !'
          );
        } else {
          this.sendErrorNotification(NotificationType.ERROR, resultat.payload);
        }
      })
    )
  );
  totalEncaissementJournalierEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(EncaissementActionsTypes.TOTAL_ENCAISSEMENT_PAR_JOUR),
    mergeMap((action: EncaissementActions) => {
      return this.apiService.totalEncaissementParJour(action.payload).pipe(
        map((encaiss) => new TotalEncaissementParJourActionsSuccess(encaiss)),
        catchError((err) => of(new TotalEncaissementParJourActionsError(err.message)))
      );
    }),
    // tap((resultat) => {
    //   if (resultat.type == EncaissementActionsTypes.TOTAL_ENCAISSEMENT_PAR_JOUR_SUCCES) {
    //     this.sendErrorNotification(
    //       NotificationType.SUCCESS,
    //       'Enregistrement éffectué avec succès !'
    //     );
    //   } else {
    //     this.sendErrorNotification(NotificationType.ERROR, resultat.payload);
    //   }
    // })
  )
  );
    //LISTE DES LOCATAIRES BAILS
    getAllLocatairesEncaissEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EncaissementActionsTypes.GET_LOCATAIRE_ENCAISSEMENT),
      mergeMap((action: EncaissementActions) => {
        return this.apiService.bailByLocataireEtBien(action.payload).pipe(
          map(
            (locatires) => new GetLocataireEncaissementActionsSuccess(locatires)
          ),
          catchError((err) =>
            of(new GetLocataireEncaissementActionsError(err.message))
          )
        );
      }),
      tap((locataire) =>
      {
           if (
          locataire.type ==
          EncaissementActionsTypes.GET_LOCATAIRE_ENCAISSEMENT_ERROR
        ) {
          this.sendErrorNotification(NotificationType.ERROR, locataire.payload);
        }
      })
    )
    );

      //LISTE DES LOCATAIRES IMPAYER
      getAllLocatairesImpayerEncaissEffect: Observable<Action> = createEffect(() =>
      this.effectActions.pipe(
        ofType(EncaissementActionsTypes.GET_LISTE_LOCATAIRE_ENCAISSEMENT),
        mergeMap((action: EncaissementActions) => {
          return this.apiService.listeLocataireImpayerParAgenceEtPeriode(action.payload).pipe(
            map(
              (locatires) => new GetListImayerLocataireEncaissementPeriodeActionsSuccess(locatires)
            ),
            catchError((err) =>
              of(new GetListImayerLocataireEncaissementPeriodeActionsError(err.message))
            )
          );
        }),
        tap((locataire) =>
        {
             if (
            locataire.type ==
            EncaissementActionsTypes.GET_LISTE_LOCATAIRE_ENCAISSEMENT_ERROR
          ) {
            this.sendErrorNotification(NotificationType.ERROR, locataire.payload);
          }
        })
      )
    );
  getAllPeriodebyBienEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN),
      mergeMap((action: OperationActions) => {
        return this.apiService.getFirstLoyerImpayerByBien(action.payload).pipe(
          map(
            (operations) =>
              new GetAllPeriodeReglementByBienActionsSuccess(operations)
          ),
          catchError((err) =>
            of(new GetAllPeriodeReglementByBienActionsError(err.message))
          )
        );
      }),
      tap((resultat) => {
        if (
          resultat.type == EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN_ERROR
        ) {
          this.sendErrorNotification(
            NotificationType.ERROR,
            resultat.payload.toString()   );
        }
      })
    )
  );
  getEncaissementbyBienEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN),
    mergeMap((action: OperationActions) => {
      return this.apiService.findAllEncaissementByIdBienImmobilier(action.payload).pipe(
        map(
          (operations) =>
            new GetEncaissementBienActionsSuccess(operations)
        ),
        catchError((err) =>
          of(new GetEncaissementBienActionsError(err.message))
        )
      );
    }),
    tap((resultat) => {
      if (
        resultat.type == EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN_ERROR
      ) {
        this.sendErrorNotification(
          NotificationType.ERROR,
          resultat.payload.toString()   );
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
