import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { GetAllStudioActionsSuccess, GetAllStudioctionsError, SaveStudioActionsSuccess, SaveStudioctionsError, StudioActions, StudioActionsTypes } from './studio.actions';

@Injectable()
export class StudioEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  //SAVE EFFECTS
  saveStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(StudioActionsTypes.SAVE_STUDIO),
      mergeMap((action: StudioActions) => {
        return this.apiService.saveStudio(action.payload).pipe(
          map((studio) => new SaveStudioActionsSuccess(studio)),
          catchError((err) => of(new SaveStudioctionsError(err.message)))
        );
      })
    )
  );
  //LISTE DES VILLA
  getAllStudioEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(StudioActionsTypes.GET_ALL_STUDIO),
      mergeMap((action) => {
        return this.apiService.findAllStudios().pipe(
          map(
            (studios) =>
              new GetAllStudioActionsSuccess(studios)
          ),
          catchError((err) => of(new GetAllStudioctionsError(err.message)))
        );
      })
    )
  );
}
