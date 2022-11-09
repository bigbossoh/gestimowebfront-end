import { AgenceRequestDto } from 'src/gs-api/src/models';
//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

//STORE
export enum ImagesActionsTypes {
  UPLOAD_LOGO = '[EtageDto] Get All Etage',
  UPLOAD_LOGO_SUCCES = '[EtageDto] Get All Etage Succes',
  UPLOAD_LOGO_ERROR = '[EtageDto] Get All Etage Error',
}
// CREER LES DIFFERENTES ACTIONS
export class UploadLogoAcions implements Action {
  type: ImagesActionsTypes = ImagesActionsTypes.UPLOAD_LOGO;
  constructor(public payload: AgenceRequestDto) {}
}

export class UploadLogoAcionsSuccess implements Action {
  type: ImagesActionsTypes = ImagesActionsTypes.UPLOAD_LOGO_SUCCES;
  constructor(public payload: any) {}
}
export class UploadLogoAcionsError implements Action {
  type: ImagesActionsTypes = ImagesActionsTypes.UPLOAD_LOGO_ERROR;
  constructor(public payload: string) {}
}

export type ImagesActions =
  | UploadLogoAcions
  | UploadLogoAcionsError
  | UploadLogoAcionsSuccess;
