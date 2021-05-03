import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { ApiService } from './api.service';
import { AuthguardService } from './authguard.service';
@Injectable({
  providedIn: 'root'
})
export class ReverseloginService {

  constructor(
    public api: ApiService,
    public router: Router,
    public authguard: AuthguardService,
  ) { }

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
