import { Action } from '@ngrx/store';
import { EtageDto } from 'src/gs-api/src/models';
import { ImagesActions, ImagesActionsTypes } from './images.action';

export enum ImagesStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
}
export interface ImagesState {
  logo: any;
  errorMessage: string;
  dataState: ImagesStateEnum;
}
const initState: ImagesState = {
  logo: null,
  errorMessage: '',
  dataState: ImagesStateEnum.LOADING,
};
export function imageReducer(
  state: ImagesState = initState,
  action: Action
): ImagesState {
  switch (action.type) {
    //GET ALL ETAGES
    case ImagesActionsTypes.UPLOAD_LOGO:
      return { ...state, dataState: ImagesStateEnum.LOADING };
    case ImagesActionsTypes.UPLOAD_LOGO_SUCCES:
      return {
        ...state,
        dataState: ImagesStateEnum.LOADED,
        logo: (<ImagesActions>action).payload,
      };
    case ImagesActionsTypes.UPLOAD_LOGO_ERROR:
      return {
        ...state,
        dataState: ImagesStateEnum.ERROR,
        errorMessage: (<ImagesActions>action).payload,
      };
    default:
      return { ...state };
  }
}
