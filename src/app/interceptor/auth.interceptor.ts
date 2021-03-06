import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/gs-api/src/services';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService:ApiService,
    private userService:UserService) {}

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
   // console.log(`${this.apiService.rootUrl}gestimoweb/api/v1/auth/login`);

   if(httpRequest.url.includes(`${this.apiService.rootUrl}gestimoweb/api/v1/auth/login`)){
    // console.log("we are in the interceptor",httpRequest);

     return httpHandler.handle(httpRequest);
   }


  this.userService.loadToken();
  const token=this.userService.getToken();
  const requestClone=httpRequest.clone({setHeaders:{ Authorization: `Bearer ${token}`}});
  return httpHandler.handle(requestClone);


  }
}
