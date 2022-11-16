/* tslint:disable */
import { AgenceImmobiliere } from './agence-immobiliere';
export interface ImageModel {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  name?: string;
  type?: string;
  logoAgence?: AgenceImmobiliere;
  picByte?: Array<string>;
}
