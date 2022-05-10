/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AgenceResponseDto } from '../models/agence-response-dto';
import { AgenceRequestDto } from '../models/agence-request-dto';
import { AppartementDto } from '../models/appartement-dto';
import { AppelLoyerRequestDto } from '../models/appel-loyer-request-dto';
import { Utilisateur } from '../models/utilisateur';
import { AuthRequestDto } from '../models/auth-request-dto';
import { BailAppartementDto } from '../models/bail-appartement-dto';
import { BailMagasinDto } from '../models/bail-magasin-dto';
import { BailStudioDto } from '../models/bail-studio-dto';
import { BailVillaDto } from '../models/bail-villa-dto';
import { CommuneDto } from '../models/commune-dto';
import { EspeceEncaissementDto } from '../models/espece-encaissement-dto';
import { EtageDto } from '../models/etage-dto';
import { ImmeubleDto } from '../models/immeuble-dto';
import { MagasinDto } from '../models/magasin-dto';
import { MontantLoyerBailDto } from '../models/montant-loyer-bail-dto';
import { PaysDto } from '../models/pays-dto';
import { QuartierDto } from '../models/quartier-dto';
import { SiteResponseDto } from '../models/site-response-dto';
import { SiteRequestDto } from '../models/site-request-dto';
import { StudioDto } from '../models/studio-dto';
import { UtilisateurRequestDto } from '../models/utilisateur-request-dto';
import { VillaDto } from '../models/villa-dto';
import { VilleDto } from '../models/ville-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getAllAgenceByOrderPath = 'gestimoweb/api/v1/agences/all';
  static readonly deleteAgenceByIdPath = 'gestimoweb/api/v1/agences/deleteagence/{id}';
  static readonly getAgenceByEmailPath = 'gestimoweb/api/v1/agences/getagencebyemail/{email}';
  static readonly getAgenceByIDPath = 'gestimoweb/api/v1/agences/getagencebyid/{id}';
  static readonly authenticatePath = 'gestimoweb/api/v1/agences/signup';
  static readonly findAllPath = 'gestimoweb/api/v1/appartement/all';
  static readonly deletePath = 'gestimoweb/api/v1/appartement/delete/{id}';
  static readonly findByIDPath = 'gestimoweb/api/v1/appartement/findById/{id}';
  static readonly findByIdPaysPath = 'gestimoweb/api/v1/appartement/findByIdEtage/{id}';
  static readonly findByNamePath = 'gestimoweb/api/v1/appartement/findByName/{name}';
  static readonly savePath = 'gestimoweb/api/v1/appartement/save';
  static readonly save_1Path = 'gestimoweb/api/v1/appelloyer/save';
  static readonly verifyAccountPath = 'gestimoweb/api/v1/auth/accountVerification/{token}';
  static readonly loginPath = 'gestimoweb/api/v1/auth/login';
  static readonly findAll_1Path = 'gestimoweb/api/v1/bailappartement/all';
  static readonly delete_1Path = 'gestimoweb/api/v1/bailappartement/delete/{id}';
  static readonly findByID_1Path = 'gestimoweb/api/v1/bailappartement/findById/{id}';
  static readonly findByName_1Path = 'gestimoweb/api/v1/bailappartement/findByName/{name}';
  static readonly save_2Path = 'gestimoweb/api/v1/bailappartement/save';
  static readonly findAll_2Path = 'gestimoweb/api/v1/bailmagasin/all';
  static readonly delete_2Path = 'gestimoweb/api/v1/bailmagasin/delete/{id}';
  static readonly findByID_2Path = 'gestimoweb/api/v1/bailmagasin/findById/{id}';
  static readonly findByName_2Path = 'gestimoweb/api/v1/bailmagasin/findByName/{name}';
  static readonly save_3Path = 'gestimoweb/api/v1/bailmagasin/save';
  static readonly findAll_3Path = 'gestimoweb/api/v1/bailsudio/all';
  static readonly delete_3Path = 'gestimoweb/api/v1/bailsudio/delete/{id}';
  static readonly findByID_3Path = 'gestimoweb/api/v1/bailsudio/findById/{id}';
  static readonly findByName_3Path = 'gestimoweb/api/v1/bailsudio/findByName/{name}';
  static readonly save_4Path = 'gestimoweb/api/v1/bailsudio/save';
  static readonly findAll_4Path = 'gestimoweb/api/v1/bailvilla/all';
  static readonly delete_4Path = 'gestimoweb/api/v1/bailvilla/delete/{id}';
  static readonly findByID_4Path = 'gestimoweb/api/v1/bailvilla/findById/{id}';
  static readonly findByName_4Path = 'gestimoweb/api/v1/bailvilla/findByName/{name}';
  static readonly save_5Path = 'gestimoweb/api/v1/bailvilla/save';
  static readonly findAll_5Path = 'gestimoweb/api/v1/commune/all';
  static readonly delete_5Path = 'gestimoweb/api/v1/commune/delete/{id}';
  static readonly findByID_5Path = 'gestimoweb/api/v1/commune/findById/{id}';
  static readonly findByIdPays_1Path = 'gestimoweb/api/v1/commune/findByIdVille/{id}';
  static readonly findByName_5Path = 'gestimoweb/api/v1/commune/findByName/{name}';
  static readonly save_6Path = 'gestimoweb/api/v1/commune/save';
  static readonly save_7Path = 'gestimoweb/api/v1/especeencaissement/save';
  static readonly findAll_6Path = 'gestimoweb/api/v1/etage/all';
  static readonly delete_6Path = 'gestimoweb/api/v1/etage/delete/{id}';
  static readonly findByID_6Path = 'gestimoweb/api/v1/etage/findById/{id}';
  static readonly findByIdPays_2Path = 'gestimoweb/api/v1/etage/findByIdImmeuble/{id}';
  static readonly findByName_6Path = 'gestimoweb/api/v1/etage/findByName/{name}';
  static readonly save_8Path = 'gestimoweb/api/v1/etage/save';
  static readonly findAll_7Path = 'gestimoweb/api/v1/immeuble/all';
  static readonly delete_7Path = 'gestimoweb/api/v1/immeuble/delete/{id}';
  static readonly findByID_7Path = 'gestimoweb/api/v1/immeuble/findById/{id}';
  static readonly findByIdPays_3Path = 'gestimoweb/api/v1/immeuble/findByIdSite/{id}';
  static readonly findByName_7Path = 'gestimoweb/api/v1/immeuble/findByName/{name}';
  static readonly save_9Path = 'gestimoweb/api/v1/immeuble/save';
  static readonly findAll_8Path = 'gestimoweb/api/v1/magasin/all';
  static readonly save_10Path = 'gestimoweb/api/v1/magasin/save';
  static readonly save_11Path = 'gestimoweb/api/v1/montantloyerbail/save';
  static readonly findAll_9Path = 'gestimoweb/api/v1/pays/all';
  static readonly delete_8Path = 'gestimoweb/api/v1/pays/delete/{id}';
  static readonly findByID_8Path = 'gestimoweb/api/v1/pays/findById/{id}';
  static readonly findByName_8Path = 'gestimoweb/api/v1/pays/findByName/{name}';
  static readonly save_12Path = 'gestimoweb/api/v1/pays/save';
  static readonly samplePath = 'gestimoweb/api/v1/print/quittance/{id}';
  static readonly findAll_10Path = 'gestimoweb/api/v1/quartier/all';
  static readonly delete_9Path = 'gestimoweb/api/v1/quartier/delete/{id}';
  static readonly findByID_9Path = 'gestimoweb/api/v1/quartier/findById/{id}';
  static readonly findByIdCommunePath = 'gestimoweb/api/v1/quartier/findByIdCommune/{id}';
  static readonly findByName_9Path = 'gestimoweb/api/v1/quartier/findByName/{name}';
  static readonly save_13Path = 'gestimoweb/api/v1/quartier/save';
  static readonly findAll_11Path = 'gestimoweb/api/v1/sites/all';
  static readonly delete_10Path = 'gestimoweb/api/v1/sites/delete/{id}';
  static readonly findByID_10Path = 'gestimoweb/api/v1/sites/findById/{id}';
  static readonly findByName_10Path = 'gestimoweb/api/v1/sites/findByName/{name}';
  static readonly save_14Path = 'gestimoweb/api/v1/sites/save';
  static readonly findAll_12Path = 'gestimoweb/api/v1/studio/all';
  static readonly delete_11Path = 'gestimoweb/api/v1/studio/delete/{id}';
  static readonly findByID_11Path = 'gestimoweb/api/v1/studio/findById/{id}';
  static readonly findByIdPays_4Path = 'gestimoweb/api/v1/studio/findByIdEtage/{id}';
  static readonly findByName_11Path = 'gestimoweb/api/v1/studio/findByName/{name}';
  static readonly save_15Path = 'gestimoweb/api/v1/studio/save';
  static readonly getAllUtilisateurByOrderPath = 'gestimoweb/api/v1/utilisateur/all';
  static readonly getAllGerantByOrderPath = 'gestimoweb/api/v1/utilisateur/gerants/all';
  static readonly getUtilisateurByEmailPath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyemail/{email}';
  static readonly getUtilisateurByIDPath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyid/{id}';
  static readonly getAllLocataireByOrderPath = 'gestimoweb/api/v1/utilisateur/locataires/all';
  static readonly getAllProprietaireByOrderPath = 'gestimoweb/api/v1/utilisateur/proprietaires/all';
  static readonly saveLocatairePath = 'gestimoweb/api/v1/utilisateur/save';
  static readonly getAllSuperviseurByOrderPath = 'gestimoweb/api/v1/utilisateur/superviseurs/all';
  static readonly findAll_13Path = 'gestimoweb/api/v1/villa/all';
  static readonly save_16Path = 'gestimoweb/api/v1/villa/save';
  static readonly findAll_14Path = 'gestimoweb/api/v1/ville/all';
  static readonly delete_12Path = 'gestimoweb/api/v1/ville/delete/{id}';
  static readonly findByID_12Path = 'gestimoweb/api/v1/ville/findById/{id}';
  static readonly findByIdPays_5Path = 'gestimoweb/api/v1/ville/findByIdPays/{id}';
  static readonly findByName_12Path = 'gestimoweb/api/v1/ville/findByName/{name}';
  static readonly findByPaysPath = 'gestimoweb/api/v1/ville/findByPays';
  static readonly save_17Path = 'gestimoweb/api/v1/ville/save';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllAgenceByOrderResponse(): __Observable<__StrictHttpResponse<Array<AgenceResponseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/agences/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AgenceResponseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllAgenceByOrder(): __Observable<Array<AgenceResponseDto>> {
    return this.getAllAgenceByOrderResponse().pipe(
      __map(_r => _r.body as Array<AgenceResponseDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteAgenceByIdResponse(id: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/agences/deleteagence/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  deleteAgenceById(id: number): __Observable<string> {
    return this.deleteAgenceByIdResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  getAgenceByEmailResponse(email: string): __Observable<__StrictHttpResponse<AgenceResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/agences/getagencebyemail/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AgenceResponseDto>;
      })
    );
  }
  /**
   * @param email undefined
   * @return successful operation
   */
  getAgenceByEmail(email: string): __Observable<AgenceResponseDto> {
    return this.getAgenceByEmailResponse(email).pipe(
      __map(_r => _r.body as AgenceResponseDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  getAgenceByIDResponse(id: number): __Observable<__StrictHttpResponse<AgenceResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/agences/getagencebyid/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AgenceResponseDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  getAgenceByID(id: number): __Observable<AgenceResponseDto> {
    return this.getAgenceByIDResponse(id).pipe(
      __map(_r => _r.body as AgenceResponseDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AgenceRequestDto): __Observable<__StrictHttpResponse<AgenceResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/agences/signup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AgenceResponseDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AgenceRequestDto): __Observable<AgenceResponseDto> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AgenceResponseDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppartementDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<AppartementDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<AppartementDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/appartement/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete(id: number): __Observable<boolean> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDResponse(id: number): __Observable<__StrictHttpResponse<AppartementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppartementDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID(id: number): __Observable<AppartementDto> {
    return this.findByIDResponse(id).pipe(
      __map(_r => _r.body as AppartementDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPaysResponse(id: number): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/findByIdEtage/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppartementDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays(id: number): __Observable<Array<AppartementDto>> {
    return this.findByIdPaysResponse(id).pipe(
      __map(_r => _r.body as Array<AppartementDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameResponse(name: string): __Observable<__StrictHttpResponse<AppartementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppartementDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName(name: string): __Observable<AppartementDto> {
    return this.findByNameResponse(name).pipe(
      __map(_r => _r.body as AppartementDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: AppartementDto): __Observable<__StrictHttpResponse<AppartementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/appartement/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppartementDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: AppartementDto): __Observable<AppartementDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as AppartementDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_1Response(body?: AppelLoyerRequestDto): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_1(body?: AppelLoyerRequestDto): __Observable<Array<string>> {
    return this.save_1Response(body).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param token undefined
   * @return successful operation
   */
  verifyAccountResponse(token: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/auth/accountVerification/${token}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param token undefined
   * @return successful operation
   */
  verifyAccount(token: string): __Observable<string> {
    return this.verifyAccountResponse(token).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  loginResponse(body?: AuthRequestDto): __Observable<__StrictHttpResponse<Utilisateur>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/auth/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Utilisateur>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  login(body?: AuthRequestDto): __Observable<Utilisateur> {
    return this.loginResponse(body).pipe(
      __map(_r => _r.body as Utilisateur)
    );
  }

  /**
   * @return successful operation
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<BailAppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BailAppartementDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_1(): __Observable<Array<BailAppartementDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<BailAppartementDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_1Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_1(id: number): __Observable<boolean> {
    return this.delete_1Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_1Response(id: number): __Observable<__StrictHttpResponse<BailAppartementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailAppartementDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_1(id: number): __Observable<BailAppartementDto> {
    return this.findByID_1Response(id).pipe(
      __map(_r => _r.body as BailAppartementDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_1Response(name: string): __Observable<__StrictHttpResponse<BailAppartementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailAppartementDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_1(name: string): __Observable<BailAppartementDto> {
    return this.findByName_1Response(name).pipe(
      __map(_r => _r.body as BailAppartementDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_2Response(body?: BailAppartementDto): __Observable<__StrictHttpResponse<BailAppartementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailAppartementDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_2(body?: BailAppartementDto): __Observable<BailAppartementDto> {
    return this.save_2Response(body).pipe(
      __map(_r => _r.body as BailAppartementDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<BailMagasinDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailmagasin/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BailMagasinDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_2(): __Observable<Array<BailMagasinDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<BailMagasinDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_2Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/bailmagasin/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_2(id: number): __Observable<boolean> {
    return this.delete_2Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_2Response(id: number): __Observable<__StrictHttpResponse<BailMagasinDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailmagasin/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailMagasinDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_2(id: number): __Observable<BailMagasinDto> {
    return this.findByID_2Response(id).pipe(
      __map(_r => _r.body as BailMagasinDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_2Response(name: string): __Observable<__StrictHttpResponse<BailMagasinDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailmagasin/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailMagasinDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_2(name: string): __Observable<BailMagasinDto> {
    return this.findByName_2Response(name).pipe(
      __map(_r => _r.body as BailMagasinDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_3Response(body?: BailMagasinDto): __Observable<__StrictHttpResponse<BailMagasinDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/bailmagasin/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailMagasinDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_3(body?: BailMagasinDto): __Observable<BailMagasinDto> {
    return this.save_3Response(body).pipe(
      __map(_r => _r.body as BailMagasinDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_3Response(): __Observable<__StrictHttpResponse<Array<BailStudioDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailsudio/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BailStudioDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_3(): __Observable<Array<BailStudioDto>> {
    return this.findAll_3Response().pipe(
      __map(_r => _r.body as Array<BailStudioDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_3Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/bailsudio/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_3(id: number): __Observable<boolean> {
    return this.delete_3Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_3Response(id: number): __Observable<__StrictHttpResponse<BailStudioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailsudio/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailStudioDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_3(id: number): __Observable<BailStudioDto> {
    return this.findByID_3Response(id).pipe(
      __map(_r => _r.body as BailStudioDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_3Response(name: string): __Observable<__StrictHttpResponse<BailStudioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailsudio/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailStudioDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_3(name: string): __Observable<BailStudioDto> {
    return this.findByName_3Response(name).pipe(
      __map(_r => _r.body as BailStudioDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_4Response(body?: BailStudioDto): __Observable<__StrictHttpResponse<BailStudioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/bailsudio/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailStudioDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_4(body?: BailStudioDto): __Observable<BailStudioDto> {
    return this.save_4Response(body).pipe(
      __map(_r => _r.body as BailStudioDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_4Response(): __Observable<__StrictHttpResponse<Array<BailVillaDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailvilla/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BailVillaDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_4(): __Observable<Array<BailVillaDto>> {
    return this.findAll_4Response().pipe(
      __map(_r => _r.body as Array<BailVillaDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_4Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/bailvilla/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_4(id: number): __Observable<boolean> {
    return this.delete_4Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_4Response(id: number): __Observable<__StrictHttpResponse<BailVillaDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailvilla/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailVillaDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_4(id: number): __Observable<BailVillaDto> {
    return this.findByID_4Response(id).pipe(
      __map(_r => _r.body as BailVillaDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_4Response(name: string): __Observable<__StrictHttpResponse<BailVillaDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailvilla/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailVillaDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_4(name: string): __Observable<BailVillaDto> {
    return this.findByName_4Response(name).pipe(
      __map(_r => _r.body as BailVillaDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_5Response(body?: BailVillaDto): __Observable<__StrictHttpResponse<BailVillaDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/bailvilla/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BailVillaDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_5(body?: BailVillaDto): __Observable<BailVillaDto> {
    return this.save_5Response(body).pipe(
      __map(_r => _r.body as BailVillaDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_5Response(): __Observable<__StrictHttpResponse<Array<CommuneDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/commune/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommuneDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_5(): __Observable<Array<CommuneDto>> {
    return this.findAll_5Response().pipe(
      __map(_r => _r.body as Array<CommuneDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_5Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/commune/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_5(id: number): __Observable<boolean> {
    return this.delete_5Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_5Response(id: number): __Observable<__StrictHttpResponse<CommuneDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/commune/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommuneDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_5(id: number): __Observable<CommuneDto> {
    return this.findByID_5Response(id).pipe(
      __map(_r => _r.body as CommuneDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_1Response(id: number): __Observable<__StrictHttpResponse<Array<CommuneDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/commune/findByIdVille/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommuneDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_1(id: number): __Observable<Array<CommuneDto>> {
    return this.findByIdPays_1Response(id).pipe(
      __map(_r => _r.body as Array<CommuneDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_5Response(name: string): __Observable<__StrictHttpResponse<CommuneDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/commune/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommuneDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_5(name: string): __Observable<CommuneDto> {
    return this.findByName_5Response(name).pipe(
      __map(_r => _r.body as CommuneDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_6Response(body?: CommuneDto): __Observable<__StrictHttpResponse<CommuneDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/commune/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommuneDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_6(body?: CommuneDto): __Observable<CommuneDto> {
    return this.save_6Response(body).pipe(
      __map(_r => _r.body as CommuneDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_7Response(body?: EspeceEncaissementDto): __Observable<__StrictHttpResponse<EspeceEncaissementDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/especeencaissement/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EspeceEncaissementDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_7(body?: EspeceEncaissementDto): __Observable<EspeceEncaissementDto> {
    return this.save_7Response(body).pipe(
      __map(_r => _r.body as EspeceEncaissementDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_6Response(): __Observable<__StrictHttpResponse<Array<EtageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/etage/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EtageDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_6(): __Observable<Array<EtageDto>> {
    return this.findAll_6Response().pipe(
      __map(_r => _r.body as Array<EtageDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_6Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/etage/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_6(id: number): __Observable<boolean> {
    return this.delete_6Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_6Response(id: number): __Observable<__StrictHttpResponse<EtageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/etage/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtageDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_6(id: number): __Observable<EtageDto> {
    return this.findByID_6Response(id).pipe(
      __map(_r => _r.body as EtageDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_2Response(id: number): __Observable<__StrictHttpResponse<Array<EtageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/etage/findByIdImmeuble/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EtageDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_2(id: number): __Observable<Array<EtageDto>> {
    return this.findByIdPays_2Response(id).pipe(
      __map(_r => _r.body as Array<EtageDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_6Response(name: string): __Observable<__StrictHttpResponse<EtageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/etage/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtageDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_6(name: string): __Observable<EtageDto> {
    return this.findByName_6Response(name).pipe(
      __map(_r => _r.body as EtageDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_8Response(body?: EtageDto): __Observable<__StrictHttpResponse<EtageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/etage/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtageDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_8(body?: EtageDto): __Observable<EtageDto> {
    return this.save_8Response(body).pipe(
      __map(_r => _r.body as EtageDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_7Response(): __Observable<__StrictHttpResponse<Array<ImmeubleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/immeuble/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImmeubleDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_7(): __Observable<Array<ImmeubleDto>> {
    return this.findAll_7Response().pipe(
      __map(_r => _r.body as Array<ImmeubleDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_7Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/immeuble/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_7(id: number): __Observable<boolean> {
    return this.delete_7Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_7Response(id: number): __Observable<__StrictHttpResponse<ImmeubleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/immeuble/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImmeubleDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_7(id: number): __Observable<ImmeubleDto> {
    return this.findByID_7Response(id).pipe(
      __map(_r => _r.body as ImmeubleDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_3Response(id: number): __Observable<__StrictHttpResponse<Array<ImmeubleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/immeuble/findByIdSite/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImmeubleDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_3(id: number): __Observable<Array<ImmeubleDto>> {
    return this.findByIdPays_3Response(id).pipe(
      __map(_r => _r.body as Array<ImmeubleDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_7Response(name: string): __Observable<__StrictHttpResponse<ImmeubleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/immeuble/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImmeubleDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_7(name: string): __Observable<ImmeubleDto> {
    return this.findByName_7Response(name).pipe(
      __map(_r => _r.body as ImmeubleDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_9Response(body?: ImmeubleDto): __Observable<__StrictHttpResponse<ImmeubleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/immeuble/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImmeubleDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_9(body?: ImmeubleDto): __Observable<ImmeubleDto> {
    return this.save_9Response(body).pipe(
      __map(_r => _r.body as ImmeubleDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_8Response(): __Observable<__StrictHttpResponse<Array<MagasinDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MagasinDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_8(): __Observable<Array<MagasinDto>> {
    return this.findAll_8Response().pipe(
      __map(_r => _r.body as Array<MagasinDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_10Response(body?: MagasinDto): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/magasin/save`,
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
   * @param body undefined
   * @return successful operation
   */
  save_10(body?: MagasinDto): __Observable<boolean> {
    return this.save_10Response(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_11Response(body?: MontantLoyerBailDto): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/montantloyerbail/save`,
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
   * @param body undefined
   * @return successful operation
   */
  save_11(body?: MontantLoyerBailDto): __Observable<boolean> {
    return this.save_11Response(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  findAll_9Response(): __Observable<__StrictHttpResponse<Array<PaysDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/pays/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PaysDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_9(): __Observable<Array<PaysDto>> {
    return this.findAll_9Response().pipe(
      __map(_r => _r.body as Array<PaysDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_8Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/pays/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_8(id: number): __Observable<boolean> {
    return this.delete_8Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_8Response(id: number): __Observable<__StrictHttpResponse<PaysDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/pays/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaysDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_8(id: number): __Observable<PaysDto> {
    return this.findByID_8Response(id).pipe(
      __map(_r => _r.body as PaysDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_8Response(name: string): __Observable<__StrictHttpResponse<PaysDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/pays/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaysDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_8(name: string): __Observable<PaysDto> {
    return this.findByName_8Response(name).pipe(
      __map(_r => _r.body as PaysDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_12Response(body?: PaysDto): __Observable<__StrictHttpResponse<PaysDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/pays/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaysDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_12(body?: PaysDto): __Observable<PaysDto> {
    return this.save_12Response(body).pipe(
      __map(_r => _r.body as PaysDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  sampleResponse(id: number): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/print/quittance/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  sample(id: number): __Observable<Array<string>> {
    return this.sampleResponse(id).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return successful operation
   */
  findAll_10Response(): __Observable<__StrictHttpResponse<Array<QuartierDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/quartier/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<QuartierDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_10(): __Observable<Array<QuartierDto>> {
    return this.findAll_10Response().pipe(
      __map(_r => _r.body as Array<QuartierDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_9Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/quartier/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_9(id: number): __Observable<boolean> {
    return this.delete_9Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_9Response(id: number): __Observable<__StrictHttpResponse<QuartierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/quartier/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuartierDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_9(id: number): __Observable<QuartierDto> {
    return this.findByID_9Response(id).pipe(
      __map(_r => _r.body as QuartierDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdCommuneResponse(id: number): __Observable<__StrictHttpResponse<Array<QuartierDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/quartier/findByIdCommune/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<QuartierDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdCommune(id: number): __Observable<Array<QuartierDto>> {
    return this.findByIdCommuneResponse(id).pipe(
      __map(_r => _r.body as Array<QuartierDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_9Response(name: string): __Observable<__StrictHttpResponse<QuartierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/quartier/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuartierDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_9(name: string): __Observable<QuartierDto> {
    return this.findByName_9Response(name).pipe(
      __map(_r => _r.body as QuartierDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_13Response(body?: QuartierDto): __Observable<__StrictHttpResponse<QuartierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/quartier/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QuartierDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_13(body?: QuartierDto): __Observable<QuartierDto> {
    return this.save_13Response(body).pipe(
      __map(_r => _r.body as QuartierDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_11Response(): __Observable<__StrictHttpResponse<Array<SiteResponseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/sites/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SiteResponseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_11(): __Observable<Array<SiteResponseDto>> {
    return this.findAll_11Response().pipe(
      __map(_r => _r.body as Array<SiteResponseDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_10Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/sites/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_10(id: number): __Observable<boolean> {
    return this.delete_10Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_10Response(id: number): __Observable<__StrictHttpResponse<SiteResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/sites/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SiteResponseDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_10(id: number): __Observable<SiteResponseDto> {
    return this.findByID_10Response(id).pipe(
      __map(_r => _r.body as SiteResponseDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_10Response(name: string): __Observable<__StrictHttpResponse<SiteResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/sites/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SiteResponseDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_10(name: string): __Observable<SiteResponseDto> {
    return this.findByName_10Response(name).pipe(
      __map(_r => _r.body as SiteResponseDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_14Response(body?: SiteRequestDto): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/sites/save`,
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
   * @param body undefined
   * @return successful operation
   */
  save_14(body?: SiteRequestDto): __Observable<boolean> {
    return this.save_14Response(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  findAll_12Response(): __Observable<__StrictHttpResponse<Array<StudioDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/studio/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StudioDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_12(): __Observable<Array<StudioDto>> {
    return this.findAll_12Response().pipe(
      __map(_r => _r.body as Array<StudioDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_11Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/studio/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_11(id: number): __Observable<boolean> {
    return this.delete_11Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_11Response(id: number): __Observable<__StrictHttpResponse<StudioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/studio/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StudioDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_11(id: number): __Observable<StudioDto> {
    return this.findByID_11Response(id).pipe(
      __map(_r => _r.body as StudioDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_4Response(id: number): __Observable<__StrictHttpResponse<Array<StudioDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/studio/findByIdEtage/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StudioDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_4(id: number): __Observable<Array<StudioDto>> {
    return this.findByIdPays_4Response(id).pipe(
      __map(_r => _r.body as Array<StudioDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_11Response(name: string): __Observable<__StrictHttpResponse<StudioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/studio/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StudioDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_11(name: string): __Observable<StudioDto> {
    return this.findByName_11Response(name).pipe(
      __map(_r => _r.body as StudioDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_15Response(body?: StudioDto): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/studio/save`,
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
   * @param body undefined
   * @return successful operation
   */
  save_15(body?: StudioDto): __Observable<boolean> {
    return this.save_15Response(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  getAllUtilisateurByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurRequestDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllUtilisateurByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllUtilisateurByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurRequestDto>)
    );
  }

  /**
   * @return successful operation
   */
  getAllGerantByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/gerants/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurRequestDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllGerantByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllGerantByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurRequestDto>)
    );
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  getUtilisateurByEmailResponse(email: string): __Observable<__StrictHttpResponse<UtilisateurRequestDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/getutilisateurbyemail/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurRequestDto>;
      })
    );
  }
  /**
   * @param email undefined
   * @return successful operation
   */
  getUtilisateurByEmail(email: string): __Observable<UtilisateurRequestDto> {
    return this.getUtilisateurByEmailResponse(email).pipe(
      __map(_r => _r.body as UtilisateurRequestDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  getUtilisateurByIDResponse(id: number): __Observable<__StrictHttpResponse<UtilisateurRequestDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/getutilisateurbyid/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurRequestDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  getUtilisateurByID(id: number): __Observable<UtilisateurRequestDto> {
    return this.getUtilisateurByIDResponse(id).pipe(
      __map(_r => _r.body as UtilisateurRequestDto)
    );
  }

  /**
   * @return successful operation
   */
  getAllLocataireByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/locataires/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurRequestDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllLocataireByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllLocataireByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurRequestDto>)
    );
  }

  /**
   * @return successful operation
   */
  getAllProprietaireByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/proprietaires/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurRequestDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllProprietaireByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllProprietaireByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurRequestDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveLocataireResponse(body?: UtilisateurRequestDto): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/save`,
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
   * @param body undefined
   * @return successful operation
   */
  saveLocataire(body?: UtilisateurRequestDto): __Observable<boolean> {
    return this.saveLocataireResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  getAllSuperviseurByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/superviseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurRequestDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllSuperviseurByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllSuperviseurByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurRequestDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAll_13Response(): __Observable<__StrictHttpResponse<Array<VillaDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/villa/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VillaDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_13(): __Observable<Array<VillaDto>> {
    return this.findAll_13Response().pipe(
      __map(_r => _r.body as Array<VillaDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_16Response(body?: VillaDto): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/villa/save`,
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
   * @param body undefined
   * @return successful operation
   */
  save_16(body?: VillaDto): __Observable<boolean> {
    return this.save_16Response(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  findAll_14Response(): __Observable<__StrictHttpResponse<Array<VilleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/ville/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VilleDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_14(): __Observable<Array<VilleDto>> {
    return this.findAll_14Response().pipe(
      __map(_r => _r.body as Array<VilleDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  delete_12Response(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/ville/delete/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  delete_12(id: number): __Observable<boolean> {
    return this.delete_12Response(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_12Response(id: number): __Observable<__StrictHttpResponse<VilleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/ville/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VilleDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByID_12(id: number): __Observable<VilleDto> {
    return this.findByID_12Response(id).pipe(
      __map(_r => _r.body as VilleDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_5Response(id: number): __Observable<__StrictHttpResponse<Array<VilleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/ville/findByIdPays/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VilleDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdPays_5(id: number): __Observable<Array<VilleDto>> {
    return this.findByIdPays_5Response(id).pipe(
      __map(_r => _r.body as Array<VilleDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_12Response(name: string): __Observable<__StrictHttpResponse<VilleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/ville/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VilleDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByName_12(name: string): __Observable<VilleDto> {
    return this.findByName_12Response(name).pipe(
      __map(_r => _r.body as VilleDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  findByPaysResponse(body?: PaysDto): __Observable<__StrictHttpResponse<Array<VilleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/ville/findByPays`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VilleDto>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  findByPays(body?: PaysDto): __Observable<Array<VilleDto>> {
    return this.findByPaysResponse(body).pipe(
      __map(_r => _r.body as Array<VilleDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  save_17Response(body?: VilleDto): __Observable<__StrictHttpResponse<VilleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/ville/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VilleDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save_17(body?: VilleDto): __Observable<VilleDto> {
    return this.save_17Response(body).pipe(
      __map(_r => _r.body as VilleDto)
    );
  }
}

module ApiService {
}

export { ApiService }
