import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public logindata:any;
  public username:any;
  public password:any;
  public msg:any;

  constructor(
    public api: ApiService,
    public router: Router,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == ''){
      this.router.navigate(['tabs/tab3']);
    }
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  

  public login(){
    if ((this.username == undefined)){
      this.msg = "Username is empty.You need to insert a username!";
    }
    else if((this.password == undefined)){
      this.msg = "Password is empty.You need to insert a Password!";
    }
    else{
    this.api.postData("login/user/", {"username":this.username, "password":this.password})
     .subscribe(res => {
       console.log(res);
       this.logindata = res;
       if (this.logindata.success == true) {
           localStorage.setItem("token", this.logindata.token)
           this.router.navigate(['tabs/tab3']);
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
