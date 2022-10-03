import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgenceNewComponent } from 'src/app/pages/agence/agence-new/agence-new.component';

@Component({
  selector: 'app-app-button-new-agence-action',
  templateUrl: './app-button-new-agence-action.component.html',
  styleUrls: ['./app-button-new-agence-action.component.css']
})
export class AppButtonNewAgenceActionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    //new
    this.dialog.open(AgenceNewComponent, {
      width:'50%'

    }).afterClosed().subscribe(
      val=>{
        if(val==='Enregistrer'){
          //this.getAllProduct();
        }
      }
    );
  }
}
