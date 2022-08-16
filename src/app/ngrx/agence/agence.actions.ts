
//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AgenceRequestDto } from 'src/gs-api/src/models';

//STORE

export enum AgenceActionsType {

  SAVE_AGENCE = '[AgenceRequestDto] Get Save Appartement',
  SAVE_AGENCE_SUCCES = '[AgenceRequestDto] Get Save AppartementSucces',
  SAVE_AGENCE_ERROR = '[AgenceRequestDto] Get Save Appartement Error',

  GET_ALL_AGENCE_LIBRE = '[AppartementDto] Get All AppartementDto Libre',
  GET_ALL_AGENCE_SUCCES = '[AppartementDto] Get All AppartementDto Libre Succes',
  GET_ALL_AGENCE_ERROR = '[AppartementDto] Get All AppartementDto Libre Error',

}
// CREER LES DIFFERENTES ACTIONS
export class SaveAgenceActions implements Action {
  type: AgenceActionsType = AgenceActionsType.SAVE_AGENCE;
  constructor(public payload: any) {}
}

export class SaveAgenceActionsSuccess implements Action {
  type: AgenceActionsType = AgenceActionsType.SAVE_AGENCE_SUCCES;
  constructor(public payload: any) {}
}
export class SaveAgenceActionsError implements Action {
  type: AgenceActionsType = AgenceActionsType.SAVE_AGENCE_ERROR;
  constructor(public payload: string) {}
}

// GET ALL APPARTEMENT LIBRE

export type AgenceActions =
  | SaveAgenceActions
  | SaveAgenceActionsSuccess
  | SaveAgenceActionsError

