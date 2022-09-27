import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private apiService:ApiService) { }
  public getAllBienImmobilier():Observable<any>{
    return this.apiService.findAllBien();
  }
  public getAllBienImmobilierOccuper():Observable<any>{
    return this.apiService.findAllBienOqp();
  }
  // public getAllLocatire(idAgence:number):Observable<any>{
  //   return this.apiService.getUtilisateurByAgence(idAgence);
  // }
  public getAllLocatire():Observable<any>{
    return this.apiService.getAllLocatairesByOrder();
  }
}
