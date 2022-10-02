import { Component, OnInit,ViewChild } from '@angular/core';
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
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
  displayedColumns: string[] = ['id','nomAgence','sigleAgence','telAgence','emailAgence','agenceStatus','action'];
  dataSource: MatTableDataSource<any>=new MatTableDataSource();
  public refreshing?: boolean;
  agenceRegisterForm!: FormGroup;
  getAgenceState$: Observable<AgenceBdState> | null = null;

  readonly AgenceStateEnum = AgenceStateEnum;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private store: Store<any>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAllAgenceActions({}));
    this. getAllProduct();
  }
  getAllProduct(){
    this.getAgenceState$ = this.store.pipe(map((state) => state.agenceState));
    this.store.pipe(map((state) => state.agenceState)).subscribe({
      next:(rest)=>{
        if(rest.agences.length>0){
          console.log(rest.agences);
          this.dataSource.data=rest.agences
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        }

      },
      error:(err)=>{
        alert("Error while getback the product data")
        console.log(err);
      }
    });

  }
  deleteProduct(arg0: any) {
    throw new Error('Method not implemented.');
    }
    editProduct(row:any) {
      console.log("donné chargeé ",row);

      this.dialog.open(AgenceNewComponent,{
        width:'50%',
        data:row
      }).afterClosed().subscribe(
        val=>{
          if(val==='Modifier'){
            this.getAllProduct();
          }
        }
      );
    }
  onCreateAgence() {
    const dialogref = this.dialog.open(AgenceNewComponent);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
