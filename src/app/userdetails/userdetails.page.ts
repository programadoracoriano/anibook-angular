import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, mediaUrl } from '../services/api.service';
import { MenuController, ModalController, PopoverController } from '@ionic/angular';
import { ReportmodalPage } from '../modals/reportmodal/reportmodal.page';
import { UserpopoverPage } from '../popover/userpopover/userpopover.page';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {
  public user_id:any;
  public userdata:any;
  public totaldays:number;
  public extradata:any;
  public detectfollowing:any;
  public animedata:any;
  public customlist:any;

  constructor(
    private actRoute: ActivatedRoute,
    public api: ApiService,
    private menu: MenuController,
    public modalController: ModalController,
    public popoverController: PopoverController
  ) { 
    this.user_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getUser();
    this.detectFollowing();
    this.getUserData();
    this.getAnimeList(2);
    this.getCustomList(2);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  

  public getUser(){
    this.api.getData("get/user/profile/?id=" + this.user_id,)
     .subscribe(res => {
       
       this.userdata = res;
     }, err => {
       console.log(err);
     });
}

public getAnimeList(status){
  this.api.getData("list/public/anime/?status=" + status + "&userId="  + this.user_id)
   .subscribe(res => {
     
     this.animedata = res.slice(1, 4);
   }, err => {
     console.log(err);
   });
}

public getCustomList(status){
  this.api.getData("get/public/customlist/?status=" + status + "&user="  + this.user_id)
   .subscribe(res => {
     
     this.customlist = res.slice(0, 4);
     
   }, err => {
     console.log(err);
   });
}


async detectFollowing(){
  await this.api.getData("detect/follower/?id=" + this.user_id,)
  .subscribe(res => {
    
    this.detectfollowing = res;
    
    
  }, err => {
    console.log(err);
  });
}

public Follow(){
   this.api.getData("get/follower/?id=" + this.user_id,)
  .subscribe(res => {
    
    this.detectfollowing = res;
     
  }, err => {
    console.log(err);
  });
}

async getUserData() {
  await this.api.getData("get/user/profile/extra/?id=" + this.user_id,)
  .subscribe(res => {
    this.extradata = res;
    this.totaldays = (this.extradata.total_hours + this.extradata.total_completed)/1440 
  }, err => {
    console.log(err);
  });
}





async reportModal(pid) {
  const modal = await this.modalController.create({
    component: ReportmodalPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'pid': pid,
      'type': 'user',

    }
    
  });
  modal.onDidDismiss().then(mr => {
    
  });;
  return await modal.present();
}


async userPopover(event:any) {
  const popover = await this.popoverController.create({
    component: UserpopoverPage,
    cssClass: 'custom-popover',
    event,
    translucent: true,
    componentProps: {
      'id':this.userdata.id
    }
  });
  return await popover.present();

  
}


}
