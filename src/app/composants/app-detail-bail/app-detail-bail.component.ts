import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllOperationActions } from 'src/app/ngrx/baux/baux.actions';
import { BauxState, BauxStateEnum } from 'src/app/ngrx/baux/baux.reducer';
import { OperationDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-app-detail-bail',
  templateUrl: './app-detail-bail.component.html',
  styleUrls: ['./app-detail-bail.component.css']
})
export class AppDetailBailComponent implements OnInit {
  @Input() bail: OperationDto | null = null;

  // readonly BauxStateEnum = BauxStateEnum;
  constructor() { }
  ngOnInit(): void {
    console.log("Le baux", this.bail);
    // this.store.dispatch(new GetAllOperationActions({}));
    // this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
  }
  onActionEmmit($event: any) {
    //this.ngOnInit();
  }


}
