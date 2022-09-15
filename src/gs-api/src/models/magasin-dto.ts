/* tslint:disable */
export interface MagasinDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  numBien?: number;
  statutBien?: string;
  abrvBienimmobilier?: string;
  description?: string;
  nomBien?: string;
  superficieBien?: number;
  abrvNomMagasin?: string;
  nmbrPieceMagasin?: number;
  nomMagasin?: string;
  idEtage?: number;
  idSite?: number;
  idUtilisateur?: number;
  proprietaire?: string;
  underBuildingMagasin?: boolean;
  archived?: boolean;
  occupied?: boolean;
}
