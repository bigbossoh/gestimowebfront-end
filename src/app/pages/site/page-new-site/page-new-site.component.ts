import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VilleStateEnum, VilleState } from '../../../ngrx/ville/ville.reducer';
import { GetAllVilleActions } from '../../../ngrx/ville/ville.actions';
import { map } from 'rxjs/operators';
import { CommunesState, CommunesStateEnum } from '../../../ngrx/commune/commune.reducer';
import { GetAllCommunesByVilleActions } from '../../../ngrx/commune/commune.actions';
import { QuartiersState, QuartierStateEnum } from '../../../ngrx/quartier/quartier.reducer';
import { GetAllQuartierByCommuneActions } from '../../../ngrx/quartier/quartier.actions';
import { UserService } from '../../../services/user/user.service';
import { UtilisateurRequestDto } from '../../../../gs-api/src/models/utilisateur-request-dto';
import { CreateNewSiteAction } from '../../../ngrx/site/site.actions';
import { SiteStateEnum, SiteState } from '../../../ngrx/site/site.reducer';

@Component({
  selector: 'app-page-new-site',
  templateUrl: './page-new-site.component.html',
  styleUrls: ['./page-new-site.component.css'],
})
export class PageNewSiteComponent implements OnInit {
  submitted = false;

  villeState$: Observable<VilleState> | null = null;
  readonly VilleStateEnum = VilleStateEnum;

  siteState$: Observable<SiteState> | null = null;
  readonly SiteStateEnum = SiteStateEnum;

  communeState$: Observable<CommunesState> | null = null;
  readonly CommunesStateEnum = CommunesStateEnum;

  quartierState$: Observable<QuartiersState> | null = null;
  readonly QuartierStateEnum = QuartierStateEnum;

  siteRegisterForm!: FormGroup;

  user?: UtilisateurRequestDto;
  constructor(private store: Store<any>, private fb: FormBuilder,private userService:UserService) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAllVilleActions({}));
    this.villeState$ = this.store.pipe(map((state) => state.villeState));
    this.user = this.userService.getUserFromLocalCache();
    this.siteRegisterForm = this.fb.group({
      id: [0],
      idQuartier: [0],
      idAgence: [this.user?.idAgence]
    });
    this.changeCity(0);
  }

  public saveSite() {
    this.submitted = true;
    if (this.siteRegisterForm?.invalid) {
      return;
    }
    console.warn(this.siteRegisterForm.value);

    this.submitted = false;
    this.store.dispatch(new CreateNewSiteAction(this.siteRegisterForm?.value));
    this.siteState$ = this.store.pipe(map((state) => state.siteState));

  }

  public changeCity(idVille: number) {
     this.store.dispatch(new GetAllCommunesByVilleActions(idVille));
    this.communeState$ = this.store.pipe(map((state) => state.communeState));
  }
  changeCommune(idCommune: number) {
    this.store.dispatch(new GetAllQuartierByCommuneActions(idCommune));
    this.quartierState$ = this.store.pipe(map((state) => state.quartierState));
  }
}
