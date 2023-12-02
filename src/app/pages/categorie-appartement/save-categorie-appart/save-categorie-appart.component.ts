import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../baux/page-baux/page-baux.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListChambreCategorieActions } from 'src/app/ngrx/categoriechambre/categoriechambre.actions';
import { CategorieChambreState, CategorieChambreStateEnum } from 'src/app/ngrx/categoriechambre/categoriechambre.reducer';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SavePrixChambreParCategorieActions } from 'src/app/ngrx/prix-par-categorie-chambre/prix-par-categorie-chambre.action';
import { SaveAppartementCatActions } from 'src/app/ngrx/appartement/appartement.actions';
import { AppartementState, AppartementStateEnum } from 'src/app/ngrx/appartement/appartement.reducer';

@Component({
  selector: 'app-save-categorie-appart',
  templateUrl: './save-categorie-appart.component.html',
  styleUrls: ['./save-categorie-appart.component.css']
})
export class SaveCategorieAppartComponent implements OnInit {
  listeDesCategorieChambre$: Observable<CategorieChambreState> | null = null;
  readonly CategorieChambreStateEnum = CategorieChambreStateEnum;
  formGroup?: FormGroup;
  public user?: UtilisateurRequestDto;
  readonly AppartementStateEnum = AppartementStateEnum;
  appartementState$: Observable<AppartementState> | null = null;
cateModel: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store<any>,
    public dialogRef: MatDialogRef<SaveCategorieAppartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  varData:any;
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();

    this.store.dispatch(new ListChambreCategorieActions(this.user.idAgence));
    this.listeDesCategorieChambre$ = this.store.pipe(
      map((state) => state.categorieChambreState)
    );
    this.varData = this.data;
    console.log("**** **** **** les datas *** **** ");
    console.log(this.varData.bien.id)
    console.log("*** *** *** **** **");

  }
  onSaveForm() {

    this.formGroup = this.fb.group({
      id: [this.varData.bien.
        id],
      idCategorieChambre: [this.cateModel],

    });
    this.store.dispatch(
      new SaveAppartementCatActions(this.formGroup?.value)
    );
    this.appartementState$= this.store.pipe(
      map((state) => state.appartementState)
    );
    this.dialogRef.close();
  }
}
