import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-statistique-journalier',
  templateUrl: './page-statistique-journalier.component.html',
  styleUrls: ['./page-statistique-journalier.component.css']
})
export class PageStatistiqueJournalierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
