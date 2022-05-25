import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllSitesActions } from 'src/app/ngrx/site/site.actions';
import { SiteState, SiteStateEnum } from 'src/app/ngrx/site/site.reducer';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageNewSiteComponent } from '../page-new-site/page-new-site.component';


@Component({
  selector: 'app-page-site',
  templateUrl: './page-site.component.html',
  styleUrls: ['./page-site.component.css']
})
export class PageSiteComponent implements OnInit {


  siteState$: Observable<SiteState> | null = null;

  readonly SiteStateEnum = SiteStateEnum;



  constructor(private store: Store<any>,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSitesActions({}));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));
  }
  nouveauSite():void{
    // this.router.navigate(['nouvellesociete']);
    const dialolRef = this.dialog.open(PageNewSiteComponent, {
       width: '800px',
    });

  }
}
