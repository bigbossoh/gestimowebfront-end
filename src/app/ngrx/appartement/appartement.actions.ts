//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AppartementDto } from 'src/gs-api/src/models';

//STORE
export enum AppartementctionsTypes {
  SAVE_APPARTEMENT = '[AppartementDto] Get Save Appartement',
  SAVE_APPARTEMENT_SUCCES = '[AppartementDto] Get Save AppartementSucces',
  SAVE_APPARTEMENT_ERROR = '[AppartementDto] Get Save Appartement Error',


}
// CREER LES DIFFERENTES ACTIONS
export class SaveAppartementActions implements Action {
  type: AppartementctionsTypes = AppartementctionsTypes.SAVE_APPARTEMENT;
  constructor(public payload: any) { }
}

export class SaveAppartementActionsSuccess implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.SAVE_APPARTEMENT_SUCCES;
  constructor(public payload: AppartementDto) { }
}
export class SaveAppartementActionsError implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.SAVE_APPARTEMENT_ERROR;
  constructor(public payload: string) { }
}

export type AppartementActions =
  | SaveAppartementActions
  | SaveAppartementActionsSuccess
  | SaveAppartementActionsError
