import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, MenuController, ModalController, 
  IonInfiniteScroll } from '@ionic/angular';
import { ApiService } from '../services/api.service';

import { ReviewModalPage } from '../modals/review-modal/review-modal.page';
import { ToswarningService } from '../services/toswarning.service';

@Component({
  selector: 'app-myreviews',
  templateUrl: './myreviews.page.html',
  styleUrls: ['./myreviews.page.scss'],
})
export class MyreviewsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public reviewdata:any;


  it = [];
  private readonly offset:number = 8;
  private index:number = 0;

  constructor(
    public api: ApiService,
    private menu: MenuController,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private toswarning:ToswarningService,
  ) { }

  ngOnInit() {
    
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //Entering the Page
  ionViewDidEnter(){
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
    this.getData();
    
  }



  async getData(){
    this.index = 0;
    await this.api.getData("get/my/reviews/")
     .subscribe(res => {
       this.reviewdata = res;
       this.it = this.reviewdata.slice(this.index, this.offset + this.index)
     }, err => {
       console.log(err);
     });
}


async reviewModal(id) {
  const modal = await this.modalController.create({
    component: ReviewModalPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'id': id,
    }
    
  });
  modal.onDidDismiss().then(mr => {
    this.getData();
    
  });;
  return await modal.present();
}


loadData(event) {
  setTimeout(() => {
    this.addItems();
    

    console.log('Done');
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    
  }, 1000);
}

addItems(){
  
  this.index += this.offset; 
  let s =  this.reviewdata.slice(this.index, this.offset + this.index)

  for(let i=0; i<s.length; i++){
    this.it.push(s[i]);
  }
}


async deleteReview(val){
  this.index = 0;
  await this.api.getData("delete/review/?id="+val )
      .subscribe(res => {
        this.reviewdata = res;
        this.it = this.reviewdata.slice(this.index, this.offset + this.index)
      }, err => {
        console.log(err);
      });
}
  

async alertDelete(val) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Are you sure you want to delete it?',
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Yes',
      role: 'destructive',
      icon: 'sad',
      handler: () => {
        this.deleteReview(val);
      }
    }, {
      text: 'No',
      icon: 'happy',
      handler: () => {
        
      } 
    }]
  });
  await actionSheet.present();
}


}
