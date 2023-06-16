/* tslint:disable */
import { Bienimmobilier } from './bienimmobilier';
export interface ImageDataDto {
  nameImage?: string;
  typeImage?: string;
  profileAgenceImageUrl?: string;
  imageData?: Array<string>;
  bienimmobilier?: Bienimmobilier;
}
