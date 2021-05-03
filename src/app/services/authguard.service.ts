import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  public loginguard:any;
  
  constructor(
    public api: ApiService,
    public router: Router,

  ) { }

  public loginGuard(){
    this.api.getData("login/guard/?tk=" + localStorage.getItem("token"),)
     .subscribe(res => {
       this.loginguard = res;
       if (this.loginguard.isLogged == false){
         localStorage.setItem("token", "");
       }
       console.log(localStorage.getItem("token"));
     }, err => {
       console.log(err);
     });
     
   }

}
