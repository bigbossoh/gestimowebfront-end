import { Action } from '@ngrx/store';
import {
  BienImmobilierDto,
  EtageDto,
  ImmeubleDto,
  StudioDto,
} from 'src/gs-api/src/models';
import { StudioActions, StudioActionsTypes } from './studio.actions';
export enum StudioStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble',
}
export interface StudioState {
  studios: any;
  errorMessage: string;
  dataState: StudioStateEnum;
}
const initState: StudioState = {
  studios: [],
  errorMessage: '',
  dataState: StudioStateEnum.INITIAL,
};
export function studioReducer(
  state: StudioState = initState,
  action: Action
): StudioState {
  switch (action.type) {
    //SAVE ETAGE
    case StudioActionsTypes.SAVE_STUDIO:
      return { ...state, dataState: StudioStateEnum.LOADING };
    case StudioActionsTypes.SAVE_STUDIO_SUCCES:
      let stud: StudioDto[] = [...state.studios];
      stud.push((<StudioActions>action).payload);
      return {
        ...state,
        dataState: StudioStateEnum.LOADED,
        studios: stud,
      };
    case StudioActionsTypes.SAVE_STUDIO_ERROR:
      return {
        ...state,
        dataState: StudioStateEnum.ERROR,
        errorMessage: (<StudioActions>action).payload,
      };
    // GET ALL VILLA
    case StudioActionsTypes.GET_ALL_STUDIO_LIBRE:
      return { ...state, dataState: StudioStateEnum.LOADING };
    case StudioActionsTypes.GET_ALL_STUDIO_LIBRE_SUCCES:
      return {
        ...state,
        dataState: StudioStateEnum.LOADED,
        studios: (<StudioActions>action).payload,
      };
    case StudioActionsTypes.GET_ALL_STUDIO_LIBRE_ERROR:
      return {
        ...state,
        dataState: StudioStateEnum.ERROR,
        errorMessage: (<StudioActions>action).payload,
      };
    default:
      return { ...state };
  }
}
