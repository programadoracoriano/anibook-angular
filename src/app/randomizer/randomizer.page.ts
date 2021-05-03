import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AdmobService } from '../services/admob.service';
import { MenuController, IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.page.html',
  styleUrls: ['./randomizer.page.scss'],
})
export class RandomizerPage implements OnInit {
  public response:any;
  public genre:number;
  public getgenres:any;
  constructor(
    public api: ApiService,
    private menu: MenuController,
    private admobService: AdmobService,
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  ionViewDidEnter(){
    this.admobService.ShowBanner();
  }

  ionViewDidLeave(){
    this.admobService.HideBanner();
  }


  async getGenres(){
    await this.api.getData("get/genres/")
     .subscribe(res => {
       this.getgenres = res;
       
     }, err => {
       console.log(err);
     });
  }

  async getAnime(){
    await this.api.getData("anime/randomizer/?genre=" + this.genre)
     .subscribe(res => {
       this.response = res;
       
     }, err => {
       console.log(err);
     });
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
