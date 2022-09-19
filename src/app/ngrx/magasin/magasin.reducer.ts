import { Action } from '@ngrx/store';
import {
  MagasinDto,
} from 'src/gs-api/src/models';
import { MagasinActions, MagasinActionsTypes } from './magasin.actions';
import { MagasinResponseDto } from '../../../gs-api/src/models/magasin-response-dto';
export enum MagasinStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
}
export interface MagasinState {
  magasins: MagasinResponseDto[];
  errorMessage: string;
  dataState: MagasinStateEnum;
}
const initState: MagasinState = {
  magasins: [],
  errorMessage: '',
  dataState: MagasinStateEnum.INITIAL,
};
export function magasinReducer(
  state: MagasinState = initState,
  action: Action
): MagasinState {
  switch (action.type) {
    //SAVE MAGASIN
    case MagasinActionsTypes.SAVE_MAGASIN:
      return { ...state, dataState: MagasinStateEnum.LOADING };
    case MagasinActionsTypes.SAVE_MAGASIN_SUCCES:
      let maga: MagasinDto[] = [...state.magasins];
      maga.push((<MagasinActions>action).payload);
      return {
        ...state,
        dataState: MagasinStateEnum.LOADED,
        magasins: maga,
      };
    case MagasinActionsTypes.SAVE_MAGASIN_ERROR:
      return {
        ...state,
        dataState: MagasinStateEnum.ERROR,
        errorMessage: (<MagasinActions>action).payload,
      };

    // GET ALL MAGASINS LIBRES
    case MagasinActionsTypes.GET_ALL_MAGASIN_LIBRE:
      return { ...state, dataState: MagasinStateEnum.LOADING };
    case MagasinActionsTypes.GET_ALL_MAGASIN_LIBRE_SUCCES:
      return {
        ...state,
        dataState: MagasinStateEnum.LOADED,
        magasins: (<MagasinActions>action).payload,
      };
    case MagasinActionsTypes.GET_ALL_MAGASIN_LIBRE_ERROR:
      return {
        ...state,
        dataState: MagasinStateEnum.ERROR,
        errorMessage: (<MagasinActions>action).payload,
      };
      // GET ALL MAGASINS
      case MagasinActionsTypes.GET_ALL_MAGASIN:
        return { ...state, dataState: MagasinStateEnum.LOADING };
      case MagasinActionsTypes.GET_ALL_MAGASIN_SUCCES:
        return {
          ...state,
          dataState: MagasinStateEnum.LOADED,
          magasins: (<MagasinActions>action).payload,
        };
      case MagasinActionsTypes.GET_ALL_MAGASIN_ERROR:
        return {
          ...state,
          dataState: MagasinStateEnum.ERROR,
          errorMessage: (<MagasinActions>action).payload,
        };
    default:
      return { ...state };
  }
}
