import { Action } from '@ngrx/store';
import { OperationDto } from 'src/gs-api/src/models';
import {
  OperationActions as OperationActions,
  OperationActionsTypes,
} from './baux.actions';
export enum BauxStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble'

}
export interface BauxState {
  baux: OperationDto[];
  errorMessage: string;
  dataState: BauxStateEnum;
  cloture:boolean
}
const initState: BauxState = {
  baux: [],
  errorMessage: '',
  dataState: BauxStateEnum.INITIAL,
  cloture:false
};
export function bauxReducer(
  state: BauxState = initState,
  action: Action
): BauxState {
  switch (action.type) {


    // GET ALL APPARTEMENT
    case OperationActionsTypes.GET_ALL_BAIL:
      return { ...state, dataState: BauxStateEnum.LOADING };
    case OperationActionsTypes.GET_ALL_BAIL_SUCCES:
      return {
        ...state,
        dataState: BauxStateEnum.LOADED,
        baux: (<OperationActions>action).payload,
      };
    case OperationActionsTypes.GET_ALL_BAIL_ERROR:
      return {
        ...state,
        dataState: BauxStateEnum.ERROR,
        errorMessage: (<OperationActions>action).payload,
      };
//CLOTURER BAIL
case OperationActionsTypes.CLOTURE_BAIL:
  return { ...state, dataState: BauxStateEnum.LOADING };
case OperationActionsTypes.CLOTURE_BAIL_SUCCES:
  return {
    ...state,
    dataState: BauxStateEnum.LOADED,
    cloture: (<OperationActions>action).payload,
  };
case OperationActionsTypes.GET_ALL_BAIL_ERROR:
  return {
    ...state,
    dataState: BauxStateEnum.ERROR,
    errorMessage: (<OperationActions>action).payload,
  };
      
    default:
      return { ...state };
  }
}
