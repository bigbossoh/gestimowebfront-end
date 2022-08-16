import { Action } from '@ngrx/store';
import {
   AgenceResponseDto
} from 'src/gs-api/src/models';
import {
  AgenceActions,
  AgenceActionsType,
} from './agence.actions';
export enum AgenceStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit'
}
export interface AgenceBdState {
  agences: AgenceResponseDto[];
  retourSave:boolean;
  errorMessage: string;
  dataState: AgenceStateEnum;
}
const initState: AgenceBdState = {
  agences: [],
  retourSave:false,
  errorMessage: '',
  dataState: AgenceStateEnum.INITIAL,
};
export function agenceReducer(
  state: AgenceBdState = initState,
  action: Action
): AgenceBdState {
  switch (action.type) {
    //SAVE ETAGE
    case AgenceActionsType.SAVE_AGENCE:
      return { ...state, dataState: AgenceStateEnum.LOADING };
    case AgenceActionsType.SAVE_AGENCE_SUCCES:

      return {
        ...state,
        dataState: AgenceStateEnum.LOADED,
        retourSave: true,
      };
    case AgenceActionsType.SAVE_AGENCE_ERROR:
      return {
        ...state,
        dataState: AgenceStateEnum.ERROR,
        errorMessage: (<AgenceActions>action).payload,
      };
      //remaining all agence
    default:
      return { ...state };
  }
}