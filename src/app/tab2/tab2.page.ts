import { Component, ViewChild } from '@angular/core';
import { ApiService, mediaUrl } from '../services/api.service';
import { MenuController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AddAnimeFromDetailsPage } from '../modals/add-anime-from-details/add-anime-from-details.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public searchdata:any;
  public search:string;
  public season:any = "spring";
  public isSearching:boolean = false;
  public searchType:number;
  public animeSearch:number;
  public year:number = 2021;
  public page:number = 19;
  public options:boolean = false;
  public getgenres:any;
  public genre:number;
  public title:string;
  public searchtype:any;
  it = [];
  private readonly offset:number = 8;
  private index:number = 0;

  constructor(
    public api: ApiService,
    private menu: MenuController,
    public modalController: ModalController,
  ) {}

  MediaUrl = mediaUrl;

  ngOnInit(){
    
  }

  ionViewWillEnter(){
    this.getGenres();
    this.searchBySeason();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  openSearchMenu() {
    this.menu.enable(true, 'searchMenu');
    this.menu.open('searchMenu');
  }


  async getGenres(){
    await this.api.getData("get/genres/")
     .subscribe(res => {
       this.getgenres = res;
       
     }, err => {
       console.log(err);
     });
  }

  async searchByGenre(){
    
    this.index = 0;
    this.year = undefined;
    this.season = undefined;
    this.title = "Search By Genre";
  await  this.api.getData("search/by/genre/?genre=" + this.genre)
     .subscribe(res => {
       this.searchdata = res;
       this.it = this.searchdata.slice(this.index, this.offset + this.index)
        
      
     }, err => {
       console.log(err);
     });

     this.menu.close('searchMenu');
  }


   async searchData(){
    
    this.index = 0;
    this.year = undefined;
    this.season = undefined;
    this.title = "Search By Name";
    if(this.search.length >3){
    await this.api.getData("search/all/?search=" + this.search )
     .subscribe(res => {
       this.searchdata = res;
       this.it = this.searchdata.slice(this.index, this.offset + this.index)
     }, err => {
       console.log(err);
     });
    }
    else if(this.search.length < 3 || this.search == undefined || this.search == ''){
      this.searchBySeason();
    }

}



async searchBySeason(){
  
  this.index = 0;
  this.title = "Search By Season";
  await this.api.getData("search/by/season/?season=" + this.season + "&year=" + this.year)
   .subscribe(res => {
     this.searchdata = res;
     this.it = this.searchdata.slice(this.index, this.offset + this.index)
   }, err => {
     console.log(err);
   });
   this.menu.close('searchMenu');
}



public changeOptions(){
  this.options = !this.options;
}




public changeAnimeSearch(status){
 this.animeSearch = status;
}




loadData(event) {
  setTimeout(() => {
    this.addItems();
    

    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    
  }, 1000);
}

addItems(){
  
  this.index += this.offset; 
  let s =  this.searchdata.slice(this.index, this.offset + this.index)

  for(let i=0; i<s.length; i++){
    this.it.push(s[i]);
  }

}


toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}



async presentModal(id) {
  
  const modal = await this.modalController.create({
    component: AddAnimeFromDetailsPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'id': id,
    }
    
  });
  modal.onDidDismiss().then(mr => {
    
  });;
  return await modal.present();
}

}
