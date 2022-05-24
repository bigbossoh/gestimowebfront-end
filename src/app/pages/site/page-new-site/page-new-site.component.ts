import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-new-site',
  templateUrl: './page-new-site.component.html',
  styleUrls: ['./page-new-site.component.css']
})
export class PageNewSiteComponent implements OnInit {

  siteRegisterForm!:FormGroup;

  constructor( ) { }

  ngOnInit(): void {
  }

  public findAllVille():void{
  //   this.bienService.findAll()
  // .subscribe(listBien=>{
  //   this.listeBienDto=listBien;
  // },error=>{
  //   console.log(error.error.errors);

  // });
  }
public saveSite():void{}

public changeCity(idVille:number ):void{}
}
