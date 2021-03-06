import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { GetAllBiensActionsSuccess } from '../bien-immobilier/bienimmobilier.actions';
import { GetAllVillaActionsSuccess, GetAllVillaActionsError } from './villa.action';
import {
  GetAllVillaLibreActionsError,
  GetAllVillaLibreActionsSuccess,
  SaveVillaActionsError,
  SaveVillaActionsSuccess,
  VillaActions,
  VillaActionsTypes,
} from './villa.action';

@Injectable()
export class VillaEffects {
  constructor(private apiService: ApiService, private effectActions: Actions) {}

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
  //LISTE DES VILLA  LIBRE
  getAllVillasLibreEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(VillaActionsTypes.GET_ALL_VILLA_LIBRE),
      mergeMap((action) => {
        return this.apiService.findAllVillaLibre().pipe(
          map((villas) => new GetAllVillaLibreActionsSuccess(villas)),
          catchError((err) => of(new GetAllVillaLibreActionsError(err.message)))
        );
      })
    )
  );
    //LISTE DES VILLA
    getAllVillasEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(VillaActionsTypes.GET_ALL_VILLA),
      mergeMap((action) => {
        return this.apiService.findAllVilla().pipe(
          map((villas) => new GetAllVillaActionsSuccess(villas)),
          catchError((err) => of(new GetAllVillaActionsError(err.message)))
        );
      })
    )
  );
}
