/* tslint:disable */
import { Utilisateur } from './utilisateur';
import { Bienimmobilier } from './bienimmobilier';
import { Appartement } from './appartement';
import { Magasin } from './magasin';
import { Villa } from './villa';
export interface Operation {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  dateDebut?: string;
  dateFin?: string;
  utilisateurOperation?: Utilisateur;
  bienImmobilierOperation?: Bienimmobilier;
  appartementBail?: Appartement;
  magasinBail?: Magasin;
  villaBail?: Villa;
}
