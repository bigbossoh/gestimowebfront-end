/* tslint:disable */
import { Utilisateur } from './utilisateur';
import { Bienimmobilier } from './bienimmobilier';
import { Studio } from './studio';
import { Appartement } from './appartement';
import { Magasin } from './magasin';
import { Villa } from './villa';
import { MontantLoyerBail } from './montant-loyer-bail';
import { Charges } from './charges';
import { AppelLoyer } from './appel-loyer';
export interface BailLocation {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  dateDebut?: string;
  dateFin?: string;
  utilisateurOperation?: Utilisateur;
  bienImmobilierOperation?: Bienimmobilier;
  studioBail?: Studio;
  appartementBail?: Appartement;
  magasinBail?: Magasin;
  villaBail?: Villa;
  designationBail?: string;
  abrvCodeBail?: string;
  enCoursBail?: boolean;
  archiveBail?: boolean;
  montantCautionBail?: number;
  nbreMoisCautionBail?: number;
  montantLoyerBail?: Array<MontantLoyerBail>;
  charges?: Array<Charges>;
  listAppelsLoyers?: Array<AppelLoyer>;
}
