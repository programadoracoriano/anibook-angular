import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MenuController} from '@ionic/angular';
import { AdmobService } from '../services/admob.service';
@Component({
  selector: 'app-studioanime',
  templateUrl: './studioanime.page.html',
  styleUrls: ['./studioanime.page.scss'],
})
export class StudioanimePage implements OnInit {
  public studio_id: string;
  public responsedata:any;
  public getstudio:any;
  constructor(
    private actRoute: ActivatedRoute,
    public api: ApiService,
    private menu: MenuController,
    
    private admobService: AdmobService,
  ) {
    this.studio_id = this.actRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.getAnime();
    this.getStudio();
  }

  ionViewDidEnter(){
    this.admobService.ShowBanner();
  }

  ionViewWillLeave(){
    this.admobService.HideBanner();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  async getAnime(){
    await this.api.getData("get/anime/studio/?id=" + this.studio_id,)
     .subscribe(res => {
       this.responsedata = res;
     }, err => {
       console.log(err);
     });
}

async getStudio(){
  await this.api.getData("get/studio/?id=" + this.studio_id,)
   .subscribe(res => {
     this.getstudio = res;
   }, err => {
     console.log(err);
   });
}



}
