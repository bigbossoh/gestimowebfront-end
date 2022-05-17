import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { VillaActionsTypes } from '../villa/villa.action';
import { GetAllVilleActionsSuccess, GetAllVillesActionsError, VillesActionsTypes } from './ville.actions';

@Injectable()
export class VilleEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) { }

  getAllBienseffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(VillesActionsTypes.GET_ALL_VILLES),
      mergeMap((action) => {
        return this.apiService.findAllVilles().pipe(
          map((villes) => new GetAllVilleActionsSuccess(villes)),
          catchError((err) => of(new GetAllVillesActionsError(err.message)))
        );
      })
    )
  );
}
