import { Action } from '@ngrx/store';
import {
  BienImmobilierDto,
  SiteResponseDto,
  UtilisateurRequestDto,
} from 'src/gs-api/src/models';
import {
  UtilisateurActionsTypes,
  UtilisateurActions,
} from './utilisateur.actions';
export enum UtilisteurStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}
export interface UtilisteurState {
  utlisisateurs: UtilisateurRequestDto[];
  errorMessage: string;
  dataState: UtilisteurStateEnum;
}
const initState: UtilisteurState = {
  utlisisateurs: [],
  errorMessage: '',
  dataState: UtilisteurStateEnum.INITIAL,
};
export function utilisateurReducer(
  state: UtilisteurState = initState,
  action: Action
): UtilisteurState {
  switch (action.type) {
    case UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES:
      return { ...state, dataState: UtilisteurStateEnum.LOADING };
    case UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES_SUCCES:
      return {
        ...state,
        dataState: UtilisteurStateEnum.LOADED,
        utlisisateurs: (<UtilisateurActions>action).payload,
      };
    case UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES_ERROR:
      return {
        ...state,
        dataState: UtilisteurStateEnum.ERROR,
        errorMessage: (<UtilisateurActions>action).payload,
      };
    // GET ALL LOCATIRES
    case UtilisateurActionsTypes.GET_ALL_LOCATAIRES:
      return { ...state, dataState: UtilisteurStateEnum.LOADING };
    case UtilisateurActionsTypes.GET_ALL_LOCATAIRES_SUCCES:
      return {
        ...state,
        dataState: UtilisteurStateEnum.LOADED,
        utlisisateurs: (<UtilisateurActions>action).payload,
      };
    case UtilisateurActionsTypes.GET_ALL_LOCATAIRES_ERROR:
      return {
        ...state,
        dataState: UtilisteurStateEnum.ERROR,
        errorMessage: (<UtilisateurActions>action).payload,
      };
    default:
      return { ...state };
  }
}
