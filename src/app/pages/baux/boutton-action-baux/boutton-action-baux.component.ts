import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageBauxNewComponent } from '../page-baux-new/page-baux-new.component';

@Component({
  selector: 'app-boutton-action-baux',
  templateUrl: './boutton-action-baux.component.html',
  styleUrls: ['./boutton-action-baux.component.css']
})
export class BouttonActionBauxComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialolRef = this.dialog.open(PageBauxNewComponent, {
      // width: '1000px',
    });
  }

  ngOnInit(): void {
  }

}
