//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { BailStudioDto } from 'src/gs-api/src/models';

//STORE
export enum BailStudioActionsTypes {
  SAVE_BAIL_STUDIO = '[BailVillaDto] SAVE BAIL STUDIO',
  SAVE_BAIL_STUDIO_SUCCES = '[BailVillaDto] SAVE BAIL STUDIO Succes',
  SAVE_BAIL_STUDIO_ERROR = '[BailVillaDto] GSAVE BAIL STUDIO Error',


}
// CREER LES DIFFERENTES ACTIONS
export class SaveBailStudioActions implements Action {
  type: BailStudioActionsTypes = BailStudioActionsTypes.SAVE_BAIL_STUDIO;
  constructor(public payload: any) { }
}

export class SaveBailStudioActionsSuccess implements Action {
  type: BailStudioActionsTypes =
    BailStudioActionsTypes.SAVE_BAIL_STUDIO_SUCCES;
  constructor(public payload: BailStudioDto) { }
}
export class SaveBailStudioActionsError implements Action {
  type: BailStudioActionsTypes =
    BailStudioActionsTypes.SAVE_BAIL_STUDIO_ERROR;
  constructor(public payload: string) { }
}

export type BailStudioActions =
  | SaveBailStudioActions
  | SaveBailStudioActionsError
  | SaveBailStudioActionsSuccess
