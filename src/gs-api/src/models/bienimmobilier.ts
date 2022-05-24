/* tslint:disable */
import { Site } from './site';
import { Utilisateur } from './utilisateur';
export interface Bienimmobilier {
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
  archived?: boolean;
  occupied?: boolean;
}
