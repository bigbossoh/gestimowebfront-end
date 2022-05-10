/* tslint:disable */
export interface BailMagasinDto {
  id?: number;
  idAgence?: number;
  designationBail?: string;
  abrvCodeBail?: string;
  enCoursBail?: boolean;
  archiveBail?: boolean;
  montantCautionBail?: number;
  nbreMoisCautionBail?: number;
  nouveauMontantLoyer?: number;
  dateDebut?: string;
  dateFin?: string;
  idMagasin?: number;
  idUtilisateur?: number;
}
