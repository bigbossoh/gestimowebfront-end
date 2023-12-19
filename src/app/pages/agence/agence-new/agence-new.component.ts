import { HttpClient } from '@angular/common/http';
import {
  UploadLogoAcions,
  GetLogoAcions,
} from './../../../ngrx/images/images.action';
import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  GetAllAgenceActions,
  SaveAgenceActions,
} from 'src/app/ngrx/agence/agence.actions';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetDefaultEtabNameActions } from 'src/app/ngrx/etablissement/etablisement.action';
import { EtablissementState } from 'src/app/ngrx/etablissement/etablissement.reducer';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: UntypedFormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-agence-new',
  templateUrl: './agence-new.component.html',
  styleUrls: ['./agence-new.component.css'],
})
export class AgenceNewComponent implements OnInit {
  agenceRegisterForm!: UntypedFormGroup;
  actionBtn: String = 'Enregistrer';
  selectedFile = '';
  imagURL: any;
  idCompare = 0;
  public user?: UtilisateurRequestDto;
  matcher = new MyErrorStateMatcher();

  etablissementState$: Observable<EtablissementState> | null = null;
  idEtabl: any = 0;
  constructor(
    private store: Store<any>,
    private fb: UntypedFormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public dialogRef: MatDialogRef<AgenceNewComponent>,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetDefaultEtabNameActions(this.user.id));
    this.etablissementState$ = this.store.pipe(
      map((state) => state.etablissementState)
    );
    this.store
      .pipe(map((state) => state.etablissementState))
      .subscribe((data) => {
        if (data.dataState == 'Loaded') {
          this.idEtabl = data.etabname.chapite;
        }
      });
    this.agenceRegisterForm = this.fb.group({
      id: [0],
      idAgence: [this.user.idAgence],
      idCreateur: [this.user?.id],
      nomAgence: ['', [Validators.required]],
      telAgence: [''],
      compteContribuable: [''],
      capital: [''],
      emailAgence: ['', [Validators.required, Validators.email]],
      mobileAgence: ['', [Validators.required, Validators.minLength(10)]],
      regimeFiscaleAgence: [''],
      faxAgence: [''],
      sigleAgence: [''],
      idUtilisateurCreateur: [''],
      motdepasse: [''],
      nomPrenomGerant: ['', [Validators.required]],
      active: [true],
      logoAgence: [],
      idEtable: [this.idEtabl],
    });
    if (this.editData) {
      this.store.dispatch(new GetLogoAcions(this.editData.id));
      this.store.pipe(map((state) => state.imageState)).subscribe((data) => {
        console.log('Le logo est le suivant :' + this.editData.id);
        console.log(data);
        if (data.logo != null) {
          this.selectedFile = data.logo;
        }
        // this.selectedFile = data.logo;
      });
      this.idCompare = this.editData.id;
      this.actionBtn = 'Modifier';
      this.agenceRegisterForm.controls['idAgence'].setValue(
        this.editData.idAgence
      );
      this.agenceRegisterForm.controls['idCreateur'].setValue(
        this.editData.idCreateur
      );
      this.agenceRegisterForm.controls['nomAgence'].setValue(
        this.editData.nomAgence
      );
      this.agenceRegisterForm.controls['telAgence'].setValue(
        this.editData.telAgence
      );
      this.agenceRegisterForm.controls['compteContribuable'].setValue(
        this.editData.compteContribuable
      );
      this.agenceRegisterForm.controls['capital'].setValue(
        this.editData.capital
      );

      this.agenceRegisterForm.controls['emailAgence'].setValue(
        this.editData.emailAgence
      );
      this.agenceRegisterForm.controls['mobileAgence'].setValue(
        this.editData.mobileAgence
      );
      this.agenceRegisterForm.controls['regimeFiscaleAgence'].setValue(
        this.editData.regimeFiscaleAgence
      );
      this.agenceRegisterForm.controls['faxAgence'].setValue(
        this.editData.faxAgence
      );
      this.agenceRegisterForm.controls['sigleAgence'].setValue(
        this.editData.sigleAgence
      );

      this.agenceRegisterForm.controls['idUtilisateurCreateur'].setValue(
        this.editData.idUtilisateurCreateur
      );
      this.agenceRegisterForm.controls['motdepasse'].setValue(
        this.editData.motdepasse
      );
      this.agenceRegisterForm.controls['nomPrenomGerant'].setValue(
        this.editData.nomPrenomGerant
      );
      this.agenceRegisterForm.controls['active'].setValue(this.editData.active);
      this.agenceRegisterForm.controls['id'].setValue(this.editData.id);
      this.agenceRegisterForm.controls['idEtable'].setValue(this.idEtabl);
    }
  }
  onClose() {
    this.dialogRef.close();
  }
  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      };
      this.onUploadImage();
    }
  }
  onUpload() {}
  onUploadImage() {
    this.agenceRegisterForm.controls['id'].setValue(this.editData.idAgence);
    this.agenceRegisterForm.controls['logoAgence'].setValue(this.selectedFile);
    console.log(
      'le formulaire de image est le suivant ',
      this.agenceRegisterForm.value
    );
    this.store.dispatch(new UploadLogoAcions(this.agenceRegisterForm.value));
  }
  saveNgrsAgence() {
    this.agenceRegisterForm.patchValue({
      idUtilisateurCreateur: this.user?.id,
    });

    if (this.idCompare != 0) {
      // this.store.dispatch(new GetAllAgenceActions({}));
      this.store.dispatch(new SaveAgenceActions(this.agenceRegisterForm.value));
      this.agenceRegisterForm.reset();
      this.onClose();
    } else {
      // this.store.dispatch(new GetAllAgenceActions({}));
      this.store.dispatch(new SaveAgenceActions(this.agenceRegisterForm.value));
      this.agenceRegisterForm.reset();
      this.onClose();
    }
  }
}
