import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllSitesActions } from 'src/app/ngrx/site/site.actions';
import { SiteState, SiteStateEnum } from 'src/app/ngrx/site/site.reducer';


@Component({
  selector: 'app-page-site',
  templateUrl: './page-site.component.html',
  styleUrls: ['./page-site.component.css']
})
export class PageSiteComponent implements OnInit {


  siteState$: Observable<SiteState> | null = null;

  readonly SiteStateEnum = SiteStateEnum;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSitesActions({}));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));
  }

}
