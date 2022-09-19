/* tslint:disable */
import { Appartement } from './appartement';
import { Magasin } from './magasin';
import { Immeuble } from './immeuble';
export interface Etage {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  nomCompletEtage?: string;
  codeAbrvEtage?: string;
  nomBaptiserEtage?: string;
  numEtage?: number;
  nombrePieceSurEtage?: number;
  appartements?: Array<Appartement>;
  magasins?: Array<Magasin>;
  immeuble?: Immeuble;
}
