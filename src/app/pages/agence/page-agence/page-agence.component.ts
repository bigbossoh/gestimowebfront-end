import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AgenceService } from '../../../services/Agence/agence.service';
import { AgenceRequestDto } from '../../../../gs-api/src/models/agence-request-dto';
import { Observable, Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Store } from '@ngrx/store';
import { GetAllAgenceActions, SaveAgenceActions } from '../../../ngrx/agence/agence.actions';
import { AgenceBdState, AgenceStateEnum } from 'src/app/ngrx/agence/agence.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-agence',
  templateUrl: './page-agence.component.html',
  styleUrls: ['./page-agence.component.css']
})
export class PageAgenceComponent implements OnInit {
  public user?:UtilisateurRequestDto;
  public agences?: AgenceRequestDto[];
  public agence?: AgenceRequestDto;
  public editAgence?: AgenceRequestDto;
  private subscriptions: Subscription[] = [];
  public refreshing?: boolean;
  agenceRegisterForm!:FormGroup;


  //saveAgenceState$: Observable<AgenceBdState> | null = null;
  getAgenceState$: Observable<AgenceBdState> | null = null;

  readonly AgenceStateEnum=AgenceStateEnum;
  constructor(
    private agenceService:AgenceService,
    private userService:UserService,
    private notificationService: NotificationService,
    private store:Store<any>,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllAgenceActions({}));
    this.getAgenceState$=this.store.pipe(
      map((state)=>state.agenceState)
    );
    this.user = this.userService.getUserFromLocalCache();
    // this.getAllAgences(true);
    this.agenceRegisterForm=this.fb.group({
      id: [0],
  idAgence: [''],
  nomAgence: ['',[Validators.required]],
  telAgence: [''],
  compteContribuable: [''],
  capital: [''],
  emailAgence: ['',[Validators.required]],
  mobileAgence: ['',[Validators.required]],
  regimeFiscaleAgence: [''],
  faxAgence: [''],
  sigleAgence: [''],
  idUtilisateurCreateur: [''],
   motdepasse: [''],
   nomPrenomGerant: ['',[Validators.required]],
    active: [true]
    })

  }

  // public getAllAgences(showNotification: boolean): void {
  //   this.refreshing = true;
  //   this.subscriptions.push(
  //     this.agenceService.getAllAgences().subscribe(
  //       (response: any) => {
  //        // this.userService.addUsersToLocalCache(response);
  //         this.agences = response;
  //         this.refreshing = false;
  //         if (showNotification) {
  //           this.sendErrorNotification(NotificationType.SUCCESS, `${response.length} utilisateur(s) chargé(s) avec succès.`);
  //         }
  //       },
  //       (errorResponse: HttpErrorResponse) => {
  //         this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
  //         this.refreshing = false;
  //       }
  //     )
  //   );

  // }
  // private clickButton(buttonId: string): void {
  //   document.getElementById(buttonId)!.click();
  // }
  saveNgrsAgence(){
    this.agenceRegisterForm.patchValue({
      idUtilisateurCreateur:this.user?.id
    })
    console.log("this is cool ",this.agenceRegisterForm.value);
    this.store.dispatch(new SaveAgenceActions(this.agenceRegisterForm.value));
  }

  // public saveAgence():void{

  //   this.agenceRegisterForm.patchValue({
  //     idUtilisateurCreateur:this.user?.id
  //   }
  //   )
  //    this.subscriptions.push(
  //      this.agenceService.onPostAgence(this.agenceRegisterForm.value).subscribe(
  //        (response: any) => {
  //       console.log(response);
  //        console.log("this is cool ",this.agenceRegisterForm.value);
  //        this.clickButton('closeAgenceButton');
  //        this.getAllAgences(false);
  //        this.agenceRegisterForm.reset();
  //        this.sendErrorNotification(NotificationType.SUCCESS, `${this.agenceRegisterForm.get('nomAgence')} added successfully`);
  //        },
  //        (errorResponse: HttpErrorResponse) => {
  //          console.log(errorResponse);

  //          this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);

  //        }
  //      )
  //      )
  //      ;
  //  }
  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }

}
