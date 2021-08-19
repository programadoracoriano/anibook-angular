import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService, mediaUrl } from '../services/api.service';
import { Router } from '@angular/router';
import { MenuController, ModalController, ActionSheetController,
   IonInfiniteScroll, PopoverController } from '@ionic/angular';
import { AddAnimeListPage } from '../modals/add-anime-list/add-anime-list.page';
import { ToswarningService } from '../services/toswarning.service';
import { ListoptionspopoverPage } from '../popover/listoptionspopover/listoptionspopover.page';


var theme = localStorage.getItem("theme");

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
  public note:any;
  public tstate:any = 0;
  public quickop:string;
  public it = [];
  public search:any;
  private readonly offset:number = 12;
  private index:number = 0;

  constructor(
    public api: ApiService,
    private elementRef: ElementRef,
    public router: Router,
    private menu: MenuController,
    private toswarning:ToswarningService,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
    
    this.animeList(0);
    
  }

  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }
  
  ionViewDidEnter(){
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
    this.addstatus = false;
  }

  



  


  async addAnimeModal() {
    
    const modal = await this.modalController.create({
      component: AddAnimeListPage,
      cssClass: 'my-custom-class',
      componentProps: {
        
      }
      
    });
    modal.onDidDismiss().then(mr => {
      
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
  





async animePopover(event:any, val) {
  const popover = await this.popoverController.create({
    component: ListoptionspopoverPage,
    cssClass: 'custom-popover',
    event,
    translucent: true,
    animated: true,
    componentProps: {
      'id':val
    }
  });
  popover.onDidDismiss().then(mr => {
    this.animeList(0);
  });;
  return await popover.present();

  

  }
  
}


