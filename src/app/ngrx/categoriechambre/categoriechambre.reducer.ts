import { Action } from '@ngrx/store';
import {
  CategorieChambreActions,
  CategorieChambreActionsTypes,
} from './categoriechambre.actions';

export enum CategorieChambreStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble',
}
export interface CategorieChambreState {
  listCategorieChambre: any;

  errorMessage: string;
  dataState: CategorieChambreStateEnum;
}
const initState: CategorieChambreState = {
  listCategorieChambre: null,
  errorMessage: '',
  dataState: CategorieChambreStateEnum.INITIAL,
};
export function CategorieChambreReducer(
  state: CategorieChambreState = initState,
  action: Action
): CategorieChambreState {
  switch (action.type) {
    case CategorieChambreActionsTypes.LISTE_CATEGORIE_CHAMBRE:
      return { ...state, dataState: CategorieChambreStateEnum.LOADING };
    case CategorieChambreActionsTypes.LISTE_CATEGORIE_CHAMBRE_SUCCES:
      return {
        ...state,
        dataState: CategorieChambreStateEnum.LOADED,
        listCategorieChambre: (<CategorieChambreActions>action).payload,
      };
    case CategorieChambreActionsTypes.LISTE_CATEGORIE_CHAMBRE_ERROR:
      return {
        ...state,
        dataState: CategorieChambreStateEnum.ERROR,
        errorMessage: (<CategorieChambreActions>action).payload,
      };

    default:
      return { ...state };
  }
}
