import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { SaveAppartementActions } from 'src/app/ngrx/appartement/appartement.actions';
import { AppartementState, AppartementStateEnum } from 'src/app/ngrx/appartement/appartement.reducer';
import { GetAllEtagesByImmeubleActions, SaveEtageActions } from 'src/app/ngrx/etage/etage.actions';
import { EtagesState, EtagesStateEnum } from 'src/app/ngrx/etage/etage.reducer';
import { GetAllImmeublesActions, SaveImmeublesActions } from 'src/app/ngrx/immeuble/immeuble.actions';
import { ImmeubleState, ImmeubleStateEnum } from 'src/app/ngrx/immeuble/immeuble.reducer';
import { SaveMagasinActions } from 'src/app/ngrx/magasin/magasin.actions';
import { MagasinState, MagasinStateEnum } from 'src/app/ngrx/magasin/magasin.reducer';
import { GetAllSitesActions } from 'src/app/ngrx/site/site.actions';
import { SiteState, SiteStateEnum } from 'src/app/ngrx/site/site.reducer';
import { SaveStudioActions } from 'src/app/ngrx/studio/studio.actions';
import { StudioState, StudioStateEnum } from 'src/app/ngrx/studio/studio.reducer';
import { GetAllProprietairesActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { SaveVillaActions } from 'src/app/ngrx/villa/villa.action';
import { VillaState, VillaStateEnum } from 'src/app/ngrx/villa/villa.reducer';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AppartementDto, ImmeubleDto, MagasinDto, SiteResponseDto, StudioDto, VillaDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-bien-immobilier-new',
  templateUrl: './page-bien-immobilier-new.component.html',
  styleUrls: ['./page-bien-immobilier-new.component.css'],
})
export class PageBienImmobilierNewComponent implements OnInit {
  formGroup?: FormGroup;

  etageForm?: FormGroup;
  studioform?: FormGroup;
  appartementForm?: FormGroup;
  magasinForm?: FormGroup;
  immeubleForm?: FormGroup;
  villaForm?: FormGroup;


  ngselecttypeBien = '20000';
  ngIelecttypeImm = 0;

  listTypeBiens: string[] = [];

  magasinState$: Observable<MagasinState> | null = null;
  appartementState$: Observable<AppartementState> | null = null;
  studioState$: Observable<StudioState> | null = null;
  etageState$: Observable<EtagesState> | null = null;
  immeubleState$: Observable<ImmeubleState> | null = null;
  siteState$: Observable<SiteState> | null = null;
  utilisateurState$: Observable<UtilisteurState> | null = null;
  villaState$: Observable<VillaState> | null = null;


  readonly VillaStateEnum = VillaStateEnum;
  readonly MagasinStateEnum = MagasinStateEnum;
  readonly AppartementStateEnum = AppartementStateEnum;
  readonly StudioStateEnum = StudioStateEnum;
  readonly EtagesStateEnum = EtagesStateEnum;
  readonly ImmeubleStateEnum = ImmeubleStateEnum;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  readonly SiteStateEnum = SiteStateEnum;

