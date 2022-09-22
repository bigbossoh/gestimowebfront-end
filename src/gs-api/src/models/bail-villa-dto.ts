/* tslint:disable */
export interface BailVillaDto {
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
  idLocataire?: number;
  fullNomLocatire?: string;
}
