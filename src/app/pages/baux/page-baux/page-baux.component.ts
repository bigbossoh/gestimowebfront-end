import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClotureOperationActions, GetAllOperationActions } from 'src/app/ngrx/baux/baux.actions';
import { BauxState, BauxStateEnum } from 'src/app/ngrx/baux/baux.reducer';
import { OperationDto } from '../../../../gs-api/src/models/operation-dto';
import { GetAllAppelLoyerActions } from '../../../ngrx/appelloyer/appelloyer.actions';
import { Operation } from '../../../../gs-api/src/models/operation';
import {
  AppelLoyerState,
  AppelLoyerStateEnum,
} from '../../../ngrx/appelloyer/appelloyer.reducer';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ModifLoyerBailComponent } from '../modif-loyer-bail/modif-loyer-bail.component';

export interface DialogData {
  id: number;
}
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
    // 'Locataire',
    'debut',
    'fin',
    // 'Bien immobilier',
    'Montant Caution',
    'Bail en cours',
    'Actions',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement?: OperationDto;
  ELEMENT_DATA: OperationDto[] = [];
  dataSource = this.ELEMENT_DATA;

  appelloyerState$: Observable<AppelLoyerState> | null = null;
  bauxState$: Observable<BauxState> | null = null;

  readonly BauxStateEnum = BauxStateEnum;
  readonly AppelLoyerStateEnum = AppelLoyerStateEnum;

  constructor(public dialog: MatDialog, private store: Store<any>) { }
  openModifMontantDialog(loyer: number): void {
    const dialolRef = this.dialog.open(ModifLoyerBailComponent, {
      data: { id: loyer }
    });
    dialolRef.afterClosed().subscribe(() => {
      console.log('On  a fermer le formulaire de Baux');
    });
  }
  ngOnInit(): void {
    this.store.dispatch(new GetAllOperationActions({}));
    this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
  }
  onActionEmmit($event: any) {
    this.ngOnInit();
  }
  onDetailClick(state: any) {

  }
  onClotureBail(idBail: any, nomBail: any) {
    console.log("Le Id est le suivant : " + idBail);
    if (confirm("Vous allez Cloturer le Bail " + nomBail)) {
      this.store.dispatch(new ClotureOperationActions(idBail));
      this.bauxState$ = this.bauxState$ = this.store.pipe(map((state) => state.bauxState));
    }


  }

  onModifClick(state: any) {

  }
  onDeleteClick(state: any) {

  }
  chargerAppels(evt: any) {
    console.log("Le event qui a changé c'est celui ci "+evt);

    
    this.store.dispatch(new GetAllAppelLoyerActions(evt));
    this.appelloyerState$ = this.store.pipe(
      map((state) => state.appelLoyerState)
    );
  }
}
