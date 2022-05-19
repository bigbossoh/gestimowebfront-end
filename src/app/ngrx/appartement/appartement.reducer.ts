import { Action } from '@ngrx/store';
import { AppartementDto, BienImmobilierDto, EtageDto, ImmeubleDto, StudioDto } from 'src/gs-api/src/models';
import {
  AppartementActions,
  AppartementctionsTypes,
} from './appartement.actions';
export enum AppartementStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble'

}
export interface AppartementState {
  appartements: AppartementDto[];
  errorMessage: string;
  dataState: AppartementStateEnum;
}
const initState: AppartementState = {
  appartements: [],
  errorMessage: '',
  dataState: AppartementStateEnum.INITIAL,
};
export function appartementReducer(
  state: AppartementState = initState,
  action: Action
): AppartementState {
  switch (action.type) {

    //SAVE ETAGE
    case AppartementctionsTypes.SAVE_APPARTEMENT:
      return { ...state, dataState: AppartementStateEnum.LOADING };
    case AppartementctionsTypes.SAVE_APPARTEMENT_SUCCES:
      let appart: AppartementDto[] = [...state.appartements];
      appart.push((<AppartementActions>action).payload)
      return {
        ...state,
        dataState: AppartementStateEnum.LOADED,
        appartements: appart
      };
    case AppartementctionsTypes.SAVE_APPARTEMENT_ERROR:
      return {
        ...state,
        dataState: AppartementStateEnum.ERROR,
        errorMessage: (<AppartementActions>action).payload,
      };
    default:
      return { ...state };
  }
}