/* tslint:disable */
export interface BienImmobilierDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  codeAbrvBienImmobilier?: string;
  nomCompletBienImmobilier?: string;
  nomBaptiserBienImmobilier?: string;
  description?: string;
  superficieBien?: number;
  bienMeublerResidence?: boolean;
  utilisateur?: string;
  occupied?: boolean;
}
