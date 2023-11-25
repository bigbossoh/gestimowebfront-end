/* tslint:disable */
import { Role } from './role';
import { Operation } from './operation';
import { Encaissement } from './encaissement';
import { Bienimmobilier } from './bienimmobilier';
export interface Utilisateur {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  utilisateurIdApp?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  mobile?: string;
  dateDeNaissance?: string;
  lieuNaissance?: string;
  typePieceIdentite?: string;
  numeroPieceIdentite?: string;
  dateDebutPiece?: string;
  dateFinPiece?: string;
  nationalite?: string;
  genre?: string;
  username?: string;
  password?: string;
  profileImageUrl?: string;
  lastLoginDate?: string;
  lastLoginDateDisplay?: string;
  joinDate?: string;
  roleUsed?: string;
  authorities?: Array<string>;
  urole?: Role;
  operationUser?: Array<Operation>;
  encaissementsUtilisateur?: Array<Encaissement>;
  biensUtilisateur?: Array<Bienimmobilier>;
  active?: boolean;
  nonLocked?: boolean;
  activated?: boolean;
}
