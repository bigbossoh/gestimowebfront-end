/* tslint:disable */
import { UtilisateurRequestDto } from './utilisateur-request-dto';
export interface AgenceResponseDto {
  id?: number;
  idAgence?: number;
  nomAgence?: string;
  telAgence?: string;
  compteContribuable?: string;
  capital?: number;
  emailAgence?: string;
  regimeFiscaleAgence?: string;
  faxAgence?: string;
  sigleAgence?: string;
  utilisateurRequestDto?: UtilisateurRequestDto;
}
