import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  public showLoading?:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
