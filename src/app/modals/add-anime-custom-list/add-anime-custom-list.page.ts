import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastController, ModalController} from '@ionic/angular';
@Component({
  selector: 'app-add-anime-custom-list',
  templateUrl: './add-anime-custom-list.page.html',
  styleUrls: ['./add-anime-custom-list.page.scss'],
})
export class AddAnimeCustomListPage implements OnInit {
  public search:string;
  public searchdata:any;
  public postresponse:any;
  public id:number;
  public main:any;
  public u_custom:any;
  constructor(
    public api: ApiService,
    public modalController: ModalController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.uniqueCustomData();
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

   async searchData(){
    if( this.search.length > 3 ){
     await this.api.getData("search/all/?search="+this.search)
      .subscribe(res => {
        this.searchdata = res;
      }, err => {
        console.log(err);
      });
    }
  }

  public createAnimeCustomList(){
          
    this.api.postData("anime/customlist/", {"id":this.id, "anime":this.main})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
      }, err => {
        console.log(err);
      });
      this.main       = undefined;
      this.search     = undefined;
      this.searchdata = undefined;
  
  }

  async uniqueCustomData(){
    await this.api.getData("get/unique/customlist/?id="+this.id)
      .subscribe(res => {
        this.u_custom = res;
      }, err => {
        console.log(err);
      });
  }

}
