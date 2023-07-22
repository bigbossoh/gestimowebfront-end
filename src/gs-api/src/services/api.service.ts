/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AgenceImmobilierDTO } from '../models/agence-immobilier-dto';
import { AgenceResponseDto } from '../models/agence-response-dto';
import { AgenceRequestDto } from '../models/agence-request-dto';
import { AppartementDto } from '../models/appartement-dto';
import { AppelLoyersFactureDto } from '../models/appel-loyers-facture-dto';
import { PeriodeDto } from '../models/periode-dto';
import { AnneeAppelLoyersDto } from '../models/annee-appel-loyers-dto';
import { AppelLoyerDto } from '../models/appel-loyer-dto';
import { MessageEnvoyerDto } from '../models/message-envoyer-dto';
import { PourcentageAppelDto } from '../models/pourcentage-appel-dto';
import { AppelLoyerRequestDto } from '../models/appel-loyer-request-dto';
import { StatistiquePeriodeDto } from '../models/statistique-periode-dto';
import { Utilisateur } from '../models/utilisateur';
import { AuthRequestDto } from '../models/auth-request-dto';
import { LocataireEncaisDTO } from '../models/locataire-encais-dto';
import { OperationDto } from '../models/operation-dto';
import { BailModifDto } from '../models/bail-modif-dto';
import { BailAppartementDto } from '../models/bail-appartement-dto';
import { BailMagasinDto } from '../models/bail-magasin-dto';
import { BailVillaDto } from '../models/bail-villa-dto';
import { BienImmobilierAffiheDto } from '../models/bien-immobilier-affihe-dto';
import { CategoryChambreSaveOrUpdateDto } from '../models/category-chambre-save-or-update-dto';
import { CommuneRequestDto } from '../models/commune-request-dto';
import { CommuneResponseDto } from '../models/commune-response-dto';
import { DroitAccesDTO } from '../models/droit-acces-dto';
import { DroitAccesPayloadDTO } from '../models/droit-acces-payload-dto';
import { EncaissementPrincipalDTO } from '../models/encaissement-principal-dto';
import { EncaissementPayloadDto } from '../models/encaissement-payload-dto';
import { EspeceEncaissementDto } from '../models/espece-encaissement-dto';
import { EtageDto } from '../models/etage-dto';
import { EtageAfficheDto } from '../models/etage-affiche-dto';
import { GroupeDroitDto } from '../models/groupe-droit-dto';
import { ImageDataDto } from '../models/image-data-dto';
import { ImmeubleEtageDto } from '../models/immeuble-etage-dto';
import { ImmeubleDto } from '../models/immeuble-dto';
import { MagasinResponseDto } from '../models/magasin-response-dto';
import { MagasinDto } from '../models/magasin-dto';
import { MontantLoyerBailDto } from '../models/montant-loyer-bail-dto';
import { PaysDto } from '../models/pays-dto';
import { PrestationSaveOrUpdateDto } from '../models/prestation-save-or-update-dto';
import { InputStreamResource } from '../models/input-stream-resource';
import { QuartierRequestDto } from '../models/quartier-request-dto';
import { ReservationSaveOrUpdateDto } from '../models/reservation-save-or-update-dto';
import { ReservationAfficheDto } from '../models/reservation-affiche-dto';
import { PrestationAdditionnelReservationSaveOrrUpdate } from '../models/prestation-additionnel-reservation-save-orr-update';
import { SiteResponseDto } from '../models/site-response-dto';
import { SiteRequestDto } from '../models/site-request-dto';
import { SuivieDepenseDto } from '../models/suivie-depense-dto';
import { UtilisateurAfficheDto } from '../models/utilisateur-affiche-dto';
import { UtilisateurRequestDto } from '../models/utilisateur-request-dto';
import { VillaDto } from '../models/villa-dto';
import { VilleDto } from '../models/ville-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getAllAgenceByOrderAgencePath = 'gestimoweb/api/v1/agences/all/{idAgence}';
  static readonly deleteAgenceByIdAgencePath = 'gestimoweb/api/v1/agences/deleteagence/{id}';
  static readonly getAgenceByEmailAgencePath = 'gestimoweb/api/v1/agences/getagencebyemail/{email}';
  static readonly getAgenceByIDAgencePath = 'gestimoweb/api/v1/agences/getagencebyid/{id}';
  static readonly authenticateAgencePath = 'gestimoweb/api/v1/agences/signup';
  static readonly findAllAppartementPath = 'gestimoweb/api/v1/appartement/all/{id}';
  static readonly findAllAppartementLibrePath = 'gestimoweb/api/v1/appartement/alllibre/{id}';
  static readonly findAllAppartementMeublePath = 'gestimoweb/api/v1/appartement/allmeuble/{id}';
  static readonly deleteAppartementPath = 'gestimoweb/api/v1/appartement/delete/{id}';
  static readonly findByIDAppartementPath = 'gestimoweb/api/v1/appartement/findById/{id}';
  static readonly findByIdEtageAppartementPath = 'gestimoweb/api/v1/appartement/findByIdEtage/{id}';
  static readonly findByNameAppartementPath = 'gestimoweb/api/v1/appartement/findByName/{name}';
  static readonly saveAppartementPath = 'gestimoweb/api/v1/appartement/save';
  static readonly deleteAppelDtoPath = 'gestimoweb/api/v1/appelloyer/clotureOfAppelDtoByID/{id}';
  static readonly AppelLoyersParPeriodePath = 'gestimoweb/api/v1/appelloyer/findAllAppelloyerByPeriode/{periode}/{idAgence}';
  static readonly listTousAppelsLoyersPath = 'gestimoweb/api/v1/appelloyer/findAllAppelsLoyer/{idAgence}';
  static readonly findAllPeriodePath = 'gestimoweb/api/v1/appelloyer/findAllPeriodeAppel/{idAgence}';
  static readonly findAllPeriodeByAnneePath = 'gestimoweb/api/v1/appelloyer/findAllPeriodeByAnnee/{annee}/{idAgence}';
  static readonly findAllPeriodeChiffreEtLettreByAnneePath = 'gestimoweb/api/v1/appelloyer/findAllPeriodeChiffreEtLettreByAnnee/{annee}/{idAgence}';
  static readonly AppelLoyersParIdPath = 'gestimoweb/api/v1/appelloyer/findAppelloyer/{id}';
  static readonly listDesLoyersParBailPath = 'gestimoweb/api/v1/appelloyer/findAppelsByIdBail/{idBail}';
  static readonly listDesLoyersImpayerParBailPath = 'gestimoweb/api/v1/appelloyer/findAppelsImpayerByIdBail/{id}';
  static readonly findByIdAndBailPath = 'gestimoweb/api/v1/appelloyer/findByIdAndBail/{idBien}/{periode}';
  static readonly getFirstLoyerImpayerByBienPath = 'gestimoweb/api/v1/appelloyer/getFirstLoyerImpayerByBien/{id}';
  static readonly impayeLoyerParAnneePath = 'gestimoweb/api/v1/appelloyer/impayeParAnnee/{annee}/{idAgence}/{chapitre}';
  static readonly impayeLoyerParMoisAppelLoyerPath = 'gestimoweb/api/v1/appelloyer/impayeParMois/{periode}/{idAgence}/{chapitre}';
  static readonly listMessageEnvoyerAUnLocatairePath = 'gestimoweb/api/v1/appelloyer/listMessageEnvoyerAUnLocataire/{login}';
  static readonly listOfDistinctAnneeAppelPath = 'gestimoweb/api/v1/appelloyer/listOfDistinctAnneeAppel/{idAgence}';
  static readonly listeDesloyerSuperieurAUnePeriodePath = 'gestimoweb/api/v1/appelloyer/listeDesloyerSuperieurAUnePeriode/{idBien}/{periode}';
  static readonly miseAjourDesUnlockDesBauxPath = 'gestimoweb/api/v1/appelloyer/miseAjourDesUnlockDesBaux/{idAgence}';
  static readonly nombreImpayerLoyerParMoisPath = 'gestimoweb/api/v1/appelloyer/nombreImpayerLoyerParMois/{periode}/{idAgence}/{chapitre}';
  static readonly nombrePayerLoyerParMoisPath = 'gestimoweb/api/v1/appelloyer/nombrePayerLoyerParMois/{periode}/{idAgence}/{chapitre}';
  static readonly payeLoyerParAnneePath = 'gestimoweb/api/v1/appelloyer/payeParAnnee/{annee}/{idAgence}/{chapitre}';
  static readonly payeLoyerParMoisPath = 'gestimoweb/api/v1/appelloyer/payeParMois/{periode}/{idAgence}/{chapitre}';
  static readonly ReductionLoyerByPeriodePath = 'gestimoweb/api/v1/appelloyer/reductionLoyerByPeriode';
  static readonly saveAppelLoyersPath = 'gestimoweb/api/v1/appelloyer/save';
  static readonly staisiqueLoyerParMoisPath = 'gestimoweb/api/v1/appelloyer/staisiqueLoyerParMois/{periode}/{idAgence}/{chapitre}';
  static readonly statistiqueLoyerParAnneePath = 'gestimoweb/api/v1/appelloyer/statistiqueLoyerParAnnee/{annee}/{idAgence}/{chapitre}';
  static readonly supprimerPaiementAppelPath = 'gestimoweb/api/v1/appelloyer/supprimerPaiementAppel/{idPeriode}/{idBail}';
  static readonly verifyAccountPath = 'gestimoweb/api/v1/auth/accountVerification/{token}';
  static readonly loginPath = 'gestimoweb/api/v1/auth/login';
  static readonly bailByLocataireEtBienPath = 'gestimoweb/api/v1/bail/bailLocataireetbien/{locataire}/{bien}';
  static readonly clotureBailPath = 'gestimoweb/api/v1/bail/clotureBail/{id}';
  static readonly findOperationByIdPath = 'gestimoweb/api/v1/bail/findoperationbyid/{id}';
  static readonly listDesBauxPourUnBienImmobilierPath = 'gestimoweb/api/v1/bail/getallbailbybien/{id}';
  static readonly listDesBauxPourUnLocatairePath = 'gestimoweb/api/v1/bail/getallbailbylocataire/{id}';
  static readonly nombrebailactifPath = 'gestimoweb/api/v1/bail/nombrebailactif/{idAgence}';
  static readonly nombrebailnonactifPath = 'gestimoweb/api/v1/bail/nombrebailnonactif/{idAgence}';
  static readonly modifierUnBailPath = 'gestimoweb/api/v1/bail/save';
  static readonly supprimerBailPath = 'gestimoweb/api/v1/bail/supprimerBail/{id}';
  static readonly findAllBailAppartementPath = 'gestimoweb/api/v1/bailappartement/all/{idAgence}';
  static readonly findAllOperationsPath = 'gestimoweb/api/v1/bailappartement/alloperation/{idAgence}';
  static readonly deleteBailAppartementPath = 'gestimoweb/api/v1/bailappartement/delete/{id}';
  static readonly findByIDBailAppartementPath = 'gestimoweb/api/v1/bailappartement/findById/{id}';
  static readonly findByNameBailAppartementPath = 'gestimoweb/api/v1/bailappartement/findByName/{name}';
  static readonly saveBailAppartementPath = 'gestimoweb/api/v1/bailappartement/save';
  static readonly findAllBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/all/{idAgence}';
  static readonly deleteBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/delete/{id}';
  static readonly findByIDBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/findById/{id}';
  static readonly findByNameBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/findByName/{name}';
  static readonly saveBailMagasinPath = 'gestimoweb/api/v1/bailmagasin/save';
  static readonly findAllBailVillaPath = 'gestimoweb/api/v1/bailvilla/all/{idAgence}';
  static readonly deleteBailVillaPath = 'gestimoweb/api/v1/bailvilla/delete/{id}';
  static readonly findBailVillaByIDPath = 'gestimoweb/api/v1/bailvilla/findById/{id}';
  static readonly findBailVillaByNamePath = 'gestimoweb/api/v1/bailvilla/findByName/{name}';
  static readonly saveBailVillaPath = 'gestimoweb/api/v1/bailvilla/save';
  static readonly findAllBienPath = 'gestimoweb/api/v1/bienImmobilier/all/{idAgence}/{chapitre}';
  static readonly findAllBienOqpPath = 'gestimoweb/api/v1/bienImmobilier/allBienOccuper/{idAgence}/{chapitre}';
  static readonly rattacherUnBienAUnChapitrePath = 'gestimoweb/api/v1/bienImmobilier/rattacherUnBienAUnChapitre/{idBien}/{chapitre}';
  static readonly findAllCategorieChambrePath = 'gestimoweb/api/v1/categoriechambre/all';
  static readonly deleteCategoryChambrePath = 'gestimoweb/api/v1/categoriechambre/delete/{id}';
  static readonly findCategorieChambreByIDPath = 'gestimoweb/api/v1/categoriechambre/findById/{id}';
  static readonly saveorupdateCategoryChambrePath = 'gestimoweb/api/v1/categoriechambre/saveorupdate';
  static readonly findAllCommunePath = 'gestimoweb/api/v1/commune/all';
  static readonly deleteCommunePath = 'gestimoweb/api/v1/commune/delete/{id}';
  static readonly findCommuneByIDPath = 'gestimoweb/api/v1/commune/findById/{id}';
  static readonly findCommuneByIdPaysPath = 'gestimoweb/api/v1/commune/findByIdVille/{id}';
  static readonly findCommuneByNamePath = 'gestimoweb/api/v1/commune/findByName/{name}';
  static readonly saveCommunePath = 'gestimoweb/api/v1/commune/save';
  static readonly findAllDroitAccessPath = 'gestimoweb/api/v1/droitAccess/';
  static readonly saveDroitAccessPath = 'gestimoweb/api/v1/droitAccess/save';
  static readonly findByIdDroitAccessPath = 'gestimoweb/api/v1/droitAccess/{droitAccessid}';
  static readonly deleteDroitAccessPath = 'gestimoweb/api/v1/droitAccess/{droitAccessid}';
  static readonly findAllEncaissementByIdLocatirePath = 'gestimoweb/api/v1/encaissement/allEncaissementByIdLocatire/{idLocatire}';
  static readonly findAllEncaissementByIdBienImmobilierPath = 'gestimoweb/api/v1/encaissement/allencaissementByIdBien/{id}';
  static readonly listTousEncaissementsPrincipalPath = 'gestimoweb/api/v1/encaissement/findAllEncaissementPrincipal/{idAgence}';
  static readonly findByIdEncaissementPath = 'gestimoweb/api/v1/encaissement/findByIdEncaissement/{id}';
  static readonly getTotalEncaissementparPeriodePath = 'gestimoweb/api/v1/encaissement/getTotalEncaissementparPeriode/{idAgence}/{datedebut}/{datefin}';
  static readonly getTotalEncaissementsEtMontantsDeLoyerParMoisPath = 'gestimoweb/api/v1/encaissement/getTotalEncaissementsEtMontantsDeLoyerParMois/{idAgence}/{datedebut}/{datefin}';
  static readonly getTotalEncaissementsParMoisPath = 'gestimoweb/api/v1/encaissement/getTotalEncaissementsParMois/{idAgence}/{datedebut}/{datefin}';
  static readonly listeLocataireImpayerParAgenceEtPeriodePath = 'gestimoweb/api/v1/encaissement/listeLocataireImpayerParAgenceEtPeriode/{agence}/{periode}';
  static readonly saveEncaissementPath = 'gestimoweb/api/v1/encaissement/saveencaissement';
  static readonly saveEncaissementAvecretourDeListePath = 'gestimoweb/api/v1/encaissement/saveencaissementavecretour';
  static readonly saveEncaissementMassePath = 'gestimoweb/api/v1/encaissement/saveencaissementmasse';
  static readonly saveEncaissementMasseAvecretourDeListePath = 'gestimoweb/api/v1/encaissement/saveencaissementmasseavecretour';
  static readonly sommeEncaissementParAgenceEtParPeriodePath = 'gestimoweb/api/v1/encaissement/sommeEncaissementParAgenceEtParPeriode/{idAgence}/{datedebut}/{datefin}';
  static readonly totalencaissementParIdAppelLoyerPath = 'gestimoweb/api/v1/encaissement/totalencaissement/{id}';
  static readonly totalEncaissementParJourPath = 'gestimoweb/api/v1/encaissement/totalencaissementjournalier/{jour}/{idAgence}/{chapitre}';
  static readonly sendMailGrouperWithAttachmentPath = 'gestimoweb/api/v1/envoimail/sendmailgrouper/{periode}/{idAgence}';
  static readonly sendMailQuittanceWithAttachmentPath = 'gestimoweb/api/v1/envoimail/sendquittancebymail/{id}';
  static readonly saveEspeceEncaissementPath = 'gestimoweb/api/v1/especeencaissement/save';
  static readonly findAllEtagePath = 'gestimoweb/api/v1/etage/all/{idAgence}';
  static readonly deleteEtagePath = 'gestimoweb/api/v1/etage/delete/{id}';
  static readonly findEtageByIDPath = 'gestimoweb/api/v1/etage/findById/{id}';
  static readonly affichageDesEtageParImmeublePath = 'gestimoweb/api/v1/etage/findByIdImmeuble/{id}';
  static readonly findEtageByNamePath = 'gestimoweb/api/v1/etage/findByName/{name}';
  static readonly saveEtagePath = 'gestimoweb/api/v1/etage/save';
  static readonly findAllGroupeDroitPath = 'gestimoweb/api/v1/groupeDroit/';
  static readonly saveGroupeDroitPath = 'gestimoweb/api/v1/groupeDroit/save';
  static readonly findByIdGroupeDroitPath = 'gestimoweb/api/v1/groupeDroit/{groupedroitid}';
  static readonly deleteGroupeDroitPath = 'gestimoweb/api/v1/groupeDroit/{groupedroitid}';
  static readonly telechagerImagePath = 'gestimoweb/api/v1/image/imagesbybien/{id}';
  static readonly uploadImagePath = 'gestimoweb/api/v1/image/upload/{id}/{name}/';
  static readonly affichageDesImmeublesPath = 'gestimoweb/api/v1/immeuble/affichetoutlesimmeubles/{idAgence}';
  static readonly findAllImmeublePath = 'gestimoweb/api/v1/immeuble/all/{idAgence}';
  static readonly deleteImmeublePath = 'gestimoweb/api/v1/immeuble/deleteImmeuble/{id}';
  static readonly findImmeubleByIDPath = 'gestimoweb/api/v1/immeuble/findById/{id}';
  static readonly findImmeubleByIdSitePath = 'gestimoweb/api/v1/immeuble/findByIdSite/{id}';
  static readonly findImmeubleByNamePath = 'gestimoweb/api/v1/immeuble/findByName/{name}';
  static readonly saveImmeubleEtagePath = 'gestimoweb/api/v1/immeuble/saveImeubleEtage';
  static readonly findAllMagasinPath = 'gestimoweb/api/v1/magasin/all/{idAgence}';
  static readonly findAllMagasinLibrePath = 'gestimoweb/api/v1/magasin/alllibre/{idAgence}';
  static readonly findAllMagasinByEtagePath = 'gestimoweb/api/v1/magasin/findAllMagasinByIdEtage/{id}';
  static readonly findAllMagasinByIdSitePath = 'gestimoweb/api/v1/magasin/findAllMagasinByIdSite/{idSite}';
  static readonly findByNameMagasinDtoPath = 'gestimoweb/api/v1/magasin/findByName/{name}';
  static readonly findByIDMagasinPath = 'gestimoweb/api/v1/magasin/findmagasinById/{id}';
  static readonly saveMagasinReturnDtoPath = 'gestimoweb/api/v1/magasin/savemagasin';
  static readonly findByIDMontantLoyerBailPath = 'gestimoweb/api/v1/montantloyerbail/findMontantByBail/{id}';
  static readonly findAllPaysPath = 'gestimoweb/api/v1/pays/all';
  static readonly deletePaysPath = 'gestimoweb/api/v1/pays/delete/{id}';
  static readonly findPaysByIDPath = 'gestimoweb/api/v1/pays/findById/{id}';
  static readonly findPaysByNamePath = 'gestimoweb/api/v1/pays/findByName/{name}';
  static readonly savePaysPath = 'gestimoweb/api/v1/pays/save';
  static readonly findAllServiceAdditionnelPrestationPath = 'gestimoweb/api/v1/prestation/all';
  static readonly deleteServiceAdditionnelPrestationPath = 'gestimoweb/api/v1/prestation/delete/{id}';
  static readonly findServiceAdditionnelByIDPrestationPath = 'gestimoweb/api/v1/prestation/findById/{id}';
  static readonly saveorupdatePrestationPath = 'gestimoweb/api/v1/prestation/saveorupdate';
  static readonly sampleQuitancePath = 'gestimoweb/api/v1/print/quittance/{id}';
  static readonly quittancePeriodePath = 'gestimoweb/api/v1/print/quittancegrouper/{periode}/{idAgence}/{proprio}';
  static readonly recuPaimentPath = 'gestimoweb/api/v1/print/recupaiment/{idEncaissement}';
  static readonly findAllQuartiersPath = 'gestimoweb/api/v1/quartier/all/{idAgence}';
  static readonly deleteQuartierPath = 'gestimoweb/api/v1/quartier/delete/{id}';
  static readonly findByIDQuartiersPath = 'gestimoweb/api/v1/quartier/findById/{id}';
  static readonly findAllQuartierByIdCommunePath = 'gestimoweb/api/v1/quartier/findByIdCommune/{id}';
  static readonly findByNameQuartierPath = 'gestimoweb/api/v1/quartier/findByName/{name}';
  static readonly saveQuartierPath = 'gestimoweb/api/v1/quartier/save';
  static readonly findAllCategorieChambreReservationPath = 'gestimoweb/api/v1/reservation/all';
  static readonly deleteReservationPath = 'gestimoweb/api/v1/reservation/delete/{id}';
  static readonly findCategorieChambreByIDReservationPath = 'gestimoweb/api/v1/reservation/findById/{id}';
  static readonly saveorupdateReservationPath = 'gestimoweb/api/v1/reservation/saveorupdate';
  static readonly saveorupdategoodPath = 'gestimoweb/api/v1/reservation/saveorupdategood';
  static readonly findAllServiceAdditionnelPrestationAdditionnelPath = 'gestimoweb/api/v1/serviceadditionnel/all';
  static readonly deleteServiceAdditionnelPrestationAdditionnelPath = 'gestimoweb/api/v1/serviceadditionnel/delete/{id}';
  static readonly findServiceAdditionnelByIDPrestationAdditionnelPath = 'gestimoweb/api/v1/serviceadditionnel/findById/{id}';
  static readonly saveorupdatePrestationAdditionnelPath = 'gestimoweb/api/v1/serviceadditionnel/saveorupdate';
  static readonly findAllSitesPath = 'gestimoweb/api/v1/sites/all/{idAgence}';
  static readonly deleteSitePath = 'gestimoweb/api/v1/sites/delete/{id}';
  static readonly findSiteByIDPath = 'gestimoweb/api/v1/sites/findById/{id}';
  static readonly findSiteByNamePath = 'gestimoweb/api/v1/sites/findByName/{name}';
  static readonly saveSitesPath = 'gestimoweb/api/v1/sites/save';
  static readonly saveSitePath = 'gestimoweb/api/v1/sites/savesite';
  static readonly getAllEncaissementSuivieDepenseParAgencePath = 'gestimoweb/api/v1/suiviedepense/allSuivieDepense/{idAgence}';
  static readonly getSuivieDepenseByCodeTransactionPath = 'gestimoweb/api/v1/suiviedepense/getSuivieDepenseByCodeTransaction/{codeTransaction}';
  static readonly getSuivieDepenseByIdPath = 'gestimoweb/api/v1/suiviedepense/getSuivieDepenseById/{id}';
  static readonly saveSuivieDepensePath = 'gestimoweb/api/v1/suiviedepense/saveSuivieDepense';
  static readonly suprimerSuiviParIdPath = 'gestimoweb/api/v1/suiviedepense/suprimerSuiviParId/{id}/{idAgence}';
  static readonly getAllUtilisateursByOrderPath = 'gestimoweb/api/v1/utilisateur/all/{idAgence}';
  static readonly getAllGerantsByOrderPath = 'gestimoweb/api/v1/utilisateur/gerants/all/{idAgence}';
  static readonly getUtilisateurByAgencePath = 'gestimoweb/api/v1/utilisateur/getAllutilisateurbyAgence/{idAgence}';
  static readonly getUtilisateurByEmailPath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyemail/{email}';
  static readonly getUtilisateurByIDPath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyid/{id}';
  static readonly getUtilisateurByUsernamePath = 'gestimoweb/api/v1/utilisateur/getutilisateurbyusername/{username}';
  static readonly getAllLocatairesByOrderPath = 'gestimoweb/api/v1/utilisateur/locataires/all/{idAgence}';
  static readonly getAllLocatairesAvecBailPath = 'gestimoweb/api/v1/utilisateur/locataires/ayanbail/{idAgence}';
  static readonly getAllProprietaireByOrderPath = 'gestimoweb/api/v1/utilisateur/proprietaires/all/{idAgence}';
  static readonly saveUtilisateurPath = 'gestimoweb/api/v1/utilisateur/save';
  static readonly getAllSuperviseursByOrderPath = 'gestimoweb/api/v1/utilisateur/superviseurs/all';
  static readonly findAllVillaPath = 'gestimoweb/api/v1/villa/all/{idAgence}';
  static readonly findAllVillaLibrePath = 'gestimoweb/api/v1/villa/alllibre/{idAgence}';
  static readonly findVillaByIdPath = 'gestimoweb/api/v1/villa/findVillaById/{id}';
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
   * @param idAgence undefined
   * @return successful operation
   */
  getAllAgenceByOrderAgenceResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<AgenceImmobilierDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/agences/all/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AgenceImmobilierDTO>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllAgenceByOrderAgence(idAgence: number): __Observable<Array<AgenceImmobilierDTO>> {
    return this.getAllAgenceByOrderAgenceResponse(idAgence).pipe(
      __map(_r => _r.body as Array<AgenceImmobilierDTO>)
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
  getAgenceByEmailAgenceResponse(email: string): __Observable<__StrictHttpResponse<AgenceImmobilierDTO>> {
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
        return _r as __StrictHttpResponse<AgenceImmobilierDTO>;
      })
    );
  }
  /**
   * @param email undefined
   * @return successful operation
   */
  getAgenceByEmailAgence(email: string): __Observable<AgenceImmobilierDTO> {
    return this.getAgenceByEmailAgenceResponse(email).pipe(
      __map(_r => _r.body as AgenceImmobilierDTO)
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
  authenticateAgenceResponse(body?: AgenceRequestDto): __Observable<__StrictHttpResponse<AgenceImmobilierDTO>> {
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
        return _r as __StrictHttpResponse<AgenceImmobilierDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateAgence(body?: AgenceRequestDto): __Observable<AgenceImmobilierDTO> {
    return this.authenticateAgenceResponse(body).pipe(
      __map(_r => _r.body as AgenceImmobilierDTO)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllAppartementResponse(id: number): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/all/${id}`,
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
  findAllAppartement(id: number): __Observable<Array<AppartementDto>> {
    return this.findAllAppartementResponse(id).pipe(
      __map(_r => _r.body as Array<AppartementDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllAppartementLibreResponse(id: number): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/alllibre/${id}`,
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
  findAllAppartementLibre(id: number): __Observable<Array<AppartementDto>> {
    return this.findAllAppartementLibreResponse(id).pipe(
      __map(_r => _r.body as Array<AppartementDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllAppartementMeubleResponse(id: number): __Observable<__StrictHttpResponse<Array<AppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appartement/allmeuble/${id}`,
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
  findAllAppartementMeuble(id: number): __Observable<Array<AppartementDto>> {
    return this.findAllAppartementMeubleResponse(id).pipe(
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
   * @param id undefined
   * @return successful operation
   */
  deleteAppelDtoResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/clotureOfAppelDtoByID/${id}`,
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
  deleteAppelDto(id: number): __Observable<boolean> {
    return this.deleteAppelDtoResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param params The `ApiService.AppelLoyersParPeriodeParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * @return successful operation
   */
  AppelLoyersParPeriodeResponse(params: ApiService.AppelLoyersParPeriodeParams): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllAppelloyerByPeriode/${params.periode}/${params.idAgence}`,
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
   * @param params The `ApiService.AppelLoyersParPeriodeParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * @return successful operation
   */
  AppelLoyersParPeriode(params: ApiService.AppelLoyersParPeriodeParams): __Observable<Array<AppelLoyersFactureDto>> {
    return this.AppelLoyersParPeriodeResponse(params).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  listTousAppelsLoyersResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllAppelsLoyer/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  listTousAppelsLoyers(idAgence: number): __Observable<Array<AppelLoyersFactureDto>> {
    return this.listTousAppelsLoyersResponse(idAgence).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllPeriodeResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<PeriodeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllPeriodeAppel/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PeriodeDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllPeriode(idAgence: number): __Observable<Array<PeriodeDto>> {
    return this.findAllPeriodeResponse(idAgence).pipe(
      __map(_r => _r.body as Array<PeriodeDto>)
    );
  }

  /**
   * @param params The `ApiService.FindAllPeriodeByAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  findAllPeriodeByAnneeResponse(params: ApiService.FindAllPeriodeByAnneeParams): __Observable<__StrictHttpResponse<Array<PeriodeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllPeriodeByAnnee/${params.annee}/${params.idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PeriodeDto>>;
      })
    );
  }
  /**
   * @param params The `ApiService.FindAllPeriodeByAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  findAllPeriodeByAnnee(params: ApiService.FindAllPeriodeByAnneeParams): __Observable<Array<PeriodeDto>> {
    return this.findAllPeriodeByAnneeResponse(params).pipe(
      __map(_r => _r.body as Array<PeriodeDto>)
    );
  }

  /**
   * @param params The `ApiService.FindAllPeriodeChiffreEtLettreByAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  findAllPeriodeChiffreEtLettreByAnneeResponse(params: ApiService.FindAllPeriodeChiffreEtLettreByAnneeParams): __Observable<__StrictHttpResponse<Array<AnneeAppelLoyersDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAllPeriodeChiffreEtLettreByAnnee/${params.annee}/${params.idAgence}`,
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
   * @param params The `ApiService.FindAllPeriodeChiffreEtLettreByAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  findAllPeriodeChiffreEtLettreByAnnee(params: ApiService.FindAllPeriodeChiffreEtLettreByAnneeParams): __Observable<Array<AnneeAppelLoyersDto>> {
    return this.findAllPeriodeChiffreEtLettreByAnneeResponse(params).pipe(
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
   * @param idBail undefined
   * @return successful operation
   */
  listDesLoyersParBailResponse(idBail: number): __Observable<__StrictHttpResponse<Array<AppelLoyerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAppelsByIdBail/${idBail}`,
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
   * @param idBail undefined
   * @return successful operation
   */
  listDesLoyersParBail(idBail: number): __Observable<Array<AppelLoyerDto>> {
    return this.listDesLoyersParBailResponse(idBail).pipe(
      __map(_r => _r.body as Array<AppelLoyerDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  listDesLoyersImpayerParBailResponse(id: number): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findAppelsImpayerByIdBail/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  listDesLoyersImpayerParBail(id: number): __Observable<Array<AppelLoyersFactureDto>> {
    return this.listDesLoyersImpayerParBailResponse(id).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
    );
  }

  /**
   * @param params The `ApiService.FindByIdAndBailParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idBien`:
   *
   * @return successful operation
   */
  findByIdAndBailResponse(params: ApiService.FindByIdAndBailParams): __Observable<__StrictHttpResponse<AppelLoyersFactureDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/findByIdAndBail/${params.idBien}/${params.periode}`,
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
   * @param params The `ApiService.FindByIdAndBailParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idBien`:
   *
   * @return successful operation
   */
  findByIdAndBail(params: ApiService.FindByIdAndBailParams): __Observable<AppelLoyersFactureDto> {
    return this.findByIdAndBailResponse(params).pipe(
      __map(_r => _r.body as AppelLoyersFactureDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  getFirstLoyerImpayerByBienResponse(id: number): __Observable<__StrictHttpResponse<AppelLoyersFactureDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/getFirstLoyerImpayerByBien/${id}`,
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
  getFirstLoyerImpayerByBien(id: number): __Observable<AppelLoyersFactureDto> {
    return this.getFirstLoyerImpayerByBienResponse(id).pipe(
      __map(_r => _r.body as AppelLoyersFactureDto)
    );
  }

  /**
   * @param params The `ApiService.ImpayeLoyerParAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  impayeLoyerParAnneeResponse(params: ApiService.ImpayeLoyerParAnneeParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/impayeParAnnee/${params.annee}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.ImpayeLoyerParAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  impayeLoyerParAnnee(params: ApiService.ImpayeLoyerParAnneeParams): __Observable<number> {
    return this.impayeLoyerParAnneeResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `ApiService.ImpayeLoyerParMoisAppelLoyerParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  impayeLoyerParMoisAppelLoyerResponse(params: ApiService.ImpayeLoyerParMoisAppelLoyerParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/impayeParMois/${params.periode}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.ImpayeLoyerParMoisAppelLoyerParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  impayeLoyerParMoisAppelLoyer(params: ApiService.ImpayeLoyerParMoisAppelLoyerParams): __Observable<number> {
    return this.impayeLoyerParMoisAppelLoyerResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param login undefined
   * @return successful operation
   */
  listMessageEnvoyerAUnLocataireResponse(login: string): __Observable<__StrictHttpResponse<Array<MessageEnvoyerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/listMessageEnvoyerAUnLocataire/${login}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MessageEnvoyerDto>>;
      })
    );
  }
  /**
   * @param login undefined
   * @return successful operation
   */
  listMessageEnvoyerAUnLocataire(login: string): __Observable<Array<MessageEnvoyerDto>> {
    return this.listMessageEnvoyerAUnLocataireResponse(login).pipe(
      __map(_r => _r.body as Array<MessageEnvoyerDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  listOfDistinctAnneeAppelResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<number>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/listOfDistinctAnneeAppel/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  listOfDistinctAnneeAppel(idAgence: number): __Observable<Array<number>> {
    return this.listOfDistinctAnneeAppelResponse(idAgence).pipe(
      __map(_r => _r.body as Array<number>)
    );
  }

  /**
   * @param params The `ApiService.ListeDesloyerSuperieurAUnePeriodeParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idBien`:
   *
   * @return successful operation
   */
  listeDesloyerSuperieurAUnePeriodeResponse(params: ApiService.ListeDesloyerSuperieurAUnePeriodeParams): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/listeDesloyerSuperieurAUnePeriode/${params.idBien}/${params.periode}`,
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
   * @param params The `ApiService.ListeDesloyerSuperieurAUnePeriodeParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idBien`:
   *
   * @return successful operation
   */
  listeDesloyerSuperieurAUnePeriode(params: ApiService.ListeDesloyerSuperieurAUnePeriodeParams): __Observable<Array<AppelLoyersFactureDto>> {
    return this.listeDesloyerSuperieurAUnePeriodeResponse(params).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  miseAjourDesUnlockDesBauxResponse(idAgence: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/miseAjourDesUnlockDesBaux/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  miseAjourDesUnlockDesBaux(idAgence: number): __Observable<boolean> {
    return this.miseAjourDesUnlockDesBauxResponse(idAgence).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param params The `ApiService.NombreImpayerLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  nombreImpayerLoyerParMoisResponse(params: ApiService.NombreImpayerLoyerParMoisParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/nombreImpayerLoyerParMois/${params.periode}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.NombreImpayerLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  nombreImpayerLoyerParMois(params: ApiService.NombreImpayerLoyerParMoisParams): __Observable<number> {
    return this.nombreImpayerLoyerParMoisResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `ApiService.NombrePayerLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  nombrePayerLoyerParMoisResponse(params: ApiService.NombrePayerLoyerParMoisParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/nombrePayerLoyerParMois/${params.periode}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.NombrePayerLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  nombrePayerLoyerParMois(params: ApiService.NombrePayerLoyerParMoisParams): __Observable<number> {
    return this.nombrePayerLoyerParMoisResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `ApiService.PayeLoyerParAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  payeLoyerParAnneeResponse(params: ApiService.PayeLoyerParAnneeParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/payeParAnnee/${params.annee}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.PayeLoyerParAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  payeLoyerParAnnee(params: ApiService.PayeLoyerParAnneeParams): __Observable<number> {
    return this.payeLoyerParAnneeResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `ApiService.PayeLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  payeLoyerParMoisResponse(params: ApiService.PayeLoyerParMoisParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/payeParMois/${params.periode}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.PayeLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  payeLoyerParMois(params: ApiService.PayeLoyerParMoisParams): __Observable<number> {
    return this.payeLoyerParMoisResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  ReductionLoyerByPeriodeResponse(body?: PourcentageAppelDto): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/reductionLoyerByPeriode`,
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
   * @param body undefined
   * @return successful operation
   */
  ReductionLoyerByPeriode(body?: PourcentageAppelDto): __Observable<Array<AppelLoyersFactureDto>> {
    return this.ReductionLoyerByPeriodeResponse(body).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
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
   * @param params The `ApiService.StaisiqueLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  staisiqueLoyerParMoisResponse(params: ApiService.StaisiqueLoyerParMoisParams): __Observable<__StrictHttpResponse<StatistiquePeriodeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/staisiqueLoyerParMois/${params.periode}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StatistiquePeriodeDto>;
      })
    );
  }
  /**
   * @param params The `ApiService.StaisiqueLoyerParMoisParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  staisiqueLoyerParMois(params: ApiService.StaisiqueLoyerParMoisParams): __Observable<StatistiquePeriodeDto> {
    return this.staisiqueLoyerParMoisResponse(params).pipe(
      __map(_r => _r.body as StatistiquePeriodeDto)
    );
  }

  /**
   * @param params The `ApiService.StatistiqueLoyerParAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  statistiqueLoyerParAnneeResponse(params: ApiService.StatistiqueLoyerParAnneeParams): __Observable<__StrictHttpResponse<StatistiquePeriodeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/statistiqueLoyerParAnnee/${params.annee}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StatistiquePeriodeDto>;
      })
    );
  }
  /**
   * @param params The `ApiService.StatistiqueLoyerParAnneeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * - `annee`:
   *
   * @return successful operation
   */
  statistiqueLoyerParAnnee(params: ApiService.StatistiqueLoyerParAnneeParams): __Observable<StatistiquePeriodeDto> {
    return this.statistiqueLoyerParAnneeResponse(params).pipe(
      __map(_r => _r.body as StatistiquePeriodeDto)
    );
  }

  /**
   * @param params The `ApiService.SupprimerPaiementAppelParams` containing the following parameters:
   *
   * - `idPeriode`:
   *
   * - `idBail`:
   *
   * @return successful operation
   */
  supprimerPaiementAppelResponse(params: ApiService.SupprimerPaiementAppelParams): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/appelloyer/supprimerPaiementAppel/${params.idPeriode}/${params.idBail}`,
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
   * @param params The `ApiService.SupprimerPaiementAppelParams` containing the following parameters:
   *
   * - `idPeriode`:
   *
   * - `idBail`:
   *
   * @return successful operation
   */
  supprimerPaiementAppel(params: ApiService.SupprimerPaiementAppelParams): __Observable<Array<AppelLoyersFactureDto>> {
    return this.supprimerPaiementAppelResponse(params).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
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
   * @param params The `ApiService.BailByLocataireEtBienParams` containing the following parameters:
   *
   * - `locataire`:
   *
   * - `bien`:
   *
   * @return successful operation
   */
  bailByLocataireEtBienResponse(params: ApiService.BailByLocataireEtBienParams): __Observable<__StrictHttpResponse<LocataireEncaisDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bail/bailLocataireetbien/${params.locataire}/${params.bien}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LocataireEncaisDTO>;
      })
    );
  }
  /**
   * @param params The `ApiService.BailByLocataireEtBienParams` containing the following parameters:
   *
   * - `locataire`:
   *
   * - `bien`:
   *
   * @return successful operation
   */
  bailByLocataireEtBien(params: ApiService.BailByLocataireEtBienParams): __Observable<LocataireEncaisDTO> {
    return this.bailByLocataireEtBienResponse(params).pipe(
      __map(_r => _r.body as LocataireEncaisDTO)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  clotureBailResponse(id: number): __Observable<__StrictHttpResponse<Array<OperationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/bail/clotureBail/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  clotureBail(id: number): __Observable<Array<OperationDto>> {
    return this.clotureBailResponse(id).pipe(
      __map(_r => _r.body as Array<OperationDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findOperationByIdResponse(id: number): __Observable<__StrictHttpResponse<OperationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bail/findoperationbyid/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findOperationById(id: number): __Observable<OperationDto> {
    return this.findOperationByIdResponse(id).pipe(
      __map(_r => _r.body as OperationDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  listDesBauxPourUnBienImmobilierResponse(id: number): __Observable<__StrictHttpResponse<Array<AppelLoyersFactureDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bail/getallbailbybien/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  listDesBauxPourUnBienImmobilier(id: number): __Observable<Array<AppelLoyersFactureDto>> {
    return this.listDesBauxPourUnBienImmobilierResponse(id).pipe(
      __map(_r => _r.body as Array<AppelLoyersFactureDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  listDesBauxPourUnLocataireResponse(id: number): __Observable<__StrictHttpResponse<Array<OperationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bail/getallbailbylocataire/${id}`,
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
   * @param id undefined
   * @return successful operation
   */
  listDesBauxPourUnLocataire(id: number): __Observable<Array<OperationDto>> {
    return this.listDesBauxPourUnLocataireResponse(id).pipe(
      __map(_r => _r.body as Array<OperationDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  nombrebailactifResponse(idAgence: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bail/nombrebailactif/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  nombrebailactif(idAgence: number): __Observable<number> {
    return this.nombrebailactifResponse(idAgence).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  nombrebailnonactifResponse(idAgence: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bail/nombrebailnonactif/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  nombrebailnonactif(idAgence: number): __Observable<number> {
    return this.nombrebailnonactifResponse(idAgence).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  modifierUnBailResponse(body?: BailModifDto): __Observable<__StrictHttpResponse<OperationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/bail/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  modifierUnBail(body?: BailModifDto): __Observable<OperationDto> {
    return this.modifierUnBailResponse(body).pipe(
      __map(_r => _r.body as OperationDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  supprimerBailResponse(id: number): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/bail/supprimerBail/${id}`,
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
  supprimerBail(id: number): __Observable<boolean> {
    return this.supprimerBailResponse(id).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllBailAppartementResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<BailAppartementDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllBailAppartement(idAgence: number): __Observable<Array<BailAppartementDto>> {
    return this.findAllBailAppartementResponse(idAgence).pipe(
      __map(_r => _r.body as Array<BailAppartementDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllOperationsResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<OperationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailappartement/alloperation/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllOperations(idAgence: number): __Observable<Array<OperationDto>> {
    return this.findAllOperationsResponse(idAgence).pipe(
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
  saveBailAppartementResponse(body?: BailAppartementDto): __Observable<__StrictHttpResponse<OperationDto>> {
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
        return _r as __StrictHttpResponse<OperationDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveBailAppartement(body?: BailAppartementDto): __Observable<OperationDto> {
    return this.saveBailAppartementResponse(body).pipe(
      __map(_r => _r.body as OperationDto)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllBailMagasinResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<BailMagasinDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailmagasin/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllBailMagasin(idAgence: number): __Observable<Array<BailMagasinDto>> {
    return this.findAllBailMagasinResponse(idAgence).pipe(
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
  saveBailMagasinResponse(body?: BailMagasinDto): __Observable<__StrictHttpResponse<OperationDto>> {
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
        return _r as __StrictHttpResponse<OperationDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveBailMagasin(body?: BailMagasinDto): __Observable<OperationDto> {
    return this.saveBailMagasinResponse(body).pipe(
      __map(_r => _r.body as OperationDto)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllBailVillaResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<BailVillaDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bailvilla/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllBailVilla(idAgence: number): __Observable<Array<BailVillaDto>> {
    return this.findAllBailVillaResponse(idAgence).pipe(
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
  saveBailVillaResponse(body?: BailVillaDto): __Observable<__StrictHttpResponse<OperationDto>> {
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
        return _r as __StrictHttpResponse<OperationDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveBailVilla(body?: BailVillaDto): __Observable<OperationDto> {
    return this.saveBailVillaResponse(body).pipe(
      __map(_r => _r.body as OperationDto)
    );
  }

  /**
   * @param params The `ApiService.FindAllBienParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  findAllBienResponse(params: ApiService.FindAllBienParams): __Observable<__StrictHttpResponse<Array<BienImmobilierAffiheDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bienImmobilier/all/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BienImmobilierAffiheDto>>;
      })
    );
  }
  /**
   * @param params The `ApiService.FindAllBienParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  findAllBien(params: ApiService.FindAllBienParams): __Observable<Array<BienImmobilierAffiheDto>> {
    return this.findAllBienResponse(params).pipe(
      __map(_r => _r.body as Array<BienImmobilierAffiheDto>)
    );
  }

  /**
   * @param params The `ApiService.FindAllBienOqpParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  findAllBienOqpResponse(params: ApiService.FindAllBienOqpParams): __Observable<__StrictHttpResponse<Array<BienImmobilierAffiheDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bienImmobilier/allBienOccuper/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BienImmobilierAffiheDto>>;
      })
    );
  }
  /**
   * @param params The `ApiService.FindAllBienOqpParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  findAllBienOqp(params: ApiService.FindAllBienOqpParams): __Observable<Array<BienImmobilierAffiheDto>> {
    return this.findAllBienOqpResponse(params).pipe(
      __map(_r => _r.body as Array<BienImmobilierAffiheDto>)
    );
  }

  /**
   * @param params The `ApiService.RattacherUnBienAUnChapitreParams` containing the following parameters:
   *
   * - `idBien`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  rattacherUnBienAUnChapitreResponse(params: ApiService.RattacherUnBienAUnChapitreParams): __Observable<__StrictHttpResponse<BienImmobilierAffiheDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/bienImmobilier/rattacherUnBienAUnChapitre/${params.idBien}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BienImmobilierAffiheDto>;
      })
    );
  }
  /**
   * @param params The `ApiService.RattacherUnBienAUnChapitreParams` containing the following parameters:
   *
   * - `idBien`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  rattacherUnBienAUnChapitre(params: ApiService.RattacherUnBienAUnChapitreParams): __Observable<BienImmobilierAffiheDto> {
    return this.rattacherUnBienAUnChapitreResponse(params).pipe(
      __map(_r => _r.body as BienImmobilierAffiheDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllCategorieChambreResponse(): __Observable<__StrictHttpResponse<Array<CategoryChambreSaveOrUpdateDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/categoriechambre/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryChambreSaveOrUpdateDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCategorieChambre(): __Observable<Array<CategoryChambreSaveOrUpdateDto>> {
    return this.findAllCategorieChambreResponse().pipe(
      __map(_r => _r.body as Array<CategoryChambreSaveOrUpdateDto>)
    );
  }

  /**
   * @param id undefined
   */
  deleteCategoryChambreResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/categoriechambre/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteCategoryChambre(id: number): __Observable<null> {
    return this.deleteCategoryChambreResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findCategorieChambreByIDResponse(id: number): __Observable<__StrictHttpResponse<CategoryChambreSaveOrUpdateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/categoriechambre/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryChambreSaveOrUpdateDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findCategorieChambreByID(id: number): __Observable<CategoryChambreSaveOrUpdateDto> {
    return this.findCategorieChambreByIDResponse(id).pipe(
      __map(_r => _r.body as CategoryChambreSaveOrUpdateDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdateCategoryChambreResponse(body?: CategoryChambreSaveOrUpdateDto): __Observable<__StrictHttpResponse<CategoryChambreSaveOrUpdateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/categoriechambre/saveorupdate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryChambreSaveOrUpdateDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdateCategoryChambre(body?: CategoryChambreSaveOrUpdateDto): __Observable<CategoryChambreSaveOrUpdateDto> {
    return this.saveorupdateCategoryChambreResponse(body).pipe(
      __map(_r => _r.body as CategoryChambreSaveOrUpdateDto)
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
   * @return successful operation
   */
  findAllDroitAccessResponse(): __Observable<__StrictHttpResponse<Array<DroitAccesDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/droitAccess/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DroitAccesDTO>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllDroitAccess(): __Observable<Array<DroitAccesDTO>> {
    return this.findAllDroitAccessResponse().pipe(
      __map(_r => _r.body as Array<DroitAccesDTO>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveDroitAccessResponse(body?: DroitAccesPayloadDTO): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/droitAccess/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveDroitAccess(body?: DroitAccesPayloadDTO): __Observable<number> {
    return this.saveDroitAccessResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param droitAccessid undefined
   * @return successful operation
   */
  findByIdDroitAccessResponse(droitAccessid: number): __Observable<__StrictHttpResponse<DroitAccesDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/droitAccess/${droitAccessid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DroitAccesDTO>;
      })
    );
  }
  /**
   * @param droitAccessid undefined
   * @return successful operation
   */
  findByIdDroitAccess(droitAccessid: number): __Observable<DroitAccesDTO> {
    return this.findByIdDroitAccessResponse(droitAccessid).pipe(
      __map(_r => _r.body as DroitAccesDTO)
    );
  }

  /**
   * @param droitAccessid undefined
   */
  deleteDroitAccessResponse(droitAccessid: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/droitAccess/${droitAccessid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param droitAccessid undefined
   */
  deleteDroitAccess(droitAccessid: number): __Observable<null> {
    return this.deleteDroitAccessResponse(droitAccessid).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idLocatire undefined
   * @return successful operation
   */
  findAllEncaissementByIdLocatireResponse(idLocatire: number): __Observable<__StrictHttpResponse<Array<EncaissementPrincipalDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/allEncaissementByIdLocatire/${idLocatire}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EncaissementPrincipalDTO>>;
      })
    );
  }
  /**
   * @param idLocatire undefined
   * @return successful operation
   */
  findAllEncaissementByIdLocatire(idLocatire: number): __Observable<Array<EncaissementPrincipalDTO>> {
    return this.findAllEncaissementByIdLocatireResponse(idLocatire).pipe(
      __map(_r => _r.body as Array<EncaissementPrincipalDTO>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findAllEncaissementByIdBienImmobilierResponse(id: number): __Observable<__StrictHttpResponse<Array<EncaissementPrincipalDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/allencaissementByIdBien/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EncaissementPrincipalDTO>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findAllEncaissementByIdBienImmobilier(id: number): __Observable<Array<EncaissementPrincipalDTO>> {
    return this.findAllEncaissementByIdBienImmobilierResponse(id).pipe(
      __map(_r => _r.body as Array<EncaissementPrincipalDTO>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  listTousEncaissementsPrincipalResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<EncaissementPrincipalDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/findAllEncaissementPrincipal/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EncaissementPrincipalDTO>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  listTousEncaissementsPrincipal(idAgence: number): __Observable<Array<EncaissementPrincipalDTO>> {
    return this.listTousEncaissementsPrincipalResponse(idAgence).pipe(
      __map(_r => _r.body as Array<EncaissementPrincipalDTO>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdEncaissementResponse(id: number): __Observable<__StrictHttpResponse<EncaissementPrincipalDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/findByIdEncaissement/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EncaissementPrincipalDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdEncaissement(id: number): __Observable<EncaissementPrincipalDTO> {
    return this.findByIdEncaissementResponse(id).pipe(
      __map(_r => _r.body as EncaissementPrincipalDTO)
    );
  }

  /**
   * @param params The `ApiService.GetTotalEncaissementparPeriodeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  getTotalEncaissementparPeriodeResponse(params: ApiService.GetTotalEncaissementparPeriodeParams): __Observable<__StrictHttpResponse<Array<EncaissementPrincipalDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/getTotalEncaissementparPeriode/${params.idAgence}/${params.datedebut}/${params.datefin}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EncaissementPrincipalDTO>>;
      })
    );
  }
  /**
   * @param params The `ApiService.GetTotalEncaissementparPeriodeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  getTotalEncaissementparPeriode(params: ApiService.GetTotalEncaissementparPeriodeParams): __Observable<Array<EncaissementPrincipalDTO>> {
    return this.getTotalEncaissementparPeriodeResponse(params).pipe(
      __map(_r => _r.body as Array<EncaissementPrincipalDTO>)
    );
  }

  /**
   * @param params The `ApiService.GetTotalEncaissementsEtMontantsDeLoyerParMoisParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  getTotalEncaissementsEtMontantsDeLoyerParMoisResponse(params: ApiService.GetTotalEncaissementsEtMontantsDeLoyerParMoisParams): __Observable<__StrictHttpResponse<{[key: string]: Array<number>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/getTotalEncaissementsEtMontantsDeLoyerParMois/${params.idAgence}/${params.datedebut}/${params.datefin}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: Array<number>}>;
      })
    );
  }
  /**
   * @param params The `ApiService.GetTotalEncaissementsEtMontantsDeLoyerParMoisParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  getTotalEncaissementsEtMontantsDeLoyerParMois(params: ApiService.GetTotalEncaissementsEtMontantsDeLoyerParMoisParams): __Observable<{[key: string]: Array<number>}> {
    return this.getTotalEncaissementsEtMontantsDeLoyerParMoisResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: Array<number>})
    );
  }

  /**
   * @param params The `ApiService.GetTotalEncaissementsParMoisParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  getTotalEncaissementsParMoisResponse(params: ApiService.GetTotalEncaissementsParMoisParams): __Observable<__StrictHttpResponse<{[key: string]: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/getTotalEncaissementsParMois/${params.idAgence}/${params.datedebut}/${params.datefin}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: number}>;
      })
    );
  }
  /**
   * @param params The `ApiService.GetTotalEncaissementsParMoisParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  getTotalEncaissementsParMois(params: ApiService.GetTotalEncaissementsParMoisParams): __Observable<{[key: string]: number}> {
    return this.getTotalEncaissementsParMoisResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: number})
    );
  }

  /**
   * @param params The `ApiService.ListeLocataireImpayerParAgenceEtPeriodeParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `agence`:
   *
   * @return successful operation
   */
  listeLocataireImpayerParAgenceEtPeriodeResponse(params: ApiService.ListeLocataireImpayerParAgenceEtPeriodeParams): __Observable<__StrictHttpResponse<Array<LocataireEncaisDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/listeLocataireImpayerParAgenceEtPeriode/${params.agence}/${params.periode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LocataireEncaisDTO>>;
      })
    );
  }
  /**
   * @param params The `ApiService.ListeLocataireImpayerParAgenceEtPeriodeParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `agence`:
   *
   * @return successful operation
   */
  listeLocataireImpayerParAgenceEtPeriode(params: ApiService.ListeLocataireImpayerParAgenceEtPeriodeParams): __Observable<Array<LocataireEncaisDTO>> {
    return this.listeLocataireImpayerParAgenceEtPeriodeResponse(params).pipe(
      __map(_r => _r.body as Array<LocataireEncaisDTO>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveEncaissementResponse(body?: EncaissementPayloadDto): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/encaissement/saveencaissement`,
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
  saveEncaissement(body?: EncaissementPayloadDto): __Observable<boolean> {
    return this.saveEncaissementResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveEncaissementAvecretourDeListeResponse(body?: EncaissementPayloadDto): __Observable<__StrictHttpResponse<Array<EncaissementPrincipalDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/encaissement/saveencaissementavecretour`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EncaissementPrincipalDTO>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveEncaissementAvecretourDeListe(body?: EncaissementPayloadDto): __Observable<Array<EncaissementPrincipalDTO>> {
    return this.saveEncaissementAvecretourDeListeResponse(body).pipe(
      __map(_r => _r.body as Array<EncaissementPrincipalDTO>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveEncaissementMasseResponse(body?: Array<EncaissementPayloadDto>): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/encaissement/saveencaissementmasse`,
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
  saveEncaissementMasse(body?: Array<EncaissementPayloadDto>): __Observable<boolean> {
    return this.saveEncaissementMasseResponse(body).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveEncaissementMasseAvecretourDeListeResponse(body?: EncaissementPayloadDto): __Observable<__StrictHttpResponse<Array<LocataireEncaisDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/encaissement/saveencaissementmasseavecretour`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LocataireEncaisDTO>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveEncaissementMasseAvecretourDeListe(body?: EncaissementPayloadDto): __Observable<Array<LocataireEncaisDTO>> {
    return this.saveEncaissementMasseAvecretourDeListeResponse(body).pipe(
      __map(_r => _r.body as Array<LocataireEncaisDTO>)
    );
  }

  /**
   * @param params The `ApiService.SommeEncaissementParAgenceEtParPeriodeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  sommeEncaissementParAgenceEtParPeriodeResponse(params: ApiService.SommeEncaissementParAgenceEtParPeriodeParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/sommeEncaissementParAgenceEtParPeriode/${params.idAgence}/${params.datedebut}/${params.datefin}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.SommeEncaissementParAgenceEtParPeriodeParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `datefin`:
   *
   * - `datedebut`:
   *
   * @return successful operation
   */
  sommeEncaissementParAgenceEtParPeriode(params: ApiService.SommeEncaissementParAgenceEtParPeriodeParams): __Observable<number> {
    return this.sommeEncaissementParAgenceEtParPeriodeResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  totalencaissementParIdAppelLoyerResponse(id: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/totalencaissement/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  totalencaissementParIdAppelLoyer(id: number): __Observable<number> {
    return this.totalencaissementParIdAppelLoyerResponse(id).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `ApiService.TotalEncaissementParJourParams` containing the following parameters:
   *
   * - `jour`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  totalEncaissementParJourResponse(params: ApiService.TotalEncaissementParJourParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/encaissement/totalencaissementjournalier/${params.jour}/${params.idAgence}/${params.chapitre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `ApiService.TotalEncaissementParJourParams` containing the following parameters:
   *
   * - `jour`:
   *
   * - `idAgence`:
   *
   * - `chapitre`:
   *
   * @return successful operation
   */
  totalEncaissementParJour(params: ApiService.TotalEncaissementParJourParams): __Observable<number> {
    return this.totalEncaissementParJourResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `ApiService.SendMailGrouperWithAttachmentParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * @return successful operation
   */
  sendMailGrouperWithAttachmentResponse(params: ApiService.SendMailGrouperWithAttachmentParams): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/envoimail/sendmailgrouper/${params.periode}/${params.idAgence}`,
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
   * @param params The `ApiService.SendMailGrouperWithAttachmentParams` containing the following parameters:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * @return successful operation
   */
  sendMailGrouperWithAttachment(params: ApiService.SendMailGrouperWithAttachmentParams): __Observable<boolean> {
    return this.sendMailGrouperWithAttachmentResponse(params).pipe(
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllEtageResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<EtageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/etage/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllEtage(idAgence: number): __Observable<Array<EtageDto>> {
    return this.findAllEtageResponse(idAgence).pipe(
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
  affichageDesEtageParImmeubleResponse(id: number): __Observable<__StrictHttpResponse<Array<EtageAfficheDto>>> {
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
        return _r as __StrictHttpResponse<Array<EtageAfficheDto>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  affichageDesEtageParImmeuble(id: number): __Observable<Array<EtageAfficheDto>> {
    return this.affichageDesEtageParImmeubleResponse(id).pipe(
      __map(_r => _r.body as Array<EtageAfficheDto>)
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
  findAllGroupeDroitResponse(): __Observable<__StrictHttpResponse<Array<GroupeDroitDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/groupeDroit/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GroupeDroitDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllGroupeDroit(): __Observable<Array<GroupeDroitDto>> {
    return this.findAllGroupeDroitResponse().pipe(
      __map(_r => _r.body as Array<GroupeDroitDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveGroupeDroitResponse(body?: GroupeDroitDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/groupeDroit/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveGroupeDroit(body?: GroupeDroitDto): __Observable<number> {
    return this.saveGroupeDroitResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param groupedroitid undefined
   * @return successful operation
   */
  findByIdGroupeDroitResponse(groupedroitid: number): __Observable<__StrictHttpResponse<GroupeDroitDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/groupeDroit/${groupedroitid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupeDroitDto>;
      })
    );
  }
  /**
   * @param groupedroitid undefined
   * @return successful operation
   */
  findByIdGroupeDroit(groupedroitid: number): __Observable<GroupeDroitDto> {
    return this.findByIdGroupeDroitResponse(groupedroitid).pipe(
      __map(_r => _r.body as GroupeDroitDto)
    );
  }

  /**
   * @param groupedroitid undefined
   */
  deleteGroupeDroitResponse(groupedroitid: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/groupeDroit/${groupedroitid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param groupedroitid undefined
   */
  deleteGroupeDroit(groupedroitid: number): __Observable<null> {
    return this.deleteGroupeDroitResponse(groupedroitid).pipe(
      __map(_r => _r.body as null)
    );
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
   * @param params The `ApiService.UploadImageParams` containing the following parameters:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return successful operation
   */
  uploadImageResponse(params: ApiService.UploadImageParams): __Observable<__StrictHttpResponse<boolean>> {
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
   * @param params The `ApiService.UploadImageParams` containing the following parameters:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return successful operation
   */
  uploadImage(params: ApiService.UploadImageParams): __Observable<boolean> {
    return this.uploadImageResponse(params).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  affichageDesImmeublesResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<ImmeubleEtageDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/immeuble/affichetoutlesimmeubles/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImmeubleEtageDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  affichageDesImmeubles(idAgence: number): __Observable<Array<ImmeubleEtageDto>> {
    return this.affichageDesImmeublesResponse(idAgence).pipe(
      __map(_r => _r.body as Array<ImmeubleEtageDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllImmeubleResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<ImmeubleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/immeuble/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllImmeuble(idAgence: number): __Observable<Array<ImmeubleDto>> {
    return this.findAllImmeubleResponse(idAgence).pipe(
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
  saveImmeubleEtageResponse(body?: ImmeubleEtageDto): __Observable<__StrictHttpResponse<ImmeubleEtageDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/immeuble/saveImeubleEtage`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImmeubleEtageDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveImmeubleEtage(body?: ImmeubleEtageDto): __Observable<ImmeubleEtageDto> {
    return this.saveImmeubleEtageResponse(body).pipe(
      __map(_r => _r.body as ImmeubleEtageDto)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllMagasinResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<MagasinResponseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllMagasin(idAgence: number): __Observable<Array<MagasinResponseDto>> {
    return this.findAllMagasinResponse(idAgence).pipe(
      __map(_r => _r.body as Array<MagasinResponseDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllMagasinLibreResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<MagasinResponseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/magasin/alllibre/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllMagasinLibre(idAgence: number): __Observable<Array<MagasinResponseDto>> {
    return this.findAllMagasinLibreResponse(idAgence).pipe(
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
  saveMagasinReturnDtoResponse(body?: MagasinDto): __Observable<__StrictHttpResponse<MagasinDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/magasin/savemagasin`,
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
   * @param body undefined
   * @return successful operation
   */
  saveMagasinReturnDto(body?: MagasinDto): __Observable<MagasinDto> {
    return this.saveMagasinReturnDtoResponse(body).pipe(
      __map(_r => _r.body as MagasinDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIDMontantLoyerBailResponse(id: number): __Observable<__StrictHttpResponse<Array<MontantLoyerBailDto>>> {
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
  findByIDMontantLoyerBail(id: number): __Observable<Array<MontantLoyerBailDto>> {
    return this.findByIDMontantLoyerBailResponse(id).pipe(
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
   * @return successful operation
   */
  findAllServiceAdditionnelPrestationResponse(): __Observable<__StrictHttpResponse<Array<PrestationSaveOrUpdateDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/prestation/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PrestationSaveOrUpdateDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllServiceAdditionnelPrestation(): __Observable<Array<PrestationSaveOrUpdateDto>> {
    return this.findAllServiceAdditionnelPrestationResponse().pipe(
      __map(_r => _r.body as Array<PrestationSaveOrUpdateDto>)
    );
  }

  /**
   * @param id undefined
   */
  deleteServiceAdditionnelPrestationResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/prestation/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteServiceAdditionnelPrestation(id: number): __Observable<null> {
    return this.deleteServiceAdditionnelPrestationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findServiceAdditionnelByIDPrestationResponse(id: number): __Observable<__StrictHttpResponse<PrestationSaveOrUpdateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/prestation/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PrestationSaveOrUpdateDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findServiceAdditionnelByIDPrestation(id: number): __Observable<PrestationSaveOrUpdateDto> {
    return this.findServiceAdditionnelByIDPrestationResponse(id).pipe(
      __map(_r => _r.body as PrestationSaveOrUpdateDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdatePrestationResponse(body?: PrestationSaveOrUpdateDto): __Observable<__StrictHttpResponse<PrestationSaveOrUpdateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/prestation/saveorupdate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PrestationSaveOrUpdateDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdatePrestation(body?: PrestationSaveOrUpdateDto): __Observable<PrestationSaveOrUpdateDto> {
    return this.saveorupdatePrestationResponse(body).pipe(
      __map(_r => _r.body as PrestationSaveOrUpdateDto)
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
   * @param params The `ApiService.QuittancePeriodeParams` containing the following parameters:
   *
   * - `proprio`:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * @return successful operation
   */
  quittancePeriodeResponse(params: ApiService.QuittancePeriodeParams): __Observable<__StrictHttpResponse<InputStreamResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/print/quittancegrouper/${params.periode}/${params.idAgence}/${params.proprio}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InputStreamResource>;
      })
    );
  }
  /**
   * @param params The `ApiService.QuittancePeriodeParams` containing the following parameters:
   *
   * - `proprio`:
   *
   * - `periode`:
   *
   * - `idAgence`:
   *
   * @return successful operation
   */
  quittancePeriode(params: ApiService.QuittancePeriodeParams): __Observable<InputStreamResource> {
    return this.quittancePeriodeResponse(params).pipe(
      __map(_r => _r.body as InputStreamResource)
    );
  }

  /**
   * @param idEncaissement undefined
   * @return successful operation
   */
  recuPaimentResponse(idEncaissement: number): __Observable<__StrictHttpResponse<InputStreamResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/print/recupaiment/${idEncaissement}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InputStreamResource>;
      })
    );
  }
  /**
   * @param idEncaissement undefined
   * @return successful operation
   */
  recuPaiment(idEncaissement: number): __Observable<InputStreamResource> {
    return this.recuPaimentResponse(idEncaissement).pipe(
      __map(_r => _r.body as InputStreamResource)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllQuartiersResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<QuartierRequestDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/quartier/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllQuartiers(idAgence: number): __Observable<Array<QuartierRequestDto>> {
    return this.findAllQuartiersResponse(idAgence).pipe(
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
  findByIDQuartiersResponse(id: number): __Observable<__StrictHttpResponse<QuartierRequestDto>> {
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
  findByIDQuartiers(id: number): __Observable<QuartierRequestDto> {
    return this.findByIDQuartiersResponse(id).pipe(
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
  findAllCategorieChambreReservationResponse(): __Observable<__StrictHttpResponse<Array<ReservationSaveOrUpdateDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/reservation/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReservationSaveOrUpdateDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCategorieChambreReservation(): __Observable<Array<ReservationSaveOrUpdateDto>> {
    return this.findAllCategorieChambreReservationResponse().pipe(
      __map(_r => _r.body as Array<ReservationSaveOrUpdateDto>)
    );
  }

  /**
   * @param id undefined
   */
  deleteReservationResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/reservation/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteReservation(id: number): __Observable<null> {
    return this.deleteReservationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findCategorieChambreByIDReservationResponse(id: number): __Observable<__StrictHttpResponse<ReservationSaveOrUpdateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/reservation/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationSaveOrUpdateDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findCategorieChambreByIDReservation(id: number): __Observable<ReservationSaveOrUpdateDto> {
    return this.findCategorieChambreByIDReservationResponse(id).pipe(
      __map(_r => _r.body as ReservationSaveOrUpdateDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdateReservationResponse(body?: ReservationSaveOrUpdateDto): __Observable<__StrictHttpResponse<ReservationSaveOrUpdateDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/reservation/saveorupdate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationSaveOrUpdateDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdateReservation(body?: ReservationSaveOrUpdateDto): __Observable<ReservationSaveOrUpdateDto> {
    return this.saveorupdateReservationResponse(body).pipe(
      __map(_r => _r.body as ReservationSaveOrUpdateDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdategoodResponse(body?: ReservationSaveOrUpdateDto): __Observable<__StrictHttpResponse<ReservationAfficheDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/reservation/saveorupdategood`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReservationAfficheDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdategood(body?: ReservationSaveOrUpdateDto): __Observable<ReservationAfficheDto> {
    return this.saveorupdategoodResponse(body).pipe(
      __map(_r => _r.body as ReservationAfficheDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllServiceAdditionnelPrestationAdditionnelResponse(): __Observable<__StrictHttpResponse<Array<PrestationAdditionnelReservationSaveOrrUpdate>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/serviceadditionnel/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PrestationAdditionnelReservationSaveOrrUpdate>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllServiceAdditionnelPrestationAdditionnel(): __Observable<Array<PrestationAdditionnelReservationSaveOrrUpdate>> {
    return this.findAllServiceAdditionnelPrestationAdditionnelResponse().pipe(
      __map(_r => _r.body as Array<PrestationAdditionnelReservationSaveOrrUpdate>)
    );
  }

  /**
   * @param id undefined
   */
  deleteServiceAdditionnelPrestationAdditionnelResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `gestimoweb/api/v1/serviceadditionnel/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteServiceAdditionnelPrestationAdditionnel(id: number): __Observable<null> {
    return this.deleteServiceAdditionnelPrestationAdditionnelResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findServiceAdditionnelByIDPrestationAdditionnelResponse(id: number): __Observable<__StrictHttpResponse<PrestationAdditionnelReservationSaveOrrUpdate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/serviceadditionnel/findById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PrestationAdditionnelReservationSaveOrrUpdate>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findServiceAdditionnelByIDPrestationAdditionnel(id: number): __Observable<PrestationAdditionnelReservationSaveOrrUpdate> {
    return this.findServiceAdditionnelByIDPrestationAdditionnelResponse(id).pipe(
      __map(_r => _r.body as PrestationAdditionnelReservationSaveOrrUpdate)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdatePrestationAdditionnelResponse(body?: PrestationAdditionnelReservationSaveOrrUpdate): __Observable<__StrictHttpResponse<PrestationAdditionnelReservationSaveOrrUpdate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/serviceadditionnel/saveorupdate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PrestationAdditionnelReservationSaveOrrUpdate>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveorupdatePrestationAdditionnel(body?: PrestationAdditionnelReservationSaveOrrUpdate): __Observable<PrestationAdditionnelReservationSaveOrrUpdate> {
    return this.saveorupdatePrestationAdditionnelResponse(body).pipe(
      __map(_r => _r.body as PrestationAdditionnelReservationSaveOrrUpdate)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllSitesResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<SiteResponseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/sites/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllSites(idAgence: number): __Observable<Array<SiteResponseDto>> {
    return this.findAllSitesResponse(idAgence).pipe(
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
  saveSitesResponse(body?: SiteRequestDto): __Observable<__StrictHttpResponse<boolean>> {
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
  saveSites(body?: SiteRequestDto): __Observable<boolean> {
    return this.saveSitesResponse(body).pipe(
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
   * @param idAgence undefined
   * @return successful operation
   */
  getAllEncaissementSuivieDepenseParAgenceResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<SuivieDepenseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/suiviedepense/allSuivieDepense/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SuivieDepenseDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllEncaissementSuivieDepenseParAgence(idAgence: number): __Observable<Array<SuivieDepenseDto>> {
    return this.getAllEncaissementSuivieDepenseParAgenceResponse(idAgence).pipe(
      __map(_r => _r.body as Array<SuivieDepenseDto>)
    );
  }

  /**
   * @param codeTransaction undefined
   * @return successful operation
   */
  getSuivieDepenseByCodeTransactionResponse(codeTransaction: string): __Observable<__StrictHttpResponse<SuivieDepenseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/suiviedepense/getSuivieDepenseByCodeTransaction/${codeTransaction}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuivieDepenseDto>;
      })
    );
  }
  /**
   * @param codeTransaction undefined
   * @return successful operation
   */
  getSuivieDepenseByCodeTransaction(codeTransaction: string): __Observable<SuivieDepenseDto> {
    return this.getSuivieDepenseByCodeTransactionResponse(codeTransaction).pipe(
      __map(_r => _r.body as SuivieDepenseDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  getSuivieDepenseByIdResponse(id: number): __Observable<__StrictHttpResponse<SuivieDepenseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/suiviedepense/getSuivieDepenseById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuivieDepenseDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  getSuivieDepenseById(id: number): __Observable<SuivieDepenseDto> {
    return this.getSuivieDepenseByIdResponse(id).pipe(
      __map(_r => _r.body as SuivieDepenseDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveSuivieDepenseResponse(body?: SuivieDepenseDto): __Observable<__StrictHttpResponse<Array<SuivieDepenseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/suiviedepense/saveSuivieDepense`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SuivieDepenseDto>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveSuivieDepense(body?: SuivieDepenseDto): __Observable<Array<SuivieDepenseDto>> {
    return this.saveSuivieDepenseResponse(body).pipe(
      __map(_r => _r.body as Array<SuivieDepenseDto>)
    );
  }

  /**
   * @param params The `ApiService.SuprimerSuiviParIdParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `id`:
   *
   * @return successful operation
   */
  suprimerSuiviParIdResponse(params: ApiService.SuprimerSuiviParIdParams): __Observable<__StrictHttpResponse<Array<SuivieDepenseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestimoweb/api/v1/suiviedepense/suprimerSuiviParId/${params.id}/${params.idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SuivieDepenseDto>>;
      })
    );
  }
  /**
   * @param params The `ApiService.SuprimerSuiviParIdParams` containing the following parameters:
   *
   * - `idAgence`:
   *
   * - `id`:
   *
   * @return successful operation
   */
  suprimerSuiviParId(params: ApiService.SuprimerSuiviParIdParams): __Observable<Array<SuivieDepenseDto>> {
    return this.suprimerSuiviParIdResponse(params).pipe(
      __map(_r => _r.body as Array<SuivieDepenseDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllUtilisateursByOrderResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<UtilisateurAfficheDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/all/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurAfficheDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllUtilisateursByOrder(idAgence: number): __Observable<Array<UtilisateurAfficheDto>> {
    return this.getAllUtilisateursByOrderResponse(idAgence).pipe(
      __map(_r => _r.body as Array<UtilisateurAfficheDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllGerantsByOrderResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<UtilisateurAfficheDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/gerants/all/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurAfficheDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllGerantsByOrder(idAgence: number): __Observable<Array<UtilisateurAfficheDto>> {
    return this.getAllGerantsByOrderResponse(idAgence).pipe(
      __map(_r => _r.body as Array<UtilisateurAfficheDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getUtilisateurByAgenceResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<UtilisateurAfficheDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/getAllutilisateurbyAgence/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurAfficheDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getUtilisateurByAgence(idAgence: number): __Observable<Array<UtilisateurAfficheDto>> {
    return this.getUtilisateurByAgenceResponse(idAgence).pipe(
      __map(_r => _r.body as Array<UtilisateurAfficheDto>)
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
   * @param idAgence undefined
   * @return successful operation
   */
  getAllLocatairesByOrderResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<UtilisateurAfficheDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/locataires/all/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurAfficheDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllLocatairesByOrder(idAgence: number): __Observable<Array<UtilisateurAfficheDto>> {
    return this.getAllLocatairesByOrderResponse(idAgence).pipe(
      __map(_r => _r.body as Array<UtilisateurAfficheDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllLocatairesAvecBailResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<LocataireEncaisDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/locataires/ayanbail/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LocataireEncaisDTO>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllLocatairesAvecBail(idAgence: number): __Observable<Array<LocataireEncaisDTO>> {
    return this.getAllLocatairesAvecBailResponse(idAgence).pipe(
      __map(_r => _r.body as Array<LocataireEncaisDTO>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllProprietaireByOrderResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<UtilisateurAfficheDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/utilisateur/proprietaires/all/${idAgence}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurAfficheDto>>;
      })
    );
  }
  /**
   * @param idAgence undefined
   * @return successful operation
   */
  getAllProprietaireByOrder(idAgence: number): __Observable<Array<UtilisateurAfficheDto>> {
    return this.getAllProprietaireByOrderResponse(idAgence).pipe(
      __map(_r => _r.body as Array<UtilisateurAfficheDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveUtilisateurResponse(body?: UtilisateurRequestDto): __Observable<__StrictHttpResponse<UtilisateurAfficheDto>> {
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurAfficheDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveUtilisateur(body?: UtilisateurRequestDto): __Observable<UtilisateurAfficheDto> {
    return this.saveUtilisateurResponse(body).pipe(
      __map(_r => _r.body as UtilisateurAfficheDto)
    );
  }

  /**
   * @return successful operation
   */
  getAllSuperviseursByOrderResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurAfficheDto>>> {
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
        return _r as __StrictHttpResponse<Array<UtilisateurAfficheDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllSuperviseursByOrder(): __Observable<Array<UtilisateurAfficheDto>> {
    return this.getAllSuperviseursByOrderResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurAfficheDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllVillaResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<VillaDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/villa/all/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllVilla(idAgence: number): __Observable<Array<VillaDto>> {
    return this.findAllVillaResponse(idAgence).pipe(
      __map(_r => _r.body as Array<VillaDto>)
    );
  }

  /**
   * @param idAgence undefined
   * @return successful operation
   */
  findAllVillaLibreResponse(idAgence: number): __Observable<__StrictHttpResponse<Array<VillaDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/villa/alllibre/${idAgence}`,
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
   * @param idAgence undefined
   * @return successful operation
   */
  findAllVillaLibre(idAgence: number): __Observable<Array<VillaDto>> {
    return this.findAllVillaLibreResponse(idAgence).pipe(
      __map(_r => _r.body as Array<VillaDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findVillaByIdResponse(id: number): __Observable<__StrictHttpResponse<VillaDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `gestimoweb/api/v1/villa/findVillaById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VillaDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findVillaById(id: number): __Observable<VillaDto> {
    return this.findVillaByIdResponse(id).pipe(
      __map(_r => _r.body as VillaDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveVillaResponse(body?: VillaDto): __Observable<__StrictHttpResponse<VillaDto>> {
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VillaDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveVilla(body?: VillaDto): __Observable<VillaDto> {
    return this.saveVillaResponse(body).pipe(
      __map(_r => _r.body as VillaDto)
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

  /**
   * Parameters for AppelLoyersParPeriode
   */
  export interface AppelLoyersParPeriodeParams {
    periode: string;
    idAgence: number;
  }

  /**
   * Parameters for findAllPeriodeByAnnee
   */
  export interface FindAllPeriodeByAnneeParams {
    idAgence: number;
    annee: number;
  }

  /**
   * Parameters for findAllPeriodeChiffreEtLettreByAnnee
   */
  export interface FindAllPeriodeChiffreEtLettreByAnneeParams {
    idAgence: number;
    annee: number;
  }

  /**
   * Parameters for findByIdAndBail
   */
  export interface FindByIdAndBailParams {
    periode: string;
    idBien: number;
  }

  /**
   * Parameters for impayeLoyerParAnnee
   */
  export interface ImpayeLoyerParAnneeParams {
    idAgence: number;
    chapitre: number;
    annee: number;
  }

  /**
   * Parameters for impayeLoyerParMoisAppelLoyer
   */
  export interface ImpayeLoyerParMoisAppelLoyerParams {
    periode: string;
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for listeDesloyerSuperieurAUnePeriode
   */
  export interface ListeDesloyerSuperieurAUnePeriodeParams {
    periode: string;
    idBien: number;
  }

  /**
   * Parameters for nombreImpayerLoyerParMois
   */
  export interface NombreImpayerLoyerParMoisParams {
    periode: string;
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for nombrePayerLoyerParMois
   */
  export interface NombrePayerLoyerParMoisParams {
    periode: string;
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for payeLoyerParAnnee
   */
  export interface PayeLoyerParAnneeParams {
    idAgence: number;
    chapitre: number;
    annee: number;
  }

  /**
   * Parameters for payeLoyerParMois
   */
  export interface PayeLoyerParMoisParams {
    periode: string;
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for staisiqueLoyerParMois
   */
  export interface StaisiqueLoyerParMoisParams {
    periode: string;
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for statistiqueLoyerParAnnee
   */
  export interface StatistiqueLoyerParAnneeParams {
    idAgence: number;
    chapitre: number;
    annee: number;
  }

  /**
   * Parameters for supprimerPaiementAppel
   */
  export interface SupprimerPaiementAppelParams {
    idPeriode: number;
    idBail: number;
  }

  /**
   * Parameters for bailByLocataireEtBien
   */
  export interface BailByLocataireEtBienParams {
    locataire: number;
    bien: number;
  }

  /**
   * Parameters for findAllBien
   */
  export interface FindAllBienParams {
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for findAllBienOqp
   */
  export interface FindAllBienOqpParams {
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for rattacherUnBienAUnChapitre
   */
  export interface RattacherUnBienAUnChapitreParams {
    idBien: number;
    chapitre: number;
  }

  /**
   * Parameters for getTotalEncaissementparPeriode
   */
  export interface GetTotalEncaissementparPeriodeParams {
    idAgence: number;
    datefin: string;
    datedebut: string;
  }

  /**
   * Parameters for getTotalEncaissementsEtMontantsDeLoyerParMois
   */
  export interface GetTotalEncaissementsEtMontantsDeLoyerParMoisParams {
    idAgence: number;
    datefin: string;
    datedebut: string;
  }

  /**
   * Parameters for getTotalEncaissementsParMois
   */
  export interface GetTotalEncaissementsParMoisParams {
    idAgence: number;
    datefin: string;
    datedebut: string;
  }

  /**
   * Parameters for listeLocataireImpayerParAgenceEtPeriode
   */
  export interface ListeLocataireImpayerParAgenceEtPeriodeParams {
    periode: string;
    agence: number;
  }

  /**
   * Parameters for sommeEncaissementParAgenceEtParPeriode
   */
  export interface SommeEncaissementParAgenceEtParPeriodeParams {
    idAgence: number;
    datefin: string;
    datedebut: string;
  }

  /**
   * Parameters for totalEncaissementParJour
   */
  export interface TotalEncaissementParJourParams {
    jour: string;
    idAgence: number;
    chapitre: number;
  }

  /**
   * Parameters for sendMailGrouperWithAttachment
   */
  export interface SendMailGrouperWithAttachmentParams {
    periode: string;
    idAgence: number;
  }

  /**
   * Parameters for uploadImage
   */
  export interface UploadImageParams {
    name: string;
    id: number;
    file: any;
  }

  /**
   * Parameters for quittancePeriode
   */
  export interface QuittancePeriodeParams {
    proprio: string;
    periode: string;
    idAgence: number;
  }

  /**
   * Parameters for suprimerSuiviParId
   */
  export interface SuprimerSuiviParIdParams {
    idAgence: number;
    id: number;
  }
}

export { ApiService }
