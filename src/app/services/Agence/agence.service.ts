import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/gs-api/src/services';
import { AgenceRequestDto } from '../../../gs-api/src/models/agence-request-dto';
import { AgenceResponseDto } from '../../../gs-api/src/models/agence-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(
    private apiService:ApiService,
  ) { }
  public getAllAgences():Observable<Array<AgenceResponseDto> | HttpErrorResponse>{
    return this.apiService.getAllAgenceByOrderAgence();
  }
  public onPostAgence(agenceDto:AgenceRequestDto):Observable<any>{
    return this.apiService.authenticateAgence(agenceDto);
  }
 

}
