import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UtilisteurState, UtilisteurStateEnum } from '../../../ngrx/utulisateur/utlisateur.reducer';
import { ImmeubleState, ImmeubleStateEnum } from '../../../ngrx/immeuble/immeuble.reducer';
import { SiteState } from '../../../ngrx/site/site.reducer';
import { EtagesStateEnum, EtagesState } from '../../../ngrx/etage/etage.reducer';
import { Store } from '@ngrx/store';
import { SaveEtageActions } from '../../../ngrx/etage/etage.actions';
import { map } from 'rxjs/operators';
import { GetAllImmeublesActions } from '../../../ngrx/immeuble/immeuble.actions';

@Component({
  selector: 'app-page-etage-new',
  templateUrl: './page-etage-new.component.html',
  styleUrls: ['./page-etage-new.component.css']
})
export class PageEtageNewComponent implements OnInit {
  submitted = false;

  immeubleState$: Observable<ImmeubleState> | null = null;
  siteState$: Observable<SiteState> | null = null;
  utilisateurState$: Observable<UtilisteurState> | null = null;
  etageState$: Observable<EtagesState> | null = null;
  readonly EtagesStateEnum = EtagesStateEnum;
  readonly ImmeubleStateEnum = ImmeubleStateEnum;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;


  etageForm?: FormGroup;
  constructor(public dialogRef: MatDialogRef<PageEtageNewComponent>
    , private fb: FormBuilder,
    private store: Store<any>,) { }

  ngOnInit(): void {

    this.store.dispatch(new GetAllImmeublesActions({}));
    this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));

    this.etageForm = this.fb.group({
      //ETAGE
      id: [0],
      nomEtage: ['', Validators.required],
      numEtage: [0],
      idImmeuble: ['', Validators.required],
      abrvEtage: ['ETAGE'],
    });
  }
  onClose() {
    this.dialogRef.close();
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
}
