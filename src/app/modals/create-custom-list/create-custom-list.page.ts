import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {  ToastController, ModalController} from '@ionic/angular';
@Component({
  selector: 'app-create-custom-list',
  templateUrl: './create-custom-list.page.html',
  styleUrls: ['./create-custom-list.page.scss'],
})
export class CreateCustomListPage implements OnInit {
  public search:string;
  public searchdata:any;
  public title:string;
  public main:any;
  public error:string;
  public postresponse:any;

  constructor(
    public api: ApiService,
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


   async searchData(){
    if(this.search.length >3){
     await this.api.getData("search/all/?search="+this.search)
       .subscribe(res => {
         
         this.searchdata = res;
       }, err => {
         console.log(err);
       });
      }
  }

  public createCustomList(){
    if (this.title == undefined || this.title == '')
    {
      this.error = "Insert a Title";
    }
    else{
      this.api.postData("customlist/", {"title":this.title, "main":this.main})
      .subscribe(res => {
        this.postresponse = res;
        this.presentToast();
      }, err => {
        console.log(err);
      });
      if (this.main !== undefined || this.title !== undefined){
        this.search = '';
        this.searchdata = undefined;
        this.title = '';
        this.modalController.dismiss({
          'dismissed': true
        });
      }
    }
    

  

  
}

}
