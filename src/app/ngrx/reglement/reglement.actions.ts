import { Action } from '@ngrx/store';
import { EncaissementPayloadDto } from './../../../gs-api/src/models/encaissement-payload-dto';
import { AppelLoyersFactureDto } from '../../../gs-api/src/models/appel-loyers-facture-dto';
//STORE
export enum EncaissementActionsTypes {
  //GET ETAGE BY IMMEUBLE
  SAVE_ENCAISSEMENT = '[EncaissementPayloadDto] Save Encaissement',
  SAVE_ENCAISSEMENT_SUCCES = '[EncaissementPayloadDto] Save Encaissement SUCCES',
  SAVE_ENCAISSEMENT_ERROR = '[EncaissementPayloadDto] Save Encaissement ERROR',

  GET_ENCAISSEMENT_BY_BIEN = '[EncaissementPayloadDto] Get Encaissement By Bien',
  GET_ENCAISSEMENT_BY_BIEN_SUCCES = '[EncaissementPayloadDto] Get Encaissement By Bien SUCCES',
  GET_ENCAISSEMENT_BY_BIEN_ERROR = '[EncaissementPayloadDto] Get Encaissement By Bien ERROR',
  //
  GET_ALL_PERIODE_REGLEMENT_BY_BIEN = '[AppelLoyersFactureDto] Get All periode By bien',
  GET_ALL_PERIODE_REGLEMENT_BY_BIEN_SUCCES = '[AppelLoyersFactureDto] Get All periode By bien Succes',
  GET_ALL_PERIODE_REGLEMENT_BY_BIEN_ERROR = '[AppelLoyersFactureDto] Get All periode By bien Error',
}
export class SaveEncaissementActions implements Action {
  type: EncaissementActionsTypes = EncaissementActionsTypes.SAVE_ENCAISSEMENT;
  constructor(public payload: EncaissementPayloadDto) {}
}

export class SaveEncaissementActionsSuccess implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.SAVE_ENCAISSEMENT_SUCCES;
  constructor(public payload: any) {}
}
export class SaveEncaissementActionsError implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.SAVE_ENCAISSEMENT_ERROR;
  constructor(public payload: string) {}
}
// GET ALL PERIODE BY BIEN
export class GetAllPeriodeReglementByBienActions implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN;
  constructor(public payload: any) {}
}

export class GetAllPeriodeReglementByBienActionsSuccess implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN_SUCCES;
  constructor(public payload: AppelLoyersFactureDto) {}
}
export class GetAllPeriodeReglementByBienActionsError implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN_ERROR;
  constructor(public payload: string) {}
}

// GET ALL PERIODE BY BIEN
export class GetEncaissementBienActions implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN;
  constructor(public payload: number) {}
}

export class GetEncaissementBienActionsSuccess implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN_SUCCES;
  constructor(public payload: any) {}
}
export class GetEncaissementBienActionsError implements Action {
  type: EncaissementActionsTypes =
    EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN_ERROR;
  constructor(public payload: string) {}
}
export type EncaissementActions =
  | SaveEncaissementActions
  | SaveEncaissementActionsError
  | SaveEncaissementActionsSuccess
  | GetAllPeriodeReglementByBienActions
  | GetAllPeriodeReglementByBienActionsSuccess
  | GetAllPeriodeReglementByBienActionsError
  |GetEncaissementBienActions
  |GetEncaissementBienActionsError
  |GetEncaissementBienActionsSuccess;
