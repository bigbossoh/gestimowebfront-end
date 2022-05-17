//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { VilleDto } from 'src/gs-api/src/models';

//STORE
export enum VillesActionsTypes {
  GET_ALL_VILLES = '[VilleDto] Get All VILLA',
  GET_ALL_VILLES_SUCCES = '[VilleDto] Get All VILLA Succes',
  GET_ALL_VILLES_ERROR = '[VilleDto] Get All VILLA Error',

}
// CREER LES DIFFERENTES ACTIONS
export class GetAllVilleAsActions implements Action {
  type: VillesActionsTypes = VillesActionsTypes.GET_ALL_VILLES;
  constructor(public payload: any) { }
}

export class GetAllVilleActionsSuccess implements Action {
  type: VillesActionsTypes =
    VillesActionsTypes.GET_ALL_VILLES_SUCCES;
  constructor(public payload: VilleDto[]) { }
}
export class GetAllVillesActionsError implements Action {
  type: VillesActionsTypes =
    VillesActionsTypes.GET_ALL_VILLES_ERROR;
  constructor(public payload: string) { }
}

export type VillesActions =
  | GetAllVilleAsActions
  | GetAllVilleActionsSuccess
  | GetAllVillesActionsError
  ;
