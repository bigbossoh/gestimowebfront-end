/* tslint:disable */
import { ImageModel } from './image-model';
export interface AgenceImmobiliere {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  nomAgence?: string;
  telAgence?: string;
  compteContribuable?: string;
  capital?: number;
  emailAgence?: string;
  mobileAgence?: string;
  regimeFiscaleAgence?: string;
  faxAgence?: string;
  sigleAgence?: string;
  adresseAgence?: string;
  imageModels?: Array<ImageModel>;
}
