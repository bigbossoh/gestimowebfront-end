import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {
  SaveImmeublesActions,
  GetAllImmeublesActions,
} from '../../../ngrx/immeuble/immeuble.actions';
import { Observable } from 'rxjs';
import {
  ImmeubleState,
  ImmeubleStateEnum,
} from '../../../ngrx/immeuble/immeuble.reducer';
import { SiteState, SiteStateEnum } from '../../../ngrx/site/site.reducer';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from '../../../ngrx/utulisateur/utlisateur.reducer';
import { UtilisateurRequestDto } from '../../../../gs-api/src/models/utilisateur-request-dto';
import { UserService } from '../../../services/user/user.service';
import { GetAllSitesActions } from '../../../ngrx/site/site.actions';
import { GetAllProprietairesActions } from '../../../ngrx/utulisateur/utilisateur.actions';

@Component({
  selector: 'app-page-immeuble-new',
  templateUrl: './page-immeuble-new.component.html',
  styleUrls: ['./page-immeuble-new.component.css'],
})
export class PageImmeubleNewComponent implements OnInit {
  public user?: UtilisateurRequestDto;

  submitted = false;
  immeubleForm?: FormGroup;
  immeubleState$: Observable<ImmeubleState> | null = null;
  siteState$: Observable<SiteState> | null = null;
  utilisateurState$: Observable<UtilisteurState> | null = null;

  readonly ImmeubleStateEnum = ImmeubleStateEnum;
  readonly SiteStateEnum = SiteStateEnum;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<PageImmeubleNewComponent>,
    private fb: FormBuilder,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    //CHARGEMENT DES SITES POUR LE COMBO SITE
    this.store.dispatch(new GetAllSitesActions({}));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));
    //CHARGEMENT DES PROPRIETAIRES
    this.store.dispatch(new GetAllProprietairesActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.store.dispatch(new GetAllImmeublesActions({}));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));
    this.immeubleForm = this.fb.group({
      id: [0],
      numBien: [0],
      idAgence: [this.user?.idAgence],
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
  }
  onClose() {
    this.dialogRef.close();
  }
  onSaveEtage() {
    this.submitted = true;
    if (this.immeubleForm?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(new SaveImmeublesActions(this.immeubleForm?.value));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));
    this.onClose();
  }
}
