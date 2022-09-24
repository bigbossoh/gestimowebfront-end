import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SystemHealth } from 'src/app/interfaces/system-health';
import { SystemCpu } from '../../interfaces/system-cpu';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
private SERVER_URl=environment.serverUrl;
  constructor( private http:HttpClient) { }

  public getHttpTrace():Observable<any>{
   return this.http.get<any>(`${this.SERVER_URl}/httptrace`);
  }

  public getSystemHealth():Observable<SystemHealth>{
    return this.http.get<SystemHealth>(`${this.SERVER_URl}/health`);
   }

   public getSystemCpu():Observable<SystemCpu>{
    return this.http.get<SystemCpu>(`${this.SERVER_URl}/metrics/system.cpu.count`);
   }

   public getProcessUptime():Observable<any>{
    return this.http.get<any>(`${this.SERVER_URl}/metrics/process.uptime`);
   }

}
