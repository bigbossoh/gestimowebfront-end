import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-vue-ensemble',
  templateUrl: './page-vue-ensemble.component.html',
  styleUrls: ['./page-vue-ensemble.component.css']
})
export class PageVueEnsembleComponent implements OnInit {
  listeTOUTUser:number=0;
  totalUtilisateur=20;
  totalBiens:number=6;
  totalPieces:number=70;
  totalBien_s:number=0;
  PrcentagePiece:number=0;
  totieces:number=0
  totalequipement:number=250;
  totquipement:number=0;
  prcentagetotquipement:number=0;
  totsignal:number=0
  PrcentageBiens:number=0

  constructor() { }

  ngOnInit(): void {
  }

}
