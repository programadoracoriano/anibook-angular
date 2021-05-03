import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, MenuController, ModalController, 
  IonInfiniteScroll } from '@ionic/angular';
import { AddAnimeCustomListPage } from '../modals/add-anime-custom-list/add-anime-custom-list.page';
import { AdmobService } from '../services/admob.service';
@Component({
  selector: 'app-showcustomlist',
  templateUrl: './showcustomlist.page.html',
  styleUrls: ['./showcustomlist.page.scss'],
})
export class ShowcustomlistPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  list_id: string;
  getdata:any;
  creating:boolean = false;
  searchdata:any;
  search:any;
  postresponse:any;
  main:any;
  u_custom:any;


  it = [];
  private readonly offset:number = 8;
  private index:number = 0;

  constructor(
    public api: ApiService,
    private actRoute: ActivatedRoute,
    private menu: MenuController,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private admobService: AdmobService,
  ) { 
    this.list_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //Entering the Page
  ionViewDidEnter(){
    
    this.getData();
    this.uniqueCustomData();
  }


  



  async addAnimeModal(id) {
    
    const modal = await this.modalController.create({
      component: AddAnimeCustomListPage,
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


  async uniqueCustomData(){
    await this.api.getData("get/unique/customlist/?id="+this.list_id)
      .subscribe(res => {
        this.u_custom = res;
      }, err => {
        console.log(err);
      });
  }

  async getData(){
    this.index = 0;
    await this.api.getData("anime/customlist/?id=" + this.list_id,)
     .subscribe(res => {
       this.getdata = res;
       this.it = this.getdata.slice(this.index, this.offset + this.index)
     }, err => {
       console.log(err);
     });
}


async deleteData(anime){
  this.index = 0;
  await this.api.getData("delete/anime/customlist/?id=" + this.u_custom.id + "&anime=" + anime)
    .subscribe(res => {
      this.getdata = res;
      this.it = this.getdata.slice(this.index, this.offset + this.index)
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
        this.deleteData(val);
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
  let s =  this.getdata.slice(this.index, this.offset + this.index)

  for(let i=0; i<s.length; i++){
    this.it.push(s[i]);
  }
}

}
