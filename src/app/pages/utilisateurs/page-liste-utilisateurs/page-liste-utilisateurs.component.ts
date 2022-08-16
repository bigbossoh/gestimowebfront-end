import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { ApiService } from 'src/gs-api/src/services';
import { Utilisateur } from '../../../../gs-api/src/models/utilisateur';

@Component({
  selector: 'app-page-liste-utilisateurs',
  templateUrl: './page-liste-utilisateurs.component.html',
  styleUrls: ['./page-liste-utilisateurs.component.css'],
})
export class PageListeUtilisateursComponent implements OnInit {
  // public registerForm!: FormGroup;
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

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.getUsers(true);

    // this.registerForm=new FormGroup({
    //   genre: new FormControl(),
    //   nom: new FormControl(),
    //   prenom:new FormControl(),
    //   email:new FormControl(),
    //   username:new FormControl(),
    //   password:new FormControl(),
    //   roleUsed:new FormControl(),
    //   active:new FormControl(true),
    //   notLocked:new FormControl(true),

    // })
  }

  public getUsers(showNotification: boolean): void {
    this.refreshing = true;
    this.subscriptions.push(
      this.userService.getUsers().subscribe(
        (response: any) => {
          this.userService.addUsersToLocalCache(response);
          this.users = response;
          this.totalRecords = response.length;
          this.refreshing = false;
          if (showNotification) {
            this.sendErrorNotification(
              NotificationType.SUCCESS,
              `${response.length} utilisateur(s) chargé(s) avec succès.`
            );
          }
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendErrorNotification(
            NotificationType.ERROR,
            errorResponse.error.message
          );
          this.refreshing = false;
        }
      )
    );
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

    console.log('adding new user', userForm);
    this.subscriptions.push(
      this.userService.addUser(userForm).subscribe(
        (response: any) => {
          this.clickButton('new-user-close');
          this.getUsers(true);

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
          this.getUsers(false);

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
    this.ngOnInit();
  }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
}
