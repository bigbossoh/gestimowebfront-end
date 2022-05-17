import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { SaveVillaActionsError, SaveVillaActionsSuccess, VillaActions, VillaActionsTypes } from './villa.action';

@Injectable()
export class VillaEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  //SAVE EFFECTS
  saveVillaEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(VillaActionsTypes.SAVE_VILLA),
      mergeMap((action: VillaActions) => {
        return this.apiService.saveVilla(action.payload).pipe(
          map((villa) => new SaveVillaActionsSuccess(villa)),
          catchError((err) => of(new SaveVillaActionsError(err.message)))
        );
      })
    )
  );
}
