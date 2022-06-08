import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllOperationActions } from 'src/app/ngrx/baux/baux.actions';
import { BauxState, BauxStateEnum } from 'src/app/ngrx/baux/baux.reducer';
import { OperationDto } from '../../../../gs-api/src/models/operation-dto';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-page-baux',
  templateUrl: './page-baux.component.html',
  styleUrls: ['./page-baux.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PageBauxComponent implements OnInit {
  columnsToDisplay = [
    'Code bail',
    'debut',
    'fin',
    'Bien immobilier',
    'Nombre de mois de Caution',
    'Montant Caution',
    'Bail en cours',
    'Actions',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: OperationDto;
  ELEMENT_DATA: OperationDto[] = [];
  bauxState$: Observable<BauxState> | null = null;
  dataSource = this.ELEMENT_DATA;
  readonly BauxStateEnum = BauxStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAllOperationActions({}));
    this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
  }
  onActionEmmit($event: any) {
    this.ngOnInit();
  }
}
