import { Injectable } from '@angular/core';
import { ApiService } from 'src/gs-api/src/services';
import { AuthRequestDto, UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token?: string | null;
  private loggedInUsername?: string | null;
  private loggedInAgence?: string | null;
  private jwtHelper = new JwtHelperService();
  private selectedFile: any = null;

  constructor(private apiService: ApiService, private http: HttpClient) {}

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
  // postFormDataToServerMultiPart(action: string, formData) {
  //   return this.http
  //     .post(this.rootUrl + `gestimoweb/api/v1/images` + action, formData)
  //     .pipe(map((response: any) => response));
  // }

  // public onUploadImageService(image:any):Observable<any>{

  //    console.log("from service ")
  //  // return this.apiService.uploadImage(image);
  // }

  public loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.token!;
  }
  // public initClotureCaisse():boolean{
  // return true;
  // }
  public isUserLoggedIn(): boolean {
    this.loadToken();
    if (this.token != null && this.token !== '') {
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          console.log('*** PRINT SUBJET ****');
          console.log(this.getUserFromLocalCache())
          console.log('*********************************');

          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
    return false;
  }

  // public login(authRequestDto:AuthRequestDto) : Observable<Utilisateur>{
  //  // console.log("we are in userservice first", authRequestDto);
  //   return this.apiService.login(authRequestDto);
  // }
  public login(authRequestDto: AuthRequestDto): Observable<any> {
    return this.http.post<UtilisateurRequestDto>(
      `${this.apiService.rootUrl}gestimoweb/api/v1/auth/login`,
      authRequestDto,
      { observe: 'response' }
    );
  }
  deleteAgenceBy(id: number) {
    return this.apiService.deleteAgenceByIdAgence(id);
  }

  public getUsers(idAgence: number): Observable<any | HttpErrorResponse> {
    return this.apiService.getAllUtilisateursByOrder(idAgence);
  }
  public addUser(formData: UtilisateurRequestDto): Observable<any> {
    console.log('we into the service adduser method', formData);
    return this.apiService.saveUtilisateur(formData);
  }

  public addUsersToLocalCache(users: UtilisateurRequestDto[]): void {
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
  public createUserFormDate(
    loggedId: string,
    user: UtilisateurRequestDto
  ): FormData {
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
