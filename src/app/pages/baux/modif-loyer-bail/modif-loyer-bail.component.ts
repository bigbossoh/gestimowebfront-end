import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../page-baux/page-baux.component';

@Component({
  selector: 'app-modif-loyer-bail',
  templateUrl: './modif-loyer-bail.component.html',
  styleUrls: ['./modif-loyer-bail.component.css']
})
export class ModifLoyerBailComponent implements OnInit {
  submitted = false;

  formGroup?: FormGroup;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModifLoyerBailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  onSubmit() {
    console.log(this.formGroup?.value);

  }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      idBail: [this.data.id],
      nombreMoisCaution:[0],
      nouveauMontantLoyer: [0, Validators.required],
      ancienMontantLoyer: [],
      dateDePriseEncompte: [''],
      dateFin:['']
    });
  }

}
