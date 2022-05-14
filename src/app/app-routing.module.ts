import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageSiteComponent } from './pages/site/page-site/page-site.component';
import { PageAgenceComponent } from './pages/agence/page-agence/page-agence.component';
import { PageLocataireComponent } from './pages/utilisateurs/locataire/page-locataire/page-locataire.component';
import { PageGerantComponent } from './pages/utilisateurs/gérant/page-gerant/page-gerant.component';
import { PageSuperviseurComponent } from './pages/utilisateurs/superviseur/page-superviseur/page-superviseur.component';
import { PageProprietaireComponent } from './pages/utilisateurs/propriétaire/page-proprietaire/page-proprietaire.component';
import { PageVueEnsembleComponent } from './pages/vue-ensemple/page-vue-ensemble/page-vue-ensemble.component';
import { AppelsLoyersComponent } from './pages/appel-loyer/appels-loyers/appels-loyers.component';
import { RelanceAppelsComponent } from './pages/appel-loyer/relance-appels/relance-appels.component';
import { PageBienImmobilierComponent } from './pages/bien-immobilier/page-bien-immobilier/page-bien-immobilier.component';
import { PageBauxComponent } from './pages/baux/page-baux/page-baux.component';
import { PageBienSiteGeographiqueComponent } from './pages/bien-immobilier/page-bien-site-geographique/page-bien-site-geographique.component';
import { PageReglementIndividuelComponent } from './pages/reglement/page-reglement-individuel/page-reglement-individuel.component';
import { PageReglementGroupeComponent } from './pages/reglement/page-reglement-groupe/page-reglement-groupe.component';
import { PageJournalCaisseComponent } from './pages/comptabilite/page-journal-caisse/page-journal-caisse.component';
import { PageCompteClientComponent } from './pages/comptabilite/page-compte-client/page-compte-client.component';
import { PageCompteAgenceComponent } from './pages/comptabilite/page-compte-agence/page-compte-agence.component';
import { PageGrandCompteComponent } from './pages/comptabilite/page-grand-compte/page-grand-compte.component';
import { PageListeUtilisateursComponent } from './pages/utilisateurs/page-liste-utilisateurs/page-liste-utilisateurs.component';
import { PageBauxLoyersComponent } from './pages/baux/page-baux-loyers/page-baux-loyers.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { PagePaiementComponent } from './pages/reglement/page-paiement/page-paiement.component';

const routes: Routes = [
  {
  path:'login',
  component:PageLoginComponent
  },
  {
  path:'',
  component:PageDashboardComponent,
  canActivate:[ApplicationGuardService],
  children:[
    {
      path:'statistiques',
    component:PageStatistiqueComponent,
    canActivate:[ApplicationGuardService]
    },
    {
      path:'dashboard',
      component:PageVueEnsembleComponent,
      canActivate:[ApplicationGuardService]

  },
    {
      path:'sites',
    component:PageSiteComponent,
    canActivate:[ApplicationGuardService]
    },
    {
      path:'paiement',
    component:PagePaiementComponent,
    canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'agences',
    component:PageAgenceComponent,
    canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'locataires',
      component:PageLocataireComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'proprietaires',
      component:PageProprietaireComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'gerants',
      component:PageGerantComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'Superviseurs',
      component:PageSuperviseurComponent,
      canActivate:[ApplicationGuardService]
    },
    {
      path:'bail-loyers',
      component:PageBauxLoyersComponent,
      canActivate:[ApplicationGuardService]
    },
    {
      path:'appelloyers',
      component:AppelsLoyersComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'relance',
      component:RelanceAppelsComponent,
      canActivate:[ApplicationGuardService]
    },
    {
      path:'bien-immobilier',
      component:PageBienImmobilierComponent,
      canActivate:[ApplicationGuardService]
    },
    {
      path:'baux',
      component:PageBauxComponent,
      canActivate:[ApplicationGuardService]
    },
    {
      path:'bien-par-site',
      component:PageBienSiteGeographiqueComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'reglement-individuel',
      component:PageReglementIndividuelComponent,
    canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'reglement-groupe',
      component:PageReglementGroupeComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'journal-caisse',
      component:PageJournalCaisseComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'compte-client',
      component:PageCompteClientComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'compte-agence',
      component:PageCompteAgenceComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'grand-compte',
      component:PageGrandCompteComponent,
      canActivate:[ApplicationGuardService]
    }
    ,
    {
      path:'liste-utilisateurs',
      component:PageListeUtilisateursComponent,
      canActivate:[ApplicationGuardService]
    }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
