//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { OperationDto } from 'src/gs-api/src/models';
import { AppelLoyersFactureDto } from '../../../gs-api/src/models/appel-loyers-facture-dto';

//STORE
export enum OperationActionsTypes {
  CLOTURE_BAIL = '[OperationDto] Bail Cloturer',
  CLOTURE_BAIL_SUCCES = '[OperationDto] Bail Cloturer Succes',
  CLOTURE_BAIL_ERROR = '[OperationDto] Bail Cloturer Error',

  GET_ALL_BAIL = '[OperationDto] Get All OperationDto',
  GET_ALL_BAIL_SUCCES = '[OperationDto] Get All OperationDto Succes',
  GET_ALL_BAIL_ERROR = '[OperationDto] Get All OperationDto Error',

  GET_ALL_BIEN_BAIL_BY_LOCATAIRE = '[OperationDto] Get All Biens By locataire',
  GET_ALL_BIEN_BAIL_BY_LOCATAIRE_SUCCES = '[OperationDto] Get All Biens By Locataires Succes',
  GET_ALL_BIEN_BAIL_BY_LOCATAIRE_ERROR = '[OperationDto] Get All Biens By locataires Error',

}

// GET ALL BAUX
export class GetAllOperationActions implements Action {
  type: OperationActionsTypes = OperationActionsTypes.GET_ALL_BAIL;
  constructor(public payload: any) {}
}

export class GetAllOperationActionsSuccess implements Action {
  type: OperationActionsTypes = OperationActionsTypes.GET_ALL_BAIL_SUCCES;
  constructor(public payload: OperationDto[]) {}
}
export class GetAllOperationActionsError implements Action {
  type: OperationActionsTypes = OperationActionsTypes.GET_ALL_BAIL_ERROR;
  constructor(public payload: string) {}
}

// GET ALL BIENS BY LOCATAIRES
export class GetAllBientaireByLocatairesActions implements Action {
  type: OperationActionsTypes =
    OperationActionsTypes.GET_ALL_BIEN_BAIL_BY_LOCATAIRE;
  constructor(public payload: any) {}
}

export class GetAllBientaireByLocatairesActionsSuccess implements Action {
  type: OperationActionsTypes =
    OperationActionsTypes.GET_ALL_BIEN_BAIL_BY_LOCATAIRE_SUCCES;
  constructor(public payload: OperationDto[]) {}
}
export class GetAllBientaireByLocatairesActionsError implements Action {
  type: OperationActionsTypes =
    OperationActionsTypes.GET_ALL_BIEN_BAIL_BY_LOCATAIRE_ERROR;
  constructor(public payload: string) {}
}


// CLOTURE BAIL
export class ClotureOperationActions implements Action {
  type: OperationActionsTypes = OperationActionsTypes.CLOTURE_BAIL;
  constructor(public payload: number) {}
}

export class ClotureOperationActionsSuccess implements Action {
  type: OperationActionsTypes = OperationActionsTypes.CLOTURE_BAIL_SUCCES;
  constructor(public payload: boolean) {}
}
export class ClotureOperationActionsError implements Action {
  type: OperationActionsTypes = OperationActionsTypes.CLOTURE_BAIL_ERROR;
  constructor(public payload: string) {}
}

export type OperationActions =
  | GetAllOperationActions
  | GetAllOperationActionsError
  | GetAllOperationActionsSuccess
  | ClotureOperationActions
  | ClotureOperationActionsError
  | ClotureOperationActionsSuccess
  | GetAllBientaireByLocatairesActions
  | GetAllBientaireByLocatairesActionsError
  | GetAllBientaireByLocatairesActionsSuccess
   ;
