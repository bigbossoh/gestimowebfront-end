import { AppelLoyerState } from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrintServiceService } from '../../../services/Print/print-service.service';
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
import {
  QuittanceAppelLoyerActions,
  PrintQuittanceLoyerActions,
} from '../../../ngrx/print-data/quittance-appel-loyer/quittance-appel-loyer.action';
import { MailState, MailStateEnum } from '../../../ngrx/mail/mail.reducer';
import { SendQuittanceByMailActions, SendQuittanceIndividuelActions } from '../../../ngrx/mail/mail.action';

@Component({
  selector: 'app-appels-loyers',
  templateUrl: './appels-loyers.component.html',
  styleUrls: ['./appels-loyers.component.css'],
})
export class AppelsLoyersComponent implements OnInit {
  appelState$: Observable<AppelLoyerState> | null = null;
  anneeState$: Observable<AnneeState> | null = null;
  periodeAppelState$: Observable<AppelLoyerState> | null = null;

  sendMailState$: Observable<MailState> | null = null;
  sendMailIndivState$: Observable<MailState> | null = null;
  ptQuittance$: Observable<QuittanceLoyerState> | null = null;

  readonly QuittanceloyerStateEnum = QuittanceloyerStateEnum;
  readonly AnneeStateEnum = AnneeStateEnum;
  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;
  readonly MailStateEnum = MailStateEnum;
  readonly MailStateEnumIndividuel = MailStateEnum;

  periodePrint = '';
  debutBail = '';
  finBail = '';
  datePaysBail = '';
  defauldPeriode = '';
  ngSelect = 1;

  constructor(private store: Store<any>) {
    this.store.dispatch(new GetAllAnneeActions({}));
    this.anneeState$ = this.store.pipe(map((state) => state.anneeState));
  }
  ngOnInit(): void {
    this.store.dispatch(new GetAllAppelLoyerByPeriodeActions(''));
    this.appelState$ = this.store.pipe(map((state) => state.appelLoyerState));
  }
  getAppelByPeriode(p: string) {
    this.store.dispatch(new GetAllAppelLoyerByPeriodeActions(p));
    this.appelState$ = this.store.pipe(map((state) => state.appelLoyerState));
  }
  getAppelByAnnee(a: string) {
    this.store.dispatch(new GetAllAppelLoyerAnneeActions(a));
    this.periodeAppelState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
  }
  printQuittance(p: string) {
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
    console.log(id);
    this.store.dispatch(new SendQuittanceIndividuelActions(id));
    this.sendMailIndivState$ = this.store.pipe(map((state) => state.mailState));
  }
}
