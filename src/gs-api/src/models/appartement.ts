/* tslint:disable */
import { Etage } from './etage';
import { Operation } from './operation';
export interface Appartement {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  meubleApp?: boolean;
  nbrPieceApp?: number;
  nbreChambreApp?: number;
  nbreSalonApp?: number;
  nbreSalleEauApp?: number;
  occupied?: boolean;
  statutAppart?: string;
  numeroApp?: number;
  abrvNomApp?: string;
  nomApp?: string;
  etageAppartement?: Etage;
  operationsApp?: Array<Operation>;
  residence?: boolean;
}
