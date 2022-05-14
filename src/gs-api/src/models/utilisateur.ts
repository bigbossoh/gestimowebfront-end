/* tslint:disable */
import { AgenceImmobiliere } from './agence-immobiliere';
import { Role } from './role';
import { Operation } from './operation';
import { Encaissement } from './encaissement';
export interface Utilisateur {
  id?: number;
  idAgence?: number;
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
  nationalité?: string;
  genre?: string;
  username?: string;
  password?: string;
  profileImageUrl?: string;
  lastLoginDate?: string;
  lastLoginDateDisplay?: string;
  joinDate?: string;
  roleUsed?: string;
  authorities?: Array<string>;
  agence?: AgenceImmobiliere;
  listeAgence?: Array<AgenceImmobiliere>;
  urole?: Role;
  userCreate?: Utilisateur;
  operationUser?: Array<Operation>;
  encaissementsUtilisateur?: Array<Encaissement>;
  active?: boolean;
  activated?: boolean;
  nonLocked?: boolean;
  
}
