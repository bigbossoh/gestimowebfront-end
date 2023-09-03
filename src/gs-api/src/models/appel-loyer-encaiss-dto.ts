/* tslint:disable */
export interface AppelLoyerEncaissDto {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  periodeAppelLoyer?: string;
  statusAppelLoyer?: string;
  datePaiementPrevuAppelLoyer?: string;
  dateDebutMoisAppelLoyer?: string;
  dateFinMoisAppelLoyer?: string;
  periodeLettre?: string;
  moisUniquementLettre?: string;
  anneeAppelLoyer?: number;
  moisChiffreAppelLoyer?: number;
  descAppelLoyer?: string;
  montantLoyerBailLPeriode?: number;
  montantPaye?: number;
  soldeAppelLoyer?: number;
  dateEncaissement?: string;
  nomLocataire?: string;
  prenomLocataire?: string;
  genreLocataire?: string;
  emailLocatire?: string;
  idLocataire?: number;
  nomAgence?: string;
  telAgence?: string;
  compteContribuableAgence?: string;
  emailAgence?: string;
  mobileAgence?: string;
  regimeFiscaleAgence?: string;
  faxAgence?: string;
  sigleAgence?: string;
  bienImmobilierFullName?: string;
  abrvBienimmobilier?: string;
  commune?: string;
  chapitre?: string;
  typeBien?: string;
  nomPropietaire?: string;
  prenomPropietaire?: string;
  genrePropietaire?: string;
  mailProprietaire?: string;
  idBailLocation?: number;
  abrvCodeBail?: string;
  nouveauMontantLoyer?: number;
  ancienMontant?: number;
  pourcentageReduction?: number;
  messageReduction?: string;
  typePaiement?: string;
  solderAppelLoyer?: boolean;
  cloturer?: boolean;
  unLock?: boolean;
}
