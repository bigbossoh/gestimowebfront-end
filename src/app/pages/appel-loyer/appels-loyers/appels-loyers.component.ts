import { AppelLoyerState } from 'src/app/ngrx/appelloyer/appelloyer.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrintServiceService } from '../../../services/Print/print-service.service';
import { GetAllAppelLoyerAnneeActions, GetAllAppelLoyerByPeriodeActions } from '../../../ngrx/appelloyer/appelloyer.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppelLoyerStateEnum } from '../../../ngrx/appelloyer/appelloyer.reducer';
import { AnneeState, AnneeStateEnum } from '../../../ngrx/annee/annee.reducer';
import { GetAllAnneeActions } from '../../../ngrx/annee/annee.actions';


@Component({
  selector: 'app-appels-loyers',
  templateUrl: './appels-loyers.component.html',
  styleUrls: ['./appels-loyers.component.css'],
})
export class AppelsLoyersComponent implements OnInit {
  appelState$: Observable<AppelLoyerState> | null = null;
  anneeState$: Observable<AnneeState> | null = null;
  periodeAppelState$: Observable<AppelLoyerState> | null = null;



  readonly AnneeStateEnum = AnneeStateEnum;

  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;
  periodePrint = '';
  debutBail='';
  finBail='';
  datePaysBail='';
  defauldPeriode='';

  constructor(private store: Store<any>, private printService: PrintServiceService) {
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
  getAppelByAnnee(a:string){
    this.store.dispatch(new GetAllAppelLoyerAnneeActions(a));
    this.periodeAppelState$ = this.store.pipe(map((state) => state.appelLoyerState));
  }

  printQuittance(p: string) {

    this.printService.printQuittanceByPeriode(p).subscribe((data) => {
           const fileURL = URL.createObjectURL(data);
      window.open(fileURL);
    })
  }
}
