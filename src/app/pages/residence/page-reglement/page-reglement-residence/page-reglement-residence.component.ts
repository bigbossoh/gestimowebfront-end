import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import * as saveAs from 'file-saver';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuittanceLoyerState, QuittanceloyerStateEnum } from 'src/app/ngrx/print-data/quittance-appel-loyer/quittance-appel-loyer.reducer';
import { GetLocataireEncaissementActions, SaveEncaissementActions, GetEncaissementBienActions } from 'src/app/ngrx/reglement/reglement.actions';
import { EncaissementState, EncaissementStateEnum } from 'src/app/ngrx/reglement/reglement.reducer';
import { GetAllLocatairesBailActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import { UtilisteurState, UtilisteurStateEnum } from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { PrintServiceService } from 'src/app/services/Print/print-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-reglement-residence',
  templateUrl: './page-reglement-residence.component.html',
  styleUrls: ['./page-reglement-residence.component.css']
})
export class PageReglementResidenceComponent implements OnInit {

  displayedColumns = [
    'idEncaiss',
    'Datedepaiement',
    'Periode',
    'Loyer',
    'MontantPaye',
    'ModedeReglement',
    'soldedumois',
    'Status',
    'Actions',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public user?: UtilisateurRequestDto;
  encaissementform?: UntypedFormGroup;
  leLocataire: any;
  submitted = false;
  periode: string = '';

  moisPaiement = '2022-12';
  listeEncaissementBien$: Observable<EncaissementState> | null = null;
  locataireEncaissement$: Observable<UtilisteurState> | null = null;
  saveEncaissementState$: Observable<EncaissementState> | null = null;

  readonly EncaissementStateEnum = EncaissementStateEnum;
  readonly LocaEncaisseState = EncaissementStateEnum;
  readonly EncaissBienStateEnum = EncaissementStateEnum;

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  montant_Loyer: number = 0;
  idDeAppel: any;
  printQuittance$: Observable<QuittanceLoyerState>  | null = null;
  readonly QuittanceloyerStateEnum = QuittanceloyerStateEnum;
  constructor(
    private fb: UntypedFormBuilder,
    private store: Store<any>,
    private userService: UserService ,
    private printService: PrintServiceService ) {}
  compareObjects(o1: any, o2: any): boolean {
    return o1 !== o2;
  }
  compareAppels(o1: any, o2: any): boolean {
    return o1 == o2;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit(): void {
    this.getLocatairePourEncaissement(this.leLocataire);
    this.getAllEncaissementByBienImmobilier(this.leLocataire);
  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();

    //RAMENER TOUS LES LOCATAIRES QUI ONT UN BAIL ACTIF
    this.store.dispatch(new GetAllLocatairesBailActions(this.user.idAgence));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.store.pipe(map((state) => state.utilisateurState)).subscribe(
      (data) => {
        if (data.locataireBail.length > 0) {
          this.leLocataire = data.locataireBail[0];
          this.idDeAppel = data.locataireBail[0].idAppel;
          this.montant_Loyer = data.locataireBail[0].montantloyer;
        }
      },

    );

    this.encaissementform = this.fb.group({
      idAgence: [this.user?.idAgence],
      idCreateur: [this.user?.id],
      idAppelLoyer: [],
      modePaiement: ['ESPESE_MAGISER'],
      operationType: ['CREDIT'],
      montantEncaissement: [0],
      intituleDepense: [''],
      entiteOperation: ['MAGISER'],
      typePaiement:['ENCAISSEMENT_INDIVIDUEL']
    });
    this.store.dispatch(
      new GetLocataireEncaissementActions({
        locataire: this.leLocataire.id,
        bien: this.leLocataire.idBien,
      })
    );
    this.locataireEncaissement$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        if (data.leLocataire) {
          console.log('Le locataire initié::::');

          console.log(data);
          this.idDeAppel = data.leLocataire.idAppel;
          this.montant_Loyer = data.leLocataire.montantloyer;
        }
      });
  }
  onSaveEncaissement() {
    this.submitted = false;
    this.store.dispatch(
      new SaveEncaissementActions(this.encaissementform?.value)
    );
    this.saveEncaissementState$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((donnee) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (donnee.encaissements.length > 0) {
          this.dataSource.data = donnee.encaissements;
          this.dataSource.paginator = this.paginator;
        }
      });

    this.store.dispatch(
      new GetEncaissementBienActions(this.leLocataire.idBien)
    );

    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((donnee) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (donnee.encaissements.length > 0) {
          // console.log("mon locataire du log");
          // console.log(donnee.encaissements);

          this.dataSource.data = donnee.encaissements;
          this.dataSource.paginator = this.paginator;
        }
      });
    this.ngAfterViewInit();
  }
  getLocatairePourEncaissement(locataire: any) {
    this.store.dispatch(
      new GetLocataireEncaissementActions({
        locataire: locataire.id,
        bien: locataire.idBien,
      })
    );
    this.locataireEncaissement$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        if (data.leLocataire) {
          console.log('Le locataire initié::::');

          console.log(data);
          this.idDeAppel = data.leLocataire.idAppel;
          this.montant_Loyer = data.leLocataire.montantloyer;
        }
      });
  }
  getAllEncaissementByBienImmobilier(p: any) {

    this.store.dispatch(new GetEncaissementBienActions(p.idBien));

    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((donnee) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (donnee.encaissements.length > 0) {
          this.dataSource.data = donnee.encaissements;
          this.dataSource.paginator = this.paginator;
        }
      });
  }

  printRecu(p: any) {

    this.printService
      .printRecuEncaissement(p)
      .subscribe((blob) => {
        saveAs(blob, 'appel_quittance_du_' + p + '.pdf');
      });
  }
}
