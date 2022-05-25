//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { SiteResponseDto } from 'src/gs-api/src/models';

//STORE
export enum SiteActionsTypes {
  GET_ALL_SITES = '[SiteResponseDto] Get All Sites ?',
  GET_ALL_SITES_SUCCES = '[SiteResponseDto] Get All Sites Succes',
  GET_ALL_SITES_ERROR = '[SiteResponseDto] Get All Sites Error',
}
// CREER LES DIFFERENTES ACTIONS
export class GetAllSitesActions implements Action {
  type: SiteActionsTypes = SiteActionsTypes.GET_ALL_SITES;
  constructor(public payload: any) {}
}

export class GetAllSitesActionsSuccess implements Action {
  type: SiteActionsTypes = SiteActionsTypes.GET_ALL_SITES_SUCCES;
  constructor(public payload: SiteResponseDto[]) {}
}
export class GetAllSitesActionsError implements Action {
  type: SiteActionsTypes = SiteActionsTypes.GET_ALL_SITES_ERROR;
  constructor(public payload: string) {}
}
export type SiteActions =
  | GetAllSitesActions
  | GetAllSitesActionsError
  | GetAllSitesActionsSuccess;
