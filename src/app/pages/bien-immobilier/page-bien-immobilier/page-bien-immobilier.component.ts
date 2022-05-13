import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllBiensActions } from 'src/app/ngrx/bien-immobilier/bienimmobilier.actions';

import {
  BienImmobilierState,
  BienImmobilierStateEnum,
} from 'src/app/ngrx/bien-immobilier/bienimmobilier.reducer';

@Component({
  selector: 'app-page-bien-immobilier',
  templateUrl: './page-bien-immobilier.component.html',
  styleUrls: ['./page-bien-immobilier.component.css'],
})
export class PageBienImmobilierComponent implements OnInit {
  bienState$: Observable<BienImmobilierState> | null = null;
  readonly BienImmobilierStateEnum = BienImmobilierStateEnum;
  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    this.store.dispatch(new GetAllBiensActions({}));
    this.bienState$ = this.store.pipe(map((state) => state.biensState));
  }
}