  constructor(private store: Store<any>, private fb: FormBuilder, private notificationService: NotificationService) {
    this.listTypeBiens = [
      'Appartement',
      'Etage',
      'Immeuble',
      'Magasin',
      'Studio',
      'Villa',
    ];
  }
  findEtageByImmeuble(immeuble: any) {
    this.store.dispatch(new GetAllEtagesByImmeubleActions(immeuble.target.value));
    this.etageState$ = this.store.pipe(map((state) => state.etageByImmeubeState),)

  }
  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
  onSaveStudio() {

    this.store.dispatch(new SaveStudioActions(this.studioform?.value))
    this.studioState$ = this.store.pipe(map((state) => state.studioState))
    console.warn(this.studioState$);

    if (this.studioState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  onSaveMagasin() {

    this.store.dispatch(new SaveMagasinActions(this.magasinForm?.value))
    this.magasinState$ = this.store.pipe(map((state) => state.magasinState))
    console.warn(this.magasinState$);

    if (this.etageState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  onSaveAppartement() {

    this.store.dispatch(new SaveAppartementActions(this.appartementForm?.value))
    this.appartementState$ = this.store.pipe(map((state) => state.appartementState))


    if (this.appartementState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  onSaveEtage() {

    this.store.dispatch(new SaveEtageActions(this.etageForm?.value))
    this.etageState$ = this.store.pipe(map((state) => state.etageByImmeubeState))
    console.warn(this.etageState$);

    if (this.etageState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  onSaveVilla() {

    this.store.dispatch(new SaveVillaActions(this.villaForm?.value))
    this.villaState$ = this.store.pipe(map((state) => state.villaState))
    if (this.villaState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  onSaveImmeuble() {

    this.store.dispatch(new SaveImmeublesActions(this.immeubleForm?.value))
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState))


    if (this.immeubleState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  ngOnInit(): void {
    this.store.dispatch(new GetAllSitesActions({}));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));

    this.store.dispatch(new GetAllProprietairesActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );

    this.store.dispatch(new GetAllImmeublesActions({}));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));
    this.ngselecttypeBien = '10';

    this.villaForm = this.fb.group({
      id: [0],
      idAgence: [0],
      nbrChambreVilla: [0],
      nbrePiece: [0],
      nbrSalonVilla: [0],
      nbrSalleEauVilla: [0],
      nomVilla: [""],
      abrvVilla: ["VILLA"],
      garageVilla: [false],
      nbreVoitureGarageVilla: [0],
      numBien: [0],
      statutBien: [""],
      abrvBienimmobilier: ["VILLA"],
      description: [""],
      nomBien: [""],
      superficieBien: [0],
      idSite: [0],
      idUtilisateur: [0],
      occupied: [false],
      archived: [false]
    })
    this.immeubleForm = this.fb.group({
      id: [0],
      numBien: [0],
      idAgence: [0],
      statutBien: [""],
      denominationBien: [""],
      nomBien: [""],
      etatBien: [""],
      superficieBien: [0],
      idSite: [0],
      idUtilisateur: [0],
      nbrEtage: [0],
      nbrePieceImmeuble: [0],
      abrvNomImmeuble: ["IMMEUBLE"],
      descriptionImmeuble: [""],
      numeroImmeuble: [0],
      occupied: [false],
      garrage: [false]
    })
    this.magasinForm = this.fb.group({
      id: [0],
      idAgence: [0],
      numBien: [0],
      statutBien: [''],
      abrvBienimmobilier: ['MAGASIN'],
      description: [''],
      nomBien: [''],
      superficieBien: [0],
      abrvNomMagasin: ['MAGASIN'],
      nmbrPieceMagasin: [0],
      nomMagasin: [''],
      idEtage: [0],
      idSite: [0],
      idUtilisateur: [0],
      underBuildingMagasin: [false],
      occupied: [false],
      archived: [false],
    })
    this.appartementForm = this.fb.group({
      id: [0],
      idEtage: [0],
      meubleApp: [false],
      nbrPieceApp: [0],
      nbreChambreApp: [0],
      nbrSalonApp: [0],
      nbreSalleEauApp: [0],
      numeroApp: [0],
      abrvNomApp: ['APPART'],
      nomApp: [''],
      residence: [false],
    })
    this.studioform = this.fb.group({
      //STUDIO
      id: [0],
      idImmeuble: [0],
      descStudio: [''],
      numeroStudio: [0],
      abrvNomStudio: ['STUDIO'],
      nomStudio: [''],
      idEtage: [0],
    })
    this.etageForm = this.fb.group({
      //ETAGE
      id: [0],
      nomEtage: [''],
      numEtage: [0],
      idImmeuble: [0],
      abrvEtage: ['ETAGE'],
    })
    this.formGroup = this.fb.group({
      idTypeBien: [0],
      //VILLA
      id: [0],
      idAgence: [0],
      nbrChambreVilla: [0],
      nbrePiece: [0],
      nbrSalonVilla: [],
      nbrSalleeauVilla: [],
      nomVilla: [''],
      abrvVilla: [''],
      garageVilla: [true],
      nbreVoitureGarageVilla: [0],
      numBien: [0],
      statutBien: [''],
      abrvBienimmobilier: [''],
      description: [''],
      nomBien: [''],
      superficieBien: [0],
      idSite: [0],
      idUtilisateur: [0],
      occupied: [false],


      //APPARTEMENT

      //MAGASIN
      abrvNomMagasin: [''],
      nmbrPieceMagasin: [0],
      nomMagasin: [''],
      archived: [false],
      underBuildingMagasin: [false],
      //IMMEUBLE
      etatBien: [''],
      denominationBien: [''],
      nbrEtage: [0],
      nbrePieceImmeuble: [0],
      abrvNomImmeuble: [''],
      descriptionImmeuble: [''],
      numeroImmeuble: [0],
      garrage: [false]

    });
  }
}
