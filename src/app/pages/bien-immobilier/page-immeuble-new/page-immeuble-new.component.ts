import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SaveImmeublesActions, GetAllImmeublesActions } from '../../../ngrx/immeuble/immeuble.actions';
import { Observable } from 'rxjs';
import { ImmeubleState, ImmeubleStateEnum } from '../../../ngrx/immeuble/immeuble.reducer';
import { SiteState } from '../../../ngrx/site/site.reducer';
import { UtilisteurState } from '../../../ngrx/utulisateur/utlisateur.reducer';

@Component({
  selector: 'app-page-immeuble-new',
  templateUrl: './page-immeuble-new.component.html',
  styleUrls: ['./page-immeuble-new.component.css']
})
export class PageImmeubleNewComponent implements OnInit {
  submitted = false;
  immeubleForm?: FormGroup;
  immeubleState$: Observable<ImmeubleState> | null = null;
  siteState$: Observable<SiteState> | null = null;
  utilisateurState$: Observable<UtilisteurState> | null = null;

  readonly ImmeubleStateEnum = ImmeubleStateEnum;
  constructor(
    public dialogRef: MatDialogRef<PageImmeubleNewComponent>
    , private fb: FormBuilder,
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllImmeublesActions({}));
    this.immeubleState$ = this.store.pipe(
      map((state) => state.immeubleState)
    );
    this.immeubleForm = this.fb.group({
      id: [0],
    numBien: [0],
    idAgence: [0],
    statutBien: [''],
    denominationBien: [''],
    nomBien: [''],
    etatBien: [],
    superficieBien: [],
    idSite: [],
    idUtilisateur: [],
    nbrEtage: [],
    nbrePieceImmeuble: [0],
    abrvNomImmeuble: [],
    descriptionImmeuble: [],
    numeroImmeuble: [],
    occupied: [],
    garrage: []
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
    this.immeubleState$ = this.store.pipe(
      map((state) => state.immeubleState)
    );
    this.onClose();
  }
}
