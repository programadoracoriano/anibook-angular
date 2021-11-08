import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import {LoginguardService} from '../services/loginguard.service';
import { AuthguardService } from '../services/authguard.service';
import { ToswarningService } from '../services/toswarning.service';
import {  MenuController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public strings:any;
  public hidespoilers:boolean = true;
  public getdata:any;
  public getcategorie:any;
  public getlist:any;
  public season:string = "summer";
  public year:number = 2021;
  public seasonanimes:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));
  constructor(
    public guard: LoginguardService,
    public api: ApiService,
    public checkuser: AuthguardService,
    private menu: MenuController,
    private toswarning:ToswarningService,
    public language:LanguageService
  ) {

    
  }


  



  ionViewDidEnter(){
    this.strings = this.language.setStrings();
    
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
    this.checkuser.loginGuard();
    this.getFollowersUpdates();
    this.seasonAnimes();
  }

  

  
  
  ngOnInit() {

   
    

  }

  




  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  async getFollowersUpdates(){
    await this.api.getData("updates/followers/anime/list/")
      .subscribe(res => {
        this.getlist = res.slice(0, 4);
      
      }, err => {
        console.log(err);
      });
    }


seasonAnimes(){
  this.api.getData("search/by/season/?season=" + this.season + "&year=" + this.year)
   .subscribe(res => {
     this.seasonanimes = res.slice(0, 4);
     
   }, err => {
     console.log(err);
   });

}



public showSpoiler(){
  this.hidespoilers = !this.hidespoilers;
  
  
}


}

