/* tslint:disable */
export interface EncaissementReservationRequestDto {
  idReservation?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: string;
  modePaiement?: string;
  dateEncaissement?: string;
  montantEncaissement?: number;
  encienSoldReservation?: number;
  nvoSoldeReservation?: number;
  idAppartement?: number;
}
