import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {  ToastController, ModalController} from '@ionic/angular';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.page.html',
  styleUrls: ['./review-modal.page.scss'],
})
export class ReviewModalPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public id:number;
  public postresponse:any;
  public review:any;
  public getreview:any;
  constructor(
    public api: ApiService,
    public modalController: ModalController,
    public toastController: ToastController,
    public language:LanguageService
  ) { }

  ngOnInit() {
    this.getReview(this.id);
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



  //--Toast Message
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.postresponse.msg,
      duration: 3000
    });
    toast.present();
  }


  //--Get Review Function
  async getReview(id){
    id = this.id;
    await this.api.getData("get/my/review?id=" + id,)
       .subscribe(res => {
         this.getreview = res;
        this.review = this.getreview.review;
       }, err => {
         console.log(err);
       });
  }

  //--add Review Function
  public addReview(draft){
    this.api.postData("get/reviews/", {"id":this.id, "review":this.review, "draft":draft})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
      }, err => {
        console.log(err);
      });
    }

}
