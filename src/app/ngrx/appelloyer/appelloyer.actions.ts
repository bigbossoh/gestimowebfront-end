import { AppelLoyersFactureDto } from './../../../gs-api/src/models/appel-loyers-facture-dto';
//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AppelLoyer, AppelLoyerDto } from 'src/gs-api/src/models';

//STORE
export enum AppelLoyerctionsTypes {


  GET_ALL_APPELLOYER = '[AppelLoyer] Get All AppelLoyer',
  GET_ALL_APPELLOYER_SUCCES = '[AppelLoyer] Get All AppelLoyer Succes',
  GET_ALL_APPELLOYER_ERROR = '[AppelLoyer] Get All AppelLoyer Error',

  GET_ALL_APPELLOYER_BY_PERIODE = '[AppelLoyersFactureDto] Get All AppelLoyer By Periode',
  GET_ALL_APPELLOYER_BY_PERIODE_SUCCES = '[AppelLoyersFactureDto] Get All AppelLoyer By Periode Succes',
  GET_ALL_APPELLOYER_BY_PERIODE_ERROR = '[AppelLoyersFactureDto] Get All AppelLoyer By Periode Error',

}


// GET ALL APPEL LOYER
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


// GET ALL APPARTEMENT BY PERIODE
export class GetAllAppelLoyerByPeriodeActions implements Action {
  type: AppelLoyerctionsTypes = AppelLoyerctionsTypes.GET_ALL_APPELLOYER_BY_PERIODE;
  constructor(public payload: string) { }
}

export class GetAllAppelLoyerByPeriodeActionsSuccess implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_ALL_APPELLOYER_BY_PERIODE_SUCCES;
  constructor(public payload: AppelLoyersFactureDto[]) { }
}
export class GetAllAppelLoyerByPeriodeActionsError implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_ALL_APPELLOYER_BY_PERIODE_ERROR;
  constructor(public payload: string) { }
}
export type AppelLoyerActions =

  | GetAllAppelLoyerActions
  | GetAllAppelLoyerActionsError
  | GetAllAppelLoyerActionsSuccess
  |GetAllAppelLoyerByPeriodeActions
  |GetAllAppelLoyerByPeriodeActionsSuccess
  |GetAllAppelLoyerByPeriodeActionsError;
