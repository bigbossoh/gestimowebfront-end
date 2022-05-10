/* tslint:disable */
import { Site } from './site';
import { Utilisateur } from './utilisateur';
import { Operation } from './operation';
export interface Villa {
  id?: number;
  idAgence?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  numBien?: number;
  statutBien?: string;
  abrvBienimmobilier?: string;
  description?: string;
  nomBien?: string;
  superficieBien?: number;
  site?: Site;
  utilisateur?: Utilisateur;
  nbrChambreVilla?: number;
  nbrePiece?: number;
  nbrSalonVilla?: number;
  nbrSalleEauVilla?: number;
  nomVilla?: string;
  abrvVilla?: string;
  garageVilla?: boolean;
  nbreVoitureGarageVilla?: number;
  operationsVilla?: Array<Operation>;
  archived?: boolean;
  occupied?: boolean;
}
