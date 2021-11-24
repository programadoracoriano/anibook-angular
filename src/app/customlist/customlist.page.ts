import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActionSheetController, MenuController, ModalController, AlertController } from '@ionic/angular';

import { CreateCustomListPage } from '../modals/create-custom-list/create-custom-list.page';
import { ToswarningService } from '../services/toswarning.service';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-customlist',
  templateUrl: './customlist.page.html',
  styleUrls: ['./customlist.page.scss'],
})
export class CustomlistPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public mine:boolean = false;
  public nse:any;
  public listdata:any;

  it = [];
  public search:any;
  private readonly offset:number = 12;
  private index:number = 0;

  constructor(
    public api: ApiService,
    private menu: MenuController,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    public alertController: AlertController,
    private toswarning:ToswarningService,
    public language:LanguageService
  ) { }

  ngOnInit() {
  }
  
  segmentChanged(ev: any) {
  }

  ionViewDidEnter(){
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
    this.publicList();
    this.strings = this.language.setStrings();
  }
  

  ionViewWillLeave(){
    
  }

  async helpAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Help - Custom Lists',
      subHeader: 'Help Popup',
      message: 'This section of the app serves for you to create your own custom list.' 
      + 'For example, you can create a list with your favorite romance anime or action anime. Or you can create the worst anime ever,'
      +'This lists are public and was meant to be shared with the community, be mindful of your words.',
      buttons: ['Thanks']
    });

    await alert.present();
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


async customListData(){
  this.mine = true;
  this.index = 0;
  await this.api.getData("customlist/")
    .subscribe(res => {
      this.listdata = res;
      this.it = this.listdata.slice(this.index, this.offset + this.index)
    }, err => {
      console.log(err);
    });
}



async publicList(){
  this.mine = false;
  this.index = 0;
  await this.api.getData("get/public/customlist/?status=0")
    .subscribe(res => {
      this.listdata = res;
      this.it = this.listdata.slice(this.index, this.offset + this.index)
    }, err => {
      console.log(err);
    });
  }


async createListModal() {
  const modal = await this.modalController.create({
    component: CreateCustomListPage,
    cssClass: 'my-custom-class',
    componentProps: {
      
    }
    
  });
  modal.onDidDismiss().then(mr => {
    this.customListData();
  });;
  return await modal.present();
}



async deleteData(id){
  await this.api.getData("delete/customlist/?id="+id)
    .subscribe(res => {
      
      this.listdata = res;
    }, err => {
      console.log(err);
    });
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
  let s =  this.listdata.slice(this.index, this.offset + this.index)

  for(let i=0; i<s.length; i++){
    this.it.push(s[i]);
  }
}
  

  



  async alertDelete(val) {
    const alert = await this.alertController.create({
      header: this.strings.deleteMsg,
      cssClass: 'my-custom-class',
      buttons: [{
        text: this.strings.yesText,
        role: 'destructive',
        handler: () => {
          this.deleteData(val);
        }
      }, {
        text: this.strings.noText,
        handler: () => {
          
        } 
      }]
    });
    await alert.present();
  }

}
