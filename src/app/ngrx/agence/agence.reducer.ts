import { Action } from '@ngrx/store';
import {
  AgenceImmobilierDTO,
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
  agences: AgenceImmobilierDTO[];
  retourSave: boolean;
  errorMessage: string;
  dataState: AgenceStateEnum;
  image: string;
}
const initState: AgenceBdState = {
  agences: [],
  retourSave: false,
  errorMessage: '',
  image:"",
  dataState: AgenceStateEnum.INITIAL,
};
export function agenceReducer(
  state: AgenceBdState = initState,
  action: Action
): AgenceBdState {
  let agenceSave: AgenceResponseDto;
  switch (action.type) {

    //SAVE ETAGE
    case AgenceActionsType.SAVE_AGENCE:

      return { ...state, dataState: AgenceStateEnum.LOADING };
    case AgenceActionsType.SAVE_AGENCE_SUCCES:
      let agenceSave = (<AgenceActions>action).payload;
      let currentAgenceListe = [...state.agences];
       if(agenceSave.id==0){
       currentAgenceListe.push(agenceSave);
       }else{
        return {
          ...state,
          dataState: AgenceStateEnum.LOADED,
          retourSave: true,
          agences: (<AgenceActions>action).payload
        };
       }
      return {
        ...state,
        dataState: AgenceStateEnum.LOADED,
        retourSave: true,
        agences: currentAgenceListe
      };
    case AgenceActionsType.SAVE_AGENCE_ERROR:
      return {
        ...state,
        dataState: AgenceStateEnum.ERROR,
        errorMessage: (<AgenceActions>action).payload,
      };
    //remaining all agence
    case AgenceActionsType.SAVE_AGENCE_LOGO:

      return { ...state, dataState: AgenceStateEnum.LOADING };
    case AgenceActionsType.SAVE_AGENCE_LOGO_SUCCES:

      return {
        ...state,
        dataState: AgenceStateEnum.LOADED,
        retourSave: true,
        image:  (<AgenceActions>action).payload,
      };
    case AgenceActionsType.SAVE_AGENCE_LOGO_ERROR:
      return {
        ...state,
        dataState: AgenceStateEnum.ERROR,
        errorMessage: (<AgenceActions>action).payload,
      };
    //remaining all agence
    //SAVE ETAGE
    case AgenceActionsType.GET_ALL_AGENCE:
      return { ...state, dataState: AgenceStateEnum.LOADING };
    case AgenceActionsType.GET_ALL_AGENCE_SUCCES:

      return {
        ...state,
        dataState: AgenceStateEnum.LOADED,
        agences: (<AgenceActions>action).payload
      };
    case AgenceActionsType.GET_ALL_AGENCE_ERROR:
      return {
        ...state,
        dataState: AgenceStateEnum.ERROR,
        errorMessage: (<AgenceActions>action).payload,
      };
    default:
      return { ...state };
  }
}
