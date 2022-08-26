/* tslint:disable */
import { Site } from './site';
import { Utilisateur } from './utilisateur';
import { Etage } from './etage';
import { Operation } from './operation';
export interface Studio {
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
  descStudio?: string;
  numeroStudio?: number;
  abrvNomStudio?: string;
  nomStudio?: string;
  occupied?: boolean;
  statutStudio?: string;
  etageStudio?: Etage;
  operationsStudio?: Array<Operation>;
  archived?: boolean;
}
