import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenceService } from 'src/app/services/Agence/agence.service';
import { UserService } from 'src/app/services/user/user.service';
import { AgenceResponseDto, UtilisateurRequestDto } from 'src/gs-api/src/models';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public user?:UtilisateurRequestDto;
  public agenceDto?:AgenceResponseDto ;
  private nomAgence:string | undefined;
  constructor(
    private router: Router,
    private agenceService:AgenceService,
    private userService:UserService) {

  }
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    console.log("this cool  "+this.user?.idAgence);
    this.getUserConnected(this.user?.idAgence);


  }
  public menuProperties: Array<Menu> = [
  {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: "Vue d'ensemble",
        icon: 'fas fa-chart-pie',
        url: 'dashboard'
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'far fa-chart-bar',
        url: 'statistiques'
      }
    ]
  },
  {
    id: '2',
    titre: "Gestion de l'agence",
    icon: 'fas fa-building',
    url: '',
    sousMenu: [
      {
        id: '21',
        titre: "Agence",
        icon: 'fas fa-hotel',
        url: 'agences'
      }
      // ,
      // {
      //   id: '22',
      //   titre: 'Locataires',
      //   icon: 'fa fa-key',
      //   url: 'locataires'
      // },
      // {
      //   id: '23',
      //   titre: 'Gérants',
      //   icon: 'fas fa-street-view',
      //   url: 'gerants'
      // },
      // {
      //   id: '24',
      //   titre: 'Proprietaire',
      //   icon: 'fas fa-user-graduate',
      //   url: 'proprietaires'
      // },
      // {
      //   id: '25',
      //   titre: 'Administrateur',
      //   icon: 'fas fa-crown',
      //   url: 'Superviseurs'
      // }
    ]
  },

  {
    id: '3',
    titre: 'Gestion des Loyers',
    icon: 'fas fa-phone-alt',
    url: '',
    sousMenu: [
      {
        id: '31',
        titre: "Appel de loyer",
        icon: 'fas fa-virus-slash',
        url: 'appelloyers'
      },
      // {
      //   id: '32',
      //   titre: "Relance loyer",
      //   icon: 'fas fa-headset',
      //   url: 'relance'
      // },
      {
        id: '33',
        titre: "Règlement individuel",
        icon: 'fas fa-tools',
        url: 'reglement-individuel'
      }
      // ,
      // {
      //   id: '34',
      //   titre: "Règlement groupé",
      //   icon: 'fas fa-toolbox',
      //   url: 'reglement-groupe'
      // }

    ]
  },
  {
    id: '4',
    titre: 'Gestion des biens',
    icon: 'fas fa-city',
    url: '',
    sousMenu: [
      // {
      //   id: '41',
      //   titre: "biens par site",
      //   icon: '',
      //   url: 'bien-par-site'
      // },
      {
        id: '42',
        titre: "biens immobiliers",
        icon: 'fas fa-hotel',
        url: 'bien-immobilier'
      },

    ]
  },
  /* {
    id: '5',
    titre: 'Gestion des locataires',
    icon: 'fas fa-wind',
    url: '',
    sousMenu: [
      {
        id: '51',
        titre: "Equipements",
        icon: 'fas fa-fan',
        url: ''
      },
      {
        id: '52',
        titre: "Pièce Equipements",
        icon: 'fas fa-door-open',
        url: ''
      }
    ]
  }, */
  {
    id: '6',
    titre: 'Gestion des baux',
    icon: 'fas fa-file-contract',
    url: '',
    sousMenu: [
      {
        id: '61',
        titre: "contrat de bail",
        icon: 'fas fa-file-signature',
        url: 'baux'
      },
      // {
      //   id: '62',
      //   titre: "loyers par bail",
      //   icon: 'fa fa-book'
      //   ,
      //   url: 'bail-loyers'
      // }

    ]
  }
  ,
  {
    id: '7',
    titre: 'gestion des règlements',
    icon: 'fas fa-praying-hands',
    url: '',
    sousMenu: [
      {
        id: '71',
        titre: "Règlement individuel",
        icon: 'fas fa-tools',
        url: 'reglement-individuel'
      },
      // {
      //   id: '73',
      //   titre: "Règlement",
      //   icon: 'fas fa-toolbox',
      //   url: 'paiement'
      // },
      // {
      //   id: '72',
      //   titre: "Règlement groupé",
      //   icon: 'fas fa-toolbox',
      //   url: 'reglement-groupe'
      // }
    ]
  },
  {
    id: '8',
    titre: 'Gestion comptable',
    icon: 'fas fa-phone-alt',
    url: '',
    sousMenu: [
      {
        id: '81',
        titre: "Journal de caisse",
        icon: 'fas fa-virus-slash',
        url: 'journal-caisse'
      },
      {
        id: '82',
        titre: "Compte Client",
        icon: 'fas fa-users-cog',
        url: 'compte-client'
      },
      {
        id: '83',
        titre: "Compte Agence",
        icon: 'fas fa-users-cog',
        url: 'compte-agence'
      },
      {
        id: '84',
        titre: "Grand compte",
        icon: 'fas fa-users-cog',
        url: 'grand-compte'
      }

    ]
  }
  ,
  {
    id: '9',
    titre: 'Paramétratge',
    icon: 'fas fa-cogs',
    url: '',
    sousMenu: [
      {
        id: '91',
        titre: "Gestion des sites",
        icon: 'fa fa-location-arrow',
        url: 'sites'
      },
      {
        id: '92',
        titre: 'Gestion des utilisateurs',
        icon: 'fas fa-users',
        url: 'liste-utilisateurs'
      }
      ,
      {
        id: '93',
        titre: 'Gestions des immeubles',
        icon: 'fas fa-hotel',
        url: 'liste-immeubles'

      }
      ,
      {
        id: '94',
        titre: 'Gestion des roles',
        icon: 'fa fa-check-square',
        url: 'liste-gestion-roles-droits',

      },
      {
        id: '94',
        titre: 'Gestion tâches planifiées',
        icon: 'fa fa-tasks',
        url: 'liste-taches-planifiees',

      }
    ]
  }

];

private lastSelectedMenu: Menu | undefined;

navigate(menu:Menu): void {

  if(this.lastSelectedMenu){
    this.lastSelectedMenu.active=false;
  }
  menu.active=true;
  this.lastSelectedMenu=menu;
  this.router.navigate([menu.url]);

}

public getUserConnected(id:any){
this.agenceService.getAgenceById(id).subscribe({
      next: (result) => {
        //alert('product updated successfully', this.agenceDto?.nomAgence);
        this.agenceDto=result;

      },
      error:(err)=>{
        alert(err.headers.message)
        console.log(err);

      }
    });
}
// /updateProduct() {
//   this.api.putPoduct(this.productForm.value, this.editData.id).subscribe({
//     next: (result) => {
//       alert('product updated successfully');
//       this.productForm.reset();
//       this.dialogRef.close('update');
//     },
//     error:(err)=>{
//       alert(err.headers.message)
//       console.log(err);

//     }
//   });
// }
}
