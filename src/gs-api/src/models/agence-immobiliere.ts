/* tslint:disable */
import { Utilisateur } from './utilisateur';
export interface AgenceImmobiliere {
  id?: number;
  idAgence?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  nomAgence?: string;
  telAgence?: string;
  compteContribuable?: string;
  capital?: number;
  emailAgence?: string;
  mobileAgence?: string;
  regimeFiscaleAgence?: string;
  faxAgence?: string;
  sigleAgence?: string;
  utilisateurs?: Array<Utilisateur>;
  createur?: Utilisateur;
}
