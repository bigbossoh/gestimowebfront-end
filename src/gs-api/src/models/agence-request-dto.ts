/* tslint:disable */
import { UtilisateurRequestDto } from './utilisateur-request-dto';
export interface AgenceRequestDto {
  id?: number;
  idAgence?: number;
  nomAgence?: string;
  telAgence?: string;
  compteContribuable?: string;
  capital?: number;
  emailAgence?: string;
  mobileAgence?: string;
  regimeFiscaleAgence?: string;
  faxAgence?: string;
  sigleAgence?: string;
  utilisateurCreateur?: UtilisateurRequestDto;
}
