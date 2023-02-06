import { Action } from '@ngrx/store';
import { EncaissementPrincipalDTO } from '../../../gs-api/src/models/encaissement-principal-dto';
import { EncaissementActions, EncaissementActionsTypes } from './reglement.actions';
export enum EncaissementStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble',



}
export interface EncaissementState {
  encaissements: EncaissementPrincipalDTO[];
  appelloyers: any;
  errorMessage: string;
  montantEncaisse: number;
  dataState: EncaissementStateEnum;
  leLocataire: any;
}
const initState: EncaissementState = {
  encaissements: [],
  appelloyers: null,
  montantEncaisse:0,
  errorMessage: '',
  dataState: EncaissementStateEnum.INITIAL,
  leLocataire: null,
};
export function encaissementReducer(
  state: EncaissementState = initState,
  action: Action
): EncaissementState {
  switch (action.type) {
    case EncaissementActionsTypes.SAVE_ENCAISSEMENT:
      return { ...state, dataState: EncaissementStateEnum.LOADING };
    case EncaissementActionsTypes.SAVE_ENCAISSEMENT_SUCCES:
      return {
        ...state,
        dataState: EncaissementStateEnum.LOADED,
        encaissements: (<EncaissementActions>action).payload,
      };
    case EncaissementActionsTypes.SAVE_ENCAISSEMENT_ERROR:
      return {
        ...state,
        dataState: EncaissementStateEnum.ERROR,
        errorMessage: (<EncaissementActions>action).payload,
      };
// TOTAL ENCAISSEMENT
case EncaissementActionsTypes.TOTAL_ENCAISSEMENT_PAR_JOUR:
  return { ...state, dataState: EncaissementStateEnum.LOADING };
case EncaissementActionsTypes.TOTAL_ENCAISSEMENT_PAR_JOUR_SUCCES:
  return {
    ...state,
    dataState: EncaissementStateEnum.LOADED,
    montantEncaisse: (<EncaissementActions>action).payload,
  };
case EncaissementActionsTypes.TOTAL_ENCAISSEMENT_PAR_JOUR_ERROR:
  return {
    ...state,
    dataState: EncaissementStateEnum.ERROR,
    errorMessage: (<EncaissementActions>action).payload,
  };
// AFFCHAGE DES LOYERS POUR REGLEMENTS

case EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN:
  return { ...state, dataState: EncaissementStateEnum.LOADING };
case EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN_SUCCES:
  return {
    ...state,
    dataState: EncaissementStateEnum.LOADED,
    appelloyers: (<EncaissementActions>action).payload,
  };
case EncaissementActionsTypes.GET_ALL_PERIODE_REGLEMENT_BY_BIEN_ERROR:
  return {
    ...state,
    dataState: EncaissementStateEnum.ERROR,
    errorMessage: (<EncaissementActions>action).payload,
  };
  // listes des encaisements
case EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN:
  return { ...state, dataState: EncaissementStateEnum.LOADING };
case EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN_SUCCES:
  return {
    ...state,
    dataState: EncaissementStateEnum.LOADED,
    encaissements: (<EncaissementActions>action).payload,
  };
case EncaissementActionsTypes.GET_ENCAISSEMENT_BY_BIEN_ERROR:
  return {
    ...state,
    dataState: EncaissementStateEnum.ERROR,
    errorMessage: (<EncaissementActions>action).payload,
  };

       // GET ALL LOCATIRES POUR ENCAISSEMENT
       case EncaissementActionsTypes.GET_LOCATAIRE_ENCAISSEMENT:
        return { ...state, dataState: EncaissementStateEnum.LOADING };
      case EncaissementActionsTypes.GET_LOCATAIRE_ENCAISSEMENT_SUCCES:
        return {
          ...state,
          dataState: EncaissementStateEnum.LOADED,
          leLocataire: (<EncaissementActions>action).payload,
        };
      case EncaissementActionsTypes.GET_LOCATAIRE_ENCAISSEMENT_ERROR:
        return {
          ...state,
          dataState: EncaissementStateEnum.ERROR,
          errorMessage: (<EncaissementActions>action).payload,
        };
    default:
      return { ...state };
  }
}
