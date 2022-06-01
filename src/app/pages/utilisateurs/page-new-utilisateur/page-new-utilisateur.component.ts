import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/natification-type.enum';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-new-utilisateur',
  templateUrl: './page-new-utilisateur.component.html',
  styleUrls: ['./page-new-utilisateur.component.css'],
})
export class PageNewUtilisateurComponent implements OnInit {
  public user?: UtilisateurRequestDto;
  private subscriptions: Subscription[] = [];
  nomProfil = '';
  nomPrenom = '';
  newUserForm!: FormGroup;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.newUserForm = this.fb.group({
      id: [''],
      idAgence: [''],
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
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
      profileImageUrl: [''],
      lastLoginDate: [''],
      lastLoginDateDisplay: [''],
      joinDate: [''],
      roleUsed: ['', [Validators.required]],
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
    this.newUserForm.patchValue({
      userCreate: this.user?.id,
      mobile: this.newUserForm.controls['username'].value,
      agenceDto: this.user?.idAgence,
      idAgence: this.user?.idAgence,
      id: 0,
    });
    // console.log("Alerte ",this.newUserForm.value);
    this.subscriptions.push(
      this.userService.addUser(this.newUserForm.value).subscribe(
        (response: any) => {
          console.log(response);
          this.clickButton('closeUserButton');

          this.newUserForm.reset();

          this.sendErrorNotification(
            NotificationType.SUCCESS,
            `${this.newUserForm.controls['nom'].value} ${this.newUserForm.controls['nom'].value} à été ajouté(e) avec succès`
          );
        },
        (errorResponse: HttpErrorResponse) => {
          // console.log("l'error response ", errorResponse);

          this.sendErrorNotification(
            NotificationType.ERROR,
            errorResponse.error.message
          );
          // this.profileImage = null;
        }
      )
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
