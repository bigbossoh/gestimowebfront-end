import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilisateurRequestDto } from 'src/gs-api/src/models';
import { StatistiqueService } from '../../../services/statistique_dashboard/statistique.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-page-vue-ensemble',
  templateUrl: './page-vue-ensemble.component.html',
  styleUrls: ['./page-vue-ensemble.component.css']
})
export class PageVueEnsembleComponent implements OnInit {
  listeTOUTUser:number=0;
  totalUtilisateur=0;
  totalLocatireActifParAgence=0;
  totalLocataireParAgence=0;
  totalBailActif:number=0;
  totalBauxNonActif:number=0;
  totalPieces:number=70;
  totalBiens:number=0;
  totalBiensOQp:number=0;
  PrcentagePiece:number=0;
  idAgence:number=0;
  totalequipement:number=250;
  totquipement:number=0;
  prcentagetotquipement:number=0;
  totsignal:number=0
  PrcentageBiens:number=0
  public user?:UtilisateurRequestDto;

  constructor( private statistique: StatistiqueService, private userService:UserService) { }

  ngOnInit(): void {
    this.getNombreBienImmobiliers()
    this.getNombreBienImmobiliersOqp()
    this.getNbreLocataire();
    this.getIdAgence();
    this.getNbreLocataireActif();
    this.getNbrebauxActif();
  }
  private getIdAgence(): number{

    console.log(`nombre d'utilisateur par agence $(this.userService.getUserFromLocalCache().idAgence!)`,this.userService.getUserFromLocalCache().idAgence!);
    return this.userService.getUserFromLocalCache().idAgence!;


  }
  private getNombreBienImmobiliers(){
    this.statistique.getAllBienImmobilier().subscribe(
      (response)=>{
        this.totalBiens=response.length
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  private getNombreBienImmobiliersOqp(){
    this.statistique.getAllBienImmobilierOccuper().subscribe(
      (response)=>{
        this.totalBiensOQp=response.length
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  // private getNbreLocataire(){
  //   this.statistique.getAllLocatire(this.getIdAgence()).subscribe(
  //     (response)=>{
  //       this.totalUtilisateur=response.length
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

  private getNbreLocataire(){
    this.statistique.getAllLocatire().subscribe(
      (response)=>{
        this.totalLocataireParAgence=response.length
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  private getNbreLocataireActif(){
   this.statistique.getAlllocataireAyantBail().subscribe(
    (resp)=>{
      this.totalLocatireActifParAgence=resp.length
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
   )
  }
  private getNbrebauxActif(){
this.statistique.getAllBauxActif().subscribe(
  (resp)=>{
    this.totalBailActif=resp;
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)
  }

}
