import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {  ToastController, ModalController} from '@ionic/angular';
@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.page.html',
  styleUrls: ['./review-modal.page.scss'],
})
export class ReviewModalPage implements OnInit {
  public id:number;
  public postresponse:any;
  public review:any;
  public getreview:any;
  constructor(
    public api: ApiService,
    public modalController: ModalController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getReview(this.id);
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
