import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { SaveUserActions } from '../../../ngrx/utulisateur/utilisateur.actions';
import { UtilisteurState, UtilisteurStateEnum } from '../../../ngrx/utulisateur/utlisateur.reducer';

@Component({
  selector: 'app-page-new-utilisateur',
  templateUrl: './page-new-utilisateur.component.html',
  styleUrls: ['./page-new-utilisateur.component.css'],
})
export class PageNewUtilisateurComponent implements OnInit {
  utilisateurState$: Observable<UtilisteurState> | null = null;
  readonly UtilisteurStateEnum = UtilisteurStateEnum;
  public user?: UtilisateurRequestDto;
  private subscriptions: Subscription[] = [];
  nomProfil = '';
  nomPrenom = '';
  newUserForm!: FormGroup;
  submitted = false;
  constructor(
    private store:Store<any>,
    private userService: UserService,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.newUserForm = this.fb.group({
      id: [''],
      idAgence: [this.user?.idAgence],
      idCreateur:[this.user?.id],
      nom: ['', [Validators.required]],
      prenom: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      mobile: [''],
      dateDeNaissance: [''],
      lieuNaissance: [''],
      typePieceIdentite: [''],
      numeroPieceIdentite: [''],
      dateDebutPiece: [''],
      dateFinPiece: [''],
      nationalité: [''],
      genre: ['', [Validators.required]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
          Validators.pattern('^[0-9]*$'),

        ],
      ],

      password: ['', Validators.required],
      repassword: ['', Validators.required],
      profileImageUrl: [''],
      lastLoginDate: [''],
      lastLoginDateDisplay: [''],
      joinDate: [''],
      roleUsed: ['', Validators.required],
      // authorities: [''], intrus
      agenceDto: [''],
      //  roleRequestDto: [''], intrus
      userCreate: [''],
      nonLocked: [true],
      activated: [true],
      active: [true],
    });
  }
  private clickButton(buttonId: string): void {
    document.getElementById(buttonId)!.click();
  }
  onAddNewUser(): void {}
  saveNewUser(): void {
    this.submitted = true;
    this.newUserForm.patchValue({
      userCreate: this.user?.id
      , mobile: this.newUserForm.controls['username'].value,
      agenceDto: this.user?.idAgence,
      idAgence: this.user?.idAgence,
      id:0
    })
    if (this.newUserForm.invalid) {
      return;
    }
    this.submitted = false;

    this.store.dispatch(new SaveUserActions(this.newUserForm.value));
    this.utilisateurState$ = this.store.pipe(
      map((state) => state.utilisateurState)
    );

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
}
