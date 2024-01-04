import { BienImmobilierActions } from './../../../../ngrx/bien-immobilier/bienimmobilier.actions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
import { PageAjoutReservationComponent } from '../../page-ajout-reservation/page-ajout-reservation.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SaveCategorieAppartComponent } from 'src/app/pages/categorie-appartement/save-categorie-appart/save-categorie-appart.component';
import { PageReglementReservationIndividuelComponent } from '../../page-reglement-reservation-individuel/page-reglement-reservation-individuel.component';
import { PrintServiceService } from 'src/app/services/Print/print-service.service';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-page-reservation-residence',
  templateUrl: './page-reservation-residence.component.html',
  styleUrls: ['./page-reservation-residence.component.css'],
})
export class PageReservationResidenceComponent implements OnInit {
encaissementReservation(row: any) {
  const dialogRef = this.dialog.open(PageReglementReservationIndividuelComponent, {
    data: {reservation:row},
  });
  dialogRef.afterClosed().subscribe((result) => {
    this.ngOnInit();
  });
}

  displayedColumns = [
    'datereservation',
    'client',
    'appartement',
    'totalapayer',
    'montantpaye',
    'resteapayer',
    'pourcentagereductione',
    'periode',
    'action',
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSizeAppel = [5, 10, 15, 20, 40];
  public totalRecords: number | undefined;
  public user?: UtilisateurRequestDto;
  constructor(private store: Store<any>, public dialog: MatDialog, private userService: UserService, private printService: PrintServiceService) {}

  reservationState$: Observable<ReservationState> | null = null;
  readonly ReservationStateEnum = ReservationStateEnum;

  ngOnInit(): void {
    this.afficherLesReservation();
  }
  afficherLesReservation() {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetListReservationAction(this.user!.idAgence));
    this.reservationState$ = this.store.pipe(
      map((state) => state.reservationState)
    );
    this.store
      .pipe(map((state) => state.reservationState))
      .subscribe((data) => {
        this.totalRecords=0;
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (data.dataState == 'Loaded') {
          this.totalRecords = data.reservations.length;
          this.dataSource.data = data.reservations;
          this.dataSource.paginator = this.paginator;
          console.log( this.dataSource.data = data.reservations)
        }
      });
  }
  applyFilterAppel(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  creerUneReservation() {
    const dialogRef = this.dialog.open(PageAjoutReservationComponent, {
      data: {idReservation:0},
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
  entrerEnChambre(id: any) {
    const dialogRef = this.dialog.open(PageAjoutReservationComponent, {
      data: {idReservation:id},
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
  printRecuPaiementReservation(p: any) {
    this.user = this.userService.getUserFromLocalCache();
//recureservation(  idEncaissement:any,  idAgence:any,proprio:any)
    this.printService
      .recureservationparid(p,  this.user.idAgence,'SABLIN SEVERIN')
      .subscribe((blob) => {
        // console.log('La taille du fichier' + blob.size);
        saveAs(blob, 'recu_de_paiement_' + p + '.pdf');
      });
  }
}
