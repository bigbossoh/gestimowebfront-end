//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { StudioDto } from 'src/gs-api/src/models';

//STORE
export enum StudioActionsTypes {
  SAVE_STUDIO = '[StudioDto] Get All Studio',
  SAVE_STUDIO_SUCCES = '[StudioDto] Get All Studio Succes',
  SAVE_STUDIO_ERROR = '[StudioDto] Get All Studio Error',

  //GET ETAGE BY IMMEUBLE
  // GET_ALL_ETAGES_BY_IMMEUBLE = '[EtageDto] Get All Etage BY IMMEUBLE',
  // GET_ALL_ETAGES_BY_IMMEUBLE_SUCCES = '[EtageDto] Get All Etage BY IMMEUBLE SUCCUS',
  // GET_ALL_ETAGES_BY_IMMEUBLE_ERROR = '[EtageDto] Get All Etage BY IMMEUBLE ERROR',

  //SAVE ETAGE BY IMMEUBLE
  // SAVE_ETAGE = '[EtageDto] SAVE ETAGE',
  // SAVE_ETAGE_SUCCES = '[EtageDto] SAVE ETAGE SUCCUS',
  // SAVE_ETAGE_ERROR = '[EtageDto] SAVE ETAGE ERROR'
}
// CREER LES DIFFERENTES ACTIONS
export class SaveStudioActions implements Action {
  type: StudioActionsTypes = StudioActionsTypes.SAVE_STUDIO;
  constructor(public payload: any) { }
}

export class SaveStudioActionsSuccess implements Action {
  type: StudioActionsTypes =
    StudioActionsTypes.SAVE_STUDIO_SUCCES;
  constructor(public payload: boolean) { }
}
export class SaveStudioctionsError implements Action {
  type: StudioActionsTypes =
    StudioActionsTypes.SAVE_STUDIO_ERROR;
  constructor(public payload: string) { }
}
// //RECHERCHER ETAGE PAR IMMEUBLE

// export class GetAllEtagesByImmeubleActions implements Action {
//   type: StudioActionsTypes = EtagesActionsTypes.GET_ALL_ETAGES_BY_IMMEUBLE;
//   constructor(public payload: number) { }
// }

// export class GetAllEtagesByImmeubleActionsSuccess implements Action {
//   type: EtagesActionsTypes =
//     EtagesActionsTypes.GET_ALL_ETAGES_BY_IMMEUBLE_SUCCES;
//   constructor(public payload: EtageDto[]) { }
// }
// export class GetAllEtagesByImmeubleActionsError implements Action {
//   type: EtagesActionsTypes =
//     EtagesActionsTypes.GET_ALL_ETAGES_BY_IMMEUBLE_ERROR;
//   constructor(public payload: string) { }
// }
// //SAVE NEW ETAGE

// export class SaveEtageActions implements Action {
//   type: EtagesActionsTypes = EtagesActionsTypes.SAVE_ETAGE;
//   constructor(public payload: EtageDto) { }
// }

// export class SaveEtageActionsSuccess implements Action {
//   type: EtagesActionsTypes =
//     EtagesActionsTypes.SAVE_ETAGE_SUCCES;
//   constructor(public payload: any) { }
// }
// export class SaveEtageActionsError implements Action {
//   type: EtagesActionsTypes =
//     EtagesActionsTypes.SAVE_ETAGE_ERROR;
//   constructor(public payload: string) { }
// }
export type StudioActions =
  | SaveStudioActionsSuccess
  | SaveStudioctionsError
  | SaveStudioActions

  // | GetAllEtagesByImmeubleActions
  // | GetAllEtagesByImmeubleActionsError
  // | GetAllEtagesByImmeubleActionsSuccess
  // | SaveEtageActions
  // | SaveEtageActionsError
  // | SaveEtageActionsSuccess;
