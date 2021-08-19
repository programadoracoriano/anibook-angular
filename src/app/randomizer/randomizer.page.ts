import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import { ToswarningService } from '../services/toswarning.service';
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
    private toswarning:ToswarningService,
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  ionViewDidEnter(){
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
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
