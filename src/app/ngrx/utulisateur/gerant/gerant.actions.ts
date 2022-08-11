import { Action } from '@ngrx/store';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

export enum GerantActionsTypes{

  GET_ALL_GERANTS='[UtilisateurRequestDto]  get All gerants',
  GET_ALL_GERANTS_SUCCES='[UtilisateurRequestDto]  get All gerants Succes',
  GET_ALL_GERANTS_ERROR='[UtilisateurRequestDto]  get All gerants Error',
}
//GESTIONS DES DIFFERENTS ACTIONS

export class GetAllGerantsActions implements Action{
  type: GerantActionsTypes=GerantActionsTypes.GET_ALL_GERANTS;
  constructor(public payload: any){}

}
export class GetAllGerantsActionsSucces implements Action{
  type: GerantActionsTypes=GerantActionsTypes.GET_ALL_GERANTS_SUCCES;
  constructor(public payload: UtilisateurRequestDto[]){}

}
export class GetAllGerantsActionsError implements Action{
  type: GerantActionsTypes=GerantActionsTypes.GET_ALL_GERANTS_ERROR;
  constructor(public payload: string){}
}

export type GerantActions=
| GetAllGerantsActionsSucces
| GetAllGerantsActionsError
| GetAllGerantsActions
