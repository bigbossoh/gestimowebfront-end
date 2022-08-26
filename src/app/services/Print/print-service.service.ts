import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintServiceService {

  constructor(private http: HttpClient){ }
  printQuittanceByPeriode(periode: string) {
    console.log('http://localhost:8284/gestimoweb/api/v1/print/quittancegrouper/'+periode);
    return this.http.get('http://localhost:8284/gestimoweb/api/v1/print/quittancegrouper/'+periode);


  }
}
