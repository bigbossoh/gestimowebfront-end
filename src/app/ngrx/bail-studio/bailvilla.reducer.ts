import { Action } from '@ngrx/store';
import { BailStudioDto, BailVillaDto, BienImmobilierDto, EtageDto, ImmeubleDto, StudioDto } from 'src/gs-api/src/models';
import {
  BailStudioActions,
  BailStudioActionsTypes,
} from './bailstudio.actions';
export enum BailStudioStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',


}
export interface BailStudioState {
  bailstudios: BailStudioDto[];
  errorMessage: string;
  dataState: BailStudioStateEnum;
}
const initState: BailStudioState = {
  bailstudios: [],
  errorMessage: '',
  dataState: BailStudioStateEnum.INITIAL,
};
export function bailStudioReducer(
  state: BailStudioState = initState,
  action: Action
): BailStudioState {
  switch (action.type) {

    //SAVE ETAGE
    case BailStudioActionsTypes.SAVE_BAIL_STUDIO:
      return { ...state, dataState: BailStudioStateEnum.LOADING };
    case BailStudioActionsTypes.SAVE_BAIL_STUDIO_SUCCES:
      let bstudio: BailStudioDto[] = [...state.bailstudios];
      bstudio.push((<BailStudioActions>action).payload)
      return {
        ...state,
        dataState: BailStudioStateEnum.LOADED,
        bailstudios: bstudio
      };
    case BailStudioActionsTypes.SAVE_BAIL_STUDIO_ERROR:
      return {
        ...state,
        dataState: BailStudioStateEnum.ERROR,
        errorMessage: (<BailStudioActions>action).payload,
      };
    default:
      return { ...state };
  }
}
