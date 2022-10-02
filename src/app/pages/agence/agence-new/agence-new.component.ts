import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GetAllAgenceActions, SaveAgenceActions } from 'src/app/ngrx/agence/agence.actions';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-agence-new',
  templateUrl: './agence-new.component.html',
  styleUrls: ['./agence-new.component.css'],
})
export class AgenceNewComponent implements OnInit {
  agenceRegisterForm!: FormGroup;
  actionBtn: String = 'Enregistrer';
      public user?: UtilisateurRequestDto;
      matcher = new MyErrorStateMatcher();
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public dialogRef: MatDialogRef<AgenceNewComponent>
  ) {}

  ngOnInit() {
    this.user = this.userService.getUserFromLocalCache();
    this.agenceRegisterForm = this.fb.group({
      id: [0],
      idAgence: [this.user.idAgence],
      nomAgence: ['', [Validators.required]],
      telAgence: [''],
      compteContribuable: [''],
      capital: [''],
      emailAgence: ['', [Validators.required,Validators.email]],
      mobileAgence: ['', [Validators.required, Validators.minLength(10)]],
      regimeFiscaleAgence: [''],
      faxAgence: [''],
      sigleAgence: [''],
      idUtilisateurCreateur: [''],
      motdepasse: [''],
      nomPrenomGerant: ['', [Validators.required]],
      active: [true],
    });
    if (this.editData) {
      this.actionBtn = 'Modifier';
      this.agenceRegisterForm.controls['idAgence'].setValue(this.editData.idAgence);
      this.agenceRegisterForm.controls['nomAgence'].setValue(this.editData.nomAgence);
      this.agenceRegisterForm.controls['telAgence'].setValue(this.editData.telAgence);
      this.agenceRegisterForm.controls['compteContribuable'].setValue(this.editData.compteContribuable);
      this.agenceRegisterForm.controls['capital'].setValue(this.editData.capital);

      this.agenceRegisterForm.controls['emailAgence'].setValue(this.editData.emailAgence);
      this.agenceRegisterForm.controls['mobileAgence'].setValue(this.editData.mobileAgence);
      this.agenceRegisterForm.controls['regimeFiscaleAgence'].setValue(this.editData.regimeFiscaleAgence);
      this.agenceRegisterForm.controls['faxAgence'].setValue(this.editData.faxAgence);
      this.agenceRegisterForm.controls['sigleAgence'].setValue(this.editData.sigleAgence);

      this.agenceRegisterForm.controls['idUtilisateurCreateur'].setValue(this.editData.idUtilisateurCreateur);
      this.agenceRegisterForm.controls['motdepasse'].setValue(this.editData.motdepasse);
      this.agenceRegisterForm.controls['nomPrenomGerant'].setValue(this.editData.nomPrenomGerant);
      this.agenceRegisterForm.controls['active'].setValue(this.editData.active);
      this.agenceRegisterForm.controls['id'].setValue(this.editData.id);

    }
  }
  onClose() {
    this.dialogRef.close();
  }
  saveNgrsAgence() {
    this.agenceRegisterForm.patchValue({
      idUtilisateurCreateur: this.user?.id,
    });
    console.log(this.agenceRegisterForm.value);

    this.store.dispatch(new GetAllAgenceActions({}));
    this.store.dispatch(new SaveAgenceActions(this.agenceRegisterForm.value));
    this.onClose();
  }
}
