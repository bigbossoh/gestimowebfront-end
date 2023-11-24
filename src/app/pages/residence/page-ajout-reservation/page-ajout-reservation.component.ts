import { formatDate } from '@angular/common';
import { MontantLoyerBail } from './../../../../gs-api/src/models/montant-loyer-bail';
import { GetAllAppartementMeubleActions } from './../../../ngrx/appartement/appartement.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { map } from 'rxjs/operators';
import {
  AppartementState,
  AppartementStateEnum,
} from 'src/app/ngrx/appartement/appartement.reducer';
import { ReservationState, ReservationStateEnum } from 'src/app/ngrx/reservation/reservation.reducer';
import { GetAllClientHotelActions } from 'src/app/ngrx/utulisateur/gerant/gerant.actions';
import {
  GerantState,
  GerantStateEnum,
} from 'src/app/ngrx/utulisateur/gerant/gerant.reducer';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { SaveReservationAction } from 'src/app/ngrx/reservation/reservation.actions';

@Component({
  selector: 'app-page-ajout-reservation',
  templateUrl: './page-ajout-reservation.component.html',
  styleUrls: ['./page-ajout-reservation.component.css'],
})
export class PageAjoutReservationComponent implements OnInit {
idClient: any;
  constructor(private store: Store<any>, private userService: UserService, private fb: FormBuilder,) {}
  encaissementform?: FormGroup;
saveValider() {
  var debut:any=formatDate(this.addDays(this.dateDebutSejour,0),'yyyy-MM-dd','en-US');
  var fin:any=formatDate(this.addDays(this.dateFinSejour,3),'yyyy-MM-dd','en-US');
  const jdebut = debut.replaceAll('/', '-');
  const jfin = fin.replaceAll('/', '-');

  this.encaissementform = this.fb.group({
    idAgence: [this.user?.idAgence],
    idCreateur: [this.user?.id],
    id:[0],

    idAppartementdDto: [this.residenceModel.id],
    dateDebut: [jdebut],
    dateFin: [jfin],
    idClient: [0],
    idBien: [this.residenceModel.id],
   // utilisateurIdApp: string;
   idUtilisateur: [this.idClient],

    pourcentageReduction:[this.reduction],
    nom: ["XXX"],
    prenom:["XXXXX"],
    montantReduction: [(1 - this.reduction / 100) * this.dateDiff * this.laNuiteMontant],
    soldReservation: [(1 - this.reduction / 100) * this.dateDiff * this.laNuiteMontant - this.montantPayer],
    montantPaye: [this.montantPayer],
    nmbreAdulte: [this.nbrAdult],
    nmbrEnfant: [this.nbrEnfant]
  });
  this.store.dispatch(
    new SaveReservationAction(this.encaissementform.value)
  );
  this.reservationState$ = this.store.pipe(
    map((state) => state.reservationState)
  );
  this.store.pipe(
    map((state) => state.reservationState)
  ).subscribe(data=>{
    console.log("***** save reservation data is next ****** ");
    console.log(data);

  });
}
/**
 *
 */
addDays(date:Date,days:number):Date{
  date.setDate(date.getDate()+days);
  return date
}
saveReserver() {
  var debut:any=formatDate(this.addDays(this.dateDebutSejour,0),'yyyy-MM-dd','en-US');
  var fin:any=formatDate(this.addDays(this.dateFinSejour,3),'yyyy-MM-dd','en-US');
  const jdebut = debut.replaceAll('/', '-');
  const jfin = fin.replaceAll('/', '-');

  this.encaissementform = this.fb.group({
    idAgence: [this.user?.idAgence],
    idCreateur: [this.user?.id],
    id:[0],

    idAppartementdDto: [this.residenceModel.id],
    dateDebut: [jdebut],
    dateFin: [jfin],
    idClient: [0],
    idBien: [this.residenceModel.id],
   // utilisateurIdApp: string;
    idUtilisateur: [0],

    pourcentageReduction:[this.reduction],
    nom: ["XXX"],
    prenom:["XXXXX"],
    montantReduction: [(1 - this.reduction / 100) * this.dateDiff * this.laNuiteMontant],
    soldReservation: [(1 - this.reduction / 100) * this.dateDiff * this.laNuiteMontant - this.montantPayer],
    montantPaye: [this.montantPayer],
    nmbreAdulte: [this.nbrAdult],
    nmbrEnfant: [this.nbrEnfant]
  });
  this.store.dispatch(
    new SaveReservationAction(this.encaissementform.value)
  );
  this.reservationState$ = this.store.pipe(
    map((state) => state.reservationState)
  );
  this.store.pipe(
    map((state) => state.reservationState)
  ).subscribe(data=>{
    console.log("***** save reservation data is next ****** ");
    console.log(data);

  });
}
  reduction: any=0;
  montantPayer: any=0;
nbrAdult: any=0;
nbrEnfant: any=0;
  selectMontantLoyer(montant: any) {
    this.listMontant = montant;
  }
  getMontantNuite(nbrJour: any, listMontant: any) {
    var arrayForSort = [...listMontant];
    arrayForSort.sort((a: any, b: any) =>
      a.nbrDiffJour > b.nbrDiffJour ? 1 : -1
    );

    var trouver = false;
    for (let index = 0; index < arrayForSort.length; index++) {
      const element = listMontant[index];

      if (nbrJour <= element.nbrDiffJour) {
        this.laNuiteMontant = element.intervalPrix;

        trouver = true;
        return;
      }
      if (trouver == false) {
        this.laNuiteMontant = element.intervalPrix;
      }
    }
  }
  gerantState$: Observable<GerantState> | null = null;
  readonly GerantStateEnum = GerantStateEnum;

  reservationState$: Observable<ReservationState> | null = null;
  readonly ReservationStateEnum = ReservationStateEnum;
  client: number = 0;
  clients: number[] = [1, 2];

  listMontant: any;
  laNuiteMontant: any;
  dateDujour: any = new Date();
  readonly AppartementStateEnum = AppartementStateEnum;
  appartementState$: Observable<AppartementState> | null = null;
  public user?: UtilisateurRequestDto;
  residenceModel: any;
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public minDate: Object = new Date(this.currentYear, this.currentMonth, 0);
  public maxDate: Object = new Date(
    this.currentYear,
    this.currentMonth + 1,
    15
  );
  dateDebutSejour: any;
  dateFinSejour: any;
  dateDiff: any;


  getDiffDays(a: any, b: any) {
    a = a.getTime();
    b = (b || new Date()).getTime();
    var c = a > b ? a : b,
      d = a > b ? b : a;
    this.dateDiff = Math.abs(Math.ceil((c - d) / 86400000));
  }

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    this.minDate = this.today.toLocaleDateString();
    var inta=this.user.idAgence;


    this.store.dispatch(new GetAllClientHotelActions(inta));
    this.gerantState$=this.store.pipe(
      map((state)=>state.gerantState)
    );

    this.store.dispatch(
      new GetAllAppartementMeubleActions(this.user?.idAgence)
    );
    this.appartementState$ = this.store.pipe(
      map((state) => state.appartementState)
    );

  }
}
