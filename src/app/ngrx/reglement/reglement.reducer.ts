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
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble'

}
export interface EncaissementState {
  encaissements: EncaissementPrincipalDTO[];
  errorMessage: string;
  dataState: EncaissementStateEnum;
}
const initState: EncaissementState = {
  encaissements: [],
  errorMessage: '',
  dataState: EncaissementStateEnum.INITIAL,
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

    default:
      return { ...state };
  }
}
