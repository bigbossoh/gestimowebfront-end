import { AgenceRequestDto } from 'src/gs-api/src/models';
import { ApiConfiguration } from './../../../gs-api/src/api-configuration';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrintServiceService {
  constructor(private http: HttpClient, private apiConfig: ApiConfiguration) {}
  recureservation(  idEncaissement:any,  idAgence:any,proprio:any){
    return this.http.get(
      this.apiConfig.rootUrl +
        'gestimoweb/api/v1/print/recureservation/' +
        idEncaissement+'/'+idAgence+'/'+proprio,
      { responseType: 'blob' }
    );
  }
  recureservationparid(  idReservation:any,  idAgence:any,proprio:any){
    return this.http.get(
      this.apiConfig.rootUrl +
        'gestimoweb/api/v1/print/recuReservationParIdReservation/' +
        idReservation+'/'+idAgence+'/'+proprio,
      { responseType: 'blob' }
    );
  }
  printRecuEncaissement(idEncaissement: any): Observable<Blob> {
    return this.http.get(
      this.apiConfig.rootUrl +
        'gestimoweb/api/v1/print/recupaiment/' +
        idEncaissement,
      { responseType: 'blob' }
    );
  }
  printQuittanceByPeriode(
    periode: string,
    proprio: string,
    idAgence: any
  ): Observable<Blob> {
    return this.http.get(
      this.apiConfig.rootUrl +
        'gestimoweb/api/v1/print/quittancegrouper/' +
        periode +
        '/' +
        idAgence +
        '/' +
        proprio,
      { responseType: 'blob' }
    );
  }
  savelogo(body: any) {
    // console.log('');
    // ABJECT WHICH PASS BODY PARAMETERS
    var myFormData = new FormData();
    //HEADERS
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    var leBody = body.logoAgence;
    myFormData.append('imageFile', body.logoAgence, body.id);
    myFormData.append('idAgence', body.idAgence);
    return this.http
      .post(
        this.apiConfig.rootUrl +
          'http://localhost:5000/gestimoweb/api/v1/agences/saveagencelogo',
        myFormData
      )
      .subscribe((respons) => {
        console.log('la reponse est la suivante ::: ');
        console.log(respons);
      });
  }
  saveAgenceLogo(idAgence: any, file: any) {}
}
