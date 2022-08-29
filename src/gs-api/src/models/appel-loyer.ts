/* tslint:disable */
import { BailLocation } from './bail-location';
import { Encaissement } from './encaissement';
export interface AppelLoyer {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  periodeAppelLoyer?: string;
  periodeLettre?: string;
  statusAppelLoyer?: string;
  datePaiementPrevuAppelLoyer?: string;
  dateDebutMoisAppelLoyer?: string;
  dateFinMoisAppelLoyer?: string;
  anneeAppelLoyer?: number;
  moisChiffreAppelLoyer?: number;
  moisUniquementLettre?: string;
  descAppelLoyer?: string;
  montantBailLPeriode?: number;
  soldeAppelLoyer?: number;
  bailLocationAppelLoyer?: BailLocation;
  encaissementsAppelLoyer?: Array<Encaissement>;
  solderAppelLoyer?: boolean;
}
