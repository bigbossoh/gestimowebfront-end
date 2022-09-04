import { Action } from '@ngrx/store';
import { EncaissementPayloadDto } from './../../../gs-api/src/models/encaissement-payload-dto';
//STORE
export enum EncaissementActionsTypes {
  //GET ETAGE BY IMMEUBLE
  SAVE_ENCAISSEMENT = '[EncaissementPayloadDto] Save Encaissement',
  SAVE_ENCAISSEMENT_SUCCES = '[EncaissementPayloadDto] Save Encaissement SUCCES',
  SAVE_ENCAISSEMENT_ERROR = '[EncaissementPayloadDto] Save Encaissement ERROR',
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

export type EncaissementActions =
  | SaveEncaissementActions
  | SaveEncaissementActionsError
  | SaveEncaissementActionsSuccess;

