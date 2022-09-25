import { Action } from '@ngrx/store';
import { OperationDto } from 'src/gs-api/src/models';
import { AppelLoyersFactureDto } from '../../../gs-api/src/models/appel-loyers-facture-dto';
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
  loyers:AppelLoyersFactureDto[]
  errorMessage: string;
  dataState: BauxStateEnum;
  cloture:boolean
}
const initState: BauxState = {
  baux: [],
  loyers:[],
  errorMessage: '',
  dataState: BauxStateEnum.INITIAL,
  cloture:false
};
export function bauxReducer(
  state: BauxState = initState,
  action: Action
): BauxState {
  switch (action.type) {

    // GET ALL BAUX
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

       // GET ALL BAUX BY LOCATAIRES
       case OperationActionsTypes.GET_ALL_BIEN_BAIL_BY_LOCATAIRE:
        return { ...state, dataState: BauxStateEnum.LOADING };
      case OperationActionsTypes.GET_ALL_BIEN_BAIL_BY_LOCATAIRE_SUCCES:
        return {
          ...state,
          dataState: BauxStateEnum.LOADED,
          baux: (<OperationActions>action).payload,
        };
      case OperationActionsTypes.GET_ALL_BIEN_BAIL_BY_LOCATAIRE_ERROR:
        return {
          ...state,
          dataState: BauxStateEnum.ERROR,
          errorMessage: (<OperationActions>action).payload,
      };

       // GET ALL BAUX BY BIENS
       case OperationActionsTypes.GET_ALL_PERIODE_BAIL_BY_BIEN:
        return { ...state, dataState: BauxStateEnum.LOADING };
      case OperationActionsTypes.GET_ALL_PERIODE_BAIL_BY_BIEN_SUCCES:
        return {
          ...state,
          dataState: BauxStateEnum.LOADED,
          loyers: (<OperationActions>action).payload,
        };
      case OperationActionsTypes.GET_ALL_PERIODE_BAIL_BY_BIEN_ERROR:
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
