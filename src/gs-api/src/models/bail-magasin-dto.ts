/* tslint:disable */
export interface BailMagasinDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  designationBail?: string;
  abrvCodeBail?: string;
  enCoursBail?: boolean;
  archiveBail?: boolean;
  montantCautionBail?: number;
  nbreMoisCautionBail?: number;
  nouveauMontantLoyer?: number;
  dateDebut?: string;
  dateFin?: string;
  idBienImmobilier?: number;
  idMagasin?: number;
  nomPrenomLocataire?: string;
  idLocataire?: number;
  codeBien?: string;
}
