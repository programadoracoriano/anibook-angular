import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public logindata:any;
  public username:any;
  public password:any;
  public msg:any;
  
  constructor(
    public api: ApiService,
    public router: Router,
    private menu: MenuController,
    public language:LanguageService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ''){
      this.router.navigate(['/tab3']);
    }
  }

  ionViewDidEnter(){
    this.strings = this.language.setStrings();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  

  public login(){
    if ((this.username == undefined)){
      if(this.idi == 'en'){
        this.msg = "Username is empty.You need to insert a username!";
      }
      else if(this.idi == 'pt'){
        this.msg = "O nome de utilizador está vazio.Precisas de digitar um nome de utilizador!";
      }
    }
    else if((this.password == undefined)){
      if(this.idi == 'en'){
        this.msg = "Password is empty.You need to insert a Password!";
      }
      else if(this.idi == 'pt'){
        this.msg = "O campo da password está vazio.Precisas de digitar uma password!";
      }
    }
    else{
    this.api.postData("login/user/", {"username":this.username, "password":this.password})
     .subscribe(res => {
       console.log(res);
       this.logindata = res;
       if (this.logindata.success == true) {
           localStorage.setItem("token", this.logindata.token)
           this.router.navigate(['/tab3']);
       }
       
     }, err => {
       console.log(err);
     });
    }
 }


 canActivate(route: ActivatedRouteSnapshot): boolean {
  if (localStorage.getItem("token") !== ''){
    this.router.navigate(['/tab3']);
    return false;
  }
  else{
    return true;
  }
  
}



}
