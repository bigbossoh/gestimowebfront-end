import { Component, OnInit } from '@angular/core';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from '../../../ngrx/utulisateur/utlisateur.reducer';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserService } from '../../../services/user/user.service';
import { GetAllLocatairesActions } from '../../../ngrx/utulisateur/utilisateur.actions';
import { map } from 'rxjs/operators';
import {
  EncaissementState,
  EncaissementStateEnum,
} from '../../../ngrx/reglement/reglement.reducer';
import { UtilisateurRequestDto } from '../../../../gs-api/src/models/utilisateur-request-dto';
import { SaveEncaissementActions } from '../../../ngrx/reglement/reglement.actions';

@Component({
  selector: 'app-page-reglement-individuel',
  templateUrl: './page-reglement-individuel.component.html',
  styleUrls: ['./page-reglement-individuel.component.css'],
})
export class PageReglementIndividuelComponent implements OnInit {
  public user?: UtilisateurRequestDto;
  encaissementform?: FormGroup;
  submitted = false;

  saveEncaissementState$: Observable<EncaissementState> | null = null;
  readonly EncaissementStateEnum = EncaissementStateEnum;

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    //GET ALL LOCATAIRE
    this.store.dispatch(new GetAllLocatairesActions({}));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.encaissementform = this.fb.group({
      idAppelLoyer: [4],
      modePaiement: ['ESPESE_MAGISER'],
      operationType: ['CREDIT'],
      montantEncaissement: [0],
      intituleDepense: [''],
      entiteOperation: ['MAGISER'],
    });
  }
  onSaveEncaissement() {
    this.submitted = true;
    if (this.encaissementform?.invalid) {
      return;
    }
    this.submitted = false;
    this.store.dispatch(
      new SaveEncaissementActions(this.encaissementform?.value)
    );
    this.saveEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
  }
}
