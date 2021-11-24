import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-followerslist',
  templateUrl: './followerslist.page.html',
  styleUrls: ['./followerslist.page.scss'],
})
export class FollowerslistPage implements OnInit {
  public getfollowers:any;
  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));
  constructor(
    public api: ApiService,
    private menu: MenuController,
    private language:LanguageService
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.followers();
    this.strings = this.language.setStrings();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async followers(){
    await this.api.getData("list/following/")
    .subscribe(res => {
      this.getfollowers = res;
      
    }, err => {
      console.log(err);
    });
  }

}
