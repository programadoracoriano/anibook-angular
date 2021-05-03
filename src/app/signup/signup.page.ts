import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userdata:any;
  username:any;
  email:string;
  password:any;
  password2:any;
  error:any;
  constructor(
    public api: ApiService,
    private menu: MenuController,
  ) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  signupUser(){
    if (this.username == undefined){
      this.error = "You need to insert a username";
    }
    else if(this.password !== this.password2){
      this.error = "The passwords don't match!"
    }
    else{
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