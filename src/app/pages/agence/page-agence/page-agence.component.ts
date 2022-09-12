import { Component, OnInit } from '@angular/core';
import { AgenceRequestDto } from '../../../../gs-api/src/models/agence-request-dto';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Store } from '@ngrx/store';
import { GetAllAgenceActions } from '../../../ngrx/agence/agence.actions';
import {
  AgenceBdState,
  AgenceStateEnum,
} from 'src/app/ngrx/agence/agence.reducer';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AgenceNewComponent } from '../agence-new/agence-new.component';

@Component({
  selector: 'app-page-agence',
  templateUrl: './page-agence.component.html',
  styleUrls: ['./page-agence.component.css'],
})
export class PageAgenceComponent implements OnInit {
  public user?: UtilisateurRequestDto;
  public agences?: AgenceRequestDto[];
  public agence?: AgenceRequestDto;
  public editAgence?: AgenceRequestDto;

  public refreshing?: boolean;
  agenceRegisterForm!: FormGroup;

  getAgenceState$: Observable<AgenceBdState> | null = null;

  readonly AgenceStateEnum = AgenceStateEnum;
  constructor(private store: Store<any>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAllAgenceActions({}));
    this.getAgenceState$ = this.store.pipe(map((state) => state.agenceState));
  }
  onCreateAgence() {
    const dialogref = this.dialog.open(AgenceNewComponent);
 

    
    // dialogref.afterClosed().subscribe(() => {

    //   // this.store.dispatch(new GetAllAgenceActions({}));
    //   // this.getAgenceState$ = this.store.pipe(map((state) => state.agenceState));
    //   // console.log('Le state est :');
    //   // console.log(this.getAgenceState$);
    //   // this.ngOnInit();
    // });
  }
}
