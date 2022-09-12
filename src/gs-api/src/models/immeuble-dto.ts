/* tslint:disable */
export interface ImmeubleDto {
  id?: number;
  numBien?: number;
  idAgence?: number;
  idCreateur?: number;
  statutBien?: string;
  denominationBien?: string;
  nomBien?: string;
  etatBien?: string;
  superficieBien?: number;
  idSite?: number;
  idUtilisateur?: number;
  nbrEtage?: number;
  nbrePieceImmeuble?: number;
  abrvNomImmeuble?: string;
  descriptionImmeuble?: string;
  numeroImmeuble?: number;
  garrage?: boolean;
  occupied?: boolean;
}
