import { Component, OnInit } from '@angular/core';
import { ApiService, mediaUrl } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-followinglist',
  templateUrl: './followinglist.page.html',
  styleUrls: ['./followinglist.page.scss'],
})
export class FollowinglistPage implements OnInit {
  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public getfollowers:any;

  constructor(
    public api: ApiService,
    private menu: MenuController,
    public language:LanguageService
    
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

  MediaUrl = mediaUrl;

  async followers(){
    await this.api.getData("list/followers/")
    .subscribe(res => {
      console.log(res);
      this.getfollowers = res;
      
    }, err => {
      console.log(err);
    });
  }
}
