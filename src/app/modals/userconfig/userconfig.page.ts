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
  public getrating:any;
  public rating:any;
  public getuser:any;
  constructor(
  public api:ApiService,
  
  public modalController: ModalController,
  public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getRating();
    this.getUser();
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
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    this.base64Image = image.dataUrl;
  }

  public openGallery(){
    
  }


  async getRating(){
    await this.api.getData("get/rating/")
     .subscribe(res => {
       this.getrating = res;
       
     }, err => {
       console.log(err);
     });
  }


  async getUser(){
    await this.api.getData("get/profile/")
     .subscribe(res => {
       this.getuser = res;
     }, err => {
       console.log(err);
     });
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
      this.dismiss();
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



  public excludeRating(){
    
    this.api.postData("add/rating/filter/", {"rating":this.rating})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
        this.getUser();
      }, err => {
        console.log(err);
      });
  
  }

  public removeExcludeRating(id){
    this.api.postData("remove/rating/filter/", {"rating":id})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
        this.getUser();
      }, err => {
        console.log(err);
      });
  }

  public removeBlockUser(id){
    this.api.postData("unblock/user/", {"user":id})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
        this.getUser();
      }, err => {
        console.log(err);
      });
  }

  public changeUploadType(str:string){
    this.uploadType = str;
  }

  


}
