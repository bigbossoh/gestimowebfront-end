import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllSitesActions } from 'src/app/ngrx/site/site.actions';
import { SiteState, SiteStateEnum } from 'src/app/ngrx/site/site.reducer';
import { GetAllProprietairesActions } from 'src/app/ngrx/utulisateur/utilisateur.actions';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from 'src/app/ngrx/utulisateur/utlisateur.reducer';
import { SiteResponseDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-bien-immobilier-new',
  templateUrl: './page-bien-immobilier-new.component.html',
  styleUrls: ['./page-bien-immobilier-new.component.css'],
})
export class PageBienImmobilierNewComponent implements OnInit {
  ngselectBin = 10;

  listTypeBiens: string[] = [];
  siteState$: Observable<SiteState> | null = null;
  utilisateurState$: Observable<UtilisteurState> | null = null;

  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  readonly SiteStateEnum = SiteStateEnum;

  constructor(private store: Store<any>) {
    this.listTypeBiens = [
      'Appartement',
      'Etage',
      'Immeuble',
      'Magasin',
      'Studio',
      'Villa',
    ];
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSitesActions({}));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));

    this.store.dispatch(new GetAllProprietairesActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
  }
}
