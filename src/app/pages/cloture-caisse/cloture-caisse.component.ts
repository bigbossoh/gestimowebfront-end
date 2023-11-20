import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import * as saveAs from 'file-saver';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  GetAllAppelLoyerByBailActions,
  GetAllSmsByLocataireActions,
} from 'src/app/ngrx/appelloyer/appelloyer.actions';
import {
  AppelLoyerState,
  AppelLoyerStateEnum,
} from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { GetDefaultEtabNameActions } from 'src/app/ngrx/etablissement/etablisement.action';
import {
  EtablissementState,
  EtablissementStateEnum,
} from 'src/app/ngrx/etablissement/etablissement.reducer';
import { GetSuiviDepenseDeuxDateActions } from 'src/app/ngrx/journal-caisse/journal-caisse.actions';
import {
  GetAllEncaissementClotureActions,
  GetEncaissementBienActions,
} from 'src/app/ngrx/reglement/reglement.actions';
import {
  EncaissementState,
  EncaissementStateEnum,
} from 'src/app/ngrx/reglement/reglement.reducer';
import { GetAllLocatairesBailActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { PrintServiceService } from 'src/app/services/Print/print-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-cloture-caisse',
  templateUrl: './cloture-caisse.component.html',
  styleUrls: ['./cloture-caisse.component.css'],
})
export class ClotureCaisseComponent implements OnInit {
  selectedDateJour = new Date();
sommeEncaisseSuivi: any;
  getEncaissementPayerJour(arg0: string) {
    throw new Error('Method not implemented.');
  }
  displayedColumns = ['Datedepaiement', 'Periode', 'Loyer', 'ModedeReglement'];
  displayedColumnsAppel = ['idEncaiss', 'Periode', 'Loyer', 'solde'];
  displayedColumnsSms = [
    'dateEnvoi',
    'destinaireNomPrenom',
    'typeMessage',
    'textMessage',
    'envoer',
    'Actions',
  ];

  dataSourceEncaisseLoyer: MatTableDataSource<any> = new MatTableDataSource();
  pageSizeEncaisseLoyer = [5, 10, 15, 20, 40];

  @ViewChild('paginator') paginatorAppel!: MatPaginator;
  @ViewChild(MatSort) sortAppel!: MatSort;

  appelLoyerState$: Observable<AppelLoyerState> | null = null;
  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;

  smsState$: Observable<AppelLoyerState> | null = null;
  readonly SmsStateEnum = AppelLoyerStateEnum;

  dataSourceSms: MatTableDataSource<any> = new MatTableDataSource();
  pageSizeSms = [5, 10, 15, 20];
  @ViewChild('paginatorSms') paginatorSms!: MatPaginator;

