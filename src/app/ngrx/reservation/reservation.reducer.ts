import { state } from '@angular/animations';
import { Action } from '@ngrx/store';
import { ReservationActions, ReservationActionTypes } from './reservation.actions';
export enum ReservationStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  LOADEDBYIMMEUNLE = 'LoadedByImmeuble',
}

export interface ReservationState {
  reservations: any;
  errorMessage: string;
  dataState: ReservationStateEnum;
}
const initState: ReservationState = {
  reservations: null,
  dataState:ReservationStateEnum.INITIAL,
  errorMessage:""
};
export function reservationReducer(
  state: ReservationState = initState,
  action: Action
):ReservationState {
  switch (action.type) {
    case ReservationActionTypes.GET_LISTE_RESERVATION:
      return { ...state, dataState: ReservationStateEnum.LOADING };
    case ReservationActionTypes.GET_LISTE_RESERVATION_SUCCES:
      return {
        ...state,
        dataState: ReservationStateEnum.LOADED,
        reservations: (<ReservationActions>action).payload,
      };
    case ReservationActionTypes.GET_LISTE_RESERVATION_ERROR:
      return {
        ...state,
        dataState: ReservationStateEnum.ERROR,
        errorMessage: (<ReservationActions>action).payload,
      };



    default:
      return { ...state };
  }
}
