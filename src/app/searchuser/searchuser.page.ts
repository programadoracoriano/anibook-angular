import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import { ToswarningService } from '../services/toswarning.service';
@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.page.html',
  styleUrls: ['./searchuser.page.scss'],
})
export class SearchuserPage implements OnInit {
  userdata:any;
  search:string;
  constructor(
    public api: ApiService,
    private menu: MenuController,
    private toswarning:ToswarningService,
  ) { }

  
  ngOnInit() {
  }

  ionViewDidEnter(){
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async searchUser(){
    if(this.search.length >3){
    await this.api.getData("search/user/?search=" + this.search )
     .subscribe(res => {
       
       this.userdata = res;
       
     }, err => {
       console.log(err);
     });
  }
}
}
