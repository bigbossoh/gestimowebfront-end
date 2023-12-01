/* tslint:disable */
import { CategoryChambreSaveOrUpdateDto } from './category-chambre-save-or-update-dto';
export interface AppartementDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  nbrPieceApp?: number;
  nbreChambreApp?: number;
  nbreSalonApp?: number;
  nbreSalleEauApp?: number;
  numApp?: number;
  idEtageAppartement?: number;
  fullNameProprio?: string;
  codeAbrvBienImmobilier?: string;
  nomCompletBienImmobilier?: string;
  nomBaptiserBienImmobilier?: string;
  description?: string;
  superficieBien?: number;
  bienMeublerResidence?: boolean;
  idCategorie?: number;
  nameCategorie?: string;
  priceCategorie?: number;
  nbrDiffJourCategorie?: number;
  pourcentReducCategorie?: number;
  idCategorieChambre?: number;
  idChapitre?: number;
  categorieChambre?: CategoryChambreSaveOrUpdateDto;
  occupied?: boolean;
}
