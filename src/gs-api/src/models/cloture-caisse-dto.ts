/* tslint:disable */
export interface ClotureCaisseDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  entiteCloturer?: string;
  montantEncaissement?: number;
  soldeEncaissement?: number;
  encienSoldReservation?: number;
  nvoSoldeReservation?: number;
  totalEncaisse?: number;
  clientCloture?: string;
  statutCloture?: string;
  chapitreCloture?: string;
}
