import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.page.html',
  styleUrls: ['./tos.page.scss'],
})
export class TosPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public tosbutton:boolean = false;


  constructor(
    private menu: MenuController,
    public router: Router,
    public language:LanguageService
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.verifyTos();
    this.strings = this.language.setStrings();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  public acceptTos(){
    if(localStorage.getItem("tos") == undefined){
      this.tosbutton = false;
      localStorage.setItem("tos", "a");
      this.router.navigate(["/tab1"]);
    }
    else if( localStorage.getItem("tos") == "a"){
      this.tosbutton = true;
      localStorage.setItem("tos", "d");
      
    }
    else if(localStorage.getItem("tos") == "d"){
      this.tosbutton = false;
      localStorage.setItem("tos", "a");
      this.router.navigate(["/tab1"]);
    }
  }


  public verifyTos(){
    if(localStorage.getItem("tos") == undefined){
      this.tosbutton = false;
      
      
    }
    else if( localStorage.getItem("tos") == "a"){
      this.tosbutton = true;
      this.router.navigate(["/tab1"]);
      
    }
    else if(localStorage.getItem("tos") == "d"){
      this.tosbutton = false;
      
      
    }
  }
}
