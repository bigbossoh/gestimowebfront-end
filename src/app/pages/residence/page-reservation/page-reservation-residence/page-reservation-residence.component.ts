import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetListReservationAction } from 'src/app/ngrx/reservation/reservation.actions';
import {
  ReservationState,
  ReservationStateEnum,
} from 'src/app/ngrx/reservation/reservation.reducer';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-reservation-residence',
  templateUrl: './page-reservation-residence.component.html',
  styleUrls: ['./page-reservation-residence.component.css'],
})
export class PageReservationResidenceComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private userService: UserService,
    private router: Router
  ) {}
  public user?: UtilisateurRequestDto;
  reservationState$: Observable<ReservationState> | null = null;
  readonly ReservationStateEnum = ReservationStateEnum;

  ngOnInit(): void {
    this.afficherLesReservation();
  }
  afficherLesReservation() {
    this.store.dispatch(new GetListReservationAction({}));
    this.reservationState$ = this.store.pipe(
      map((state) => state.reservationState)
    );
    this.store
      .pipe(map((state) => state.reservationState))
      .subscribe((data) => {
        console.log('les  données sont les suivantes');
        if (data.dataState == 'Loaded') {
          console.log(data);
        }
      });
  }
  creerUneReservation() {
    this.router.navigateByUrl('/ajout-reservation');
  }
}
