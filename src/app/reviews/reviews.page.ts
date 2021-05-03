import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MenuController, IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  anime_id:any;
  reviewdata:any;
  animedata:any;
  it = [];
  private readonly offset:number = 12;
  private index:number = 0;
  constructor(
    private actRoute: ActivatedRoute,
    public api: ApiService,
    private menu: MenuController,
  ) { 
    this.anime_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getReviews();
    this.getAnime();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async getReviews(){
    await this.api.getData("get/all/reviews/?id="+this.anime_id)
     .subscribe(res => {
       this.reviewdata = res;
       this.it = this.reviewdata.slice(this.index, this.offset + this.index)
     }, err => {
       console.log(err);
     });
  }


  async getAnime(){
    await this.api.getData("get/anime/details/?id=" + this.anime_id)
     .subscribe(res => {
       console.log(res);
       this.animedata = res;
     }, err => {
       console.log(err);
     });
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
    let s =  this.reviewdata.slice(this.index, this.offset + this.index)
  
    for(let i=0; i<s.length; i++){
      this.it.push(s[i]);
    }
  
  }

}
