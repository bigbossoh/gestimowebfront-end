/* tslint:disable */
import { BailLocation } from './bail-location';
import { Encaissement } from './encaissement';
export interface AppelLoyer {
  id?: number;
  idAgence?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  periodeAppelLoyer?: string;
  statusAppelLoyer?: string;
  datePaiementPrevuAppelLoyer?: string;
  dateDebutMoisAppelLoyer?: string;
  dateFinMoisAppelLoyer?: string;
  anneeAppelLoyer?: number;
  moisChiffreAppelLoyer?: number;
  descAppelLoyer?: string;
  montantBailLPeriode?: number;
  soldeAppelLoyer?: number;
  bailLocationAppelLoyer?: BailLocation;
  encaissementsAppelLoyer?: Array<Encaissement>;
  solderAppelLoyer?: boolean;
}
