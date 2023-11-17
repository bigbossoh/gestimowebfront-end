import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenceService } from 'src/app/services/Agence/agence.service';
import { UserService } from 'src/app/services/user/user.service';
import {
  AgenceResponseDto,
  UtilisateurRequestDto,
} from 'src/gs-api/src/models';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public user?: UtilisateurRequestDto;
  public agenceDto?: AgenceResponseDto;
  private nomAgence: string | undefined;
  constructor(
    private router: Router,
    private agenceService: AgenceService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalCache();
    console.log('this cool  ' + this.user?.idAgence);
    this.getUserConnected(this.user?.idAgence);
  }
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: 'dashboard',
      sousMenu: [
        {
          id: '11',
          titre: "Vue d'ensemble",
          icon: 'fas fa-chart-pie',
          url: 'dashboard',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'far fa-chart-bar',
          url: 'statistiques',
        },
      ],
    },
    {
      id: '2',
      titre: "Gestion de l'agence",
      icon: 'fas fa-building',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Agence',
          icon: 'fas fa-hotel',
          url: 'agences',
        },
      ],
    },

    {
      id: '3',
      titre: 'Gestion des Loyers',
      icon: 'fas fa-phone-alt',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Appel de loyer',
          icon: 'fas fa-virus-slash',
          url: 'appelloyers',
        },
        {
          id: '33',
          titre: 'Règlement individuel',
          icon: 'fas fa-tools',
          url: 'reglement-individuel',
        },
        {
          id: '34',
          titre: 'Règlement groupé',
          icon: 'fas fa-toolbox',
          url: 'reglement-groupe',
        },
      ],
    },
    {
      id: '4',
      titre: 'Gestion des biens',
      icon: 'fas fa-city',
      url: '',
      sousMenu: [
        {
          id: '42',
          titre: 'biens immobiliers',
          icon: 'fas fa-hotel',
          url: 'bien-immobilier',
        },
      ],
    },
    {
      id: '6',
      titre: 'Gestion des baux',
      icon: 'fas fa-file-contract',
      url: '',
      sousMenu: [
        {
          id: '61',
          titre: 'contrat de bail',
          icon: 'fas fa-file-signature',
          url: 'baux',
        },
      ],
    },
    {
      id: '7',
      titre: 'gestion des residences',
      icon: 'fas fa-home',
      url: '',
      sousMenu: [
        {
          id: '70',
          titre: 'Tableau de bord',
          icon: 'fas fa-pie-chart',
          url: 'dashboard-residence',
        },
        {
          id: '71',
          titre: 'client residence',
          icon: 'fas fa-address-card',
          url: 'client-residence',
        },
        {
          id: '72',
          titre: 'Reservation',
          icon: 'fas fa-bed',
          url: 'reservation-residence',
        },
        {
          id: '73',
          titre: 'disponibilité',
          icon: 'far fa-calendar-check',
          url: 'disponibilite-residence',
        },

        {
          id: '74',
          titre: 'paiement',
          icon: 'fas fa-credit-card',
          url: 'paiement-residence',
        },
      ],
    },
    {
      id: '8',
      titre: 'Gestion comptable',
      icon: 'fas fa-phone-alt',
      url: '',
      sousMenu: [
        {
          id: '80',
          titre: 'Cloture de Caisse',
          icon: 'fas fa-money',
          url: 'cloture-caisse',
        },
        {
          id: '81',
          titre: 'Sortie de Caisse',
          icon: 'fas fa-virus-slash',
          url: 'journal-caisse',
        },
        {
          id: '82',
          titre: 'Compte Client',
          icon: 'fas fa-users-cog',
          url: 'compte-client',
        },

        {
          id: '83',
          titre: 'Compte Agence',
          icon: 'fas fa-users-cog',
          url: 'compte-agence',
        },
        {
          id: '84',
          titre: 'Grand compte',
          icon: 'fas fa-users-cog',
          url: 'grand-compte',
        },
        {
          id: '85',
          titre: 'Consultation reglement des loyers',
          icon: 'fas fa-users-cog',
          url: 'reglement-periode-loyer',
        },
        {
          id: '85',
          titre: 'Consultation des dépenses',
          icon: 'fas fa-users-cog',
          url: 'page-consultation-depense',
        },
      ],
    },
    {
      id: '9',
      titre: 'Paramétratge',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '91',
          titre: 'Gestion des sites',
          icon: 'fa fa-location-arrow',
          url: 'sites',
        },
        {
          id: '92',
          titre: 'Gestion des utilisateurs',
          icon: 'fas fa-users',
          url: 'liste-utilisateurs',
        },
        {
          id: '93',
          titre: 'Gestions des immeubles',
          icon: 'fas fa-hotel',
          url: 'liste-immeubles',
        },
        {
          id: '94',
          titre: 'Gestion des roles',
          icon: 'fa fa-check-square',
          url: 'liste-gestion-roles-droits',
        },
        {
          id: '95',
          titre: 'Gestion tâches planifiées',
          icon: 'fa fa-tasks',
          url: 'liste-taches-planifiees',
        },
        {
          id: '96',
          titre: 'Chat avec IA',
          icon: 'fas fa-robot',
          url: 'chat-ia',
        },
      ],
    },
  ];

  private lastSelectedMenu: Menu | undefined;

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

  public getUserConnected(id: any) {
    this.agenceService.getAgenceById(id).subscribe({
      next: (result) => {
        //alert('product updated successfully', this.agenceDto?.nomAgence);
        this.agenceDto = result;
      },
      error: (err) => {
        alert(err.headers.message);
        console.log(err);
      },
    });
  }
}
