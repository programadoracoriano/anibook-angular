import { Component } from '@angular/core';
import { ApiService, mediaUrl } from '../services/api.service';
import {LoginguardService} from '../services/loginguard.service';
import { Router } from '@angular/router';
import { MenuController, ModalController, ToastController } from '@ionic/angular';
import { AuthguardService } from '../services/authguard.service';
import { ActionSheetController } from '@ionic/angular';

import { UserconfigPage } from '../modals/userconfig/userconfig.page';
import { ToswarningService } from '../services/toswarning.service';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));
  public checkUser:any = localStorage.getItem("token");
  public r_logout:any;
  public profiledata:any;
  public userdata:any;
  public totaldays:any;
  public image:File;
  public postresponse:any;
  public avatarresponse:any;
  public editstatus:boolean = false;
  public avatarradio:any;
  public base64Image:any;
  public uploadresponse:any;
  public theme:string;

  constructor(
    public guard: LoginguardService,
    public api: ApiService,
    public router: Router,
    private menu: MenuController,
    public toastController: ToastController,
    public checkuser: AuthguardService,
    public actionSheetController: ActionSheetController,
    private toswarning:ToswarningService,
    public modalController: ModalController,
    public language:LanguageService
  ) {}

  
  
    ngOnInit(){
      
     
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: this.postresponse.msg,
        duration: 3000
      });
      toast.present();
    }

    
  
    

  ionViewDidEnter(){
    
      if (localStorage.getItem("tos") == "d" || localStorage.getItem("tos") == undefined){
        this.toswarning.presentAlert();
      }
      
    if (localStorage.getItem("token") == ''){
      this.router.navigate(['/login']);
    }
    this.strings = this.language.setStrings();
    this.getProfile();
    this.getUserData();
    this.getAvatar();
    this.detectTheme();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  changeStatus(){
    this.editstatus = !this.editstatus;
    
  }

  openCfg() {
    this.menu.enable(true, 'config');
    this.menu.open('config');
  }
  
  

  async getAvatar() {
    await this.api.getData("get/default/avatar/",)
    .subscribe(res => {
      this.avatarresponse = res;
    }, err => {
      console.log(err);
    });
  }

  public updateAvatar(id){
    this.api.postData("get/default/avatar/", {"avatar":id})
      .subscribe(res => {
        
        this.postresponse = res;
        this.presentToast();
      }, err => {
        console.log(err);
      });
    }

  async getProfile() {
    await this.api.getData("get/profile/",)
    .subscribe(res => {
      this.profiledata = res;
    }, err => {
      console.log(err);
    });
  }

   async getUserData() {
    await this.api.getData("get/user/data/",)
    .subscribe(res => {
      this.userdata = res;
      this.totaldays =  (this.userdata.total_completed + this.userdata.total_hours) / 1440  
    }, err => {
      console.log(err);
    });
  }

  

  logout() {
    this.api.getData("logout/",)
    .subscribe(res => {
      this.r_logout = res;
      
        localStorage.removeItem("token");
        this.checkuser.loginGuard();
        this.router.navigate(['/tab1']);
      
    }, err => {
      console.log(err);
    });
    this.menu.enable(true, 'first');
    this.menu.close('first');
  }



  async alertChangeImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Change Profile Image',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
          
        }
      }, {
        text: 'Gallery',
        icon: 'image',
        handler: () => {
          
        } 
      }]
    });
    await actionSheet.present();
  }



 

  


  async presentModal() {
    
    const modal = await this.modalController.create({
      component: UserconfigPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id': '',
      }
      
    });
    modal.onDidDismiss().then(mr => {
      this.getProfile();
      
    });;
    return await modal.present();
  }


  /*public uploadImage(){
    this.nativeHttp.post("https://api.anibook.app/upload/profile/image/", {"image": this.base64Image}, {'enctype': 'multipart/form-data;','Content-Type': 'application/json', 'Authorization':'Token ' + localStorage.getItem("token")})
      .then(
        res => this.postresponse = JSON.parse(res.data),
        this.base64Image = undefined
        
        
      )
      .catch(
        err => this.postresponse = err
        
      )
      console.log(this.postresponse);
      this.base64Image = undefined;

      setTimeout(this.getProfile,3000);
      
  }*/

 

  

  public discardImage(){
    this.base64Image = undefined;
  }
  

  public changeTheme(){
    if (localStorage.getItem("theme") == undefined 
    || localStorage.getItem("theme") == '' || localStorage.getItem("theme") == 'light'){
      this.theme = "dark";
      localStorage.setItem("theme", "dark");
    }
    else{
      localStorage.setItem("theme", "light");
      this.theme = "light";
    }
  }

  public detectTheme(){
    if (localStorage.getItem("theme") == undefined 
    || localStorage.getItem("theme") == '' || localStorage.getItem("theme") == 'light'){
      this.theme = "light";
    }
    else{
      
      this.theme = "dark";
    }
  }



}
