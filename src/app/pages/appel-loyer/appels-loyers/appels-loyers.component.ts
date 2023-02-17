import { ReductionAppelLoyerComponent } from './../reduction-appel-loyer/reduction-appel-loyer.component';
import { MatDialog } from '@angular/material/dialog';
import { AppelLoyerState } from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  GetAllAppelLoyerAnneeActions,
  GetAllAppelLoyerByPeriodeActions,
} from '../../../ngrx/appelloyer/appelloyer.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppelLoyerStateEnum } from '../../../ngrx/appelloyer/appelloyer.reducer';
import { AnneeState, AnneeStateEnum } from '../../../ngrx/annee/annee.reducer';
import { GetAllAnneeActions } from '../../../ngrx/annee/annee.actions';
import {
  QuittanceLoyerState,
  QuittanceloyerStateEnum,
} from '../../../ngrx/print-data/quittance-appel-loyer/quittance-appel-loyer.reducer';
import { PrintQuittanceLoyerActions } from '../../../ngrx/print-data/quittance-appel-loyer/quittance-appel-loyer.action';
import { MailState, MailStateEnum } from '../../../ngrx/mail/mail.reducer';
import {
  SendQuittanceByMailActions,
  SendQuittanceIndividuelActions,
} from '../../../ngrx/mail/mail.action';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  PeriodeState,
  PeriodeStateEnum,
} from 'src/app/ngrx/appelloyer/peiodeappel/periodeappel.reducer';
import { GetAllPeriodeByAnneeActions } from 'src/app/ngrx/appelloyer/peiodeappel/periodeappel.actions';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { PrintServiceService } from 'src/app/services/Print/print-service.service';
import { saveAs } from 'file-saver';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-appels-loyers',
  templateUrl: './appels-loyers.component.html',
  styleUrls: ['./appels-loyers.component.css'],
})
export class AppelsLoyersComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'periode',
    'bail',
    'montantloyer',
    'solde',
    'Status',
    'Actions',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20, 50, 100];
  public totalRecords: number | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  appelState$: Observable<AppelLoyerState> | null = null;
  anneeState$: Observable<AnneeState> | null = null;
  periodeState$: Observable<PeriodeState> | null = null;

  sendMailState$: Observable<MailState> | null = null;
  sendMailIndivState$: Observable<MailState> | null = null;
  ptQuittance$: Observable<QuittanceLoyerState> | null = null;
  afficheAppelTable = 0;
  readonly QuittanceloyerStateEnum = QuittanceloyerStateEnum;
  readonly AnneeStateEnum = AnneeStateEnum;
  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;
  readonly PeriodeStateEnum = PeriodeStateEnum;
  readonly MailStateEnum = MailStateEnum;
  readonly MailStateEnumIndividuel = MailStateEnum;

  periodePrint = '';
  periodeValide = '';
  debutBail = '';
  finBail = '';
  datePaysBail = '';
  defauldPeriode = '';
  ngSelect = 1;
  annee = new Date();
  printAnnee = 0;
  public user?: UtilisateurRequestDto;
  constructor(
    public dialog: MatDialog,
    private store: Store<any>,
    private userService: UserService,
    private printService: PrintServiceService
  ) {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetAllAnneeActions(this.user!.idAgence));
    this.anneeState$ = this.store.pipe(map((state) => state.anneeState));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit(): void {
    this.ngOnInit();
    this.getAllPeriodeByAnnee(this.printAnnee);
    const periode_jour = formatDate(this.annee, 'yyyy-MM', 'en');
    this.periodePrint = periode_jour;
    this.getAppelByPeriode(this.periodePrint)
  }
  ngOnInit(): void {
    this.printAnnee = this.annee.getFullYear();
    this.store.dispatch(
      new GetAllAppelLoyerByPeriodeActions(this.periodePrint)
    );
    this.appelState$ = this.store.pipe(map((state) => state.appelLoyerState));
    this.store
      .pipe(map((state) => state.appelLoyerState))
      .subscribe((data) => {});
  }
  getAppelByPeriode(p: any) {
    this.user = this.userService.getUserFromLocalCache();
    this.afficheAppelTable = 1;
    this.store.dispatch(
      new GetAllAppelLoyerByPeriodeActions({
        periode: p,
        idAgence: this.user.idAgence,
      })
    );
    this.appelState$ = this.store.pipe(map((state) => state.appelLoyerState));
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      if (data.appelloyers.length) {
        this.dataSource.data = data.appelloyers;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  getAllPeriodeByAnnee(a: any) {
    this.user = this.userService.getUserFromLocalCache();
    this.afficheAppelTable = 0;

    this.store.dispatch(
      new GetAllPeriodeByAnneeActions({
        idAgence: this.user.idAgence,
        annee: a,
      })
    );
    this.periodeState$ = this.store.pipe(map((state) => state.periodeState));
  }
  getAppelByAnnee(a: string) {
    this.store.dispatch(new GetAllAppelLoyerAnneeActions(a));
    this.appelState$ = this.store.pipe(map((state) => state.appelLoyerState));
  }
  printQuittance(p: string) {
    this.user = this.userService.getUserFromLocalCache();

    this.store.dispatch(new PrintQuittanceLoyerActions(p));
    this.ptQuittance$ = this.store.pipe(
      map((state) => state.quittanceAppelState)
    );
    this.printService
      .printQuittanceByPeriode(p, 'Seve', this.user.idAgence)
      .subscribe((blob) => {
        console.log('La taille du fichier' + blob.size);
        saveAs(blob, 'appel_quittance_du_' + p + '.pdf');
      });
  }
  sendQuittanceGrouper(periode: string) {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(
      new SendQuittanceByMailActions({
        periode: periode,
        idAgence: this.user.idAgence,
      })
    );
    this.sendMailState$ = this.store.pipe(map((state) => state.mailState));
  }
  sendQuittanceIndividuel(id: any) {
    this.store.dispatch(new SendQuittanceIndividuelActions(id));
    this.sendMailIndivState$ = this.store.pipe(map((state) => state.mailState));
  }
  reductionLoyerAppel(periodePr: string) {
    const dialolRef = this.dialog.open(ReductionAppelLoyerComponent, {
      data: { id: periodePr },
    });
    dialolRef.afterClosed().subscribe(() => {});
  }
}
