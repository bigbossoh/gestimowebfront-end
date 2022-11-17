import { ModifierBailActions } from './../../../ngrx/baux/baux.actions';
import { Store } from '@ngrx/store';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../page-baux/page-baux.component';
import { Observable } from 'rxjs';
import { BauxState } from 'src/app/ngrx/baux/baux.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modif-loyer-bail',
  templateUrl: './modif-loyer-bail.component.html',
  styleUrls: ['./modif-loyer-bail.component.css'],
})
export class ModifLoyerBailComponent implements OnInit {
  submitted = false;
  bauxState$: Observable<BauxState> | null = null;
  formGroup?: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModifLoyerBailComponent>,
    private store: Store<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _adapter: DateAdapter<Date>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }
  v_data: any;
  v_bien: any = '';
  v_loyer = 0;

  ngOnInit(): void {
    this.v_data = this.data.id;
    this.v_bien =
      this.v_data.utilisateurOperation +
      '/' +
      this.v_data.codeAbrvBienImmobilier;
    if (this.v_data.nbreMoisCautionBail > 0) {
      this.v_loyer =
        this.v_data.montantCautionBail / this.v_data.nbreMoisCautionBail;
    }
    this.formGroup = this.fb.group({
      idBail: [this.v_data.id],
      nombreMoisCaution: [this.v_data.nbreMoisCautionBail],
      nouveauMontantLoyer: [0, Validators.required],
      ancienMontantLoyer: [this.v_loyer],
      dateDebuBail: [this.v_data.dateDebut],
      dateDePriseEncompte: [''],
      dateFin: [this.v_data.dateFin],
    });
  }
  onSaveForm() {
    console.log(this.formGroup?.value);
    this.store.dispatch(new ModifierBailActions(this.formGroup?.value));
    this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
  }
}
