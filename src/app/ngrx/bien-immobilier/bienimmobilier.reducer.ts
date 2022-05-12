import { Bienimmobilier, BienImmobilierDto } from 'src/gs-api/src/models';
import {
  BienImmobilierActions,
  BienImmobilierActionsTypes,
} from './bienimmobilier.actions';
export enum BienImmobilierStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}
export interface BienImmobilierState {
  bienImmoblilier: BienImmobilierDto[];
  errorMessage: string;
  dataState: BienImmobilierStateEnum;
}
const initState: BienImmobilierState = {
  bienImmoblilier: [],
  errorMessage: '',
  dataState: BienImmobilierStateEnum.INITIAL,
};
export function bienReducer(
  state: BienImmobilierState = initState,
  action: BienImmobilierActions
) {
  switch (action.type) {
    case BienImmobilierActionsTypes.GET_ALL_BIENS:
      return { ...state, dataState: BienImmobilierStateEnum.LOADED };
    case BienImmobilierActionsTypes.GET_ALL_BIENS_SUCCES:
      return {
        ...state,
        dataState: BienImmobilierStateEnum.LOADED,
        bienImmoblilier: action.payload,
      };
    case BienImmobilierActionsTypes.GET_ALL_BIENS_ERROR:
      return {
        ...state,
        dataState: BienImmobilierStateEnum.ERROR,
        errorMessage: action.payload,
      };
    default:
      return { ...state };
  }
}
