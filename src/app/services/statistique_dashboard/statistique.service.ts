import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  public user: UtilisateurRequestDto;
  v_user = 0;
  constructor(
    private userService: UserService,
    private apiService: ApiService) {
      this.user = this.userService.getUserFromLocalCache();
      if (this.user.idAgence != null) {
        this.v_user = this.user!.idAgence;
      }
    }
  public getAllBienImmobilier():Observable<any>{
    return this.apiService.findAllBien(this.v_user);
  }
  public getAllBienImmobilierOccuper():Observable<any>{
    return this.apiService.findAllBienOqp(this.v_user);
  }
  // public getAllLocatire(idAgence:number):Observable<any>{
  //   return this.apiService.getUtilisateurByAgence(idAgence);
  // }
  public getAllLocatire():Observable<any>{
    return this.apiService.getAllLocatairesByOrder(this.v_user);
  }

  public getAlllocataireAyantBail():Observable<any>{
    return this.apiService.getAllLocatairesAvecBail(this.v_user);
  }

  public getAllBauxActif():Observable<any>{
    return this.apiService.nombrebailactif(this.v_user);
  }

  public getAllBauxNonActif():Observable<any>{
    return this.apiService.nombrebailnonactif(this.v_user);
  }
}


