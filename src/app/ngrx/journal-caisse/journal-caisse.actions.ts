import { SuivieDepenseDto } from './../../../gs-api/src/models/suivie-depense-dto';
//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import {} from 'src/gs-api/src/models';

//STORE
export enum SuiviDepenseActionsTypes {
  SAVE_SUIVI_DEPENSE = '[SuivieDepenseDto] Save Suivi Depense',
  SAVE_SUIVI_DEPENSE_SUCCES = '[SuivieDepenseDto] Save Suivi Depense Succes',
  SAVE_SUIVI_DEPENSE_ERROR = '[SuivieDepenseDto] Save Suivi Depense Error',

  GET_ALL_SUIVI_DEPENSE = '[SuivieDepenseDto] Get All Suivi Depense',
  GET_ALL_SUIVI_DEPENSE_SUCCES = '[SuivieDepenseDto] Get All Suivi Depense Succes',
  GET_ALL_SUIVI_DEPENSE_ERROR = '[SuivieDepenseDto] Get All Suivi Depense Error',
}

export class SaveSuiviDepenseActions implements Action {
  type: SuiviDepenseActionsTypes = SuiviDepenseActionsTypes.SAVE_SUIVI_DEPENSE;
  constructor(public payload: any) {}
}

export class SaveSuiviDepenseActionsSuccess implements Action {
  type: SuiviDepenseActionsTypes =
    SuiviDepenseActionsTypes.SAVE_SUIVI_DEPENSE_SUCCES;
  constructor(public payload: any) {}
}
export class SaveSuiviDepenseActionsError implements Action {
  type: SuiviDepenseActionsTypes =
    SuiviDepenseActionsTypes.SAVE_SUIVI_DEPENSE_ERROR;
  constructor(public payload: string) {}
}

// GAT ALL SUIVI DEPENSE
export class GetAllSuiviDepenseActions implements Action {
  type: SuiviDepenseActionsTypes =
    SuiviDepenseActionsTypes.GET_ALL_SUIVI_DEPENSE;
  constructor(public payload: any) {}
}

export class GetAllSuiviDepenseActionsSuccess implements Action {
  type: SuiviDepenseActionsTypes =
    SuiviDepenseActionsTypes.GET_ALL_SUIVI_DEPENSE_SUCCES;
  constructor(public payload: any) {}
}
export class GetAllSuiviDepenseActionsError implements Action {
  type: SuiviDepenseActionsTypes =
    SuiviDepenseActionsTypes.GET_ALL_SUIVI_DEPENSE_ERROR;
  constructor(public payload: string) {}
}
export type JournalCaisseActions =
  | SaveSuiviDepenseActions
  | SaveSuiviDepenseActionsSuccess
  | SaveSuiviDepenseActionsError
  | GetAllSuiviDepenseActions
  | GetAllSuiviDepenseActionsError
  | GetAllSuiviDepenseActionsSuccess;
