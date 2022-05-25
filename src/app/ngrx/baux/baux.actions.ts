//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { OperationDto } from 'src/gs-api/src/models';

//STORE
export enum OperationActionsTypes {


  GET_ALL_BAIL = '[OperationDto] Get All OperationDto',
  GET_ALL_BAIL_SUCCES = '[OperationDto] Get All OperationDto Succes',
  GET_ALL_BAIL_ERROR = '[OperationDto] Get All OperationDto Error',

}


// GET ALL APPARTEMENT
export class GetAllOperationActions implements Action {
  type: OperationActionsTypes = OperationActionsTypes.GET_ALL_BAIL;
  constructor(public payload: any) { }
}

export class GetAllOperationActionsSuccess implements Action {
  type: OperationActionsTypes =
    OperationActionsTypes.GET_ALL_BAIL_SUCCES;
  constructor(public payload: OperationDto[]) { }
}
export class GetAllOperationActionsError implements Action {
  type: OperationActionsTypes =
    OperationActionsTypes.GET_ALL_BAIL_ERROR;
  constructor(public payload: string) { }
}

export type operationActions =

  | GetAllOperationActions
  | GetAllOperationActionsError
  | GetAllOperationActionsSuccess
