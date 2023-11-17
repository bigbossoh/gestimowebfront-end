import { Action } from "@ngrx/store";

//STORE
export enum ClotureCaisseActionsTypes {
  //GET ETAGE BY IMMEUBLE
  COUNT_ALL_CLOTURE_INIT = '[ClotureCaisseDto] Count all coture',
  COUNT_ALL_CLOTURE_INIT_SUCCES = '[ClotureCaisseDto] Count all coture SUCCUS',
  COUNT_ALL_CLOTURE_INIT_ERROR = '[ClotureCaisseDto] Count all coture ERROR',
}

export class GetCountInitClotureCaisseActions implements Action {
  type: ClotureCaisseActionsTypes = ClotureCaisseActionsTypes.COUNT_ALL_CLOTURE_INIT;
  constructor(public payload: any) { }
}

export class GetCountInitClotureCaisseActionsSuccess implements Action {
  type: ClotureCaisseActionsTypes =
  ClotureCaisseActionsTypes.COUNT_ALL_CLOTURE_INIT_SUCCES;
  constructor(public payload: any) { }
}
export class GetCountInitClotureCaisseActionsError implements Action {
  type: ClotureCaisseActionsTypes =
  ClotureCaisseActionsTypes.COUNT_ALL_CLOTURE_INIT_ERROR;
  constructor(public payload: string) { }
}
export type ClotureCaisseActions =
  | GetCountInitClotureCaisseActions
  | GetCountInitClotureCaisseActionsSuccess
  | GetCountInitClotureCaisseActionsError;
