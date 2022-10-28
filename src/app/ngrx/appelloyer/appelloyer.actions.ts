import { PeriodeDto } from './../../../gs-api/src/models/periode-dto';
import { EtagesState } from 'src/app/ngrx/etage/etage.reducer';
import { AppelLoyersFactureDto } from './../../../gs-api/src/models/appel-loyers-facture-dto';
//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AppelLoyerDto } from 'src/gs-api/src/models';
import { AnneeAppelLoyersDto } from '../../../gs-api/src/models/annee-appel-loyers-dto';

//STORE
export enum AppelLoyerctionsTypes {

  GET_ALL_APPELLOYER_ANNEE = '[AppelLoyer] Get All AppelLoyer Année',
  GET_ALL_APPELLOYER_ANNEE_SUCCES = '[AppelLoyer] Get All AppelLoyer Années Succes',
  GET_ALL_APPELLOYER_ANNEE_ERROR = '[AppelLoyer] Get All AppelLoyer AnnéEtagesState Error',


  GET_ALL_APPELLOYER = '[AppelLoyer] Get All AppelLoyer',
  GET_ALL_APPELLOYER_SUCCES = '[AppelLoyer] Get All AppelLoyer Succes',
  GET_ALL_APPELLOYER_ERROR = '[AppelLoyer] Get All AppelLoyer Error',

  GET_ALL_APPELLOYER_BY_PERIODE = '[AppelLoyersFactureDto] Get All AppelLoyer By Periode',
  GET_ALL_APPELLOYER_BY_PERIODE_SUCCES = '[AppelLoyersFactureDto] Get All AppelLoyer By Periode Succes',
  GET_ALL_APPELLOYER_BY_PERIODE_ERROR = '[AppelLoyersFactureDto] Get All AppelLoyer By Periode Error',


  GET_IMPAYER_LOYER_PAR_ANNEE= '[AppelLoyersFactureDto] Get Impayer par annee',
  GET_IMPAYER_LOYER_PAR_ANNEE_SUCCES = '[AppelLoyersFactureDto] Get Impayer par annee Success',
  GET_IMPAYER_LOYER_PAR_ANNEE_ERROR = '[AppelLoyersFactureDto] Get Impayer par annee Error',

}

//GAT IMPAYER PAR ANNEE
export class GetImayerLoyerParAnneeActions implements Action {
  type: AppelLoyerctionsTypes = AppelLoyerctionsTypes.GET_IMPAYER_LOYER_PAR_ANNEE;
  constructor(public payload: number) { }
}

export class GetImayerLoyerParAnneeActionsSuccess implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_IMPAYER_LOYER_PAR_ANNEE_SUCCES;
  constructor(public payload: number) { }
}
export class GetImayerLoyerParAnneeActionsError implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_IMPAYER_LOYER_PAR_ANNEE_ERROR;
  constructor(public payload: string) { }
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
// GET ALL APPEL LOYER ANNEE
export class GetAllAppelLoyerAnneeActions implements Action {
  type: AppelLoyerctionsTypes = AppelLoyerctionsTypes.GET_ALL_APPELLOYER_ANNEE;
  constructor(public payload: string) { }
}

export class GetAllAppelLoyerAnneeActionsSuccess implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_ALL_APPELLOYER_ANNEE_SUCCES;
  constructor(public payload: AnneeAppelLoyersDto[]) { }
}
export class GetAllAppelLoyerAnneeActionsError implements Action {
  type: AppelLoyerctionsTypes =
    AppelLoyerctionsTypes.GET_ALL_APPELLOYER_ANNEE_ERROR;
  constructor(public payload: string) { }
}

export type AppelLoyerActions =

  | GetAllAppelLoyerActions
  | GetAllAppelLoyerActionsError
  | GetAllAppelLoyerActionsSuccess
  |GetAllAppelLoyerByPeriodeActions
  |GetAllAppelLoyerByPeriodeActionsSuccess
  | GetAllAppelLoyerByPeriodeActionsError
  |GetAllAppelLoyerAnneeActions
  | GetAllAppelLoyerAnneeActionsError
;
