//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { ImmeubleDto } from 'src/gs-api/src/models';

//STORE
export enum ImmeublesActionsTypes {
  GET_ALL_IMMEUBLES = '[ImmeubleDto] Get All Immeuble',
  GET_ALL_IMMEUBLES_SUCCES = '[ImmeubleDto] Get All Immeuble Succes',
  GET_ALL_IMMEUBLES_ERROR = '[ImmeubleDto] Get All Immeuble Error',
}
// CREER LES DIFFERENTES ACTIONS
export class GetAllImmeublesActions implements Action {
  type: ImmeublesActionsTypes = ImmeublesActionsTypes.GET_ALL_IMMEUBLES;
  constructor(public payload: any) { }
}

export class GetAllImmeublesActionsSuccess implements Action {
  type: ImmeublesActionsTypes =
    ImmeublesActionsTypes.GET_ALL_IMMEUBLES_SUCCES;
  constructor(public payload: ImmeubleDto[]) { }
}
export class GetAllImmeublesActionsError implements Action {
  type: ImmeublesActionsTypes =
    ImmeublesActionsTypes.GET_ALL_IMMEUBLES_ERROR;
  constructor(public payload: string) { }
}
export type ImmeublesActions =
  | GetAllImmeublesActions
  | GetAllImmeublesActionsError
  | GetAllImmeublesActionsSuccess;
