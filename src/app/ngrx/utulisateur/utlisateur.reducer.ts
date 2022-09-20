import { UtilisateurAfficheDto } from './../../../gs-api/src/models/utilisateur-affiche-dto';
import { Action } from '@ngrx/store';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import {
  UtilisateurActionsTypes,
  UtilisateurActions,
} from './utilisateur.actions';
export enum UtilisteurStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}
export interface UtilisteurState {
  utilisateurs: UtilisateurAfficheDto[];
  errorMessage: string;
  dataState: UtilisteurStateEnum;
}
const initState: UtilisteurState = {
  utilisateurs: [],
  errorMessage: '',
  dataState: UtilisteurStateEnum.INITIAL,
};
export function utilisateurReducer(
  state: UtilisteurState = initState,
  action: Action
): UtilisteurState {
  switch (action.type) {
    case UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES:
      return { ...state, dataState: UtilisteurStateEnum.LOADING };
    case UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES_SUCCES:
      return {
        ...state,
        dataState: UtilisteurStateEnum.LOADED,
        utilisateurs: (<UtilisateurActions>action).payload,
      };
    case UtilisateurActionsTypes.GET_ALL_PROPRIETAIRES_ERROR:
      return {
        ...state,
        dataState: UtilisteurStateEnum.ERROR,
        errorMessage: (<UtilisateurActions>action).payload,
      };
    // GET ALL LOCATIRES
    case UtilisateurActionsTypes.GET_ALL_LOCATAIRES:
      return { ...state, dataState: UtilisteurStateEnum.LOADING };
    case UtilisateurActionsTypes.GET_ALL_LOCATAIRES_SUCCES:
      return {
        ...state,
        dataState: UtilisteurStateEnum.LOADED,
        utilisateurs: (<UtilisateurActions>action).payload,
      };
    case UtilisateurActionsTypes.GET_ALL_LOCATAIRES_ERROR:
      return {
        ...state,
        dataState: UtilisteurStateEnum.ERROR,
        errorMessage: (<UtilisateurActions>action).payload,
      };

    // GET ALL UTILISATEURS
    case UtilisateurActionsTypes.GET_ALL_UTLISATEUR:
      return { ...state, dataState: UtilisteurStateEnum.LOADING };
    case UtilisateurActionsTypes.GET_ALL_UTLISATEUR_SUCCES:
      return {
        ...state,
        dataState: UtilisteurStateEnum.LOADED,
        utilisateurs: (<UtilisateurActions>action).payload,
      };
    case UtilisateurActionsTypes.GET_ALL_UTLISATEUR_ERROR:
      return {
        ...state,
        dataState: UtilisteurStateEnum.ERROR,
        errorMessage: (<UtilisateurActions>action).payload,
      };

    // SAVE USER
    case UtilisateurActionsTypes.SAVE_USER:
      return { ...state, dataState: UtilisteurStateEnum.LOADING };
    case UtilisateurActionsTypes.SAVE_USER_SUCCES:
      let userSave = (<UtilisateurActions>action).payload;
      let currentUserListe = [...state.utilisateurs];
      currentUserListe.push(userSave);
      console.log("Current user liste !");
      console.log(userSave);


      return {
        ...state,
        dataState: UtilisteurStateEnum.LOADED,
        utilisateurs: currentUserListe,
      };
    case UtilisateurActionsTypes.SAVE_USER_ERROR:
      return {
        ...state,
        dataState: UtilisteurStateEnum.ERROR,
        errorMessage: (<UtilisateurActions>action).payload,
      };

    default:
      return { ...state };
  }
}
