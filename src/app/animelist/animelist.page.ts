import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService, mediaUrl } from '../services/api.service';
import { Router } from '@angular/router';
import { MenuController, ModalController, ActionSheetController,
   IonInfiniteScroll } from '@ionic/angular';


import { ModalListPage } from '../modals/modal-list/modal-list.page';
import { AddAnimeListPage } from '../modals/add-anime-list/add-anime-list.page';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-animelist',
  templateUrl: './animelist.page.html',
  styleUrls: ['./animelist.page.scss'],
})
export class AnimelistPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public animedata:any;
  public addstatus:boolean = false;
  public postresponse:any;
  public order:any = "-score";
  public popup:any;
  public getnote:any;
  note:any;
  option:any;
  options:any;
  tstate:any = 0;
  quickop:string;
  it = [];
  public search:any;
  private readonly offset:number = 12;
  private index:number = 0;

  constructor(
    public api: ApiService,
    private elementRef: ElementRef,
    public router: Router,
    private menu: MenuController,
    private admobService: AdmobService,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
    
    this.animeList(0);
  }

  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }
  
  ionViewDidEnter(){
    this.admobService.ShowBanner();
    this.addstatus = false;
  }

  ionViewWillLeave(){
    this.admobService.HideBanner();
  }



  async presentModal(id) {
    this.admobService.HideBanner();
    const modal = await this.modalController.create({
      component: ModalListPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id': id,
      }
      
    });
    modal.onDidDismiss().then(mr => {
      this.animeList(0);
      this.admobService.ShowBanner();
    });;
    return await modal.present();
  }


  async addAnimeModal() {
    this.admobService.HideBanner();
    const modal = await this.modalController.create({
      component: AddAnimeListPage,
      cssClass: 'my-custom-class',
      componentProps: {
        
      }
      
    });
    modal.onDidDismiss().then(mr => {
      this.admobService.ShowBanner();
      this.animeList(0);
    });;
    return await modal.present();
  }






  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  async animeSearch(){
    this.index = 0;
    this.tstate = status;
    if(this.search.length >3){
    await this.api.getData("search/anime/list/?search=" + this.search )
      .subscribe(res => {
        this.animedata = res;
        this.it = this.animedata.slice(this.index, this.offset + this.index)
      }, err => {
        console.log(err);
      });
    }
  }
  

  async animeList(status){
    this.index = 0;
    this.tstate = status;
    await this.api.getData("anime/list/all/?status=" + this.tstate + "&order=" + this.order)
      .subscribe(res => {
        this.animedata = res;
        this.it = this.animedata.slice(this.index, this.offset + this.index)
      }, err => {
        console.log(err);
      });
  }

  segmentChanged(ev: any) {
  }



async deleteAnime(val){
  this.index = 0;
  await this.api.getData("delete/anime/list/?id="+val + '&status=0')
      .subscribe(res => {
        this.animedata = res;
        this.it = this.animedata.slice(this.index, this.offset + this.index)
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
        this.deleteAnime(val);
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
  let s =  this.animedata.slice(this.index, this.offset + this.index)

  for(let i=0; i<s.length; i++){
    this.it.push(s[i]);
  }

}
  


public changeQuickOp(val){
  this.quickop = "op" + val;
}

public resetQuickOp(){
  this.quickop = undefined;
}

}
