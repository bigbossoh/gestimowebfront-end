/* tslint:disable */
export interface EncaissementPayloadDto {
  idAppelLoyer?: number;
  modePaiement?: 'ESPESE_MAGISER' | 'ESPECE_SEVEINVEST' | 'CHEQUE_ECOBANK_MAGISER' | 'CHEQUE_GTBANK_SEVEINVEST' | 'VIREMENT_ECOBANK_MAGISER' | 'VIREMENT_GTBANK_SEVEINVEST' | 'MOBILE_MONEY_MAGISER' | 'MOBILE_MONEY_SEVEINVEST';
  operationType?: 'CREDIT' | 'DEBIT';
  montantEncaissement?: number;
  intituleDepense?: string;
  entiteOperation?: 'MAGISER' | 'SEVEINVEST';
}