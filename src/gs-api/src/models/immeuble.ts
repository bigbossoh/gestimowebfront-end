/* tslint:disable */
import { Etage } from './etage';
import { Site } from './site';
import { Utilisateur } from './utilisateur';
export interface Immeuble {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  codeNomAbrvImmeuble?: string;
  nomCompletImmeuble?: string;
  nomBaptiserImmeuble?: string;
  descriptionImmeuble?: string;
  numImmeuble?: number;
  nbrEtage?: number;
  nbrePiecesDansImmeuble?: number;
  etages?: Array<Etage>;
  site?: Site;
  utilisateurProprietaire?: Utilisateur;
  garrage?: boolean;
}
