import { Component, Input, OnInit } from '@angular/core';
import { AppelLoyerDto } from '../../../gs-api/src/models/appel-loyer-dto';

@Component({
  selector: 'app-app-detail-bail-loyer',
  templateUrl: './app-detail-bail-loyer.component.html',
  styleUrls: ['./app-detail-bail-loyer.component.css'],
})
export class AppDetailBailLoyerComponent implements OnInit {
  @Input() appelLoyerDto!: AppelLoyerDto;
  constructor() {}

  ngOnInit(): void {}
}
