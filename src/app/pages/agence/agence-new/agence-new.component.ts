import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SaveAgenceActions } from 'src/app/ngrx/agence/agence.actions';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-agence-new',
  templateUrl: './agence-new.component.html',
  styleUrls: ['./agence-new.component.css'],
})
export class AgenceNewComponent implements OnInit {
  agenceRegisterForm!: FormGroup;
      public user?: UtilisateurRequestDto;
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<AgenceNewComponent>
  ) {}

  ngOnInit() {
    this.user = this.userService.getUserFromLocalCache();
    // this.getAllAgences(true);
    this.agenceRegisterForm = this.fb.group({
      id: [0],
      idAgence: [''],
      nomAgence: ['', [Validators.required]],
      telAgence: [''],
      compteContribuable: [''],
      capital: [''],
      emailAgence: ['', [Validators.required]],
      mobileAgence: ['', [Validators.required]],
      regimeFiscaleAgence: [''],
      faxAgence: [''],
      sigleAgence: [''],
      idUtilisateurCreateur: [''],
      motdepasse: [''],
      nomPrenomGerant: ['', [Validators.required]],
      active: [true],
    });
  }
  onClose() {
    this.dialogRef.close();

  }
  saveNgrsAgence() {
    this.agenceRegisterForm.patchValue({
      idUtilisateurCreateur: this.user?.id,
    });
    this.store.dispatch(new SaveAgenceActions(this.agenceRegisterForm.value));
    this.onClose();
  }
}
