import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-followerupdate',
  templateUrl: './followerupdate.page.html',
  styleUrls: ['./followerupdate.page.scss'],
})
export class FollowerupdatePage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public getlist:any;
  it = [];
  private readonly offset:number = 12;
  private index:number = 0;

  constructor(
    public api: ApiService,
    private menu: MenuController,
    public language:LanguageService,
    
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.getFollowersUpdates();
    this.strings = this.language.setStrings();
  }

  


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  async getFollowersUpdates(){
    await this.api.getData("updates/followers/anime/list/")
      .subscribe(res => {
        this.getlist = res;
        this.it = this.getlist.slice(this.index, this.offset + this.index)
      }, err => {
        console.log(err);
      });
    }


    loadData(event) {
      setTimeout(() => {
        this.addItems();
        
    
        event.target.complete();
    
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        
      }, 1000);
    }
    
    addItems(){
      
      this.index += this.offset; 
      let s =  this.getlist.slice(this.index, this.offset + this.index)
    
      for(let i=0; i<s.length; i++){
        this.it.push(s[i]);
      }
    
    }
}
