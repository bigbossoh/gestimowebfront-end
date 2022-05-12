//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';
import { type } from 'os';
import { Bienimmobilier } from 'src/gs-api/src/models';

//STORE
export enum BienImmobilierActionsTypes {
  GET_ALL_BIENS = '[Bienimmobilier] Get All Biens Immobilier',
  GET_ALL_BIENS_SUCCES = '[Bienimmobilier] Get All Biens Immobilier Succes',
  GET_ALL_BIENS_ERROR = '[Bienimmobilier] Get All Biens Immobilier Error',
}
// CREER LES DIFFERENTES ACTIONS
export class GetAllBiensActions implements Action {
  type: BienImmobilierActionsTypes = BienImmobilierActionsTypes.GET_ALL_BIENS;
  constructor(public payload: any) {}
}

export class GetAllBiensActionsSuccess implements Action {
  type: BienImmobilierActionsTypes =
    BienImmobilierActionsTypes.GET_ALL_BIENS_SUCCES;
  constructor(public payload: Bienimmobilier[]) {}
}
export class GetAllBiensActionsError implements Action {
  type: BienImmobilierActionsTypes =
    BienImmobilierActionsTypes.GET_ALL_BIENS_ERROR;
  constructor(public payload: string) {}
}
export type BienImmobilierActions =
  | GetAllBiensActions
  | GetAllBiensActionsError
  | GetAllBiensActionsSuccess;
