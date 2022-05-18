//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { UtilisateurRequestDto } from 'src/gs-api/src/models';

//STORE
export enum UtilisateurActionsTypes {
  GET_ALL_PROPRIETAIRES = '[UtilisateurRequestDto] Get All Proprietaires',
  GET_ALL_PROPRIETAIRES_SUCCES = '[UtilisateurRequestDto] Get All Proprietaires Succes',
  GET_ALL_PROPRIETAIRES_ERROR = '[UtilisateurRequestDto] Get All Proprietaires Error',

  GET_ALL_LOCATAIRES = '[UtilisateurRequestDto] Get All Locataires',
  GET_ALL_LOCATAIRES_SUCCES = '[UtilisateurRequestDto] Get All Locataires Succes',
  GET_ALL_LOCATAIRES_ERROR = '[UtilisateurRequestDto] Get All Locataires Error',
}
// CREER LES DIFFERENTES ACTIONS
export class GetAllProprietairesActions implements Action {
  type: UtilisateurActionsTypes = UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES;
  constructor(public payload: any) { }
}

export class GetAllProprietairesActionsSuccess implements Action {
  type: UtilisateurActionsTypes =
    UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES_SUCCES;
  constructor(public payload: UtilisateurRequestDto[]) { }
}
export class GetAllProprietairesActionsError implements Action {
  type: UtilisateurActionsTypes =
    UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES_ERROR;
  constructor(public payload: string) { }
}
// LISTE DES LOCATAIRES
export class GetAllLocatairesActions implements Action {
  type: UtilisateurActionsTypes = UtilisateurActionsTypes.GET_ALL_LOCATAIRES;
  constructor(public payload: any) { }
}

export class GetAllLocatairesActionsSuccess implements Action {
  type: UtilisateurActionsTypes =
    UtilisateurActionsTypes.GET_ALL_LOCATAIRES_SUCCES;
  constructor(public payload: UtilisateurRequestDto[]) { }
}
export class GetAllLocatairesActionsError implements Action {
  type: UtilisateurActionsTypes =
    UtilisateurActionsTypes.GET_ALL_LOCATAIRES_ERROR;
  constructor(public payload: string) { }
}
export type UtilisateurActions =
  | GetAllProprietairesActions
  | GetAllProprietairesActionsError
  | GetAllProprietairesActionsSuccess

  | GetAllLocatairesActions
  | GetAllLocatairesActionsError
  | GetAllLocatairesActionsSuccess;
