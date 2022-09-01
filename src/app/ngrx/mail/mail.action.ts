import { Action } from '@ngrx/store';

export enum SendQuittanceByMailActionsType {
  SEND_QUITTANCE_GROUPER_BY_MAIL = 'Quittance Groupé Send',
  SEND_QUITTANCE_GROUPER_BY_MAIL_SUCCES = '[Quittance Groupé Send succes',
  SEND_QUITTANCE_GROUPER_BY_MAIL_ERROR = 'Quittance Groupé Send error',
}
export class SendQuittanceByMailActions implements Action {
  type: SendQuittanceByMailActionsType =
    SendQuittanceByMailActionsType.SEND_QUITTANCE_GROUPER_BY_MAIL;
  constructor(public payload: any) {}
}

export class SendQuittanceByMailActionsSuccess implements Action {
  type: SendQuittanceByMailActionsType =
    SendQuittanceByMailActionsType.SEND_QUITTANCE_GROUPER_BY_MAIL_SUCCES;
  constructor(public payload: boolean) {}
}
export class SendQuittanceByMailActionsError implements Action {
  type: SendQuittanceByMailActionsType =
    SendQuittanceByMailActionsType.SEND_QUITTANCE_GROUPER_BY_MAIL_ERROR;
  constructor(public payload: string) {}
}

export type SendMailActions =
  | SendQuittanceByMailActions
  | SendQuittanceByMailActionsSuccess
  | SendQuittanceByMailActionsError;
