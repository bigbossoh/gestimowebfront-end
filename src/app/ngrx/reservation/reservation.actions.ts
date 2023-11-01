import { Action } from "@ngrx/store";

export enum ReservationActionTypes{
  GET_LISTE_RESERVATION = '[ReservationAfficheDto] Get LISTE RESERVATION Pour encaissement',
  GET_LISTE_RESERVATION_SUCCES = '[ReservationAfficheDto] Get LISTE RESERVATION Pour encaissement Succes',
  GET_LISTE_RESERVATION_ERROR = '[ReservationAfficheDto] Get LISTE RESERVATION Pour encaissement Error',

}
export class GetListReservation implements Action {
  type: ReservationActionTypes = ReservationActionTypes.GET_LISTE_RESERVATION;
  constructor(public payload: any) {}
}

export class GetListReservationActionsSuccess implements Action {
  type: ReservationActionTypes =
  ReservationActionTypes.GET_LISTE_RESERVATION_SUCCES;
  constructor(public payload: any) {}
}
export class GetListReservationActionsError implements Action {
  type: ReservationActionTypes =
  ReservationActionTypes.GET_LISTE_RESERVATION_ERROR;
  constructor(public payload: string) {}
}
export type ReservationActions =
  | GetListReservation
  | GetListReservationActionsSuccess
  | GetListReservationActionsError;
