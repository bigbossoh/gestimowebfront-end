import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { siteReducer } from './ngrx/site/site.reducer';
import { SiteEffects } from './ngrx/site/site.effects';
import { CommonModule } from '@angular/common';
import { PageBienImmobilierNewComponent } from './pages/bien-immobilier/page-bien-immobilier-new/page-bien-immobilier-new.component';
import { UtilisateurEffects } from './ngrx/utulisateur/utilisateur.effects';
import { utilisateurReducer } from './ngrx/utulisateur/utlisateur.reducer';
import { PagePaiementComponent } from './pages/reglement/page-paiement/page-paiement.component';
import { ActionButtonBienComponent } from './pages/bien-immobilier/bien-immobilier/action-button-bien/action-button-bien.component';
import { BouttonActionBauxComponent } from './pages/baux/boutton-action-baux/boutton-action-baux.component';
import { PageBauxNewComponent } from './pages/baux/page-baux-new/page-baux-new.component';
import { immeubleReducer } from './ngrx/immeuble/immeuble.reducer';
import { etageByImmeubeReducer } from './ngrx/etage/etage.reducer';
import { studioReducer } from './ngrx/studio/studio.reducer';
import { appartementReducer } from './ngrx/appartement/appartement.reducer';
import { magasinReducer } from './ngrx/magasin/magasin.reducer';
import { villaReducer } from './ngrx/villa/villa.reducer';
import { villeReducer } from './ngrx/ville/ville.reducer';
import { communeReducer } from './ngrx/commune/commune.reducer';
import { bailvillaReducer } from './ngrx/bail-villa/bailvilla.reducer';
import { StudioEffects } from './ngrx/studio/studio.effects';
import { EtageEffects } from './ngrx/etage/etage.effects';
import { BailVillaEffects } from './ngrx/bail-villa/bailvilla.effects';
import { VilleEffects } from './ngrx/ville/ville.effects';
import { AppartementEffects } from './ngrx/appartement/appartement.effects';
import { ImmeubleEffects } from './ngrx/immeuble/immeuble.effects';
import { MagasinEffects } from './ngrx/magasin/magasin.effects';
import { VillaEffects } from './ngrx/villa/villa.effects';
import { Communeffects } from './ngrx/commune/commune.effects';
import { BailMagasinEffects } from './ngrx/bail-magasin/bailmagasin.effects';
import { bailMagasinReducer } from './ngrx/bail-magasin/bailmagasin.reducer';
import { BailAppartementEffects } from './ngrx/bail-appartement/bailappartement.effects';
import { bailAppartementReducer } from './ngrx/bail-appartement/bailappartement.reducer';
import { bailStudioReducer } from './ngrx/bail-studio/bailvilla.reducer';
import { BailStudioEffects } from './ngrx/bail-studio/bailstudio.effects';
import { PageNewSiteComponent } from './pages/site/page-new-site/page-new-site.component';
import { bauxReducer } from './ngrx/baux/baux.reducer';
import { BauxEffects } from './ngrx/baux/baux.effects';
import { AppelLoyerEffects } from './ngrx/appelloyer/appelloyer.effects';
import { appelLoyerReducer } from './ngrx/appelloyer/appelloyer.reducer';
import { PageNewUtilisateurComponent } from './pages/utilisateurs/page-new-utilisateur/page-new-utilisateur.component';
import { ButtonActionUtlisateurComponent } from './pages/utilisateurs/button-action-utlisateur/button-action-utlisateur.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatAccordion} from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ModifLoyerBailComponent } from './pages/baux/modif-loyer-bail/modif-loyer-bail.component';
import { quartierReducer } from './ngrx/quartier/quartier.reducer';
import { Quartierffects } from './ngrx/quartier/quartier.effects';
import { ToastrModule } from 'ngx-toastr';
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
    PageBienImmobilierNewComponent,
    AppDetailBiensSiteComponent,
    AppDetailBiensImmobilliersComponent,
    PageBauxLoyersComponent,
    AppDetailBailComponent,
    AppDetailBailLoyerComponent,
    PagePaiementComponent,
    ActionButtonBienComponent,
    BouttonActionBauxComponent,
    PageBauxNewComponent,
    PageNewSiteComponent,
    PageNewUtilisateurComponent,
    ButtonActionUtlisateurComponent,
    ModifLoyerBailComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDatepickerModule,
    NoticationModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      bailMagasinState: bailMagasinReducer,
      biensState: bienReducer,
      siteState: siteReducer,
      utilisateurState: utilisateurReducer,
      immeubleState: immeubleReducer,
      etageByImmeubeState: etageByImmeubeReducer,
      studioState: studioReducer,
      appartementState: appartementReducer,
      magasinState: magasinReducer,
      villaState: villaReducer,
      villeState: villeReducer,
      communeState: communeReducer,
      bailvillaState: bailvillaReducer,
      bailAppartementState: bailAppartementReducer,
      bailStudioState: bailStudioReducer,
      bauxState: bauxReducer,
      appelLoyerState: appelLoyerReducer,
      quartierState:quartierReducer
    }),
    EffectsModule.forRoot([
      StudioEffects,
      BienEffects,
      EtageEffects,
      SiteEffects,
      UtilisateurEffects,
      ImmeubleEffects,
      AppartementEffects,
      MagasinEffects,
      VillaEffects,
      VilleEffects,
      Communeffects,
      BailVillaEffects,
      BailMagasinEffects,
      BailAppartementEffects,
      BailStudioEffects,
      BauxEffects,
      AppelLoyerEffects,
      Quartierffects
    ]),

    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
