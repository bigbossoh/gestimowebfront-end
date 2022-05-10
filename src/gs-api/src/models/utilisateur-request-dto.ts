/* tslint:disable */
export interface UtilisateurRequestDto {
  id?: number;
  idAgence?: number;
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
  roleUsed?: number;
  authorities?: Array<string>;
  agenceDto?: number;
  userCreate?: number;
  nonLocked?: boolean;
  activated?: boolean;
  active?: boolean;
}
