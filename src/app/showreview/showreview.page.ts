import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-showreview',
  templateUrl: './showreview.page.html',
  styleUrls: ['./showreview.page.scss'],
})
export class ShowreviewPage implements OnInit {

  review_id:any;
  reviewdata:any;
  

  constructor(
    private actRoute: ActivatedRoute,
    public api: ApiService,
    private menu: MenuController,
  ) { 

    this.review_id = this.actRoute.snapshot.params.id;

  }

  ngOnInit() {
    this.getReviews();
  }

ionViewDidEnter()
{

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
