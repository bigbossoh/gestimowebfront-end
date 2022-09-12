import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { SaveAppartementActions } from 'src/app/ngrx/appartement/appartement.actions';
import {
  AppartementState,
  AppartementStateEnum,
} from 'src/app/ngrx/appartement/appartement.reducer';
import {
  GetAllEtagesByImmeubleActions,
  SaveEtageActions,
} from 'src/app/ngrx/etage/etage.actions';
import { EtagesState, EtagesStateEnum } from 'src/app/ngrx/etage/etage.reducer';
import {
  GetAllImmeublesActions,
  SaveImmeublesActions,
} from 'src/app/ngrx/immeuble/immeuble.actions';
import {
  ImmeubleState,
  ImmeubleStateEnum,
} from 'src/app/ngrx/immeuble/immeuble.reducer';
import { SaveMagasinActions } from 'src/app/ngrx/magasin/magasin.actions';
import {
  MagasinState,
  MagasinStateEnum,
} from 'src/app/ngrx/magasin/magasin.reducer';
import { GetAllSitesActions } from 'src/app/ngrx/site/site.actions';
import { SiteState, SiteStateEnum } from 'src/app/ngrx/site/site.reducer';
import { SaveStudioActions } from 'src/app/ngrx/studio/studio.actions';
import {
  StudioState,
  StudioStateEnum,
} from 'src/app/ngrx/studio/studio.reducer';
import { GetAllProprietairesActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { SaveVillaActions } from 'src/app/ngrx/villa/villa.action';
import { VillaState, VillaStateEnum } from 'src/app/ngrx/villa/villa.reducer';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-bien-immobilier-new',
  templateUrl: './page-bien-immobilier-new.component.html',
  styleUrls: ['./page-bien-immobilier-new.component.css'],
})
export class PageBienImmobilierNewComponent implements OnInit {
  submitted = false;

  formGroup?: FormGroup;

  etageForm?: FormGroup;
  studioform?: FormGroup;
  appartementForm?: FormGroup;
  magasinForm?: FormGroup;
  immeubleForm?: FormGroup;
  villaForm?: FormGroup;


  ngselecttypeBien = '20000';
  ngIelecttypeImm = 0;
  userVilla = '';
  listTypeBiens: string[] = [];

  magasinState$: Observable<MagasinState> | null = null;
  appartementState$: Observable<AppartementState> | null = null;
  studioState$: Observable<StudioState> | null = null;
  etageState$: Observable<EtagesState> | null = null;
  immeubleState$: Observable<ImmeubleState> | null = null;
  siteState$: Observable<SiteState> | null = null;
  utilisateurState$: Observable<UtilisteurState> | null = null;
  villaState$: Observable<VillaState> | null = null;
  public user?: UtilisateurRequestDto;

