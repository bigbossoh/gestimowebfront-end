import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { GetAllMagasinActionsSuccess, GetAllMagasintActionsError, MagasinActions, MagasinActionsTypes, SaveMagasinActionsSuccess, SaveMagasintActionsError } from './magasin.actions';

@Injectable()
export class MagasinEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  //SAVE EFFECTS
  saveMagasinEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(MagasinActionsTypes.SAVE_MAGASIN),
      mergeMap((action: MagasinActions) => {
        return this.apiService.saveMagasin(action.payload).pipe(
          map((magasin) => new SaveMagasinActionsSuccess(magasin)),
          catchError((err) => of(new SaveMagasintActionsError(err.message)))
        );
      })
    )
  );
  //LISTE DES MAGASINS
  getAllVillasEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(MagasinActionsTypes.GET_ALL_MAGASIN),
      mergeMap((action) => {
        return this.apiService.findAllMagasin().pipe(
          map(
            (magasin) =>
              new GetAllMagasinActionsSuccess(magasin)
          ),
          catchError((err) => of(new GetAllMagasintActionsError(err.message)))
        );
      })
    )
  );
}