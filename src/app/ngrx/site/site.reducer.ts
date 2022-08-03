import { Action } from '@ngrx/store';
import { BienImmobilierDto, SiteResponseDto } from 'src/gs-api/src/models';
import { SiteActionsTypes, SiteActions } from './site.actions';
export enum SiteStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}
export interface SiteState {
  sites: SiteResponseDto[];
  errorMessage: string;
  dataState: SiteStateEnum;
}
const initState: SiteState = {
  sites: [],
  errorMessage: '',
  dataState: SiteStateEnum.INITIAL,
};
export function siteReducer(
  state: SiteState = initState,
  action: Action
): SiteState {
  switch (action.type) {
    case SiteActionsTypes.GET_ALL_SITES:
      return { ...state, dataState: SiteStateEnum.LOADING };
    case SiteActionsTypes.GET_ALL_SITES_SUCCES:
      return {
        ...state,
        dataState: SiteStateEnum.LOADED,
        sites: (<SiteActions>action).payload,
      };
    case SiteActionsTypes.GET_ALL_SITES_ERROR:
      return {
        ...state,
        dataState: SiteStateEnum.ERROR,
        errorMessage: (<SiteActions>action).payload,
      };
    //CREATE SITE
    case SiteActionsTypes.CREATE_NEW_SITE:
      return { ...state, dataState: SiteStateEnum.LOADING };
    case SiteActionsTypes.CREATE_NEW_SITE:
      return {
        ...state,
        dataState: SiteStateEnum.LOADED,
        sites: (<SiteActions>action).payload,
      };
    case SiteActionsTypes.CREATE_NEW_SITE_ERROR:
      return {
        ...state,
        dataState: SiteStateEnum.ERROR,
        errorMessage: (<SiteActions>action).payload,
      };
    
    // DELETE SITE
    case SiteActionsTypes.DELETE_SITE:
      return { ...state, dataState: SiteStateEnum.LOADING };
    case SiteActionsTypes.DELETE_SITE_SUCCES:
      return {
        ...state,
        dataState: SiteStateEnum.LOADED,
        sites: (<SiteActions>action).payload,
      };
    case SiteActionsTypes.DELETE_SITE_ERROR:
      return {
        ...state,
        dataState: SiteStateEnum.ERROR,
        errorMessage: (<SiteActions>action).payload,
      };

    default:
      return { ...state };
  }
}
