import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageBauxNewComponent } from '../page-baux-new/page-baux-new.component';

@Component({
  selector: 'app-boutton-action-baux',
  templateUrl: './boutton-action-baux.component.html',
  styleUrls: ['./boutton-action-baux.component.css'],
})
export class BouttonActionBauxComponent implements OnInit {
  @Output() bauxEmmitter: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialolRef = this.dialog.open(PageBauxNewComponent, {});
    dialolRef.afterClosed().subscribe(() => {
      console.log('On  a fermer le formulaire de Baux');

      this.bauxEmmitter.emit('SAVE_BAUX');
    });
  }

  ngOnInit(): void {}
}
