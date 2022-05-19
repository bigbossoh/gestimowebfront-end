//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { StudioDto } from 'src/gs-api/src/models';

//STORE
export enum StudioActionsTypes {
  SAVE_STUDIO = '[StudioDto] Get All Studio',
  SAVE_STUDIO_SUCCES = '[StudioDto] Get All Studio Succes',
  SAVE_STUDIO_ERROR = '[StudioDto] Get All Studio Error',

  GET_ALL_STUDIO = '[StudioDto] Get All StudioDto',
  GET_ALL_STUDIO_SUCCES = '[StudioDto] Get All StudioDto Succes',
  GET_ALL_STUDIO_ERROR = '[StudioDto] Get All StudioDto Error',
}
// CREER LES DIFFERENTES ACTIONS
export class SaveStudioActions implements Action {
  type: StudioActionsTypes = StudioActionsTypes.SAVE_STUDIO;
  constructor(public payload: any) { }
}

export class SaveStudioActionsSuccess implements Action {
  type: StudioActionsTypes =
    StudioActionsTypes.SAVE_STUDIO_SUCCES;
  constructor(public payload: boolean) { }
}
export class SaveStudioctionsError implements Action {
  type: StudioActionsTypes =
    StudioActionsTypes.SAVE_STUDIO_ERROR;
  constructor(public payload: string) { }
}
// CREER LES DIFFERENTES ACTIONS
export class GetAllStudioActions implements Action {
  type: StudioActionsTypes = StudioActionsTypes.GET_ALL_STUDIO;
  constructor(public payload: any) { }
}

export class GetAllStudioActionsSuccess implements Action {
  type: StudioActionsTypes =
    StudioActionsTypes.GET_ALL_STUDIO_SUCCES;
  constructor(public payload: StudioDto[]) { }
}
export class GetAllStudioctionsError implements Action {
  type: StudioActionsTypes =
    StudioActionsTypes.GET_ALL_STUDIO_ERROR;
  constructor(public payload: string) { }
}
export type StudioActions =
  | SaveStudioActionsSuccess
  | SaveStudioctionsError
  | SaveStudioActions
  | GetAllStudioActions
  | GetAllStudioActionsSuccess
  | GetAllStudioctionsError;


