/* tslint:disable */
export interface BienImmobilierDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  numBien?: number;
  statutBien?: string;
  abrvBienimmobilier?: string;
  description?: string;
  nomBien?: string;
  superficieBien?: number;
  site?: string;
  utilisateur?: string;
  archived?: boolean;
  occupied?: boolean;
}
