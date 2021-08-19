import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.page.html',
  styleUrls: ['./tos.page.scss'],
})
export class TosPage implements OnInit {
  public tosbutton:boolean = false;
  constructor(
    private menu: MenuController,
    public router: Router,
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.verifyTos();
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
