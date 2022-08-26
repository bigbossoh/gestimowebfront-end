import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrintServiceService {

  constructor(private http: HttpClient){ }
  printQuittanceByPeriode(periode: string) {
    console.log('http://localhost:8284/gestimoweb/api/v1/print/quittancegrouper/'+periode);
    return this.http.get('http://localhost:8284/gestimoweb/api/v1/print/quittancegrouper/' + periode, { responseType: 'blob' }).pipe(map(
      res => {
        return new Blob([res], { type: 'application/pdf' });
      }
    ));


  }
}
// .map(
//   (res) => {
//           return new Blob([res.blob()], { type: 'application/pdf' })