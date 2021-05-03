import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import {  ToastController, ModalController} from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;
@Component({
  selector: 'app-userconfig',
  templateUrl: './userconfig.page.html',
  styleUrls: ['./userconfig.page.scss'],
})
export class UserconfigPage implements OnInit {
  public uploadType:string;
  public base64Image:any;
  public postresponse:any;
  constructor(
  public api:ApiService,
  
  public modalController: ModalController,
  public toastController: ToastController,
  ) { }

  ngOnInit() {
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.postresponse.msg,
      duration: 3000
    });
    toast.present();
  }


  async openCamera(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    this.base64Image = image.dataUrl;
  }

  public openGallery(){
    
  }

  
  public uploadImage(){
    
    this.api.postData("upload/profile/image/", {"image":this.base64Image})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
      }, err => {
        console.log(err);
      });
      this.uploadType = undefined;
  
  }



  public uploadCover(){
    
    this.api.postData("upload/profile/cover/", {"image":this.base64Image})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
      }, err => {
        console.log(err);
      });
      
      this.uploadType = undefined;
  
  }

  public changeUploadType(str:string){
    this.uploadType = str;
  }

  


}
