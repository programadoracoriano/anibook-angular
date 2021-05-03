import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-anime-from-details',
  templateUrl: './add-anime-from-details.page.html',
  styleUrls: ['./add-anime-from-details.page.scss'],
})
export class AddAnimeFromDetailsPage implements OnInit {
  public id:any;
  public scoreArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  public animedata:any;
  public cover:any;
  public postresponse:any;
  public n_episodes:number;
  public radioanime:number;
  public completed:number;
  public score:number;
  public options:any;
  public option:any;
  constructor(
    public api: ApiService,
    public modalController: ModalController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getAnime();
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

  async getAnime(){
    await this.api.getData("get/anime/details/?id=" + this.id,)
     .subscribe(res => {
       this.animedata = res;
       this.radioanime = this.animedata.id;
       if (this.animedata.cover_image_url == null || this.animedata.cover_image_url == undefined){
         this.cover = this.animedata.image_url;
       }
       else{
         this.cover = this.animedata.cover_image_url;
       }
     }, err => {
       console.log(err);
     });
}

public addAnime(status){
  this.api.postData("anime/list/all/", {"status":status, "ep_number":this.n_episodes, "id":this.radioanime, 
  "completed":this.completed, "score":this.score})
    .subscribe(res => {
      this.postresponse = res;
      this.presentToast();
    }, err => {
      console.log(err);
    });
  }

  public changeSelectOptions(){
    this.option = this.options;
  }


}
