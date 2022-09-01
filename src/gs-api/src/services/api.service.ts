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
import { AppelLoyersFactureDto } from '../models/appel-loyers-facture-dto';
import { AnneeAppelLoyersDto } from '../models/annee-appel-loyers-dto';
import { AppelLoyerDto } from '../models/appel-loyer-dto';
import { AppelLoyerRequestDto } from '../models/appel-loyer-request-dto';
import { Utilisateur } from '../models/utilisateur';
import { AuthRequestDto } from '../models/auth-request-dto';
import { BailAppartementDto } from '../models/bail-appartement-dto';
import { OperationDto } from '../models/operation-dto';
import { BailMagasinDto } from '../models/bail-magasin-dto';
import { BailStudioDto } from '../models/bail-studio-dto';
import { BailVillaDto } from '../models/bail-villa-dto';
import { BienImmobilierDto } from '../models/bien-immobilier-dto';
import { CommuneRequestDto } from '../models/commune-request-dto';
import { CommuneResponseDto } from '../models/commune-response-dto';
import { EspeceEncaissementDto } from '../models/espece-encaissement-dto';
import { EtageDto } from '../models/etage-dto';
import { ImmeubleDto } from '../models/immeuble-dto';
import { MagasinResponseDto } from '../models/magasin-response-dto';
import { MagasinDto } from '../models/magasin-dto';
import { MontantLoyerBailDto } from '../models/montant-loyer-bail-dto';
import { PaysDto } from '../models/pays-dto';
import { QuartierRequestDto } from '../models/quartier-request-dto';
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
  static readonly getAllAgenceByOrderAgencePath = 'gestimoweb/api/v1/agences/all';
  static readonly deleteAgenceByIdAgencePath = 'gestimoweb/api/v1/agences/deleteagence/{id}';
  static readonly getAgenceByEmailAgencePath = 'gestimoweb/api/v1/agences/getagencebyemail/{email}';
  static readonly getAgenceByIDAgencePath = 'gestimoweb/api/v1/agences/getagencebyid/{id}';
  static readonly authenticateAgencePath = 'gestimoweb/api/v1/agences/signup';
  static readonly findAllAppartementPath = 'gestimoweb/api/v1/appartement/all';
  static readonly findAllAppartementLibrePath = 'gestimoweb/api/v1/appartement/alllibre';
  static readonly deleteAppartementPath = 'gestimoweb/api/v1/appartement/delete/{id}';
  static readonly findByIDAppartementPath = 'gestimoweb/api/v1/appartement/findById/{id}';
  static readonly findByIdEtageAppartementPath = 'gestimoweb/api/v1/appartement/findByIdEtage/{id}';
  static readonly findByNameAppartementPath = 'gestimoweb/api/v1/appartement/findByName/{name}';
  static readonly saveAppartementPath = 'gestimoweb/api/v1/appartement/save';
  static readonly AppelLoyersParPeriodePath = 'gestimoweb/api/v1/appelloyer/findAllAppelloyerByPeriode/{periode}';
  static readonly listTousAppelsLoyersPath = 'gestimoweb/api/v1/appelloyer/findAllAppelsLoyer';
  static readonly findAllPeriodeByAnneePath = 'gestimoweb/api/v1/appelloyer/findAllPeriodeByAnnee/{annee}';
  static readonly findAllPeriodeChiffreEtLettreByAnneePath = 'gestimoweb/api/v1/appelloyer/findAllPeriodeChiffreEtLettreByAnnee/{annee}';
  static readonly AppelLoyersParIdPath = 'gestimoweb/api/v1/appelloyer/findAppelloyer/{id}';
  static readonly listDesLoyersParBailPath = 'gestimoweb/api/v1/appelloyer/findAppelsByIdBail/{id}';
  static readonly listOfDistinctAnneeAppelPath = 'gestimoweb/api/v1/appelloyer/listOfDistinctAnneeAppel';
  static readonly saveAppelLoyersPath = 'gestimoweb/api/v1/appelloyer/save';
  static readonly verifyAccountPath = 'gestimoweb/api/v1/auth/accountVerification/{token}';
  static readonly loginPath = 'gestimoweb/api/v1/auth/login';
  static readonly findAllBailAppartementPath = 'gestimoweb/api/v1/bailappartement/all';
  static readonly findAllOperationsPath = 'gestimoweb/api/v1/bailappartement/alloperation';
  static readonly deleteBailAppartementPath = 'gestimoweb/api/v1/bailappartement/delete/{id}';
  static readonly findByIDBailAppartementPath = 'gestimoweb/api/v1/bailappartement/findById/{id}';
  static readonly findByNameBailAppartementPath = 'gestimoweb/api/v1/bailappartement/findByName/{name}';
  static readonly saveBailAppartementPath = 'gestimoweb/api/v1/bailappartement/save';
  static readonly findAllBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/all';
  static readonly deleteBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/delete/{id}';
  static readonly findByIDBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/findById/{id}';
  static readonly findByNameBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/findByName/{name}';
  static readonly saveBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/save';
  static readonly findAllBailStudioPath = 'gestimoweb/api/v1/bailsudio/all';
  static readonly deleteBailStudioPath = 'gestimoweb/api/v1/bailsudio/delete/{id}';
  static readonly findBailStudioByIDPath = 'gestimoweb/api/v1/bailsudio/findById/{id}';
  static readonly findBailStudioByNamePath = 'gestimoweb/api/v1/bailsudio/findByName/{name}';
  static readonly saveBailStudioPath = 'gestimoweb/api/v1/bailsudio/save';
  static readonly findAllBailVillaPath = 'gestimoweb/api/v1/bailvilla/all';
  static readonly deleteBailVillaPath = 'gestimoweb/api/v1/bailvilla/delete/{id}';
  static readonly findBailVillaByIDPath = 'gestimoweb/api/v1/bailvilla/findById/{id}';
  static readonly findBailVillaByNamePath = 'gestimoweb/api/v1/bailvilla/findByName/{name}';
  static readonly saveBailVillaPath = 'gestimoweb/api/v1/bailvilla/save';
  static readonly findAllBienPath = 'gestimoweb/api/v1/bienImmobilier/all';
  static readonly findAllCommunePath = 'gestimoweb/api/v1/commune/all';
  static readonly deleteCommunePath = 'gestimoweb/api/v1/commune/delete/{id}';
  static readonly findCommuneByIDPath = 'gestimoweb/api/v1/commune/findById/{id}';
  static readonly findCommuneByIdPaysPath = 'gestimoweb/api/v1/commune/findByIdVille/{id}';
  static readonly findCommuneByNamePath = 'gestimoweb/api/v1/commune/findByName/{name}';
  static readonly saveCommunePath = 'gestimoweb/api/v1/commune/save';
  static readonly sendMailGrouperWithAttachmentPath = 'gestimoweb/api/v1/envoimail/sendmailgrouper/{periode}';
  static readonly sendMailQuittanceWithAttachmentPath = 'gestimoweb/api/v1/envoimail/sendquittancebymail/{id}';
  static readonly saveEspeceEncaissementPath = 'gestimoweb/api/v1/especeencaissement/save';
  static readonly findAllEtagePath = 'gestimoweb/api/v1/etage/all';
  static readonly deleteEtagePath = 'gestimoweb/api/v1/etage/delete/{id}';
  static readonly findEtageByIDPath = 'gestimoweb/api/v1/etage/findById/{id}';
  static readonly findEtageByIdPaysPath = 'gestimoweb/api/v1/etage/findByIdImmeuble/{id}';
  static readonly findEtageByNamePath = 'gestimoweb/api/v1/etage/findByName/{name}';
  static readonly saveEtagePath = 'gestimoweb/api/v1/etage/save';
  static readonly findAllImmeublePath = 'gestimoweb/api/v1/immeuble/all';
  static readonly deleteImmeublePath = 'gestimoweb/api/v1/immeuble/deleteImmeuble/{id}';
  static readonly findImmeubleByIDPath = 'gestimoweb/api/v1/immeuble/findById/{id}';
  static readonly findImmeubleByIdSitePath = 'gestimoweb/api/v1/immeuble/findByIdSite/{id}';
  static readonly findImmeubleByNamePath = 'gestimoweb/api/v1/immeuble/findByName/{name}';
  static readonly saveImmeublePath = 'gestimoweb/api/v1/immeuble/save';
  static readonly findAllMagasinPath = 'gestimoweb/api/v1/magasin/all';
  static readonly findAllMagasinLibrePath = 'gestimoweb/api/v1/magasin/alllibre';
  static readonly findAllMagasinByEtagePath = 'gestimoweb/api/v1/magasin/findAllMagasinByIdEtage/{id}';
  static readonly findAllMagasinByIdSitePath = 'gestimoweb/api/v1/magasin/findAllMagasinByIdSite/{idSite}';
  static readonly findByNameMagasinDtoPath = 'gestimoweb/api/v1/magasin/findByName/{name}';
  static readonly findByIDMagasinPath = 'gestimoweb/api/v1/magasin/findmagasinById/{id}';
  static readonly saveMagasinPath = 'gestimoweb/api/v1/magasin/save';
  static readonly findByIDQuartiersPath = 'gestimoweb/api/v1/montantloyerbail/findMontantByBail/{id}';
  static readonly findAllPaysPath = 'gestimoweb/api/v1/pays/all';
  static readonly deletePaysPath = 'gestimoweb/api/v1/pays/delete/{id}';
  static readonly findPaysByIDPath = 'gestimoweb/api/v1/pays/findById/{id}';
  static readonly findPaysByNamePath = 'gestimoweb/api/v1/pays/findByName/{name}';
  static readonly savePaysPath = 'gestimoweb/api/v1/pays/save';
  static readonly sampleQuitancePath = 'gestimoweb/api/v1/print/quittance/{id}';
  static readonly quittancePeriodePath = 'gestimoweb/api/v1/print/quittancegrouper/{periode}';
  static readonly findAllQuartiersPath = 'gestimoweb/api/v1/quartier/all';
  static readonly deleteQuartierPath = 'gestimoweb/api/v1/quartier/delete/{id}';
  static readonly findByIDQuartiers_1Path = 'gestimoweb/api/v1/quartier/findById/{id}';
  static readonly findAllQuartierByIdCommunePath = 'gestimoweb/api/v1/quartier/findByIdCommune/{id}';
  static readonly findByNameQuartierPath = 'gestimoweb/api/v1/quartier/findByName/{name}';
  static readonly saveQuartierPath = 'gestimoweb/api/v1/quartier/save';
  static readonly findAllSitesPath = 'gestimoweb/api/v1/sites/all';
  static readonly deleteSitePath = 'gestimoweb/api/v1/sites/delete/{id}';
  static readonly findSiteByIDPath = 'gestimoweb/api/v1/sites/findById/{id}';
  static readonly findSiteByNamePath = 'gestimoweb/api/v1/sites/findByName/{name}';
  static readonly savePath = 'gestimoweb/api/v1/sites/save';
  static readonly saveSitePath = 'gestimoweb/api/v1/sites/savesite';
  static readonly findAllStudiosPath = 'gestimoweb/api/v1/studio/all';
  static readonly findAllStudiosLibrePath = 'gestimoweb/api/v1/studio/alllibre';
  static readonly deleteStudioPath = 'gestimoweb/api/v1/studio/delete/{id}';
  static readonly findStudioByIDPath = 'gestimoweb/api/v1/studio/findById/{id}';
  static readonly findAllStudioByIdPaysPath = 'gestimoweb/api/v1/studio/findByIdEtage/{id}';
  static readonly findStudioByNamePath = 'gestimoweb/api/v1/studio/findByName/{name}';
  static readonly saveStudioPath = 'gestimoweb/api/v1/studio/save';
  static readonly getAllUtilisateursByOrderPath = 'gestimoweb/api/v1/utilisateur/all';
  static readonly getAllGerantsByOrderPath = 'gestimoweb/api/v1/utilisateur/gerants/all';
  static readonly getUtilisateurByEmailPath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyemail/{email}';
  static readonly getUtilisateurByIDPath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyid/{id}';
  static readonly getUtilisateurByUsernamePath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyusername/{username}';
  static readonly getAllLocatairesByOrderPath = 'gestimoweb/api/v1/utilisateur/locataires/all';
  static readonly getAllProprietaireByOrderPath = 'gestimoweb/api/v1/utilisateur/proprietaires/all';
  static readonly saveUtilisateurPath = 'gestimoweb/api/v1/utilisateur/save';
  static readonly getAllSuperviseursByOrderPath = 'gestimoweb/api/v1/utilisateur/superviseurs/all';
  static readonly findAllVillaPath = 'gestimoweb/api/v1/villa/all';
  static readonly findAllVillaLibrePath = 'gestimoweb/api/v1/villa/alllibre';
  static readonly saveVillaPath = 'gestimoweb/api/v1/villa/save';
  static readonly findAllVillesPath = 'gestimoweb/api/v1/ville/all';
  static readonly deleteVillePath = 'gestimoweb/api/v1/ville/delete/{id}';
  static readonly findByIdVillePath = 'gestimoweb/api/v1/ville/findById/{id}';
  static readonly findAllVilleByIdPaysPath = 'gestimoweb/api/v1/ville/findByIdPays/{id}';
  static readonly findVilleByNameVillePath = 'gestimoweb/api/v1/ville/findByName/{name}';
  static readonly findAllVilleByPaysObjectPath = 'gestimoweb/api/v1/ville/findByPays';
  static readonly saveVillePath = 'gestimoweb/api/v1/ville/save';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  getAllAgenceByOrderAgenceResponse(): __Observable<__StrictHttpResponse<Array<AgenceResponseDto>>> {
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
  getAllAgenceByOrderAgence(): __Observable<Array<AgenceResponseDto>> {
    return this.getAllAgenceByOrderAgenceResponse().pipe(
      __map(_r => _r.body as Array<AgenceResponseDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteAgenceByIdAgenceResponse(id: number): __Observable<__StrictHttpResponse<string>> {
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
  deleteAgenceByIdAgence(id: number): __Observable<string> {
    return this.deleteAgenceByIdAgenceResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  getAgenceByEmailAgenceResponse(email: string): __Observable<__StrictHttpResponse<AgenceResponseDto>> {
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
  getAgenceByEmailAgence(email: string): __Observable<AgenceResponseDto> {
    return this.getAgenceByEmailAgenceResponse(email).pipe(
      __map(_r => _r.body as AgenceResponseDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  getAgenceByIDAgenceResponse(id: number): __Observable<__StrictHttpResponse<AgenceResponseDto>> {
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
  getAgenceByIDAgence(id: number): __Observable<AgenceResponseDto> {
    return this.getAgenceByIDAgenceResponse(id).pipe(
      __map(_r => _r.body as AgenceResponseDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateAgenceResponse(body?: AgenceRequestDto): __Observable<__StrictHttpResponse<boolean>> {
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
  authenticateAgence(body?: AgenceRequestDto): __Observable<boolean> {
    return this.authenticateAgenceResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  findAllAppartementResponse(): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
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
  findAllAppartement(): __Observable<Array<AppartementDto>> {
    return this.findAllAppartementResponse().pipe(
      __map(_r => _r.body as Array<AppartementDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllAppartementLibreResponse(): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/alllibre`,
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
  findAllAppartementLibre(): __Observable<Array<AppartementDto>> {
    return this.findAllAppartementLibreResponse().pipe(
      __map(_r => _r.body as Array<AppartementDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteAppartementResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteAppartement(id: number): __Observable<boolean> {
    return this.deleteAppartementResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDAppartementResponse(id: number): __Observable<__StrictHttpResponse<AppartementDto>> {
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
  findByIDAppartement(id: number): __Observable<AppartementDto> {
    return this.findByIDAppartementResponse(id).pipe(
      __map(_r => _r.body as AppartementDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdEtageAppartementResponse(id: number): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
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
  findByIdEtageAppartement(id: number): __Observable<Array<AppartementDto>> {
    return this.findByIdEtageAppartementResponse(id).pipe(
      __map(_r => _r.body as Array<AppartementDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameAppartementResponse(name: string): __Observable<__StrictHttpResponse<AppartementDto>> {
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
  findByNameAppartement(name: string): __Observable<AppartementDto> {
    return this.findByNameAppartementResponse(name).pipe(
      __map(_r => _r.body as AppartementDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveAppartementResponse(body?: AppartementDto): __Observable<__StrictHttpResponse<AppartementDto>> {
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
  saveAppartement(body?: AppartementDto): __Observable<AppartementDto> {
    return this.saveAppartementResponse(body).pipe(
      __map(_r => _r.body as AppartementDto)
    );
  }

  /**
   * @param periode undefined
   * @return successful operation
   */
  AppelLoyersParPeriodeResponse(periode: string): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllAppelloyerByPeriode/${periode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppelLoyersFactureDto>>;
      })
    );
  }
  /**
   * @param periode undefined
   * @return successful operation
   */
  AppelLoyersParPeriode(periode: string): __Observable<Array<AppelLoyersFactureDto>> {
    return this.AppelLoyersParPeriodeResponse(periode).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
    );
  }

  /**
   * @return successful operation
   */
  listTousAppelsLoyersResponse(): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllAppelsLoyer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppelLoyersFactureDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  listTousAppelsLoyers(): __Observable<Array<AppelLoyersFactureDto>> {
    return this.listTousAppelsLoyersResponse().pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
    );
  }

  /**
   * @param annee undefined
   * @return successful operation
   */
  findAllPeriodeByAnneeResponse(annee: number): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllPeriodeByAnnee/${annee}`,
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
   * @param annee undefined
   * @return successful operation
   */
  findAllPeriodeByAnnee(annee: number): __Observable<Array<string>> {
    return this.findAllPeriodeByAnneeResponse(annee).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param annee undefined
   * @return successful operation
   */
  findAllPeriodeChiffreEtLettreByAnneeResponse(annee: number): __Observable<__StrictHttpResponse<Array<AnneeAppelLoyersDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllPeriodeChiffreEtLettreByAnnee/${annee}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AnneeAppelLoyersDto>>;
      })
    );
  }
  /**
   * @param annee undefined
   * @return successful operation
   */
  findAllPeriodeChiffreEtLettreByAnnee(annee: number): __Observable<Array<AnneeAppelLoyersDto>> {
    return this.findAllPeriodeChiffreEtLettreByAnneeResponse(annee).pipe(
      __map(_r => _r.body as Array<AnneeAppelLoyersDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  AppelLoyersParIdResponse(id: number): __Observable<__StrictHttpResponse<AppelLoyersFactureDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAppelloyer/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppelLoyersFactureDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  AppelLoyersParId(id: number): __Observable<AppelLoyersFactureDto> {
    return this.AppelLoyersParIdResponse(id).pipe(
      __map(_r => _r.body as AppelLoyersFactureDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  listDesLoyersParBailResponse(id: number): __Observable<__StrictHttpResponse<Array<AppelLoyerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAppelsByIdBail/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppelLoyerDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  listDesLoyersParBail(id: number): __Observable<Array<AppelLoyerDto>> {
    return this.listDesLoyersParBailResponse(id).pipe(
      __map(_r => _r.body as Array<AppelLoyerDto>)
    );
  }

  /**
   * @return successful operation
   */
  listOfDistinctAnneeAppelResponse(): __Observable<__StrictHttpResponse<Array<number>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/listOfDistinctAnneeAppel`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<number>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  listOfDistinctAnneeAppel(): __Observable<Array<number>> {
    return this.listOfDistinctAnneeAppelResponse().pipe(
      __map(_r => _r.body as Array<number>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveAppelLoyersResponse(body?: AppelLoyerRequestDto): __Observable<__StrictHttpResponse<Array<string>>> {
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
  saveAppelLoyers(body?: AppelLoyerRequestDto): __Observable<Array<string>> {
    return this.saveAppelLoyersResponse(body).pipe(
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
  findAllBailAppartementResponse(): __Observable<__StrictHttpResponse<Array<BailAppartementDto>>> {
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
  findAllBailAppartement(): __Observable<Array<BailAppartementDto>> {
    return this.findAllBailAppartementResponse().pipe(
      __map(_r => _r.body as Array<BailAppartementDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllOperationsResponse(): __Observable<__StrictHttpResponse<Array<OperationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/alloperation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OperationDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllOperations(): __Observable<Array<OperationDto>> {
    return this.findAllOperationsResponse().pipe(
      __map(_r => _r.body as Array<OperationDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteBailAppartementResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteBailAppartement(id: number): __Observable<boolean> {
    return this.deleteBailAppartementResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDBailAppartementResponse(id: number): __Observable<__StrictHttpResponse<BailAppartementDto>> {
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
  findByIDBailAppartement(id: number): __Observable<BailAppartementDto> {
    return this.findByIDBailAppartementResponse(id).pipe(
      __map(_r => _r.body as BailAppartementDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameBailAppartementResponse(name: string): __Observable<__StrictHttpResponse<BailAppartementDto>> {
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
  findByNameBailAppartement(name: string): __Observable<BailAppartementDto> {
    return this.findByNameBailAppartementResponse(name).pipe(
      __map(_r => _r.body as BailAppartementDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveBailAppartementResponse(body?: BailAppartementDto): __Observable<__StrictHttpResponse<BailAppartementDto>> {
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
  saveBailAppartement(body?: BailAppartementDto): __Observable<BailAppartementDto> {
    return this.saveBailAppartementResponse(body).pipe(
      __map(_r => _r.body as BailAppartementDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllBailMagasinResponse(): __Observable<__StrictHttpResponse<Array<BailMagasinDto>>> {
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
  findAllBailMagasin(): __Observable<Array<BailMagasinDto>> {
    return this.findAllBailMagasinResponse().pipe(
      __map(_r => _r.body as Array<BailMagasinDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteBailMagasinResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteBailMagasin(id: number): __Observable<boolean> {
    return this.deleteBailMagasinResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDBailMagasinResponse(id: number): __Observable<__StrictHttpResponse<BailMagasinDto>> {
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
  findByIDBailMagasin(id: number): __Observable<BailMagasinDto> {
    return this.findByIDBailMagasinResponse(id).pipe(
      __map(_r => _r.body as BailMagasinDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameBailMagasinResponse(name: string): __Observable<__StrictHttpResponse<BailMagasinDto>> {
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
  findByNameBailMagasin(name: string): __Observable<BailMagasinDto> {
    return this.findByNameBailMagasinResponse(name).pipe(
      __map(_r => _r.body as BailMagasinDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveBailMagasinResponse(body?: BailMagasinDto): __Observable<__StrictHttpResponse<BailMagasinDto>> {
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
  saveBailMagasin(body?: BailMagasinDto): __Observable<BailMagasinDto> {
    return this.saveBailMagasinResponse(body).pipe(
      __map(_r => _r.body as BailMagasinDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllBailStudioResponse(): __Observable<__StrictHttpResponse<Array<BailStudioDto>>> {
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
  findAllBailStudio(): __Observable<Array<BailStudioDto>> {
    return this.findAllBailStudioResponse().pipe(
      __map(_r => _r.body as Array<BailStudioDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteBailStudioResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteBailStudio(id: number): __Observable<boolean> {
    return this.deleteBailStudioResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findBailStudioByIDResponse(id: number): __Observable<__StrictHttpResponse<BailStudioDto>> {
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
  findBailStudioByID(id: number): __Observable<BailStudioDto> {
    return this.findBailStudioByIDResponse(id).pipe(
      __map(_r => _r.body as BailStudioDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findBailStudioByNameResponse(name: string): __Observable<__StrictHttpResponse<BailStudioDto>> {
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
  findBailStudioByName(name: string): __Observable<BailStudioDto> {
    return this.findBailStudioByNameResponse(name).pipe(
      __map(_r => _r.body as BailStudioDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveBailStudioResponse(body?: BailStudioDto): __Observable<__StrictHttpResponse<BailStudioDto>> {
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
  saveBailStudio(body?: BailStudioDto): __Observable<BailStudioDto> {
    return this.saveBailStudioResponse(body).pipe(
      __map(_r => _r.body as BailStudioDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllBailVillaResponse(): __Observable<__StrictHttpResponse<Array<BailVillaDto>>> {
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
  findAllBailVilla(): __Observable<Array<BailVillaDto>> {
    return this.findAllBailVillaResponse().pipe(
      __map(_r => _r.body as Array<BailVillaDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteBailVillaResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteBailVilla(id: number): __Observable<boolean> {
    return this.deleteBailVillaResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findBailVillaByIDResponse(id: number): __Observable<__StrictHttpResponse<BailVillaDto>> {
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
  findBailVillaByID(id: number): __Observable<BailVillaDto> {
    return this.findBailVillaByIDResponse(id).pipe(
      __map(_r => _r.body as BailVillaDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findBailVillaByNameResponse(name: string): __Observable<__StrictHttpResponse<BailVillaDto>> {
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
  findBailVillaByName(name: string): __Observable<BailVillaDto> {
    return this.findBailVillaByNameResponse(name).pipe(
      __map(_r => _r.body as BailVillaDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveBailVillaResponse(body?: BailVillaDto): __Observable<__StrictHttpResponse<BailVillaDto>> {
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
  saveBailVilla(body?: BailVillaDto): __Observable<BailVillaDto> {
    return this.saveBailVillaResponse(body).pipe(
      __map(_r => _r.body as BailVillaDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllBienResponse(): __Observable<__StrictHttpResponse<Array<BienImmobilierDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bienImmobilier/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BienImmobilierDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllBien(): __Observable<Array<BienImmobilierDto>> {
    return this.findAllBienResponse().pipe(
      __map(_r => _r.body as Array<BienImmobilierDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllCommuneResponse(): __Observable<__StrictHttpResponse<Array<CommuneRequestDto>>> {
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
        return _r as __StrictHttpResponse<Array<CommuneRequestDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCommune(): __Observable<Array<CommuneRequestDto>> {
    return this.findAllCommuneResponse().pipe(
      __map(_r => _r.body as Array<CommuneRequestDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteCommuneResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteCommune(id: number): __Observable<boolean> {
    return this.deleteCommuneResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findCommuneByIDResponse(id: number): __Observable<__StrictHttpResponse<CommuneRequestDto>> {
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
        return _r as __StrictHttpResponse<CommuneRequestDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findCommuneByID(id: number): __Observable<CommuneRequestDto> {
    return this.findCommuneByIDResponse(id).pipe(
      __map(_r => _r.body as CommuneRequestDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findCommuneByIdPaysResponse(id: number): __Observable<__StrictHttpResponse<Array<CommuneResponseDto>>> {
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
        return _r as __StrictHttpResponse<Array<CommuneResponseDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findCommuneByIdPays(id: number): __Observable<Array<CommuneResponseDto>> {
    return this.findCommuneByIdPaysResponse(id).pipe(
      __map(_r => _r.body as Array<CommuneResponseDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findCommuneByNameResponse(name: string): __Observable<__StrictHttpResponse<CommuneRequestDto>> {
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
        return _r as __StrictHttpResponse<CommuneRequestDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findCommuneByName(name: string): __Observable<CommuneRequestDto> {
    return this.findCommuneByNameResponse(name).pipe(
      __map(_r => _r.body as CommuneRequestDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveCommuneResponse(body?: CommuneRequestDto): __Observable<__StrictHttpResponse<CommuneRequestDto>> {
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
        return _r as __StrictHttpResponse<CommuneRequestDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveCommune(body?: CommuneRequestDto): __Observable<CommuneRequestDto> {
    return this.saveCommuneResponse(body).pipe(
      __map(_r => _r.body as CommuneRequestDto)
    );
  }

  /**
   * @param periode undefined
   * @return successful operation
   */
  sendMailGrouperWithAttachmentResponse(periode: string): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/envoimail/sendmailgrouper/${periode}`,
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
   * @param periode undefined
   * @return successful operation
   */
  sendMailGrouperWithAttachment(periode: string): __Observable<boolean> {
    return this.sendMailGrouperWithAttachmentResponse(periode).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  sendMailQuittanceWithAttachmentResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/envoimail/sendquittancebymail/${id}`,
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
  sendMailQuittanceWithAttachment(id: number): __Observable<boolean> {
    return this.sendMailQuittanceWithAttachmentResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveEspeceEncaissementResponse(body?: EspeceEncaissementDto): __Observable<__StrictHttpResponse<EspeceEncaissementDto>> {
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
  saveEspeceEncaissement(body?: EspeceEncaissementDto): __Observable<EspeceEncaissementDto> {
    return this.saveEspeceEncaissementResponse(body).pipe(
      __map(_r => _r.body as EspeceEncaissementDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllEtageResponse(): __Observable<__StrictHttpResponse<Array<EtageDto>>> {
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
  findAllEtage(): __Observable<Array<EtageDto>> {
    return this.findAllEtageResponse().pipe(
      __map(_r => _r.body as Array<EtageDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteEtageResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteEtage(id: number): __Observable<boolean> {
    return this.deleteEtageResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findEtageByIDResponse(id: number): __Observable<__StrictHttpResponse<EtageDto>> {
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
  findEtageByID(id: number): __Observable<EtageDto> {
    return this.findEtageByIDResponse(id).pipe(
      __map(_r => _r.body as EtageDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findEtageByIdPaysResponse(id: number): __Observable<__StrictHttpResponse<Array<EtageDto>>> {
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
  findEtageByIdPays(id: number): __Observable<Array<EtageDto>> {
    return this.findEtageByIdPaysResponse(id).pipe(
      __map(_r => _r.body as Array<EtageDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findEtageByNameResponse(name: string): __Observable<__StrictHttpResponse<EtageDto>> {
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
  findEtageByName(name: string): __Observable<EtageDto> {
    return this.findEtageByNameResponse(name).pipe(
      __map(_r => _r.body as EtageDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveEtageResponse(body?: EtageDto): __Observable<__StrictHttpResponse<EtageDto>> {
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
  saveEtage(body?: EtageDto): __Observable<EtageDto> {
    return this.saveEtageResponse(body).pipe(
      __map(_r => _r.body as EtageDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllImmeubleResponse(): __Observable<__StrictHttpResponse<Array<ImmeubleDto>>> {
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
  findAllImmeuble(): __Observable<Array<ImmeubleDto>> {
    return this.findAllImmeubleResponse().pipe(
      __map(_r => _r.body as Array<ImmeubleDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteImmeubleResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/immeuble/deleteImmeuble/${id}`,
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
  deleteImmeuble(id: number): __Observable<boolean> {
    return this.deleteImmeubleResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findImmeubleByIDResponse(id: number): __Observable<__StrictHttpResponse<ImmeubleDto>> {
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
  findImmeubleByID(id: number): __Observable<ImmeubleDto> {
    return this.findImmeubleByIDResponse(id).pipe(
      __map(_r => _r.body as ImmeubleDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findImmeubleByIdSiteResponse(id: number): __Observable<__StrictHttpResponse<Array<ImmeubleDto>>> {
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
  findImmeubleByIdSite(id: number): __Observable<Array<ImmeubleDto>> {
    return this.findImmeubleByIdSiteResponse(id).pipe(
      __map(_r => _r.body as Array<ImmeubleDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findImmeubleByNameResponse(name: string): __Observable<__StrictHttpResponse<ImmeubleDto>> {
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
  findImmeubleByName(name: string): __Observable<ImmeubleDto> {
    return this.findImmeubleByNameResponse(name).pipe(
      __map(_r => _r.body as ImmeubleDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveImmeubleResponse(body?: ImmeubleDto): __Observable<__StrictHttpResponse<ImmeubleDto>> {
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
  saveImmeuble(body?: ImmeubleDto): __Observable<ImmeubleDto> {
    return this.saveImmeubleResponse(body).pipe(
      __map(_r => _r.body as ImmeubleDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllMagasinResponse(): __Observable<__StrictHttpResponse<Array<MagasinResponseDto>>> {
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
        return _r as __StrictHttpResponse<Array<MagasinResponseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllMagasin(): __Observable<Array<MagasinResponseDto>> {
    return this.findAllMagasinResponse().pipe(
      __map(_r => _r.body as Array<MagasinResponseDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllMagasinLibreResponse(): __Observable<__StrictHttpResponse<Array<MagasinResponseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/alllibre`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MagasinResponseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllMagasinLibre(): __Observable<Array<MagasinResponseDto>> {
    return this.findAllMagasinLibreResponse().pipe(
      __map(_r => _r.body as Array<MagasinResponseDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllMagasinByEtageResponse(id: number): __Observable<__StrictHttpResponse<Array<MagasinDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/findAllMagasinByIdEtage/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  findAllMagasinByEtage(id: number): __Observable<Array<MagasinDto>> {
    return this.findAllMagasinByEtageResponse(id).pipe(
      __map(_r => _r.body as Array<MagasinDto>)
    );
  }

  /**
   * @param idSite undefined
   * @return successful operation
   */
  findAllMagasinByIdSiteResponse(idSite: number): __Observable<__StrictHttpResponse<Array<MagasinDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/findAllMagasinByIdSite/${idSite}`,
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
   * @param idSite undefined
   * @return successful operation
   */
  findAllMagasinByIdSite(idSite: number): __Observable<Array<MagasinDto>> {
    return this.findAllMagasinByIdSiteResponse(idSite).pipe(
      __map(_r => _r.body as Array<MagasinDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameMagasinDtoResponse(name: string): __Observable<__StrictHttpResponse<MagasinDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/findByName/${name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MagasinDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameMagasinDto(name: string): __Observable<MagasinDto> {
    return this.findByNameMagasinDtoResponse(name).pipe(
      __map(_r => _r.body as MagasinDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDMagasinResponse(id: number): __Observable<__StrictHttpResponse<MagasinDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/findmagasinById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MagasinDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDMagasin(id: number): __Observable<MagasinDto> {
    return this.findByIDMagasinResponse(id).pipe(
      __map(_r => _r.body as MagasinDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveMagasinResponse(body?: MagasinDto): __Observable<__StrictHttpResponse<boolean>> {
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
  saveMagasin(body?: MagasinDto): __Observable<boolean> {
    return this.saveMagasinResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDQuartiersResponse(id: number): __Observable<__StrictHttpResponse<Array<MontantLoyerBailDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/montantloyerbail/findMontantByBail/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MontantLoyerBailDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDQuartiers(id: number): __Observable<Array<MontantLoyerBailDto>> {
    return this.findByIDQuartiersResponse(id).pipe(
      __map(_r => _r.body as Array<MontantLoyerBailDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllPaysResponse(): __Observable<__StrictHttpResponse<Array<PaysDto>>> {
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
  findAllPays(): __Observable<Array<PaysDto>> {
    return this.findAllPaysResponse().pipe(
      __map(_r => _r.body as Array<PaysDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deletePaysResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deletePays(id: number): __Observable<boolean> {
    return this.deletePaysResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findPaysByIDResponse(id: number): __Observable<__StrictHttpResponse<PaysDto>> {
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
  findPaysByID(id: number): __Observable<PaysDto> {
    return this.findPaysByIDResponse(id).pipe(
      __map(_r => _r.body as PaysDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findPaysByNameResponse(name: string): __Observable<__StrictHttpResponse<PaysDto>> {
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
  findPaysByName(name: string): __Observable<PaysDto> {
    return this.findPaysByNameResponse(name).pipe(
      __map(_r => _r.body as PaysDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  savePaysResponse(body?: PaysDto): __Observable<__StrictHttpResponse<PaysDto>> {
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
  savePays(body?: PaysDto): __Observable<PaysDto> {
    return this.savePaysResponse(body).pipe(
      __map(_r => _r.body as PaysDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  sampleQuitanceResponse(id: number): __Observable<__StrictHttpResponse<Array<string>>> {
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
  sampleQuitance(id: number): __Observable<Array<string>> {
    return this.sampleQuitanceResponse(id).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param periode undefined
   * @return successful operation
   */
  quittancePeriodeResponse(periode: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/print/quittancegrouper/${periode}`,
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
   * @param periode undefined
   * @return successful operation
   */
  quittancePeriode(periode: string): __Observable<Array<string>> {
    return this.quittancePeriodeResponse(periode).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return successful operation
   */
  findAllQuartiersResponse(): __Observable<__StrictHttpResponse<Array<QuartierRequestDto>>> {
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
        return _r as __StrictHttpResponse<Array<QuartierRequestDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllQuartiers(): __Observable<Array<QuartierRequestDto>> {
    return this.findAllQuartiersResponse().pipe(
      __map(_r => _r.body as Array<QuartierRequestDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteQuartierResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteQuartier(id: number): __Observable<boolean> {
    return this.deleteQuartierResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDQuartiers_1Response(id: number): __Observable<__StrictHttpResponse<QuartierRequestDto>> {
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
        return _r as __StrictHttpResponse<QuartierRequestDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDQuartiers_1(id: number): __Observable<QuartierRequestDto> {
    return this.findByIDQuartiers_1Response(id).pipe(
      __map(_r => _r.body as QuartierRequestDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllQuartierByIdCommuneResponse(id: number): __Observable<__StrictHttpResponse<Array<QuartierRequestDto>>> {
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
        return _r as __StrictHttpResponse<Array<QuartierRequestDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findAllQuartierByIdCommune(id: number): __Observable<Array<QuartierRequestDto>> {
    return this.findAllQuartierByIdCommuneResponse(id).pipe(
      __map(_r => _r.body as Array<QuartierRequestDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameQuartierResponse(name: string): __Observable<__StrictHttpResponse<QuartierRequestDto>> {
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
        return _r as __StrictHttpResponse<QuartierRequestDto>;
      })
    );
  }
  /**
   * @param name undefined
   * @return successful operation
   */
  findByNameQuartier(name: string): __Observable<QuartierRequestDto> {
    return this.findByNameQuartierResponse(name).pipe(
      __map(_r => _r.body as QuartierRequestDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveQuartierResponse(body?: QuartierRequestDto): __Observable<__StrictHttpResponse<QuartierRequestDto>> {
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
        return _r as __StrictHttpResponse<QuartierRequestDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveQuartier(body?: QuartierRequestDto): __Observable<QuartierRequestDto> {
    return this.saveQuartierResponse(body).pipe(
      __map(_r => _r.body as QuartierRequestDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllSitesResponse(): __Observable<__StrictHttpResponse<Array<SiteResponseDto>>> {
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
  findAllSites(): __Observable<Array<SiteResponseDto>> {
    return this.findAllSitesResponse().pipe(
      __map(_r => _r.body as Array<SiteResponseDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteSiteResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteSite(id: number): __Observable<boolean> {
    return this.deleteSiteResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findSiteByIDResponse(id: number): __Observable<__StrictHttpResponse<SiteResponseDto>> {
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
  findSiteByID(id: number): __Observable<SiteResponseDto> {
    return this.findSiteByIDResponse(id).pipe(
      __map(_r => _r.body as SiteResponseDto)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findSiteByNameResponse(name: string): __Observable<__StrictHttpResponse<SiteResponseDto>> {
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
  findSiteByName(name: string): __Observable<SiteResponseDto> {
    return this.findSiteByNameResponse(name).pipe(
      __map(_r => _r.body as SiteResponseDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: SiteRequestDto): __Observable<__StrictHttpResponse<boolean>> {
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
  save(body?: SiteRequestDto): __Observable<boolean> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveSiteResponse(body?: SiteRequestDto): __Observable<__StrictHttpResponse<SiteResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/sites/savesite`,
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
   * @param body undefined
   * @return successful operation
   */
  saveSite(body?: SiteRequestDto): __Observable<SiteResponseDto> {
    return this.saveSiteResponse(body).pipe(
      __map(_r => _r.body as SiteResponseDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllStudiosResponse(): __Observable<__StrictHttpResponse<Array<StudioDto>>> {
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
  findAllStudios(): __Observable<Array<StudioDto>> {
    return this.findAllStudiosResponse().pipe(
      __map(_r => _r.body as Array<StudioDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllStudiosLibreResponse(): __Observable<__StrictHttpResponse<Array<StudioDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/studio/alllibre`,
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
  findAllStudiosLibre(): __Observable<Array<StudioDto>> {
    return this.findAllStudiosLibreResponse().pipe(
      __map(_r => _r.body as Array<StudioDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteStudioResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteStudio(id: number): __Observable<boolean> {
    return this.deleteStudioResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findStudioByIDResponse(id: number): __Observable<__StrictHttpResponse<StudioDto>> {
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
  findStudioByID(id: number): __Observable<StudioDto> {
    return this.findStudioByIDResponse(id).pipe(
      __map(_r => _r.body as StudioDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllStudioByIdPaysResponse(id: number): __Observable<__StrictHttpResponse<Array<StudioDto>>> {
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
  findAllStudioByIdPays(id: number): __Observable<Array<StudioDto>> {
    return this.findAllStudioByIdPaysResponse(id).pipe(
      __map(_r => _r.body as Array<StudioDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findStudioByNameResponse(name: string): __Observable<__StrictHttpResponse<StudioDto>> {
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
  findStudioByName(name: string): __Observable<StudioDto> {
    return this.findStudioByNameResponse(name).pipe(
      __map(_r => _r.body as StudioDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveStudioResponse(body?: StudioDto): __Observable<__StrictHttpResponse<boolean>> {
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
  saveStudio(body?: StudioDto): __Observable<boolean> {
    return this.saveStudioResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  getAllUtilisateursByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
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
  getAllUtilisateursByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllUtilisateursByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurRequestDto>)
    );
  }

  /**
   * @return successful operation
   */
  getAllGerantsByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
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
  getAllGerantsByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllGerantsByOrderResponse().pipe(
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
   * @param username undefined
   * @return successful operation
   */
  getUtilisateurByUsernameResponse(username: string): __Observable<__StrictHttpResponse<UtilisateurRequestDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/getutilisateurbyusername/${username}`,
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
   * @param username undefined
   * @return successful operation
   */
  getUtilisateurByUsername(username: string): __Observable<UtilisateurRequestDto> {
    return this.getUtilisateurByUsernameResponse(username).pipe(
      __map(_r => _r.body as UtilisateurRequestDto)
    );
  }

  /**
   * @return successful operation
   */
  getAllLocatairesByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
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
  getAllLocatairesByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllLocatairesByOrderResponse().pipe(
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
  saveUtilisateurResponse(body?: UtilisateurRequestDto): __Observable<__StrictHttpResponse<boolean>> {
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
  saveUtilisateur(body?: UtilisateurRequestDto): __Observable<boolean> {
    return this.saveUtilisateurResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  getAllSuperviseursByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurRequestDto>>> {
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
  getAllSuperviseursByOrder(): __Observable<Array<UtilisateurRequestDto>> {
    return this.getAllSuperviseursByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurRequestDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllVillaResponse(): __Observable<__StrictHttpResponse<Array<VillaDto>>> {
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
  findAllVilla(): __Observable<Array<VillaDto>> {
    return this.findAllVillaResponse().pipe(
      __map(_r => _r.body as Array<VillaDto>)
    );
  }

  /**
   * @return successful operation
   */
  findAllVillaLibreResponse(): __Observable<__StrictHttpResponse<Array<VillaDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/villa/alllibre`,
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
  findAllVillaLibre(): __Observable<Array<VillaDto>> {
    return this.findAllVillaLibreResponse().pipe(
      __map(_r => _r.body as Array<VillaDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveVillaResponse(body?: VillaDto): __Observable<__StrictHttpResponse<boolean>> {
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
  saveVilla(body?: VillaDto): __Observable<boolean> {
    return this.saveVillaResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @return successful operation
   */
  findAllVillesResponse(): __Observable<__StrictHttpResponse<Array<VilleDto>>> {
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
  findAllVilles(): __Observable<Array<VilleDto>> {
    return this.findAllVillesResponse().pipe(
      __map(_r => _r.body as Array<VilleDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  deleteVilleResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
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
  deleteVille(id: number): __Observable<boolean> {
    return this.deleteVilleResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdVilleResponse(id: number): __Observable<__StrictHttpResponse<VilleDto>> {
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
  findByIdVille(id: number): __Observable<VilleDto> {
    return this.findByIdVilleResponse(id).pipe(
      __map(_r => _r.body as VilleDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllVilleByIdPaysResponse(id: number): __Observable<__StrictHttpResponse<Array<VilleDto>>> {
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
  findAllVilleByIdPays(id: number): __Observable<Array<VilleDto>> {
    return this.findAllVilleByIdPaysResponse(id).pipe(
      __map(_r => _r.body as Array<VilleDto>)
    );
  }

  /**
   * @param name undefined
   * @return successful operation
   */
  findVilleByNameVilleResponse(name: string): __Observable<__StrictHttpResponse<VilleDto>> {
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
  findVilleByNameVille(name: string): __Observable<VilleDto> {
    return this.findVilleByNameVilleResponse(name).pipe(
      __map(_r => _r.body as VilleDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  findAllVilleByPaysObjectResponse(body?: PaysDto): __Observable<__StrictHttpResponse<Array<VilleDto>>> {
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
  findAllVilleByPaysObject(body?: PaysDto): __Observable<Array<VilleDto>> {
    return this.findAllVilleByPaysObjectResponse(body).pipe(
      __map(_r => _r.body as Array<VilleDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveVilleResponse(body?: VilleDto): __Observable<__StrictHttpResponse<VilleDto>> {
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
  saveVille(body?: VilleDto): __Observable<VilleDto> {
    return this.saveVilleResponse(body).pipe(
      __map(_r => _r.body as VilleDto)
    );
  }
}

module ApiService {
}

export { ApiService }
