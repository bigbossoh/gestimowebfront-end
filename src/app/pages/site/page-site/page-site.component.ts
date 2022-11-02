import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllSitesActions } from 'src/app/ngrx/site/site.actions';
import { SiteState, SiteStateEnum } from 'src/app/ngrx/site/site.reducer';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageNewSiteComponent } from '../page-new-site/page-new-site.component';
import { SiteResponseDto, UtilisateurRequestDto } from 'src/gs-api/src/models';
import { DeleteSiteAction } from '../../../ngrx/site/site.actions';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-page-site',
  templateUrl: './page-site.component.html',
  styleUrls: ['./page-site.component.css'],
})
export class PageSiteComponent implements OnInit {
  totalLigne: number = 0;
  counter: Observable<SiteResponseDto[]> | null = null;
  page: number = 1;
  public user: UtilisateurRequestDto | undefined;
  v_user: number = 0;
  siteState$: Observable<SiteState> | null = null;

  readonly SiteStateEnum = SiteStateEnum;

  constructor(
    private store: Store<any>,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.user = this.userService.getUserFromLocalCache();
        if (this.user.idAgence != undefined) {
      this.store.dispatch(new GetAllSitesActions(this.v_user));
      this.siteState$ = this.store.pipe(map((state) => state.siteState));
      //this.counter = this.store.select('sites');

    }
  }
  nouveauSite(): void {
    // this.router.navigate(['nouvellesociete']);
    const dialolRef = this.dialog.open(PageNewSiteComponent, {
      width: '800px',
    });
    //dialolRef.afterClosed().subscribe(() => this.ngOnInit());
  }
}
