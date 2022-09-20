/* tslint:disable */
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
  occupied?: boolean;
}
