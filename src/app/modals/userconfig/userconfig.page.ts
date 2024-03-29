import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {  ToastController, ModalController} from '@ionic/angular';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-userconfig',
  templateUrl: './userconfig.page.html',
  styleUrls: ['./userconfig.page.scss'],
})
export class UserconfigPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

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
            public language:LanguageService
            ) { }

  ngOnInit() {
    this.getRating();
    this.getUser();
  }

  ionViewDidEnter(){
    this.strings = this.language.setStrings();
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
