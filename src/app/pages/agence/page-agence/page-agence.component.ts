import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AgenceService } from '../../../services/Agence/agence.service';
import { AgenceRequestDto } from '../../../../gs-api/src/models/agence-request-dto';
import { Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-agence',
  templateUrl: './page-agence.component.html',
  styleUrls: ['./page-agence.component.css']
})
export class PageAgenceComponent implements OnInit {

  public agences?: AgenceRequestDto[];
  public agence?: AgenceRequestDto;
  public editAgence?: AgenceRequestDto;
  private subscriptions: Subscription[] = [];
  public refreshing?: boolean;

  constructor(private agenceService:AgenceService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAllAgences(true);
  }

  public getAllAgences(showNotification: boolean): void {
    this.refreshing = true;
    this.subscriptions.push(
      this.agenceService.getAllAgences().subscribe(
        (response: any) => {
         // this.userService.addUsersToLocalCache(response);
          this.agences = response;
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
  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }

}
