import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user?:UtilisateurRequestDto;
  connectedUser:any ={};

  constructor(

    private router:Router,
    private userService:UserService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
  }

logoutUser():void{
  this.userService.logOut()
  this.router.navigate(['/login'])
  this.sendErrorNotification(NotificationType.SUCCESS, ` Vous avez été deconnecté avec succès.`);
}
private sendErrorNotification(notificationType: NotificationType, message: string): void {
  if (message) {
    this.notificationService.notify(notificationType, message);
  } else {
    this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
  }
}

}
