/* tslint:disable */
import { Utilisateur } from './utilisateur';
import { Etage } from './etage';
import { Operation } from './operation';
import { Site } from './site';
export interface Magasin {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  codeAbrvBienImmobilier?: string;
  nomCompletBienImmobilier?: string;
  nomBaptiserBienImmobilier?: string;
  description?: string;
  superficieBien?: number;
  bienMeublerResidence?: boolean;
  utilisateurProprietaire?: Utilisateur;
  nombrePieceMagasin?: number;
  numMagasin?: number;
  etageMagasin?: Etage;
  operationsMagasin?: Array<Operation>;
  site?: Site;
  underBuildingMagasin?: boolean;
  occupied?: boolean;
}
