//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { MagasinDto } from 'src/gs-api/src/models';

//STORE
export enum MagasinActionsTypes {
  SAVE_MAGASIN = '[MagasinDto] Get Save Magasin',
  SAVE_MAGASIN_SUCCES = '[MagasinDto] Get All Magasin Succes',
  SAVE_MAGASIN_ERROR = '[MagasinDto] Get Save Magasin Error',

  GET_ALL_MAGASIN = '[MagasinDto] Get All Magasin',
  GET_ALL_MAGASIN_SUCCES = '[MagasinDto] Get All Magasin Succes',
  GET_ALL_MAGASIN_ERROR = '[MagasinDto] Get All Magasin Error',


}
// CREER LES DIFFERENTES ACTIONS
export class SaveMagasinActions implements Action {
  type: MagasinActionsTypes = MagasinActionsTypes.SAVE_MAGASIN;
  constructor(public payload: any) { }
}

export class SaveMagasinActionsSuccess implements Action {
  type: MagasinActionsTypes =
    MagasinActionsTypes.SAVE_MAGASIN_SUCCES;
  constructor(public payload: boolean) { }
}
export class SaveMagasintActionsError implements Action {
  type: MagasinActionsTypes =
    MagasinActionsTypes.SAVE_MAGASIN_ERROR;
  constructor(public payload: string) { }
}

// CGET ALL MGASIN
export class GetAllMagasinActions implements Action {
  type: MagasinActionsTypes = MagasinActionsTypes.GET_ALL_MAGASIN;
  constructor(public payload: any) { }
}

export class GetAllMagasinActionsSuccess implements Action {
  type: MagasinActionsTypes =
    MagasinActionsTypes.GET_ALL_MAGASIN_SUCCES;
  constructor(public payload: MagasinDto[]) { }
}
export class GetAllMagasintActionsError implements Action {
  type: MagasinActionsTypes =
    MagasinActionsTypes.GET_ALL_MAGASIN_ERROR;
  constructor(public payload: string) { }
}
export type MagasinActions =
  | SaveMagasinActions
  | SaveMagasinActionsSuccess
  | SaveMagasintActionsError
  | GetAllMagasinActions
  | GetAllMagasinActionsSuccess
  | GetAllMagasintActionsError
