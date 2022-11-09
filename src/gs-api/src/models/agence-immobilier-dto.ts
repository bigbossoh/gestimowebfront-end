/* tslint:disable */
import { MultipartFile } from './multipart-file';
export interface AgenceImmobilierDTO {
  id?: number;
  nomAgence?: string;
  telAgence?: string;
  compteContribuable?: string;
  capital?: number;
  emailAgence?: string;
  mobileAgence?: string;
  regimeFiscaleAgence?: string;
  faxAgence?: string;
  sigleAgence?: string;
  idAgence?: number;
  profileAgenceUrl?: string;
  adresseAgence?: string;
  idImage?: number;
  nameImage?: string;
  typeImage?: string;
  logoAgence?: MultipartFile;
}
