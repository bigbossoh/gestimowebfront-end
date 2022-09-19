/* tslint:disable */
import { Utilisateur } from './utilisateur';
import { Operation } from './operation';
import { Etage } from './etage';
export interface Appartement {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  codeAbrvBienImmobilier?: string;
  nomCompletBienImmobilier?: string;
  nomBaptiserBienImmobilier?: string;
  description?: string;
  superficieBien?: number;
  bienMeublerResidence?: boolean;
  utilisateurProprietaire?: Utilisateur;
  nbrPieceApp?: number;
  nbreChambreApp?: number;
  nbreSalonApp?: number;
  nbreSalleEauApp?: number;
  numApp?: number;
  operationsApp?: Array<Operation>;
  etageAppartement?: Etage;
  occupied?: boolean;
}
