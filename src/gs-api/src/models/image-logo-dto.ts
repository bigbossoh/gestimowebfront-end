/* tslint:disable */
import { MultipartFile } from './multipart-file';
export interface ImageLogoDto {
  idImage?: number;
  nameImage?: string;
  typeImage?: string;
  profileAgenceImageUrl?: string;
  imageData?: Array<string>;
  file?: MultipartFile;
  agenceImmobiliere?: number;
}
