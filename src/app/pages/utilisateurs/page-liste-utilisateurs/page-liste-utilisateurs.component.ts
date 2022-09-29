import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import {
  UtilisteurState,
  UtilisteurStateEnum,
} from '../../../ngrx/utulisateur/utlisateur.reducer';
import { GetAllUtilisateursActions } from '../../../ngrx/utulisateur/utilisateur.actions';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-page-liste-utilisateurs',
  templateUrl: './page-liste-utilisateurs.component.html',
  styleUrls: ['./page-liste-utilisateurs.component.css'],
})
export class PageListeUtilisateursComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'Photo',
    'ID',
    'Nom',
    'role',
    'Login',
    'Email',
    'Status',
    'Actions',
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  pageSize = [5, 10, 15, 20];

  @ViewChild(MatPaginator) paginatorUser!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public users!: UtilisateurRequestDto[];
  public user?: UtilisateurRequestDto;
  public editUser?: UtilisateurRequestDto;
  public refreshing?: boolean;
  public selectedUser: UtilisateurRequestDto | undefined | null;
  public fileName: string | undefined | null;
  public profileImage: File | undefined | null;
  private subscriptions: Subscription[] = [];
  private currentUsername?: string | null;
  private currentIdUser?: number | null;
  public totalRecords: number | undefined;
  public page: number = 1;

  utilisateurState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  constructor(
    private store: Store<any>,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit(){
    this.ngOnInit() 
  }
  ngOnInit() {
    this.store.dispatch(new GetAllUtilisateursActions({}));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );
    this.store
      .pipe(map((state) => state.utilisateurState))
      .subscribe((data) => {
        console.log('Les utilisateurs sont les suivants : ');

        if (data.utilisateurs.length > 0) {
          console.log(data.utilisateurs);
          console.log("La pagination est la suivantes : ");
          console.log(this.paginatorUser);
          this.dataSource.data = data.utilisateurs;
          this.totalRecords=data.utilisateurs.length
          this.dataSource.paginator = this.paginatorUser;
        }
      });
  }

  public onSelectUser(selectedUser: UtilisateurRequestDto): void {
    this.selectedUser = selectedUser;
    this.clickButton('openUserInfo');
  }
  private clickButton(buttonId: string): void {
    document.getElementById(buttonId)!.click();
  }
  public saveNewUser(): void {
    this.clickButton('new-user-save');
  }
  // public onAddNewUser(): void {}
  public onAddNewUser(userForm: UtilisateurRequestDto): void {
    console.log('User logged information ', this.user, this.user?.id);
    if (Array.isArray(this.user)) {
      console.log('You must logout');
      return;
    }
    userForm.userCreate = this.user?.id;
    userForm.agenceDto = this.user?.idAgence;
    userForm.mobile = userForm.username;
    userForm.idAgence = this.user?.idAgence;
    userForm.id = 0;

    //console.log('adding new user', userForm);
    this.subscriptions.push(
      this.userService.addUser(userForm).subscribe(
        (response: any) => {
          this.clickButton('new-user-close');
          //  this.getUsers(true);

          this.sendErrorNotification(
            NotificationType.SUCCESS,
            `${response.firstName} ${response.lastName} added successfully`
          );
        },
        (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);

          this.sendErrorNotification(
            NotificationType.ERROR,
            errorResponse.error.message
          );
          this.profileImage = null;
        }
      )
    );
  }

  public onUpdateUser(): void {
    console.log('we are going to update the user ', this.editUser);

    this.subscriptions.push(
      this.userService.addUser(this.editUser!).subscribe(
        (response: any) => {
          this.clickButton('closeEditUserModalButton');
          //  this.getUsers(false);

          //userForm.reset();
          this.sendErrorNotification(
            NotificationType.SUCCESS,
            `${response.firstName} ${response.lastName} updated successfully`
          );
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendErrorNotification(
            NotificationType.ERROR,
            errorResponse.error.message
          );
          this.profileImage = null;
        }
      )
    );
  }
  public searchUsers(searchTerm: string): void {
    const results: UtilisateurRequestDto[] = [];
    for (const user of this.userService.getUsersFromLocalCache()) {
      if (
        user.nom!.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.prenom!.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.username!.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user
          .utilisateurIdApp!.toLowerCase()
          .indexOf(searchTerm.toLowerCase()) !== -1
      ) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !searchTerm) {
      this.users = this.userService.getUsersFromLocalCache();
    }
  }
  public onEditUser(editUser: UtilisateurRequestDto): void {
    console.log('we are clicking on edit button ', editUser);

    this.editUser = editUser;

    this.clickButton('openUserEdit');
  }

  private sendErrorNotification(
    notificationType: NotificationType,
    message: string
  ): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(
        notificationType,
        'An error occurred. Please try again.'
      );
    }
  }

  onActionEmmit($event: any) {
   console.log("we are here");
   this.store.dispatch(new GetAllUtilisateursActions({}));
    this.store
    .pipe(map((state) => state.utilisateurState))
    .subscribe((data) => {
      console.log('Les utilisateurs sont les suivants et les suivants : ');

      if (data.utilisateurs.length > 0) {
        console.log(data.utilisateurs);
        this.dataSource.data = data.utilisateurs;
        this.dataSource.paginator = this.paginatorUser;
      }
    });
  //  this.ngOnInit();
  }
}
