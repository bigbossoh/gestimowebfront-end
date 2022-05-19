//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { Bienimmobilier, BienImmobilierDto } from 'src/gs-api/src/models';

//STORE
export enum BienImmobilierActionsTypes {
  GET_ALL_BIENS = '[BienImmobilierDto] Get All Biens Immobilier',
  GET_ALL_BIENS_SUCCES = '[BienImmobilierDto] Get All Biens Immobilier Succes',
  GET_ALL_BIENS_ERROR = '[BienImmobilierDto] Get All Biens Immobilier Error',

  //NOUVEAU BIEN IMMOBILIER
  NEW_BIENS = '[BienImmobilierDto] New Biens Immobilier',
  NEW_BIENS_SUCCES = '[BienImmobilierDto] New Biens Immobilier Succes',
  NEW_BIENS_ERROR = '[BienImmobilierDto] New Biens Immobilier Error',
}
// CREER LES DIFFERENTES ACTIONS
export class GetAllBiensActions implements Action {
  type: BienImmobilierActionsTypes = BienImmobilierActionsTypes.GET_ALL_BIENS;
  constructor(public payload: any) { }
}

export class GetAllBiensActionsSuccess implements Action {
  type: BienImmobilierActionsTypes =
    BienImmobilierActionsTypes.GET_ALL_BIENS_SUCCES;
  constructor(public payload: BienImmobilierDto[]) { }
}
export class GetAllBiensActionsError implements Action {
  type: BienImmobilierActionsTypes =
    BienImmobilierActionsTypes.GET_ALL_BIENS_ERROR;
  constructor(public payload: string) { }
}
// CREER NOUVEAU LES DIFFERENTES ACTIONS
export class NewBiensActions implements Action {
  type: BienImmobilierActionsTypes = BienImmobilierActionsTypes.NEW_BIENS;
  constructor(public payload: any) { }
}

export class NewBiensActionsSuccess implements Action {
  type: BienImmobilierActionsTypes =
    BienImmobilierActionsTypes.NEW_BIENS_SUCCES;
  constructor(public payload: BienImmobilierDto[]) { }
}
export class NewBiensActionsError implements Action {
  type: BienImmobilierActionsTypes =
    BienImmobilierActionsTypes.NEW_BIENS_ERROR;
  constructor(public payload: string) { }
}
export type BienImmobilierActions =
  | GetAllBiensActions
  | GetAllBiensActionsError
  | GetAllBiensActionsSuccess

  | NewBiensActions
  | NewBiensActionsError
  | NewBiensActionsSuccess;
