//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { BailMagasinDto, BailVillaDto } from 'src/gs-api/src/models';
import { BailVillaEffects } from '../bail-villa/bailvilla.effects';

//STORE
export enum BailMagasinActionsTypes {
  SAVE_BAIL_MAGASIN = '[BailVillaDto] SAVE BAIL MAGASIN',
  SAVE_BAIL_MAGASIN_SUCCES = '[BailVillaDto] SAVE BAIL MAGASIN Succes',
  SAVE_BAIL_MAGASIN_ERROR = '[BailVillaDto] GSAVE BAIL MAGASINError',


}
// CREER LES DIFFERENTES ACTIONS
export class SaveBailMagasinActions implements Action {
  type: BailMagasinActionsTypes = BailMagasinActionsTypes.SAVE_BAIL_MAGASIN;
  constructor(public payload: any) { }
}

export class SaveBailMagasinActionsSuccess implements Action {
  type: BailMagasinActionsTypes =
    BailMagasinActionsTypes.SAVE_BAIL_MAGASIN_SUCCES;
  constructor(public payload: BailMagasinDto) { }
}
export class SaveBailMagasinActionsError implements Action {
  type: BailMagasinActionsTypes =
    BailMagasinActionsTypes.SAVE_BAIL_MAGASIN_ERROR;
  constructor(public payload: string) { }
}

export type BailMagasinActions =
  | SaveBailMagasinActions
  | SaveBailMagasinActionsError
  | SaveBailMagasinActionsSuccess
