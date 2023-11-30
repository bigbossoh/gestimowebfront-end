import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../baux/page-baux/page-baux.component';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategorieChambreState } from 'src/app/ngrx/categoriechambre/categoriechambre.reducer';
import { Observable } from 'rxjs';
import { SaveChambreCategorieActions } from 'src/app/ngrx/categoriechambre/categoriechambre.actions';
import { map } from 'rxjs/operators';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-new-categorie-chambre',
  templateUrl: './new-categorie-chambre.component.html',
  styleUrls: ['./new-categorie-chambre.component.css'],
})
export class NewCategorieChambreComponent implements OnInit {
  bauxState$: Observable<CategorieChambreState> | null = null;
  formGroup?: FormGroup;
  nom: any;
  descpition: any;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private userService: UserService,
    public dialogRef: MatDialogRef<NewCategorieChambreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  public user?: UtilisateurRequestDto;
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
  }

  onSaveForm() {
    this.formGroup = this.fb.group({
      id: [0],
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
      name: [this.nom],
      description: [this.descpition],
    });
    this.store.dispatch(new SaveChambreCategorieActions(this.formGroup?.value));
    this.bauxState$ = this.store.pipe(
      map((state) => state.categorieChambreState)
    );
    this.dialogRef.close();
  }
}
