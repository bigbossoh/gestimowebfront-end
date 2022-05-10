/* tslint:disable */
import { Etage } from './etage';
import { Operation } from './operation';
export interface Studio {
  id?: number;
  idAgence?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  descStudio?: string;
  numeroStudio?: number;
  abrvNomStudio?: string;
  nomStudio?: string;
  occupied?: boolean;
  statutStudio?: string;
  etageStudio?: Etage;
  operationsStudio?: Array<Operation>;
}
