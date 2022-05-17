//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { VillaDto } from 'src/gs-api/src/models';

//STORE
export enum VillaActionsTypes {
  SAVE_VILLA = '[VillaDto] save Villa',
  SAVE_VILLA_SUCCES = '[VillaDto] Save Villa Succes',
  SAVE_VILLA_ERROR = '[VillaDto] Save Villa Error',

}
// CREER LES DIFFERENTES ACTIONS
export class SaveVillaActions implements Action {
  type: VillaActionsTypes = VillaActionsTypes.SAVE_VILLA;
  constructor(public payload: any) { }
}

export class SaveVillaActionsSuccess implements Action {
  type: VillaActionsTypes =
    VillaActionsTypes.SAVE_VILLA_SUCCES;
  constructor(public payload: boolean) { }
}
export class SaveVillaActionsError implements Action {
  type: VillaActionsTypes =
    VillaActionsTypes.SAVE_VILLA_ERROR;
  constructor(public payload: string) { }
}

export type VillaActions =
  | SaveVillaActions
  | SaveVillaActionsError
  | SaveVillaActionsSuccess
