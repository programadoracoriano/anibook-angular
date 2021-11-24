import { Component, OnInit } from '@angular/core';
import {ToastController, PopoverController, ActionSheetController, ModalController, } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { ModalListPage } from '../../modals/modal-list/modal-list.page';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-listoptionspopover',
  templateUrl: './listoptionspopover.page.html',
  styleUrls: ['./listoptionspopover.page.scss'],
})
export class ListoptionspopoverPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public id:number;
  public animedata:any;
  public postresponse:any;


  constructor(public api:ApiService,
              public toastController:ToastController,
              public popover:PopoverController,
              public actionSheetController:ActionSheetController,
              public modalController: ModalController,
              public language:LanguageService) { }

  ngOnInit() {
  }


  ionViewDidEnter(){
    this.strings = this.language.setStrings();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.postresponse.msg,
      duration: 3000
    });
    toast.present();
  }


  async deleteAnime(){
    
    await this.api.getData("delete/anime/list/?id="+this.id + '&status=0')
        .subscribe(res => {
          this.animedata = res;
        }, err => {
          console.log(err);
        });
  }


  async alertDelete() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Are you sure you want to delete it?',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Yes',
        role: 'destructive',
        icon: 'sad',
        handler: () => {
          this.deleteAnime();
          this.popover.dismiss();
        }
      }, {
        text: 'No',
        icon: 'happy',
        handler: () => {
          
        } 
      }]
    });
    await actionSheet.present();
  }



  async presentModal(id) {
    
    const modal = await this.modalController.create({
      component: ModalListPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id': id,
      }
      
    });
    return await modal.present();
  }


  public closePopover(){
    this.popover.dismiss();
  }
}
