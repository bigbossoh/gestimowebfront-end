import { Action } from '@ngrx/store';
import {
  BienImmobilierDto,
  EtageDto,
  ImmeubleDto,
  StudioDto,
  VillaDto,
} from 'src/gs-api/src/models';
import { VillaActions, VillaActionsTypes } from './villa.action';
export enum VillaStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble',
}
export interface VillaState {
  villas: VillaDto[];
  errorMessage: string;
  dataState: VillaStateEnum;
}
const initState: VillaState = {
  villas: [],
  errorMessage: '',
  dataState: VillaStateEnum.INITIAL,
};
export function villaReducer(
  state: VillaState = initState,
  action: Action
): VillaState {
  switch (action.type) {
    //SAVE ETAGE
    case VillaActionsTypes.SAVE_VILLA:
      return { ...state, dataState: VillaStateEnum.LOADING };
    case VillaActionsTypes.SAVE_VILLA_SUCCES:
      let vill: VillaDto[] = [...state.villas];
      vill.push((<VillaActions>action).payload);
      return {
        ...state,
        dataState: VillaStateEnum.LOADED,
        villas: vill,
      };
    case VillaActionsTypes.SAVE_VILLA_ERROR:
      return {
        ...state,
        dataState: VillaStateEnum.ERROR,
        errorMessage: (<VillaActions>action).payload,
      };
    // GET ALL VILLA LIBRES
    case VillaActionsTypes.GET_ALL_VILLA_LIBRE:
      return { ...state, dataState: VillaStateEnum.LOADING };
    case VillaActionsTypes.GET_ALL_VILLA_LIBRE_SUCCES:
      return {
        ...state,
        dataState: VillaStateEnum.LOADED,
        villas: (<VillaActions>action).payload,
      };
    case VillaActionsTypes.GET_ALL_VILLA_LIBRE_ERROR:
      return {
        ...state,
        dataState: VillaStateEnum.ERROR,
        errorMessage: (<VillaActions>action).payload,
      };

       // GET ALL VILLA
       case VillaActionsTypes.GET_ALL_VILLA:
        return { ...state, dataState: VillaStateEnum.LOADING };
      case VillaActionsTypes.GET_ALL_VILLA_SUCCES:
        return {
          ...state,
          dataState: VillaStateEnum.LOADED,
          villas: (<VillaActions>action).payload,
        };
      case VillaActionsTypes.GET_ALL_VILLA_ERROR:
        return {
          ...state,
          dataState: VillaStateEnum.ERROR,
          errorMessage: (<VillaActions>action).payload,
        };
    default:
      return { ...state };
  }
}
