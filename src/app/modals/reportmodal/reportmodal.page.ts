import { Component, OnInit } from '@angular/core';
import {  ToastController, ModalController, MenuController} from '@ionic/angular';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-reportmodal',
  templateUrl: './reportmodal.page.html',
  styleUrls: ['./reportmodal.page.scss'],
})
export class ReportmodalPage implements OnInit {
  public pid:number;
  public type:any;
  public motives:any;
  public reportResponse:any;
  public motive:number;
  constructor(
    public api:ApiService,
    public modalController: ModalController,
    public toastController:ToastController,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.getReportMotive();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.reportResponse.msg,
      duration: 3000
    });
    toast.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  async getReportMotive(){
    await this.api.getData("get/report/motive/")
     .subscribe(res => {
       console.log(res);
       this.motives = res;
       
     }, err => {
       console.log(err);
     });
  }




  async reportButton(){
    
    await this.api.getData("report/content/?motive=" + this.motive + "&type=" + this.type + "&pid=" + this.pid )
     .subscribe(res => {
       console.log(res);
       this.reportResponse = res;   
       this.presentToast();  
       this.dismiss();
     }, err => {
       console.log(err);
     });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
