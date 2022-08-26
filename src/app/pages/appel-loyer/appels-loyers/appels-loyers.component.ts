import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrintQuittanceLoyerActions } from '../../../ngrx/print-data/quittance-appel-loyer/quittance-appel-loyer.action';
import { PrintServiceService } from '../../../services/Print/print-service.service';

@Component({
  selector: 'app-appels-loyers',
  templateUrl: './appels-loyers.component.html',
  styleUrls: ['./appels-loyers.component.css'],
})
export class AppelsLoyersComponent implements OnInit {
  periodePrint = '';
  constructor(private store: Store<any>,private printService:PrintServiceService) {}
  ngOnInit(): void {}
  printQuittance(p: string) {
    console.log(p);

    this.printService.printQuittanceByPeriode(p).subscribe((data) => {
      console.log(data);

      const fileURL = URL.createObjectURL(data);
    
      window.open(fileURL);
    })
  }
}
