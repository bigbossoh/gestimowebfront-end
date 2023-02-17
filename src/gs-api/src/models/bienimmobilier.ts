/* tslint:disable */
import { Utilisateur } from './utilisateur';
import { Chapitre } from './chapitre';
export interface Bienimmobilier {
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
  nombrePieceBien?: number;
  chapitre?: Chapitre;
  occupied?: boolean;
}
