import { Component, OnInit } from '@angular/core';
import { ApiService, mediaUrl } from '../services/api.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-followinglist',
  templateUrl: './followinglist.page.html',
  styleUrls: ['./followinglist.page.scss'],
})
export class FollowinglistPage implements OnInit {
  getfollowers:any;
  constructor(
    public api: ApiService,
    private menu: MenuController,
    
  ) { }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.followers();
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
