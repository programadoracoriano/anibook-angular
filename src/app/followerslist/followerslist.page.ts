import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-followerslist',
  templateUrl: './followerslist.page.html',
  styleUrls: ['./followerslist.page.scss'],
})
export class FollowerslistPage implements OnInit {
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

  async followers(){
    await this.api.getData("list/following/")
    .subscribe(res => {
      this.getfollowers = res;
      
    }, err => {
      console.log(err);
    });
  }

}