  dataSourceSuivi: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20];

  @ViewChild('paginatorEncaissenent') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  locataireState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  public user?: UtilisateurRequestDto;

  etablissementState$: Observable<EtablissementState> | null = null;
  readonly EtablissementStateEnum = EtablissementStateEnum;

  listeEncaissementEntreDeuxDateChapitre$: Observable<EncaissementState> | null =
    null;

  listeSuiviDepenseEntreDeuxDateChapitre$: Observable<EncaissementState> | null =
    null;
  readonly EncaissementStateEnum = EncaissementStateEnum;
  sommeEncaissePrincipal = 0;
  etablissement: any;
  selectedDate: any;
  constructor(
    private store: Store<any>,
    private userService: UserService,
    private printService: PrintServiceService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    // this.etablissement = this.userService.getDefaultChapitre(this.user.id);
    this.store.dispatch(new GetDefaultEtabNameActions(this.user.id));
    this.etablissementState$ = this.store.pipe(
      map((state) => state.etablissementState)
    );
    this.store
      .pipe(map((state) => state.etablissementState))
      .subscribe((data) => {
        this.etablissement = data;
        console.log(data);
      });
    //RAMENER TOUS LES LOCATAIRES QUI ONT UN BAIL ACTIF
    this.store.dispatch(new GetAllLocatairesBailActions(this.user.idAgence));
    this.locataireState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.store
      .pipe(map((state) => state.utilisateurState))
      .subscribe((data) => {
        if (data.locataireBail.lenght > 0) {
          console.log('voici la liste ', data.locataireBail);
          data.locataireBail.sort(
            (a: { codeDescBail: string }, b: { codeDescBail: any }) =>
              a.codeDescBail.localeCompare(b.codeDescBail)
          );
        }
      });
  }
  ngAfterViewInit() {
    // if (this.locataire != undefined) {
    //   this.getAllAppelLoyerByBail(this.locataire);
    //   this.getAllSmsByLocataire(this.locataire);
    //   this.getAllEncaissementByBienImmobilier(this.locataire);
    // }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSuivi.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceSuivi.paginator) {
      this.dataSourceSuivi.paginator.firstPage();
    }
    this.dataSourceEncaisseLoyer.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceEncaisseLoyer.paginator) {
      this.dataSourceEncaisseLoyer.paginator.firstPage();
    }
  }
  applyFilterAppel(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSourceEncaisseLoyer.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceEncaisseLoyer.paginator) {
      this.dataSourceEncaisseLoyer.paginator.firstPage();
    }
  }
  getAllSuiviDepenseentreDeuxDate(debut: any, fin: any) {
    const jdebut = debut.replaceAll('/', '-');
    const jfin = fin.replaceAll('/', '-');
    this.store.dispatch(
      new GetSuiviDepenseDeuxDateActions({
        idcaisse: this.user?.id,
        idChapitre: this.etablissement.etabname.chapite,
        dateFin: jfin,
        dateDebut: jdebut,
      })
    );
    this.listeSuiviDepenseEntreDeuxDateChapitre$ = this.store.pipe(
      map((state) => state.suiviDepenseState)
    );
    this.store
      .pipe(map((state) => state.suiviDepenseState))
      .subscribe((data) => {
        console.log(
          '**** LES SUIVI APRES LA PERIODE EST LA SUIVANTE SON TOTAL ****'
        );
        console.log(data.suiviDepensesCloture);
        console.log('********************');
        this.dataSourceSuivi.data = [];
        this.sommeEncaisseSuivi=0;
        this.dataSourceSuivi.paginator = null;
        if (data.suiviDepensesCloture.length > 0) {
          this.dataSourceSuivi.data = data.suiviDepensesCloture;
          this.dataSourceSuivi.paginator = this.paginatorAppel;
          for (
            let index = 0;
            index < data.suiviDepensesCloture.length;
            index++
          ) {
            this.sommeEncaisseSuivi +=
              data.suiviDepensesCloture[index]['montantDepense'];
          }
        }
      });
  }
  getAllEnciassementParPeriodeCaisseAgence(debut: any, fin: any) {
    const jdebut = debut.replaceAll('/', '-');
    const jfin = fin.replaceAll('/', '-');
    this.store.dispatch(
      new GetAllEncaissementClotureActions({
        idEncaiss: this.user?.id,
        idChapitre: this.etablissement.etabname.chapite,
        debut: jdebut,
        fin: jfin,
      })
    );
    this.listeEncaissementEntreDeuxDateChapitre$ = this.store.pipe(
      map((state) => state.encaissementState)
    );
    this.store
      .pipe(map((state) => state.encaissementState))
      .subscribe((data) => {
        this.dataSourceEncaisseLoyer.data = [];
        this.sommeEncaissePrincipal = 0;
        this.dataSourceEncaisseLoyer.paginator = null;
        if (data.encaissementsCloture.length > 0) {
          this.dataSourceEncaisseLoyer.data = data.encaissementsCloture;
          this.dataSourceEncaisseLoyer.paginator = this.paginatorAppel;
          for (
            let index = 0;
            index < data.encaissementsCloture.length;
            index++
          ) {
            this.sommeEncaissePrincipal +=
              data.encaissementsCloture[index]['montantEncaissement'];
          }
        }
      });
  }

  getAllEncaissementByBienImmobilier(p: any) {}
  // getAllAppelLoyerByBail(bien: any) {
  //   this.store.dispatch(new GetAllAppelLoyerByBailActions(bien.idBail));
  //   this.appelLoyerState$ = this.store.pipe(
  //     map((state) => state.appelLoyerState)
  //   );
  //   this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
  //     this.dataSourceEncaisseLoyer.data = [];
  //     this.dataSourceEncaisseLoyer.paginator = null;
  //     if (data.appelloyers.length > 0) {
  //       this.dataSourceEncaisseLoyer.data = data.appelloyers;
  //       this.dataSourceEncaisseLoyer.paginator = this.paginatorAppel;
  //     }
  //   });
  // }
  supprimerUnLoyer(idAppel: any) {
    if (confirm('Vous allez annuler ce paiement de façon irreversible')) {
      this.appelLoyerState$ = this.store.pipe(
        map((state) => state.appelLoyerState)
      );
      // this.store
      //   .pipe(map((state) => state.appelLoyerState))
      //   .subscribe((data) => {
      //     this.dataSourceAppel.data = [];
      //     this.dataSourceAppel.paginator = null;
      //     if (data.appelloyers.length > 0) {
      //       this.dataSourceAppel.data = data.appelloyers;
      //       this.dataSourceAppel.paginator = this.paginatorAppel;
      //     }
      //   });

      alert("Annulation d'appel effectuée avec succès ");
    }
    this.ngAfterViewInit();
  }
  getAllSmsByLocataire(locatire: any) {
    this.store.dispatch(new GetAllSmsByLocataireActions(locatire.username));
    this.smsState$ = this.store.pipe(map((state) => state.appelLoyerState));
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      this.dataSourceSms.data = [];
      this.dataSourceSms.paginator = null;

      if (data.smss.length > 0) {
        console.log(data.smss);

        this.dataSourceSms.data = data.smss;
        this.dataSourceSms.paginator = this.paginatorSms;
      }
    });
  }
  printRecu(p: any) {
    this.printService.printRecuEncaissement(p).subscribe((blob) => {
      console.log('La taille du fichier' + blob.size);
      saveAs(blob, 'appel_quittance_du_' + p + '.pdf');
    });
  }
}
