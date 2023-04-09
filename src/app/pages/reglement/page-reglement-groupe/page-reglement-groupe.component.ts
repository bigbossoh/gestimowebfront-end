import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {
  GetListImayerLocataireEncaissementPeriodeActions,
  SaveEncaissementActions,
} from './../../../ngrx/reglement/reglement.actions';
import { EncaissementState } from './../../../ngrx/reglement/reglement.reducer';
import { PeriodeStateEnum } from 'src/app/ngrx/appelloyer/peiodeappel/periodeappel.reducer';
import { GetAllPeriodeActions } from './../../../ngrx/appelloyer/peiodeappel/periodeappel.actions';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { PeriodeState } from './../../../ngrx/appelloyer/peiodeappel/periodeappel.reducer';
import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { formatDate } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-page-reglement-groupe',
  templateUrl: './page-reglement-groupe.component.html',
  styleUrls: ['./page-reglement-groupe.component.css'],
})
export class PageReglementGroupeComponent implements OnInit {
  periode = '2023-01';
  date = new FormControl(new Date());
  encaissementform?: FormGroup;
  nbreLoyerNonPayer: 0 | undefined;
  saveEncaissementState$: Observable<EncaissementState> | null = null;
  displayedColumns: string[] = [
    'select',
    'appel',
    'periode',
    'bail',
    'loyer',
    'solde',
    'montant_encaisser',
    'date_encaissement',
    'mode_reglement',
  ];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  /* TOUS DESELECTIONNER */
  toggeAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  /* SELECTIONNER QUELQUES ELEMENTS DU TABLEAU */
  checkboxLabel(row?: any) {
    if (!row) {
      return "${this.isAllSelected()?'deselect':'select'}all";
    }
    return "${this.selection.isSelected(row)?'deselect':'select'}";
  }
  selectedDate = new Date();
  date_du_jour = formatDate(this.selectedDate, 'dd-MM-yyyy', 'en');
  public user?: UtilisateurRequestDto;
  modeDePaiement = 'ESPESE_MAGISER';
  laDateDepa: any;
  idAppel = 0;
  periodeState$: Observable<PeriodeState> | null = null;
  locataiireState$: Observable<EncaissementState> | null = null;
  PeriodeStateEnum = PeriodeStateEnum;
  tableauPaiement: ModePaiement[] = [];
  constructor(
    private userService: UserService,
    private store: Store<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private fb: FormBuilder
  ) {}
  ngAfterViewInit(): void {
    const periode_jour = formatDate(this.selectedDate, 'yyyy-MM', 'en');
    this.periode = periode_jour;
    this.getListeLocataireImpayer(this.periode);
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetAllPeriodeActions(this.user.idAgence));
    this.periodeState$ = this.store.pipe(map((state) => state.periodeState));
    this.encaissementform = this.fb.group({
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
      idAppelLoyer: [],
      modePaiement: [this.modeDePaiement],
      operationType: ['CREDIT'],
      montantEncaissement: [0],
      intituleDepense: [''],
      entiteOperation: ['MAGISER'],
    });
  }

  getListeLocataireImpayer(periode: any) {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new GetListImayerLocataireEncaissementPeriodeActions({
        agence: this.user.idAgence,
        periode: periode,
      })
    );
    this.locataiireState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (data.locatairesImpayer.length > 0) {
          this.dataSource.data = data.locatairesImpayer;
          this.nbreLoyerNonPayer = data.locatairesImpayer.length;
          if (this.tableauPaiement.length > 0) {
            for (let index = 0; index < this.tableauPaiement.length; index++) {
              const element = this.tableauPaiement[index];
              this.tableauPaiement.splice(this.tableauPaiement[index].id);
            }
          }
          for (let index = 0; index < data.locatairesImpayer.length; index++) {
            var pushValue: ModePaiement = {
              id: data.locatairesImpayer[index].idAppel,
              paiement: 'ESPECE_MAGISER',
            };
            this.tableauPaiement.push(pushValue);
          }
        }
      });
  }
  paiementGroupe() {
    if (this.selection.selected.length > 0) {
      console.log(this.tableauPaiement);
      for (let index = 0; index < this.selection.selected.length; index++) {
        this.idAppel = this.selection.selected[index].idAppel;
        var resulta = this.tableauPaiement.findIndex(
          (x) => x.id == this.selection.selected[index].idAppel
        );
        if (resulta >= 0) {
          this.modeDePaiement = this.tableauPaiement[resulta].paiement;
        }

        this.encaissementform = this.fb.group({
          idAgence: [this.user?.idAgence],
          idCreateur: [this.user?.id],
          idAppelLoyer: [this.selection.selected[index].idAppel],
          modePaiement: [this.modeDePaiement],
          operationType: ['CREDIT'],
          montantEncaissement: [this.selection.selected[index].montantloyer],
          intituleDepense: [''],
          entiteOperation: ['MAGISER'],
        });

        this.store.dispatch(
          new SaveEncaissementActions(this.encaissementform?.value)
        );
        this.store
          .pipe(map((state) => state.encaissementState))
          .subscribe((donnee) => {
            this.dataSource.data = [];
            this.dataSource.paginator = null;
            if (donnee.encaissements.length > 0) {
              this.dataSource.data = donnee.encaissements;
            }
          });
        this.saveEncaissementState$ = this.store.pipe(
          map((state) => state.encaissementState)
        );
      }
    }
    this.getListeLocataireImpayer(this.periode);
    alert('Fin de la procedure.');
  }
  getModePaiement(id: any, paiement: any) {
    if (this.tableauPaiement.length > 0) {
      var pushValue: ModePaiement = { id: id, paiement: paiement };
      var resulta = this.tableauPaiement.findIndex((x) => x.id == id);
      if (resulta >= 0) {
        this.tableauPaiement[resulta] = pushValue;
      }
    }

  }
}
export interface ModePaiement {
  id: number;
  paiement: string;
}
