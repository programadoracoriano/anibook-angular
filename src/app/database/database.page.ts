import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { LanguageService } from '../services/language.service';
import { ToswarningService } from '../services/toswarning.service';
@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {
  getdata:any;
  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));
  constructor(
    public api: ApiService,
    private menu: MenuController,
    private toswarning:ToswarningService,
    public language:LanguageService
  ) { }


  
  
  ngOnInit() {
    this.getAnime();

  }

  ionViewDidEnter(){
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
    this.strings = this.language.setStrings();
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
