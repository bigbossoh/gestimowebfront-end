/* tslint:disable */
export interface ImmeubleEtageDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  nbrEtage?: number;
  nbrePieceImmeuble?: number;
  abrvNomImmeuble?: string;
  descriptionImmeuble?: string;
  numeroImmeuble?: number;
  statutBien?: string;
  denominationBien?: string;
  nomBien?: string;
  etatBien?: string;
  superficieBien?: number;
  idSite?: number;
  idUtilisateur?: number;
  nomPropio?: string;
  prenomProprio?: string;
  garrage?: boolean;
  occupied?: boolean;
}
