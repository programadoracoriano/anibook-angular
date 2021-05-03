import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { AdmobService } from '../services/admob.service';
@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {
  getdata:any;
  constructor(
    public api: ApiService,
    private menu: MenuController,
    private admobService: AdmobService,
  ) { }


  ionViewDidEnter(){
    this.admobService.ShowBanner();
  }

  ionViewWillLeave(){
    this.admobService.HideBanner();
  }
  
  ngOnInit() {
    this.getAnime();

  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async getAnime(){
    await this.api.getData("get/anime/list/",)
      .subscribe(res => {
        this.getdata = res;
      
      }, err => {
        console.log(err);
      });
    }
}
