import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AdmobService } from '../services/admob.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-publicanimelist',
  templateUrl: './publicanimelist.page.html',
  styleUrls: ['./publicanimelist.page.scss'],
})
export class PublicanimelistPage implements OnInit {
  user_id:number;
  animedata:any;
  userdata:any;
  constructor(
    public api: ApiService,
    private actRoute: ActivatedRoute,
    private admobService: AdmobService,
    private menu: MenuController,
  ) { 
    this.user_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    
    this.animeList(0);
    this.getUser();
  }


  


  

  segmentChanged(ev: any) {
  }



  async animeList(status){
    await this.api.getData("list/public/anime/?status=" + status + "&userId="  + this.user_id)
      .subscribe(res => {
        this.animedata = res;
      }, err => {
        console.log(err);
      });
  }

  public getUser(){
    this.api.getData("get/user/profile/?id=" + this.user_id,)
     .subscribe(res => {
       this.userdata = res;
     }, err => {
       console.log(err);
     });
}

openFirst() {
  this.menu.enable(true, 'first');
  this.menu.open('first');
}
}

