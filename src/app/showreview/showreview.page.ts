import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-showreview',
  templateUrl: './showreview.page.html',
  styleUrls: ['./showreview.page.scss'],
})
export class ShowreviewPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));


  public review_id:any;
  public reviewdata:any;
  

  constructor(
    private actRoute: ActivatedRoute,
    public api: ApiService,
    private menu: MenuController,
    public language:LanguageService
  ) { 

    this.review_id = this.actRoute.snapshot.params.id;

  }

  ngOnInit() {
    this.getReviews();
  }

ionViewDidEnter()
{
  this.strings = this.language.setStrings();
}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

public getReviews(){
    this.api.getData("show/review/?id="+this.review_id)
     .subscribe(res => {
       this.reviewdata = res;
     }, err => {
       console.log(err);
     });
  }


 

}
