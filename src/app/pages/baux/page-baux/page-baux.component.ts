import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllOperationActions } from 'src/app/ngrx/baux/baux.actions';
import { BauxState, BauxStateEnum } from 'src/app/ngrx/baux/baux.reducer';

@Component({
  selector: 'app-page-baux',
  templateUrl: './page-baux.component.html',
  styleUrls: ['./page-baux.component.css']
})
export class PageBauxComponent implements OnInit {
  bauxState$: Observable<BauxState> | null = null;

  readonly BauxStateEnum = BauxStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllOperationActions({}));
    this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
  }
  onActionEmmit($event: any) {
    this.ngOnInit();
  }
}
