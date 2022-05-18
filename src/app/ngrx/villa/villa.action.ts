//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { VillaDto } from 'src/gs-api/src/models';

//STORE
export enum VillaActionsTypes {
  SAVE_VILLA = '[VillaDto] save Villa',
  SAVE_VILLA_SUCCES = '[VillaDto] Save Villa Succes',
  SAVE_VILLA_ERROR = '[VillaDto] Save Villa Error',

  GET_ALL_VILLA = '[VillaDto] GET ALL Villa',
  GET_ALL_VILLA_SUCCES = '[VillaDto] GET ALL Villa Succes',
  GET_ALL_VILLA_ERROR = '[VillaDto] GET ALL Villa Error',

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

// CREER LES DIFFERENTES ACTIONS
export class GetAllVillaActions implements Action {
  type: VillaActionsTypes = VillaActionsTypes.GET_ALL_VILLA;
  constructor(public payload: any) { }
}

export class GetAllVillaActionsSuccess implements Action {
  type: VillaActionsTypes =
    VillaActionsTypes.GET_ALL_VILLA_SUCCES;
  constructor(public payload: VillaDto[]) { }
}
export class GetAllVillaActionsError implements Action {
  type: VillaActionsTypes =
    VillaActionsTypes.GET_ALL_VILLA_ERROR;
  constructor(public payload: string) { }
}

export type VillaActions =
  | SaveVillaActions
  | SaveVillaActionsError
  | SaveVillaActionsSuccess
  | GetAllVillaActions
  | GetAllVillaActionsError
  | GetAllVillaActionsSuccess;
