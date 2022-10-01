
//CREER LES DIFFERENTES TYPES D'ACTION QUI VONT DECLANCHER LES EVENE,ENT DANS LE

import { Action } from '@ngrx/store';

import { AppelLoyerDto, PeriodeDto } from 'src/gs-api/src/models';


//STORE
export enum PeriodeActionsTypes {

    GET_PERIODE_BY_ANNEE = '[PeriodeDto] Get All période Année',
    GET_PERIODE_BY_ANNEE_SUCCES = '[PeriodeDto] Get All période Années Succes',
    GET_PERIODE_BY_ANNEE_ERROR = '[PeriodeDto] Get All période AnnéEtagesState Error',


}


// GET ALL PERIODE BY ANNEE
export class GetAllPeriodeByAnneeActions implements Action {
    type: PeriodeActionsTypes = PeriodeActionsTypes.GET_PERIODE_BY_ANNEE;
    constructor(public payload: any) { }
}

export class GetAllPeriodeByAnneeActionsSuccess implements Action {
    type: PeriodeActionsTypes =
        PeriodeActionsTypes.GET_PERIODE_BY_ANNEE_SUCCES;
    constructor(public payload: PeriodeDto[]) { }
}
export class GetAllPeriodeByAnneeActionsError implements Action {
    type: PeriodeActionsTypes =
        PeriodeActionsTypes.GET_PERIODE_BY_ANNEE_ERROR;
    constructor(public payload: string) { }
}

export type PeriodeActions =
    | GetAllPeriodeByAnneeActions
    | GetAllPeriodeByAnneeActionsError
    | GetAllPeriodeByAnneeActionsSuccess;
