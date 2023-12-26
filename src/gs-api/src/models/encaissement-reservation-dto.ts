/* tslint:disable */
import { ReservationAfficheDto } from './reservation-affiche-dto';
export interface EncaissementReservationDto {
  id?: number;
  idReservation?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  modePaiement?: 'ESPESE_MAGISER' | 'ESPECE_SEVEINVEST' | 'CHEQUE_ECOBANK_MAGISER' | 'CHEQUE_GTBANK_SEVEINVEST' | 'VIREMENT_ECOBANK_MAGISER' | 'VIREMENT_GTBANK_SEVEINVEST' | 'MOBILE_MONEY_MAGISER' | 'MOBILE_MONEY_SEVEINVEST';
  operationType?: 'CREDIT' | 'DEBIT';
  dateEncaissement?: string;
  montantEncaissement?: number;
  soldeEncaissement?: number;
  encienSoldReservation?: number;
  nvoSoldeReservation?: number;
  intituleDepense?: string;
  entiteOperation?: 'MAGISER' | 'SEVEINVEST';
  reservationAfficheDto?: ReservationAfficheDto;
  typePaiement?: string;
}