  readonly VillaStateEnum = VillaStateEnum;
  readonly MagasinStateEnum = MagasinStateEnum;
  readonly AppartementStateEnum = AppartementStateEnum;
  readonly StudioStateEnum = StudioStateEnum;
  readonly EtagesStateEnum = EtagesStateEnum;
  readonly ImmeubleStateEnum = ImmeubleStateEnum;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  readonly SiteStateEnum = SiteStateEnum;

  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private userService: UserService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<PageBienImmobilierNewComponent>
  ) {
    this.listTypeBiens = [
      'Appartement',
      'Magasin',
      // 'Studio',
      'Villa',
    ];
  }
  findEtageByImmeuble(immeuble: any) {
    console.log("le target est le suivant :  "+immeuble.target.value);
    
    this.store.dispatch(
      new GetAllEtagesByImmeubleActions(immeuble.target.value)
    );
    this.etageState$ = this.store.pipe(
      map((state) => state.etageState)
    );
  }
  private sendErrorNotification(
    notificationType: NotificationType,
    message: string
  ): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(
        notificationType,
        'An error occurred. Please try again.'
      );
    }
  }
  onClose() {
    this.dialogRef.close();
  }

  onSaveStudio() {
    this.submitted = true;
    if (this.studioform?.invalid) {
      return;
    }

    this.submitted = false;

    this.store.dispatch(new SaveStudioActions(this.studioform?.value));
    this.studioState$ = this.store.pipe(map((state) => state.studioState));
    this.onClose();
  }
  onSaveMagasin() {
    alert("On n'est ici")
    this.submitted = true;
    if (this.magasinForm?.invalid) {
     console.log("Le formulaire n'est pas bon du tout et pourquoi ?");
     console.log(this.magasinForm?.value);
     
     
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveMagasinActions(this.magasinForm?.value));
    this.magasinState$ = this.store.pipe(map((state) => state.magasinState));
    this.onClose();
  }
  onSaveAppartement() {
    this.submitted = true;
    if (this.appartementForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(
      new SaveAppartementActions(this.appartementForm?.value)
    );
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );
    this.onClose();
  }
  onSaveEtage() {
    this.submitted = true;
    if (this.etageForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveEtageActions(this.etageForm?.value));
    this.etageState$ = this.store.pipe(
      map((state) => state.etageByImmeubeState)
    );
    this.onClose();
  }
  onSaveVilla() {
    this.submitted = true;
    if (this.villaForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveVillaActions(this.villaForm?.value));
    this.villaState$ = this.store.pipe(map((state) => state.villaState));
    this.onClose();
  }
  onSaveImmeuble() {
    this.submitted = true;
    if (this.immeubleForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveImmeublesActions(this.immeubleForm?.value));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));
    this.onClose();
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetAllSitesActions({}));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));
    this.user = this.userService.getUserFromLocalCache();

    this.store.dispatch(new GetAllProprietairesActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );

    this.store.dispatch(new GetAllImmeublesActions({}));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));
    this.ngselecttypeBien = '10';

    this.villaForm = this.fb.group({
      id: [0],
      idCreateur:[this.user?.id],
      idAgence: [this.user?.idAgence],
      nbrChambreVilla: [0],
      nbrePiece: [0],
      nbrSalonVilla: [0],
      nbrSalleEauVilla: [0],
      nomVilla: ['', Validators.required],
      abrvVilla: ['VILLA'],
      garageVilla: [false],
      nbreVoitureGarageVilla: [0],
      numBien: [0],
      statutBien: [''],
      abrvBienimmobilier: ['VILLA'],
      description: [''],
      nomBien: [''],
      superficieBien: [0],
      idSite: ['', Validators.required],
      idUtilisateur: ['', Validators.required],
      occupied: [false],
      archived: [false],
    });

    this.immeubleForm = this.fb.group({
      id: [0],
      numBien: [0],
      idAgence: [this.user?.idAgence],
      idCreateur:[this.user?.id],
      statutBien: [''],
      denominationBien: [],
      nomBien: ['', Validators.required],
      etatBien: [''],
      superficieBien: [0],
      idSite: ['', Validators.required],
      idUtilisateur: ['', Validators.required],
      nbrEtage: [0],
      nbrePieceImmeuble: [0],
      abrvNomImmeuble: ['IMMEUBLE'],
      descriptionImmeuble: [''],
      numeroImmeuble: [0],
      occupied: [false],
      garrage: [false],
    });
    this.magasinForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur:[this.user?.id],
      numBien: [0],
      statutBien: [''],
      abrvBienimmobilier: ['MAGASIN'],
      description: [''],
      nomBien: [''],
      superficieBien: [0],
      abrvNomMagasin: ['MAGASIN'],
      nmbrPieceMagasin: [0],
      nomMagasin: ['', [Validators.required]],
      idEtage: [0],
      idSite: ['', [Validators.required]],
      idUtilisateur: ['', [Validators.required]],
      underBuildingMagasin: [false],
      occupied: [false],
      archived: [false],
    });
    this.appartementForm = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur:[this.user?.id],
      idEtage: [0, [Validators.required]],
      meubleApp: [false],
      nbrPieceApp: [0],
      nbreChambreApp: [0],
      nbrSalonApp: [0],
      nbreSalleEauApp: [0],
      numeroApp: [0],
      abrvNomApp: ['APPART'],
      nomApp: ['', Validators.required],
      residence: [false],
    });
    this.studioform = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur:[this.user?.id],
      numBien: [0],
      statutBien: [''],
      abrvBienimmobilier: ['STUDIO'],
      description: [''],
      nomBien: [''],
      superficieBien: [0],
      descStudio: [''],
      numeroStudio: [0],
      abrvNomStudio: ['STUDIO'],
      nomStudio: ['', Validators.required],
      idSite: ['0'],
      idEtage: [0],
      idUtilisateur: ['', Validators.required],
      occupied: [false],
      archived: [false],






    });
    this.etageForm = this.fb.group({
      //ETAGE
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur:[this.user?.id],
      nomEtage: ['', Validators.required],
      numEtage: [0],
      idImmeuble: ['', Validators.required],
      abrvEtage: ['ETAGE'],
    });
    this.formGroup = this.fb.group({
      idTypeBien: [0],
      //VILLA
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur:[this.user?.id],
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
      garrage: [false],
    });
  }
}
