import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllAppelLoyerActions } from 'src/app/ngrx/appelloyer/appelloyer.actions';
import { AppelLoyerState } from 'src/app/ngrx/appelloyer/appelloyer.reducer';

@Component({
  selector: 'app-app-detail-bail-loyer',
  templateUrl: './app-detail-bail-loyer.component.html',
  styleUrls: ['./app-detail-bail-loyer.component.css']
})
export class AppDetailBailLoyerComponent implements OnInit {
  @Input() idBail: number | undefined;
  appelStore$: Observable<AppelLoyerState> | null = null;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    console.log("Le Id du Bail est 1 : ", this.idBail);
    if (this.idBail == 1) {
      this.store.dispatch(new GetAllAppelLoyerActions(this.idBail));
      this.appelStore$ = this.store.pipe(map((state) => state.appelLoyerState));
      // console.log("Le Store du bail est du Bail est : ", this.appelStore$);
    }


  }

}
