import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { BailVillaActions, BailVillaActionsTypes, SaveBailVillaActionsError, SaveBailVillaActionsSuccess } from './bailvilla.actions';

@Injectable()
export class BailVillaEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  //SAVE EFFECTS
  saveStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(BailVillaActionsTypes.SAVE_BAIL_VILLA),
      mergeMap((action: BailVillaActions) => {
        return this.apiService.saveBailVilla(action.payload).pipe(
          map((bailvilla) => new SaveBailVillaActionsSuccess(bailvilla)),
          catchError((err) => of(new SaveBailVillaActionsError(err.message)))
        );
      })
    )
  );
}
