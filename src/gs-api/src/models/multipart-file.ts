/* tslint:disable */
import { InputStream } from './input-stream';
export interface MultipartFile {
  name?: string;
  empty?: boolean;
  bytes?: Array<string>;
  size?: number;
  inputStream?: InputStream;
  originalFilename?: string;
  contentType?: string;
}
