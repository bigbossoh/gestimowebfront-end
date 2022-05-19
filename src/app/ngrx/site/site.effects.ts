import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  SiteActionsTypes,
  GetAllSitesActionsError,
  GetAllSitesActionsSuccess,
} from './site.actions';

@Injectable()
export class SiteEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }
  getAllBienseffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(SiteActionsTypes.GET_ALL_SITES),
      mergeMap((action) => {
        return this.apiService.findAllSites().pipe(
          map((sites) => new GetAllSitesActionsSuccess(sites)),
          catchError((err) => of(new GetAllSitesActionsError(err.message)))
        );
      })
    )
  );
}
