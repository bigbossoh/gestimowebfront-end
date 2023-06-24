import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  SaveSuiviDepenseActions,
  GetAllSuiviDepenseActions,
} from './../../../ngrx/journal-caisse/journal-caisse.actions';
import { SuiviDepenseState } from './../../../ngrx/journal-caisse/journal-caisse.reducer';
import { Observable } from 'rxjs';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-page-journal-caisse',
  templateUrl: './page-journal-caisse.component.html',
  styleUrls: ['./page-journal-caisse.component.css'],
})
export class PageJournalCaisseComponent implements OnInit {
  displayedColumns = [
    'id',
    'dateEncaissement',
    'codeTransaction',
    'montantDepense',
    'designation',
    'modePaiement',
    'operationType',
    'Actions',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public user?: UtilisateurRequestDto;
  submitted = false;
  suiviDepenseState$: Observable<SuiviDepenseState> | null = null;
  allSuiviDepenseState$: Observable<SuiviDepenseState> | null = null;
  formGroup?: FormGroup;
  selectedDate = new Date();
  descdepense: any;
  montantencaisse: any;
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.formGroup = this.fb.group({
      id: [0],
      idAgence: [this.user.idAgence],
      idCreateur: [this.user.id],
      dateEncaissement: [],
      designation: ['', Validators.required],
      codeTransaction: [''],
      montantDepense: [0],
      modePaiement: ['ESPESE_MAGISER'],
      operationType: ['DEBIT'],
    });

    this.store.dispatch(new GetAllSuiviDepenseActions(this.user.idAgence));
    this.allSuiviDepenseState$ = this.store.pipe(
      map((state) => state.suiviDepenseState)
    );

    this.store
      .pipe(map((state) => state.suiviDepenseState))
      .subscribe((data) => {
        console.log(data);
        if (data.dataState == 'Loaded') {
          console.log(data.suiviDepenses);
          this.dataSource.data = data.suiviDepenses;
          this.dataSource.paginator = this.paginator;
        }
      });
  }
  ngAfterViewInit(): void {

    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetAllSuiviDepenseActions(this.user.idAgence));
    this.allSuiviDepenseState$ = this.store.pipe(
      map((state) => state.suiviDepenseState)
    );

    this.store
      .pipe(map((state) => state.suiviDepenseState))
      .subscribe((data) => {
        this.dataSource.data = [];
        this.dataSource.paginator = null;
        if (data.dataState == 'Loaded') {
          console.log(data.suiviDepenses);
          this.dataSource.data = data.suiviDepenses;
          this.dataSource.paginator = this.paginator;
        }
      });
    this.descdepense = '';
    this.montantencaisse = 0;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //SAVE DU FORMULAIRE
  onSaveForm() {
    this.store.dispatch(new SaveSuiviDepenseActions(this.formGroup?.value));
    this.suiviDepenseState$ = this.store.pipe(
      map((state) => state.suiviDepenseState)
    );

    this.ngAfterViewInit();
  }
}
