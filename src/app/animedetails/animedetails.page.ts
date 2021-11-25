import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MenuController, ToastController, ModalController} from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AddAnimeFromDetailsPage } from '../modals/add-anime-from-details/add-anime-from-details.page';
import { ReviewModalPage } from '../modals/review-modal/review-modal.page';
import { ReportmodalPage } from '../modals/reportmodal/reportmodal.page';
import { ToswarningService } from '../services/toswarning.service';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-animedetails',
  templateUrl: './animedetails.page.html',
  styleUrls: ['./animedetails.page.scss'],
})
export class AnimedetailsPage implements OnInit {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));

  public animeScore:any;
  public anime_id: string;
  public animedata: any;
  public extra:any;
  public h_synopsis:boolean = false;
  public animescore:any;
  public segment:number = 0;
  public status:any;
  public score:number;
  public postresponse:any;
  public getstatus:any;
  public reviewres:any;
  public review:string;
  public youtube_url:string = "https://www.youtube.com/embed/";
  public vid_id:any;
  public testing:any;
  public cover:any;
  scoreArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(
    private actRoute: ActivatedRoute,
    public api: ApiService,
    private menu: MenuController,
    public toastController: ToastController,
    private toswarning:ToswarningService,
    private sanitizer: DomSanitizer,
    public modalController: ModalController,
    public language:LanguageService
  ) {
    this.anime_id = this.actRoute.snapshot.params.id;
   }

  ngOnInit() {
    //this.admob.ShowInterstitial();
    this.getAnime();
    this.getScore();
    this.getReviews();
    this.getStatus();
    this.getExtra();
  }

  ionViewDidEnter(){
    if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
      this.toswarning.presentAlert();
    }
    this.strings = this.language.setStrings();
  }
  
  


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  
  segmentChanged(ev: any) {
  }

  public getScore(){
    this.api.getData("get/anime/score/?id=" + this.anime_id,)
     .subscribe(res => {
       this.animescore = res;
       this.animeScore = this.animescore.total_score.toFixed(0);
     }, err => {
       console.log(err);
     });
}

  async getAnime(){
     await this.api.getData("get/anime/details/?id=" + this.anime_id,)
      .subscribe(res => {
        this.animedata = res;
        this.vid_id = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube_url + this.animedata.trailer);
        
        if (this.animedata.cover_image_url == null || this.animedata.cover_image_url == undefined){
          this.cover = this.animedata.image_url;
        }
        else{
          this.cover = this.animedata.cover_image_url;
        }
      }, err => {
        console.log(err);
      });
}


async getExtra(){
  await this.api.getData("get/anime/extra/?id=" + this.anime_id,)
   .subscribe(res => {
     this.extra = res;
     
     
   }, err => {
     console.log(err);
   });
}


async getReviews(){
  await this.api.getData("get/reviews/?id=" + this.anime_id,)
   .subscribe(res => {
     this.reviewres = res.slice(0, 4);
     
   }, err => {
     console.log(err);
   });
}

async reportModal(pid) {
  const modal = await this.modalController.create({
    component: ReportmodalPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'pid': pid,
      'type': 'review',

    }
    
  });
  modal.onDidDismiss().then(mr => {
    
  });;
  return await modal.present();
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
      this.getAnime();
      this.getScore();
      this.getReviews();
      
    });;
    return await modal.present();
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
      this.getAnime();
      this.getScore();
      this.getReviews();
      
    });;
    return await modal.present();
  }


async getStatus(){
  await this.api.getData("get/anime/status/?id=" + this.anime_id,)
   .subscribe(res => {
     console.log(res);
     this.getstatus = res;
     
   }, err => {
     console.log(err);
   });
}



public ShowHideSynopsis(){
  this.h_synopsis = !this.h_synopsis;
}

public clickSegment(val){
  this.segment = val;
}

}
