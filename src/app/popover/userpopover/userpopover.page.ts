import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, PopoverController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { ReportmodalPage } from '../../modals/reportmodal/reportmodal.page';
@Component({
  selector: 'app-userpopover',
  templateUrl: './userpopover.page.html',
  styleUrls: ['./userpopover.page.scss'],
})
export class UserpopoverPage implements OnInit {
  public postresponse:any;
  public id:number;
  constructor(public modalController: ModalController,
              public api:ApiService,
              public toastController:ToastController,
              public popover:PopoverController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.postresponse.msg,
      duration: 3000
    });
    toast.present();
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
    this.closePopover();
    return await modal.present();
  }

  async blockButton(){
    
    await this.api.postData("block/user/", {"user":this.id} )
     .subscribe(res => {
       console.log(res);
       this.postresponse = res;   
       this.presentToast();  
       this.closePopover();
     }, err => {
       console.log(err);
     });
  }

  public closePopover(){
    this.popover.dismiss();
  }
}
