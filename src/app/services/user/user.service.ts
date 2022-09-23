import { Injectable } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { Router } from '@angular/router';
import { AuthRequestDto, UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token?: string | null;
  private loggedInUsername?: string | null;
  private jwtHelper = new JwtHelperService();

  constructor(
    private apiService:ApiService,
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
    return this.http.post<UtilisateurRequestDto>(`${this.apiService.rootUrl}gestimoweb/api/v1/auth/login`,authRequestDto,{observe:'response'});
  }

  public getUsers():Observable<any | HttpErrorResponse>{
    return this.apiService.getAllUtilisateursByOrder();
  }
  public addUser(formData :UtilisateurRequestDto):Observable<any>{
    console.log("we into the service adduser method", formData);
    return this.apiService.saveUtilisateur(formData);
  }

  public addUsersToLocalCache(users:UtilisateurRequestDto[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

   public addUserToLocalCache(user: UtilisateurRequestDto): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): UtilisateurRequestDto {
    return JSON.parse(localStorage.getItem('user')!);
  }
  public getUsersFromLocalCache(): UtilisateurRequestDto[] {
    return JSON.parse(localStorage.getItem('users')!);

  }
  public createUserFormDate(loggedId: string, user: UtilisateurRequestDto): FormData {
    const formData = new FormData();
    formData.append('id', loggedId);
    formData.append('firstName', user.nom!);
    formData.append('lastName', user.prenom!);
    formData.append('username', user.username!);
    formData.append('email', user.email!);
    formData.append('role', user.roleUsed!);
    formData.append('isActive', JSON.stringify(user.active));
    formData.append('isNonLocked', JSON.stringify(user.nonLocked));
    return formData;
  }

}
