/* tslint:disable */
export interface BailAppartementDto {
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
  idAppartement?: number;
  idUtilisateur?: number;
}
