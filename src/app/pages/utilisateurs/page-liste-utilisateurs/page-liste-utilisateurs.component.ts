import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  styleUrls: ['./page-liste-utilisateurs.component.css']
})
export class PageListeUtilisateursComponent implements OnInit , OnDestroy {
  public users?: Utilisateur[];
  public user?: Utilisateur;
  public refreshing?: boolean;
  public selectedUser: Utilisateur | undefined | null;
  public fileName: string | undefined | null;;
  public profileImage: File | undefined | null;
  private subscriptions: Subscription[] = [];
  private currentUsername?: string | null;

  constructor(private router: Router,
    private userService: UserService,
    private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.getUsers(true);
  }

    public getUsers(showNotification: boolean): void {
      this.refreshing = true;
      this.subscriptions.push(
        this.userService.getUsers().subscribe(
          (response: any) => {
            console.log(response);
           // this.userService.addUserToLocalCache(response);
            this.users = response;
            this.refreshing = false;
            if (showNotification) {
              this.sendErrorNotification(NotificationType.SUCCESS, `${response.length} utilisateur(s) chargé(s) avec succès.`);
            }
          },
          (errorResponse: HttpErrorResponse) => {
            this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
            this.refreshing = false;
          }
        )
      );

    }
    public onSelectUser(selectedUser: Utilisateur): void {
      this.selectedUser = selectedUser;
      this.clickButton('openUserInfo');
    }
    private clickButton(buttonId: string): void {
      document.getElementById(buttonId)!.click();
    }
    public saveNewUser(): void {
      this.clickButton('new-user-save');
    }
    public onAddNewUser(userForm: UtilisateurRequestDto): void {
      console.log("Im in inadduser fonction ",this.user,this.user?.id);

     userForm.userCreate=this.user?.id;
     userForm.agenceDto=this.user?.idAgence;
    userForm.mobile=userForm.username;
    userForm.id=0

      console.log("adding mobil",userForm);
      this.subscriptions.push(
        this.userService.addUser(userForm).subscribe(
          (response: any) => {
            this.clickButton('new-user-close');
            this.getUsers(true);

            //userForm.reset();
            this.sendErrorNotification(NotificationType.SUCCESS, `${response.firstName} ${response.lastName} added successfully`);
          },
          (errorResponse: HttpErrorResponse) => {
            this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
            this.profileImage = null;
          }
        )
        );
    }
    private sendErrorNotification(notificationType: NotificationType, message: string): void {
      if (message) {
        this.notificationService.notify(notificationType, message);
      } else {
        this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
      }
    }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
