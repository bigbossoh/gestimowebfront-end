import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetSuiviDepenseTotalActions } from 'src/app/ngrx/journal-caisse/journal-caisse.actions';
import {
  SuiviDepenseState,
  SuiviDepenseStateEnum,
} from 'src/app/ngrx/journal-caisse/journal-caisse.reducer';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-consultation-reglement-loyer-periode',
  templateUrl: './page-consultation-reglement-loyer-periode.component.html',
  styleUrls: ['./page-consultation-reglement-loyer-periode.component.css'],
})
export class PageConsultationReglementLoyerPeriodeComponent implements OnInit {
  suiviDepense$: Observable<SuiviDepenseState> | null = null;
  readonly SuiviDepenseStateEnum = SuiviDepenseStateEnum;
  debut = new Date();
  fin = new Date();
  public user?: UtilisateurRequestDto;
  constructor(
    private store: Store<any>,
    private _adapter: DateAdapter<Date>,
    private userService: UserService,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }

  ngOnInit(): void {this.getAllEncaissementParPeriode(this.debut,this.fin)}
  getAllEncaissementParPeriode(debut: any, fin: any) {
    this.user = this.userService.getUserFromLocalCache();
    const jourDebut = formatDate(debut, 'dd-MM-yyyy', this._locale);
    const jourFin = formatDate(fin, 'dd-MM-yyyy', this._locale);
    this.store.dispatch(
      new GetSuiviDepenseTotalActions({
        idAgence: this.user?.idAgence,
        fin: jourFin,
        debut: jourDebut,
      })
    );
    this.suiviDepense$ = this.store.pipe(
      map((state) => state.suiviDepenseState)
    );
  }
}
