/* tslint:disable */
import { Site } from './site';
import { Utilisateur } from './utilisateur';
import { Etage } from './etage';
import { Operation } from './operation';
export interface Magasin {
  id?: number;
  idAgence?: number;
  idCreateur?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  numBien?: number;
  statutBien?: string;
  abrvBienimmobilier?: string;
  description?: string;
  nomBien?: string;
  superficieBien?: number;
  site?: Site;
  utilisateur?: Utilisateur;
  nmbrPieceMagasin?: number;
  nomMagasin?: string;
  abrvNomMagasin?: string;
  etageMagasin?: Etage;
  operationsMagasin?: Array<Operation>;
  underBuildingMagasin?: boolean;
  archived?: boolean;
  occupied?: boolean;
}
