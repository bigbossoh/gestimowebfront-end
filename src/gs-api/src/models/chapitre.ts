/* tslint:disable */
import { Bienimmobilier } from './bienimmobilier';
export interface Chapitre {
  id?: number;
  libelleChapitre?: string;
  biens?: Array<Bienimmobilier>;
}
