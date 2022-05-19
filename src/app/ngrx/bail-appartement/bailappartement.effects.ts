import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { BailAppartementActionsTypes, BailAppartementnActions, SaveBailAppartementActionsError, SaveBailAppartementActionsSuccess } from './bailappartement.actions';

@Injectable()
export class BailAppartementEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  //SAVE EFFECTS
  saveMAppartementEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(BailAppartementActionsTypes.SAVE_BAIL_APPARTEMENT),
      mergeMap((action: BailAppartementnActions) => {
        return this.apiService.saveBailAppartement(action.payload).pipe(
          map((bailappartment) => new SaveBailAppartementActionsSuccess(bailappartment)),
          catchError((err) => of(new SaveBailAppartementActionsError(err.message)))
        );
      })
    )
  );
}
