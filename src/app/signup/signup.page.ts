import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service'
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public userdata:any;
  public username:any;
  public email:string;
  public password:any;
  public password2:any;
  public error:any;
  public tos:string;
  
  constructor(
    public api: ApiService,
    private menu: MenuController,
    public language:LanguageService
  ) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ionViewDidEnter(){
    this.strings = this.language.setStrings();
  }

  signupUser(){
    if (this.username == undefined){
      if( this.idi == 'en' ){
        this.error = "You need to insert a username";
      }
      else if( this.idi == 'pt' ){
        this.error = "Tu precisas de inserir um nome de utilizador.";
      }
    }
    else if(this.password !== this.password2){
      if(this.idi == 'en'){
        this.error = "The passwords don't match!"
      }
      else if(this.idi == 'pt'){
        this.error = "As passwords não correspondem!"
      }
    }
    else{
      this.error == undefined;
    this.api.postData("signup/user/", {"username":this.username, "email":this.email,"password":this.password})
     .subscribe(res => {
       console.log(res);
       this.userdata = res;
     }, err => {
       console.log(err);
     });
    }
  }


  

  
}
