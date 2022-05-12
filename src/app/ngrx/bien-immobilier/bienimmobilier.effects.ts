import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/gs-api/src/services';
import { BienImmobilierActionsTypes } from './bienimmobilier.actions';

// @Injectable()
// export class BienVillaEffects {
//   constructor(private apiService: ApiService, private effectActions: Actions) {}
//   getAllBienseffect:Observable<Action>=createEffect(()=> this.effectActions.pipe(
// ofType(BienImmobilierActionsTypes.GET_ALL_BIENS),
// mergeMap((action)=>{
//   return this.apiService.sav
// })
//   ));
// }
