/* tslint:disable */
import { RoleRequestDto } from './role-request-dto';
export interface UtilisateurRequestDto {
  id?: number;
  idAgence?: number;
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
  agenceDto?: number;
  roleRequestDto?: RoleRequestDto;
  userCreate?: number;
  active?: boolean;
  activated?: boolean;
  nonLocked?: boolean;
}
