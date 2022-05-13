import { Injectable } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { Router } from '@angular/router';
import { AuthRequestDto, Utilisateur, UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StrictHttpResponse } from 'src/gs-api/src/strict-http-response';
import { HttpClient,HttpErrorResponse,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token?: string | null;
  private loggedInUsername?: string | null;
  private jwtHelper = new JwtHelperService();

  constructor(
    private apiService:ApiService,
    private router:Router,
    private http:HttpClient
  ) { }

  public logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.token!;
  }

  public isUserLoggedIn(): boolean {
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
    return false
  }

   // public login(authRequestDto:AuthRequestDto) : Observable<Utilisateur>{
  //  // console.log("we are in userservice first", authRequestDto);
  //   return this.apiService.login(authRequestDto);
  // }
  public login(authRequestDto:AuthRequestDto):Observable<any>{
    return this.http.post<Utilisateur>(`${this.apiService.rootUrl}gestimoweb/api/v1/auth/login`,authRequestDto,{observe:'response'});
  }

  public getUsers():Observable<any | HttpErrorResponse>{
    return this.apiService.getAllUtilisateursByOrder();
  }
  public addUser(formData :UtilisateurRequestDto):Observable<boolean | HttpErrorResponse>{
    return this.apiService.saveUtilisateur(formData);
  }
  // public resetPassword(email :string):Observable<CustomHttpResponse | HttpErrorResponse>{
  //   return this.http.get<CustomHttpResponse>(`${this.host}/ums/api/v1/user/reset-password/${email}`);
  // }
  // public deleteUser(username :String):Observable<CustomHttpResponse| HttpErrorResponse>{
  //   return this.http.delete<CustomHttpResponse>(`${this.host}/ums/api/v1/user/${username}`);
  // }

   public addUserToLocalCache(user: Utilisateur): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): Utilisateur {
    return JSON.parse(localStorage.getItem('user')!);
  }

}
