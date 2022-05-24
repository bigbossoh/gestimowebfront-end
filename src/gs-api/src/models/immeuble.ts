/* tslint:disable */
import { Site } from './site';
import { Utilisateur } from './utilisateur';
import { Etage } from './etage';
export interface Immeuble {
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
  nbrEtage?: number;
  nbrePieceImmeuble?: number;
  abrvNomImmeuble?: string;
  descriptionImmeuble?: string;
  numeroImmeuble?: number;
  etages?: Array<Etage>;
  garrage?: boolean;
  archived?: boolean;
  occupied?: boolean;
}
