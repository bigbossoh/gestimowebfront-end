//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AppelLoyer, AppelLoyerDto } from 'src/gs-api/src/models';

//STORE
export enum AppelLoyerctionsTypes {


  GET_ALL_APPELLOYER = '[AppelLoyer] Get All AppelLoyer',
  GET_ALL_APPELLOYER_SUCCES = '[AppelLoyer] Get All AppelLoyer Succes',
  GET_ALL_APPELLOYER_ERROR = '[AppelLoyer] Get All AppelLoyer Error',

}


// GET ALL APPARTEMENT
export class GetAllAppelLoyerActions implements Action {
  type: AppelLoyerctionsTypes = AppelLoyerctionsTypes.GET_ALL_APPELLOYER;
  constructor(public payload: any) { }
}

export class GetAllAppelLoyerActionsSuccess implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_ALL_APPELLOYER_SUCCES;
  constructor(public payload: AppelLoyerDto[]) { }
}
export class GetAllAppelLoyerActionsError implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_ALL_APPELLOYER_ERROR;
  constructor(public payload: string) { }
}

export type AppelLoyerActions =

  | GetAllAppelLoyerActions
  | GetAllAppelLoyerActionsError
  | GetAllAppelLoyerActionsSuccess
