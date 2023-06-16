/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ImageDataDto } from '../models/image-data-dto';
@Injectable({
  providedIn: 'root',
})
class ImageControlleurService extends __BaseService {
  static readonly telechagerImagePath = 'gestimoweb/api/v1/image/imagesbybien/{id}';
  static readonly uploadImagePath = 'gestimoweb/api/v1/image/upload/{id}/{name}/';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  telechagerImageResponse(id: number): __Observable<__StrictHttpResponse<Array<ImageDataDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/image/imagesbybien/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImageDataDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  telechagerImage(id: number): __Observable<Array<ImageDataDto>> {
    return this.telechagerImageResponse(id).pipe(
      __map(_r => _r.body as Array<ImageDataDto>)
    );
  }

  /**
   * @param params The `ImageControlleurService.UploadImageParams` containing the following parameters:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return successful operation
   */
  uploadImageResponse(params: ImageControlleurService.UploadImageParams): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.file != null) __params = __params.set('file', params.file.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/image/upload/${params.id}/${params.name}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param params The `ImageControlleurService.UploadImageParams` containing the following parameters:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return successful operation
   */
  uploadImage(params: ImageControlleurService.UploadImageParams): __Observable<boolean> {
    return this.uploadImageResponse(params).pipe(
      __map(_r => _r.body as boolean)
    );
  }
}

module ImageControlleurService {

  /**
   * Parameters for uploadImage
   */
  export interface UploadImageParams {
    name: string;
    id: number;
    file: any;
  }
}

export { ImageControlleurService }
