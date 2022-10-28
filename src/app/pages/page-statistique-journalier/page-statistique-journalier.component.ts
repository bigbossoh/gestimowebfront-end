import { map } from 'rxjs/operators';
import { GetAllAnneeActions } from './../../ngrx/annee/annee.actions';
import { AnneeState, AnneeStateEnum } from './../../ngrx/annee/annee.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-page-statistique-journalier',
  templateUrl: './page-statistique-journalier.component.html',
  styleUrls: ['./page-statistique-journalier.component.css']
})
export class PageStatistiqueJournalierComponent implements OnInit {
  anneeState$: Observable<AnneeState> | null = null;
  readonly AnneeStateEnum = AnneeStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllAnneeActions({}));
    this.anneeState$=this.store.pipe(map((state)=>state.anneeState));
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
