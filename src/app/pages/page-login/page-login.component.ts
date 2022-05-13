import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HeaderType } from 'src/app/enum/header-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { ApiService } from 'src/gs-api/src/services';
import { AuthRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit, OnDestroy {
  public showLoading?: boolean;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router,
    private userService: UserService,
    private notificationService: NotificationService) {}

  ngOnInit(): void {
    if (this.userService.isUserLoggedIn()) {
      this.router.navigateByUrl('/statistiques');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  public onLogin(user: AuthRequestDto): void {
    this.showLoading = true;
   // console.log("we are into page login commponent ",user);

    this.subscriptions.push(
      this.userService.login(user).subscribe(
        (response: any) => {
          console.log(response.headers);
          const token = response.headers.get(HeaderType.JWT_TOKEN!);


          this.userService.saveToken(token!);
          this.userService.addUserToLocalCache(response.body!);
          this.router.navigateByUrl('/dashboard');
          this.showLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);

          this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
          this.showLoading = false;
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
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
