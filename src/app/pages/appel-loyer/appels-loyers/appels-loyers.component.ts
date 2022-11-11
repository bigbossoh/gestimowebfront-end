
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
  public user?: UtilisateurRequestDto;
  constructor(private store: Store<any>, private userService: UserService) {
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
  }
  ngOnInit(): void {
    this.store.dispatch(new GetAllAppelLoyerByPeriodeActions(''));
    this.appelState$ = this.store.pipe(map((state) => state.appelLoyerState));
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      console.log('les données de appels sont lmes suivants');
      console.log(data);
    });
  }
  getAppelByPeriode(p: any) {
    this.afficheAppelTable = 1;
    this.store.dispatch(new GetAllAppelLoyerByPeriodeActions(p));
    this.appelState$ = this.store.pipe(map((state) => state.appelLoyerState));
    this.store.pipe(map((state) => state.appelLoyerState)).subscribe((data) => {
      if (data.appelloyers.length) {
        this.dataSource.data = data.appelloyers;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  getAllPeriodeByAnnee(a: string) {
    this.user = this.userService.getUserFromLocalCache();
    this.afficheAppelTable = 0;

    this.store.dispatch(new GetAllPeriodeByAnneeActions({idAgence:this.user.idAgence,annee:a}));
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
  }
  sendQuittanceGrouper(periode: string) {
    this.store.dispatch(new SendQuittanceByMailActions(periode));
    this.sendMailState$ = this.store.pipe(map((state) => state.mailState));
  }
  sendQuittanceIndividuel(id: any) {
    this.store.dispatch(new SendQuittanceIndividuelActions(id));
    this.sendMailIndivState$ = this.store.pipe(map((state) => state.mailState));
  }
}
