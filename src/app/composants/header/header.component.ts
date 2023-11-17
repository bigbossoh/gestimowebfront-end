import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { GetDefaultEtabNameActions } from 'src/app/ngrx/etablissement/etablisement.action';
import { EtablissementState, EtablissementStateEnum } from 'src/app/ngrx/etablissement/etablissement.reducer';
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

  etablissementState$: Observable<EtablissementState> | null = null;

  readonly EtablissementStateEnum = EtablissementStateEnum;
  constructor(
    private store: Store<any>,
    private router:Router,
    private userService:UserService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.store.dispatch(new GetDefaultEtabNameActions(this.user.id));
    this.etablissementState$ = this.store.pipe(map((state) => state.etablissementState));
    this.store.pipe(map((state) => state.etablissementState)).subscribe(
      data=>console.log(data)
    )
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
