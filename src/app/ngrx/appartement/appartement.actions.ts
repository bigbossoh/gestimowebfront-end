//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AppartementDto } from 'src/gs-api/src/models';

//STORE
export enum AppartementctionsTypes {

  SAVE_APPARTEMENT = '[AppartementDto] Get Save Appartement',
  SAVE_APPARTEMENT_SUCCES = '[AppartementDto] Get Save AppartementSucces',
  SAVE_APPARTEMENT_ERROR = '[AppartementDto] Get Save Appartement Error',

  GET_ALL_APPARTEMENT_LIBRE = '[AppartementDto] Get All AppartementDto Libre',
  GET_ALL_APPARTEMENT_LIBRE_SUCCES = '[AppartementDto] Get All AppartementDto Libre Succes',
  GET_ALL_APPARTEMENT_LIBRE_ERROR = '[AppartementDto] Get All AppartementDto Libre Error',

  GET_ALL_APPARTEMENT = '[AppartementDto] Get All AppartementDto',
  GET_ALL_APPARTEMENT_SUCCES = '[AppartementDto] Get All AppartementDto Succes',
  GET_ALL_APPARTEMENT_ERROR = '[AppartementDto] Get All AppartementDto Error',
}
// CREER LES DIFFERENTES ACTIONS
export class SaveAppartementActions implements Action {
  type: AppartementctionsTypes = AppartementctionsTypes.SAVE_APPARTEMENT;
  constructor(public payload: any) {}
}

export class SaveAppartementActionsSuccess implements Action {
  type: AppartementctionsTypes = AppartementctionsTypes.SAVE_APPARTEMENT_SUCCES;
  constructor(public payload: AppartementDto) {}
}
export class SaveAppartementActionsError implements Action {
  type: AppartementctionsTypes = AppartementctionsTypes.SAVE_APPARTEMENT_ERROR;
  constructor(public payload: string) {}
}

// GET ALL APPARTEMENT LIBRE
export class GetAllAppartementLibreActions implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.GET_ALL_APPARTEMENT_LIBRE;
  constructor(public payload: any) {}
}

export class GetAllAppartementLibreActionsSuccess implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.GET_ALL_APPARTEMENT_LIBRE_SUCCES;
  constructor(public payload: AppartementDto[]) {}
}
export class GetAllAppartementLibreActionsError implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.GET_ALL_APPARTEMENT_LIBRE_ERROR;
  constructor(public payload: string) {}
}
// GET ALL APPARTEMENT
export class GetAllAppartementActions implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.GET_ALL_APPARTEMENT;
  constructor(public payload: any) {}
}

export class GetAllAppartementActionsSuccess implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.GET_ALL_APPARTEMENT_SUCCES;
  constructor(public payload: AppartementDto[]) {}
}
export class GetAllAppartementActionsError implements Action {
  type: AppartementctionsTypes =
    AppartementctionsTypes.GET_ALL_APPARTEMENT_ERROR;
  constructor(public payload: string) {}
}

export type AppartementActions =
  | SaveAppartementActions
  | SaveAppartementActionsSuccess
  | SaveAppartementActionsError

  | GetAllAppartementLibreActions
  | GetAllAppartementLibreActionsError
  | GetAllAppartementLibreActionsSuccess

  | GetAllAppartementActions
  | GetAllAppartementActionsError
  | GetAllAppartementActionsSuccess;
