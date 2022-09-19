/* tslint:disable */
import { Quartier } from './quartier';
export interface Site {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  abrSite?: string;
  nomSite?: string;
  quartier?: Quartier;
}
