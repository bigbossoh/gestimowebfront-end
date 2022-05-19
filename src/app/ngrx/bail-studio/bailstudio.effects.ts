import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { SaveAppartementActionsError } from '../appartement/appartement.actions';
import { BailStudioActions, BailStudioActionsTypes, SaveBailStudioActionsSuccess } from './bailstudio.actions';

@Injectable()
export class BailStudioEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  //SAVE EFFECTS
  saveBailStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(BailStudioActionsTypes.SAVE_BAIL_STUDIO),
      mergeMap((action: BailStudioActions) => {
        return this.apiService.saveBailStudio(action.payload).pipe(
          map((bailstudio) => new SaveBailStudioActionsSuccess(bailstudio)),
          catchError((err) => of(new SaveAppartementActionsError(err.message)))
        );
      })
    )
  );
}
