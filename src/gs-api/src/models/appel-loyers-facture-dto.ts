/* tslint:disable */
export interface AppelLoyersFactureDto {
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
  montantBailLPeriode?: number;
  soldeAppelLoyer?: number;
  nomLocataire?: string;
  prenomLocataire?: string;
  genreLocataire?: string;
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
  nomPropietaire?: string;
  prenomPropietaire?: string;
  genrePropietaire?: string;
  abrvCodeBail?: string;
  nouveauMontantLoyer?: number;
  solderAppelLoyer?: boolean;
}
