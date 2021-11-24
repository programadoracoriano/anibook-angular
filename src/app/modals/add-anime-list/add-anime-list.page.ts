import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModalController, ToastController } from '@ionic/angular';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-add-anime-list',
  templateUrl: './add-anime-list.page.html',
  styleUrls: ['./add-anime-list.page.scss'],
})
export class AddAnimeListPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public searchdata:any;
  public search:any;
  public ganime:any = undefined;
  public status:any = 0;
  public scoreArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  public postresponse:any;
  public n_episodes:number;
  public radioanime:number;
  public completed:number;
  public score:number;

  constructor(
    public api: ApiService,
    public modalController: ModalController,
    public toastController: ToastController,
    public language:LanguageService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.strings = this.language.setStrings();
  }


  async searchData(){
    if(this.search.length >3){
      await  this.api.getData("search/all/?search="+this.search)
       .subscribe(res => {
         
         this.searchdata = res;
       }, err => {
         console.log(err);
        });
      }
}


async clickGetAnime(val){
  await this.api.getData("get/anime/details/?id=" + val,)
   .subscribe(res => {
     this.ganime = res;
     
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

    this.ganime = undefined;
  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: this.postresponse.msg,
      duration: 3000
    });
    toast.present();
  }

public changeStatus(status){
  this.status = status;
}



segmentChanged(ev: any) {
}


dismiss() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalController.dismiss({
    'dismissed': true
  });
}
}
