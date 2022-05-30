/* tslint:disable */
import { Utilisateur } from './utilisateur';
export interface MagasinResponseDto {
  id?: number;
  idAgence?: number;
  numBien?: number;
  statutBien?: string;
  abrvBienimmobilier?: string;
  description?: string;
  nomBien?: string;
  superficieBien?: number;
  abrvNomMagasin?: string;
  nmbrPieceMagasin?: number;
  nomMagasin?: string;
  utilisateur?: Utilisateur;
  occupied?: boolean;
  archived?: boolean;
  underBuildingMagasin?: boolean;
}
