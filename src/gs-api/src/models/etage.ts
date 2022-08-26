/* tslint:disable */
import { Appartement } from './appartement';
import { Studio } from './studio';
import { Magasin } from './magasin';
import { Immeuble } from './immeuble';
export interface Etage {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  nomEtage?: string;
  numEtage?: number;
  appartements?: Array<Appartement>;
  studios?: Array<Studio>;
  magasins?: Array<Magasin>;
  immeuble?: Immeuble;
  abrvEtage?: string;
}
