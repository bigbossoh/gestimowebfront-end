import { Action } from '@ngrx/store';

export enum QuittanceAppelLoyerActionsType {
  PRINT_QUITTANCE = '[quittance_appel_loyer] load quittance',
  PRINT_QUITTANCE_SUCCES = '[quittance_appel_loyer] load quittance succes',
  PRINT_QUITTANCE_ERROR = '[quittance_appel_loyer] load quittance error',
}

export class PrintQuittanceLoyerActions implements Action {
  type: QuittanceAppelLoyerActionsType =
    QuittanceAppelLoyerActionsType.PRINT_QUITTANCE;
  constructor(public payload: string) {}
}

export class PrintQuittanceLoyerActionsSuccess implements Action {
  type: QuittanceAppelLoyerActionsType =
    QuittanceAppelLoyerActionsType.PRINT_QUITTANCE_SUCCES;
  constructor(public payload: any) {}
}
export class PrintQuittanceLoyerActionsError implements Action {
  type: QuittanceAppelLoyerActionsType =
    QuittanceAppelLoyerActionsType.PRINT_QUITTANCE_ERROR;
  constructor(public payload: string) {}
}
export type QuittanceAppelLoyerActions =
  | PrintQuittanceLoyerActions
  | PrintQuittanceLoyerActionsSuccess
  | PrintQuittanceLoyerActionsError;
