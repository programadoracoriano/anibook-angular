import { Component, OnInit, } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.page.html',
  styleUrls: ['./modal-list.page.scss'],
})
export class ModalListPage implements OnInit {
  public id:any;
  public postresponse:any;
  public ganime:any;
  public getnote:any;
  public note:any;
  public options:any;
  public option:any;
  public review:any;
  public radioanime:any;
  public n_episodes:any;
  public completed:any;
  public score:number;
  public scoreVar:number;
  public scoreArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  constructor(
    public modalController: ModalController,
    public api: ApiService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getNote(this.id);
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



  async clickGetAnime(id){
    id = this.id;
    await this.api.getData("get/anime/details/?id=" + id,)
     .subscribe(res => {
       this.ganime = res;
     }, err => {
       console.log(err);
     });
}

async getNote(id){
  id = this.id;
  await this.api.getData("anime/note/?note=" + id,)
     .subscribe(res => {
       this.getnote     = res;
       this.n_episodes  = this.getnote.episodes_number;
       this.completed   = this.getnote.completed;
       this.option      = this.getnote.status.val;
       this.radioanime  = this.getnote.anime.id;
       this.score       = this.getnote.score;
     }, err => {
       console.log(err);
     });
}


public addNote(id){
  id = this.id;
  this.api.postData("anime/note/", { "id":id, "note":this.note})
    .subscribe(res => {
      this.postresponse = res;
      this.presentToast();
      
    }, err => {
      console.log(err);
    });
  }


  public addWatching(status){
    this.api.postData("anime/list/all/", {"status":status, "ep_number":this.n_episodes, "id":this.radioanime, 
    "completed":this.completed, "score":this.score})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
      }, err => {
        console.log(err);
      });
    }


  public changeMenuOptions(val){
    this.option = val;
  }
  
  public changeSelectOptions(){
    this.option = this.options;
    this.radioanime = this.getnote.anime.id;
  }


  public addEpisodeButton(){
    this.n_episodes = this.getnote.episodes_number + 1;
    
  }

  
}
