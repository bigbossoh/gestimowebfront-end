import { ApiConfiguration } from './../../../gs-api/src/api-configuration';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrintServiceService {

  constructor(private http: HttpClient,private apiConfig:ApiConfiguration){ }
  printQuittanceByPeriode(periode: string,proprio:string,idAgence:any) {

    console.log(this.apiConfig.rootUrl+'gestimoweb/api/v1/print/quittancegrouper/' + periode+"/"+idAgence+"/"+proprio);
    return this.http.get(this.apiConfig.rootUrl+'gestimoweb/api/v1/print/quittancegrouper/' + periode+"/"+idAgence+"/"+proprio, { responseType: 'blob' }).pipe(map(
      res => {
        return new Blob([res], { type: 'application/pdf' });
      }
    ));


  }
}
