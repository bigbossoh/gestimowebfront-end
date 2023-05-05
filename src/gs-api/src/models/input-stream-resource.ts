/* tslint:disable */
import { InputStream } from './input-stream';
export interface InputStreamResource {
  inputStream?: InputStream;
  description?: string;
  open?: boolean;
  readable?: boolean;
  url?: string;
  file?: Blob;
  uri?: string;
  filename?: string;
}
