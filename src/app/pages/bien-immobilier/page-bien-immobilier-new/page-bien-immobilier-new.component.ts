import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { GetAllEtagesByImmeubleActions, SaveEtageActions } from 'src/app/ngrx/etage/etage.actions';
import { EtagesState, EtagesStateEnum } from 'src/app/ngrx/etage/etage.reducer';
import { GetAllImmeublesActions } from 'src/app/ngrx/immeuble/immeuble.actions';
import { ImmeubleState, ImmeubleStateEnum } from 'src/app/ngrx/immeuble/immeuble.reducer';
import { GetAllSitesActions } from 'src/app/ngrx/site/site.actions';
import { SiteState, SiteStateEnum } from 'src/app/ngrx/site/site.reducer';
import { GetAllProprietairesActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
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

  magasinDto: MagasinDto | null = null;
  appartementDto: AppartementDto | null = null;

  immeubleDto: ImmeubleDto | null = null;
  studioDto: StudioDto | null = null;
  villaDto: VillaDto | null = null;

  ngselecttypeBien = '20000';
  ngselecttypeImm = '20000';

  listTypeBiens: string[] = [];

  etageState$: Observable<EtagesState> | null = null;
  immeubleState$: Observable<ImmeubleState> | null = null;
  siteState$: Observable<SiteState> | null = null;
  utilisateurState$: Observable<UtilisteurState> | null = null;

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
  findEtageByImmeuble(immeuble: number) {
    this.store.dispatch(new GetAllEtagesByImmeubleActions(immeuble));
    this.etageState$ = this.store.pipe(map((state) => state.etageByImmeubeState))

  }
  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
  onSaveEtage() {
    this.sendErrorNotification(NotificationType.SUCCESS, "on est ICI dans onSaveEtage")
    this.store.dispatch(new SaveEtageActions(this.etageForm?.value))
    this.etageState$ = this.store.pipe(map((state) => state.etageByImmeubeState))
    console.warn(this.etageState$);

    if (this.etageState$) {
      this.sendErrorNotification(NotificationType.SUCCESS, 'Enregistrement réussi')
    } else {
      this.sendErrorNotification(NotificationType.ERROR, 'Echec')
    }
  }
  onSaveBienImmobilier() {
    switch (this.ngselecttypeBien) {
      case 'Appartement':
        this.sendErrorNotification(NotificationType.SUCCESS, 'Appartement')
        break;
      case 'Etage':

        console.warn(this.etageForm?.value);


        // if (this.etageDto.nomEtage) {
        //   this.sendErrorNotification(NotificationType.SUCCESS, this.etageDto.nomEtage)
        // } else {
        //   this.sendErrorNotification(NotificationType.ERROR, 'Pas rempli')
        // }

        break;
      case 'Immeuble':
        this.sendErrorNotification(NotificationType.SUCCESS, 'Immeuble')
        break;
      case 'Magasin':
        this.sendErrorNotification(NotificationType.SUCCESS, 'Magasin')
        break;
      case 'Studio':
        this.sendErrorNotification(NotificationType.SUCCESS, 'Studio')
        break;
      case 'Studio':
        this.sendErrorNotification(NotificationType.SUCCESS, 'Studio')
        break;
      default:
        this.sendErrorNotification(NotificationType.ERROR, 'Erreur')
        break;
    }
  }
  ngOnInit(): void {
    this.store.dispatch(new GetAllSitesActions({}));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));

    this.store.dispatch(new GetAllProprietairesActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.findEtageByImmeuble(1);
    this.store.dispatch(new GetAllImmeublesActions({}));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));
    this.ngselecttypeBien = '10';
    this.ngselecttypeImm = '20000';

    this.studioform = this.fb.group({
      //STUDIO
      id: [0],
      idImmeuble: [0],
      descStudio: [''],
      numeroStudio: [0],
      abrvNomStudio: [''],
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
      meubleApp: [false],
      nbrPieceApp: [0],
      nbreChambreApp: [0],
      nbrSalonApp: [0],
      nbreSalleEauApp: [0],
      numeroApp: [0],
      abrvNomApp: [''],
      nomApp: [''],
      residence: [false],
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
