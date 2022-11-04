import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { UserService } from 'src/app/services/user/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import {
  BienImmobilierActions,
  BienImmobilierActionsTypes,
  GetAllBiensActionsError,
  GetAllBiensActionsSuccess,
} from './bienimmobilier.actions';

@Injectable()
export class BienEffects {

  constructor(private apiService: ApiService,
    private userService: UserService,
    private effectActions: Actions) {   }
  getAllBienseffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(BienImmobilierActionsTypes.GET_ALL_BIENS),
      mergeMap((actions: BienImmobilierActions) => {
     
        return this.apiService.findAllBien(actions.payload).pipe(
          map((biens) => new GetAllBiensActionsSuccess(biens)),
          catchError((err) => of(new GetAllBiensActionsError(err.message)))
        );
      })
    )
  );
}
