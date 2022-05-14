import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { PageSiteComponent } from './pages/site/page-site/page-site.component';
import { DetailSiteComponent } from './composants/detail-site/detail-site/detail-site.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { PageAgenceComponent } from './pages/agence/page-agence/page-agence.component';
import { PageLocataireComponent } from './pages/utilisateurs/locataire/page-locataire/page-locataire.component';
import { PageGerantComponent } from './pages/utilisateurs/gérant/page-gerant/page-gerant.component';
import { PageProprietaireComponent } from './pages/utilisateurs/propriétaire/page-proprietaire/page-proprietaire.component';
import { PageSuperviseurComponent } from './pages/utilisateurs/superviseur/page-superviseur/page-superviseur.component';
import { PageVueEnsembleComponent } from './pages/vue-ensemple/page-vue-ensemble/page-vue-ensemble.component';
import { PieComponent } from './composants/widgets/pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
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
import { PaginationComponent } from './composants/pagination/pagination.component';
import { AppDetailBiensSiteComponent } from './composants/app-detail-biens-site/app-detail-biens-site.component';
import { AppDetailBiensImmobilliersComponent } from './composants/app-detail-biens-immobilliers/app-detail-biens-immobilliers.component';
import { PageBauxLoyersComponent } from './pages/baux/page-baux-loyers/page-baux-loyers.component';
import { AppDetailBailComponent } from './composants/app-detail-bail/app-detail-bail.component';
import { AppDetailBailLoyerComponent } from './composants/app-detail-bail-loyer/app-detail-bail-loyer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoticationModule } from './notification.module';
import { NotificationService } from './services/notification/notification.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bienReducer } from './ngrx/bien-immobilier/bienimmobilier.reducer';
import { BienEffects } from './ngrx/bien-immobilier/bienimmobilier.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageDashboardComponent,
    PageStatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    PageSiteComponent,
    DetailSiteComponent,
    BouttonActionComponent,
    PageAgenceComponent,
    PageLocataireComponent,
    PageGerantComponent,
    PageProprietaireComponent,
    PageSuperviseurComponent,
    PageVueEnsembleComponent,
    PieComponent,
    AppelsLoyersComponent,
    RelanceAppelsComponent,
    PageBienImmobilierComponent,
    PageBauxComponent,
    PageBienSiteGeographiqueComponent,
    PageReglementIndividuelComponent,
    PageReglementGroupeComponent,
    PageJournalCaisseComponent,
    PageCompteClientComponent,
    PageCompteAgenceComponent,
    PageGrandCompteComponent,
    PageListeUtilisateursComponent,
    PaginationComponent,
    AppDetailBiensSiteComponent,
    AppDetailBiensImmobilliersComponent,
    PageBauxLoyersComponent,
    AppDetailBailComponent,
    AppDetailBailLoyerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    NoticationModule,
    HighchartsChartModule,
    StoreModule.forRoot({ biensState: bienReducer }),
    EffectsModule.forRoot([BienEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
