import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { paginationPersonnalise } from './paginationPersonnalise';
import { MatPaginatorIntl } from '@angular/material/paginator';
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
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bienReducer } from './ngrx/bien-immobilier/bienimmobilier.reducer';
import { BienEffects } from './ngrx/bien-immobilier/bienimmobilier.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { siteReducer } from './ngrx/site/site.reducer';
import { SiteEffects } from './ngrx/site/site.effects';
import { PageBienImmobilierNewComponent } from './pages/bien-immobilier/page-bien-immobilier-new/page-bien-immobilier-new.component';
import { UtilisateurEffects } from './ngrx/utulisateur/utilisateur.effects';
import { utilisateurReducer } from './ngrx/utulisateur/utlisateur.reducer';
import { PagePaiementComponent } from './pages/reglement/page-paiement/page-paiement.component';
import { ActionButtonBienComponent } from './pages/bien-immobilier/bien-immobilier/action-button-bien/action-button-bien.component';
import { BouttonActionBauxComponent } from './pages/baux/boutton-action-baux/boutton-action-baux.component';
import { PageBauxNewComponent } from './pages/baux/page-baux-new/page-baux-new.component';
import { immeubleReducer } from './ngrx/immeuble/immeuble.reducer';
import { etageByImmeubeReducer } from './ngrx/etage/etage.reducer';

import { appartementReducer } from './ngrx/appartement/appartement.reducer';
import { magasinReducer } from './ngrx/magasin/magasin.reducer';
import { villaReducer } from './ngrx/villa/villa.reducer';
import { villeReducer } from './ngrx/ville/ville.reducer';
import { communeReducer } from './ngrx/commune/commune.reducer';
import { bailvillaReducer } from './ngrx/bail-villa/bailvilla.reducer';

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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ModifLoyerBailComponent } from './pages/baux/modif-loyer-bail/modif-loyer-bail.component';
import { quartierReducer } from './ngrx/quartier/quartier.reducer';
import { Quartierffects } from './ngrx/quartier/quartier.effects';
import { GerantEffects } from './ngrx/utulisateur/gerant/gerant.effects';
import { gerantReducer } from './ngrx/utulisateur/gerant/gerant.reducer';
import { agenceReducer } from './ngrx/agence/agence.reducer';
import { AgenceEffects } from './ngrx/agence/agence.effects';
import { AgenceNewComponent } from './pages/agence/agence-new/agence-new.component';
import { superviseurReducer } from './ngrx/utulisateur/superviseur/superviseur.reducer';
import { SuperviseurEffects } from './ngrx/utulisateur/superviseur/superviseur.effect';
import { quittanceAppelReducer } from './ngrx/print-data/quittance-appel-loyer/quittance-appel-loyer.reducer';
import { QuittanceAppelLoyerEffects } from './ngrx/print-data/quittance-appel-loyer/quittance-appel-loyer.effect';
import { PageEtageComponent } from './pages/bien-immobilier/page-etage/page-etage/page-etage.component';
import { PageImmeubleComponent } from './pages/bien-immobilier/immeuble/page-immeuble/page-immeuble.component';
import { ActionButtonEtageComponent } from './composants/action-button-etage/action-button-etage.component';
import { ActionButtonImmeubleComponent } from './composants/action-button-immeuble/action-button-immeuble.component';
import { PageImmeubleNewComponent } from './pages/bien-immobilier/page-immeuble-new/page-immeuble-new.component';
import { PageEtageNewComponent } from './pages/bien-immobilier/page-etage-new/page-etage-new.component';
import { anneeReducer } from './ngrx/annee/annee.reducer';
import { AnneeEffects } from './ngrx/annee/annee.effets';
import { mailReducer, MailState } from './ngrx/mail/mail.reducer';
import { MailEffect } from './ngrx/mail/mail.effects';
import { Encaissementffects } from './ngrx/reglement/reglement.effects';
import { encaissementReducer } from './ngrx/reglement/reglement.reducer';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    PageImmeubleComponent,
    PageImmeubleNewComponent,
    PageEtageNewComponent,
    ActionButtonEtageComponent,
    ActionButtonImmeubleComponent,
    PageEtageComponent,
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
    ModifLoyerBailComponent,
    AgenceNewComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
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

    //ToastrModule.forRoot(),
    StoreModule.forRoot({
      bailMagasinState: bailMagasinReducer,
      biensState: bienReducer,
      siteState: siteReducer,
      utilisateurState: utilisateurReducer,
      immeubleState: immeubleReducer,
      etageState: etageByImmeubeReducer,
      appartementState: appartementReducer,
      magasinState: magasinReducer,
      villaState: villaReducer,
      villeState: villeReducer,
      communeState: communeReducer,
      bailvillaState: bailvillaReducer,
      bailAppartementState: bailAppartementReducer,
      bauxState: bauxReducer,
      appelLoyerState: appelLoyerReducer,
      quartierState:quartierReducer,
      gerantState:gerantReducer,
      locataireState:utilisateurReducer,
      proprietaireState:utilisateurReducer,
      agenceState:agenceReducer,
      superviseurState: superviseurReducer,
      quittanceAppelState: quittanceAppelReducer,
      anneeState: anneeReducer,
      mailState: mailReducer,
      encaissementState:encaissementReducer
    }),
    EffectsModule.forRoot([
      AnneeEffects,
      MailEffect,
      BienEffects,
      AgenceEffects,
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

      BauxEffects,
      AppelLoyerEffects,
      Quartierffects,
      GerantEffects,
      SuperviseurEffects,
      QuittanceAppelLoyerEffects,
      Encaissementffects
    ]),

    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: paginationPersonnalise}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
