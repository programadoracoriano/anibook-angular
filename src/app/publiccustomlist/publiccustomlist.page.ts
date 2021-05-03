import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AdmobService } from '../services/admob.service';
@Component({
  selector: 'app-publiccustomlist',
  templateUrl: './publiccustomlist.page.html',
  styleUrls: ['./publiccustomlist.page.scss'],
})
export class PubliccustomlistPage implements OnInit {
  u_custom:any;
  getdata:any;
  list_id:string;
  constructor(
    public api: ApiService,
    private actRoute: ActivatedRoute,
    public router: Router,
    private menu: MenuController,
    private admobService: AdmobService,
  ) { 
    this.list_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.admobService.ShowBanner();
    this.getData();
    this.uniqueCustomData();
  }

  ionViewWillLeave(){
    this.admobService.HideBanner();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  async uniqueCustomData(){
    await this.api.getData("get/unique/customlist/?id="+this.list_id)
      .subscribe(res => {
        
        this.u_custom = res;
      }, err => {
        console.log(err);
      });
  }


  async getData(){
    await this.api.getData("anime/customlist/?id=" + this.list_id)
     .subscribe(res => {
       this.getdata = res;
     }, err => {
       console.log(err);
     });
}
}
