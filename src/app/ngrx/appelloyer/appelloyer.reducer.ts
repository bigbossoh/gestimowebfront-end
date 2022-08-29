import { Action } from '@ngrx/store';
import { AppelLoyer, OperationDto } from 'src/gs-api/src/models';
import { AppelLoyerActions, AppelLoyerctionsTypes } from './appelloyer.actions';
import { AppelLoyerDto } from '../../../gs-api/src/models/appel-loyer-dto';
import { AppelLoyersFactureDto } from '../../../gs-api/src/models/appel-loyers-facture-dto';
export enum AppelLoyerStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble',
}
export interface AppelLoyerState {
  appelloyers: AppelLoyersFactureDto[];
  errorMessage: string;
  dataState: AppelLoyerStateEnum;
}
const initState: AppelLoyerState = {
  appelloyers: [],
  errorMessage: '',
  dataState: AppelLoyerStateEnum.INITIAL,
};
export function appelLoyerReducer(
  state: AppelLoyerState = initState,
  action: Action
): AppelLoyerState {
  switch (action.type) {
    // GET ALL APPEL LOYER
    case AppelLoyerctionsTypes.GET_ALL_APPELLOYER:
      return { ...state, dataState: AppelLoyerStateEnum.LOADING };
    case AppelLoyerctionsTypes.GET_ALL_APPELLOYER_SUCCES:
      return {
        ...state,
        dataState: AppelLoyerStateEnum.LOADED,
        appelloyers: (<AppelLoyerActions>action).payload,
      };
    case AppelLoyerctionsTypes.GET_ALL_APPELLOYER_ERROR:
      return {
        ...state,
        dataState: AppelLoyerStateEnum.ERROR,
        errorMessage: (<AppelLoyerActions>action).payload,
      };

        // GET ALL APPEL LOYER BY PERIODE
        case AppelLoyerctionsTypes.GET_ALL_APPELLOYER_BY_PERIODE:
          return { ...state, dataState: AppelLoyerStateEnum.LOADING };
        case AppelLoyerctionsTypes.GET_ALL_APPELLOYER_BY_PERIODE_SUCCES:
          return {
            ...state,
            dataState: AppelLoyerStateEnum.LOADED,
            appelloyers: (<AppelLoyerActions>action).payload,
          };
        case AppelLoyerctionsTypes.GET_ALL_APPELLOYER_BY_PERIODE_ERROR:
          return {
            ...state,
            dataState: AppelLoyerStateEnum.ERROR,
            errorMessage: (<AppelLoyerActions>action).payload,
          };
    default:
      return { ...state };
  }
}
