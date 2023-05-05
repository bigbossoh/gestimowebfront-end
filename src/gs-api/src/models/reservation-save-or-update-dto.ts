/* tslint:disable */
import { UtilisateurRequestDto } from './utilisateur-request-dto';
export interface ReservationSaveOrUpdateDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  utilisateurRequestDto?: UtilisateurRequestDto;
  idAppartementdDto?: number;
  dateDebut?: string;
  dateFin?: string;
  bienImmobilierOperation?: string;
  designationBail?: string;
  abrvCodeBail?: string;
  enCoursBail?: boolean;
  archiveBail?: boolean;
  montantCautionBail?: number;
  nbreMoisCautionBail?: number;
  nouveauMontantLoyer?: number;
  idBienImmobilier?: number;
  idLocataire?: number;
  codeAbrvBienImmobilier?: string;
  advancePayment?: number;
  remainingPayment?: number;
  soldReservation?: number;
  nmbreHomme?: number;
  nmbreFemme?: number;
  nmbrEnfant?: number;
}
