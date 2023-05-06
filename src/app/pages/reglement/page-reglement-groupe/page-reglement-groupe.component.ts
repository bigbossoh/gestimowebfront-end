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
import { AnneeState } from './../../../ngrx/annee/annee.reducer';
import { AppelLoyerState } from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { formatDate } from '@angular/common';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-page-reglement-groupe',
  templateUrl: './page-reglement-groupe.component.html',
  styleUrls: ['./page-reglement-groupe.component.css'],
})
export class PageReglementGroupeComponent implements OnInit {
  periode = '2023-01';
  date = new FormControl(new Date());
  encaissementform?: FormGroup;
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
  tableauPaiement: ModePaiement[] = [];
  nbreLoyerNonPayer: any;
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

  periodeState$: Observable<PeriodeState> | null = null;
  locataiireState$: Observable<EncaissementState> | null = null;
  PeriodeStateEnum = PeriodeStateEnum;
  constructor(
    private userService: UserService,
    private store: Store<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetAllPeriodeActions(this.user.idAgence));
    this.periodeState$ = this.store.pipe(map((state) => state.periodeState));

    this.encaissementform = this.fb.group({
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
      idAppelLoyer: [],
      modePaiement: ['ESPESE_MAGISER'],
      operationType: ['CREDIT'],
      montantEncaissement: [0],
      intituleDepense: [''],
      entiteOperation: ['MAGISER'],
      typePaiement: ['ENCAISSEMENT_GROUPE'],
    });
    const periode_jour = formatDate(this.selectedDate, 'yyyy-MM', 'en');
    this.periode = periode_jour;
    // this.getListeLocataireImpayer(this.periode);
    // CHARGEMENT DES IMPAYES
  }
  ngAfterViewInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new GetListImayerLocataireEncaissementPeriodeActions({
        agence: this.user.idAgence,
        periode: this.periode,
      })
    );
    this.locataiireState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        this.nbreLoyerNonPayer = 0;
        this.dataSource.data = [];
        if (data.locatairesImpayer.length > 0) {
          this.nbreLoyerNonPayer = data.locatairesImpayer.length;
          this.dataSource.data = data.locatairesImpayer;
        }
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
        this.nbreLoyerNonPayer = 0;
        this.dataSource.data = [];
        if (data.locatairesImpayer.length > 0) {
          this.nbreLoyerNonPayer = data.locatairesImpayer.length;
          this.dataSource.data = data.locatairesImpayer;
          console.log('**** liste des paiements goupe ****');
          console.log(data.locatairesImpayer);
        }
      });
  }
  paiementGroupe() {
    if (this.selection.selected.length > 0) {
      for (let index = 0; index < this.selection.selected.length; index++) {
        this.encaissementform = this.fb.group({
          idAgence: [this.user?.idAgence],
          idCreateur: [this.user?.id],
          idAppelLoyer: [this.selection.selected[index].idAppel],
          modePaiement: ['ESPESE_MAGISER'],
          operationType: ['CREDIT'],
          montantEncaissement: [this.selection.selected[index].montantloyer],
          intituleDepense: [''],
          entiteOperation: ['MAGISER'],
          typePaiement: ['ENCAISSEMENT_GROUPE'],
        });
        this.store.dispatch(
          new SaveEncaissementActions(this.encaissementform?.value)
        );
        this.store
          .pipe(map((state) => state.encaissementState))
          .subscribe((donnee) => {
            this.nbreLoyerNonPayer = 0;
            this.dataSource.data = [];
            if (donnee.encaissements.length > 0) {
              this.dataSource.data = donnee.encaissements;
            }
          });
        this.saveEncaissementState$ = this.store.pipe(
          map((state) => state.encaissementState)
        );
      }
    }
    this.ngAfterViewInit();
    const periode_jour = formatDate(
      this.periode,
      'MMMM-yyyy',
      'fr'
    ).toLocaleUpperCase();
    alert('Paiement groupé de la periode de ' + periode_jour + ' est terminé.');
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
export interface ModePaiement {
  id: number;
  paiement: string;
}
