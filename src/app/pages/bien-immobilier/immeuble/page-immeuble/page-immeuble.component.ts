import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImmeubleState, ImmeubleStateEnum } from '../../../../ngrx/immeuble/immeuble.reducer';
import { GetAllBiensActions } from '../../../../ngrx/bien-immobilier/bienimmobilier.actions';
import { BienImmobilierState, BienImmobilierStateEnum } from '../../../../ngrx/bien-immobilier/bienimmobilier.reducer';
import { map } from 'rxjs/operators';
import { GetAllImmeublesActions } from '../../../../ngrx/immeuble/immeuble.actions';
import { VilleState, VilleStateEnum } from '../../../../ngrx/ville/ville.reducer';
import { CommunesState, CommunesStateEnum } from 'src/app/ngrx/commune/commune.reducer';

@Component({
  selector: 'app-page-immeuble',
  templateUrl: './page-immeuble.component.html',
  styleUrls: ['./page-immeuble.component.css']
})
export class PageImmeubleComponent implements OnInit {
  public totalRecords: number | undefined;
  public page: number = 1;

  villeState$: Observable<VilleState> | null = null;

  commeState$: Observable<CommunesState> | null = null;
  bienState$: Observable<BienImmobilierState> | null = null;
  immeubleState$: Observable<ImmeubleState> | null = null;

  readonly VilleStateEnum = VilleStateEnum;
  readonly ImmeubleStateEnum = ImmeubleStateEnum;
  readonly BienImmobilierStateEnum = BienImmobilierStateEnum;
  readonly CommunesStateEnum = CommunesStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit() {
       // RECUPERER LES BIENS
       this.store.dispatch(new GetAllBiensActions({}));
       this.bienState$ = this.store.pipe(map((state) => state.biensState));
       // RECUPERR LES ETAGES
       this.store.dispatch(new GetAllImmeublesActions({}));
       this.immeubleState$ = this.store.pipe(map((state) => state.immeubleState));
  }

}
