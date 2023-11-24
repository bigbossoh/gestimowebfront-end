/* tslint:disable */
import { PrixParCategorieChambreDto } from './prix-par-categorie-chambre-dto';
import { AppartementDto } from './appartement-dto';
export interface CategoryChambreSaveOrUpdateDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  description: string;
  name: string;
  price?: number;
  nbrDiffJour?: number;
  pourcentReduc?: number;
  prixGategorieDto?: Array<PrixParCategorieChambreDto>;
  appartements?: Array<AppartementDto>;
}
