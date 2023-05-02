/* tslint:disable */
import { InputStream } from './input-stream';
export interface InputStreamResource {
  inputStream?: InputStream;
  description?: string;
  open?: boolean;
  url?: string;
  file?: Blob;
  readable?: boolean;
  filename?: string;
  uri?: string;
}
