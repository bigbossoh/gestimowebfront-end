import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.css']
})
export class BouttonActionComponent implements OnInit {

  @Output()
  clickEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }
}
