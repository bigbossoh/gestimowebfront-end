
//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AgenceImmobilierDTO, AgenceRequestDto, AgenceResponseDto } from 'src/gs-api/src/models';

//STORE

export enum AgenceActionsType {

  SAVE_AGENCE = '[AgenceRequestDto] Get Save Appartement',
  SAVE_AGENCE_SUCCES = '[AgenceRequestDto] Get Save AppartementSucces',
  SAVE_AGENCE_ERROR = '[AgenceRequestDto] Get Save Appartement Error',

  GET_ALL_AGENCE = '[AgenceResponseDto] Get All AgenceResponseDto Libre',
  GET_ALL_AGENCE_SUCCES = '[AgenceResponseDto] Get All AgenceResponseDto Libre Succes',
  GET_ALL_AGENCE_ERROR = '[AgenceResponseDto] Get All AgenceResponseDto Libre Error',

}
// CREER LES DIFFERENTES ACTIONS
export class SaveAgenceActions implements Action {
  type: AgenceActionsType = AgenceActionsType.SAVE_AGENCE;
  constructor(public payload: AgenceRequestDto) {}
}

export class SaveAgenceActionsSuccess implements Action {
  type: AgenceActionsType = AgenceActionsType.SAVE_AGENCE_SUCCES;
  constructor(public payload: any) {}
}
export class SaveAgenceActionsError implements Action {
  type: AgenceActionsType = AgenceActionsType.SAVE_AGENCE_ERROR;
  constructor(public payload: string) {}
}

// GET ALL AGENCES
// CREER LES DIFFERENTES ACTIONS
export class GetAllAgenceActions implements Action {
  type: AgenceActionsType = AgenceActionsType.GET_ALL_AGENCE;
  constructor(public payload: any) {}
}

export class GetAllAgenceActionsSuccess implements Action {
  type: AgenceActionsType = AgenceActionsType.GET_ALL_AGENCE_SUCCES;
  constructor(public payload: AgenceImmobilierDTO[]) {}
}
export class GetAllAgenceActionsError implements Action {
  type: AgenceActionsType = AgenceActionsType.GET_ALL_AGENCE_ERROR;
  constructor(public payload: string) {}
}
export type AgenceActions =
  | SaveAgenceActions
  | SaveAgenceActionsSuccess
  | SaveAgenceActionsError
  |GetAllAgenceActions
  |GetAllAgenceActionsSuccess
  |GetAllAgenceActionsError;

