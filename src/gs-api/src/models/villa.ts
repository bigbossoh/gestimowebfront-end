/* tslint:disable */
import { Utilisateur } from './utilisateur';
import { Operation } from './operation';
import { Site } from './site';
export interface Villa {
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
  nbrePieceVilla?: number;
  nbrChambreVilla?: number;
  nbrSalonVilla?: number;
  nbrSalleEauVilla?: number;
  numVilla?: number;
  garageVilla?: boolean;
  operationsVilla?: Array<Operation>;
  site?: Site;
  occupied?: boolean;
}
