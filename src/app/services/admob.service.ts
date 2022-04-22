import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, BannerAdPluginEvents, AdMobBannerSize,
        AdOptions, AdLoadInfo, InterstitialAdPluginEvents } from '@capacitor-community/admob';
import { AddAnimeListPageModule } from '../modals/add-anime-list/add-anime-list.module';


@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  private bannerPosition: 'top' | 'bottom';
  public isPrepareBanner = false;
  private appMargin = 0;

  
    
    



  constructor(
    private platform:Platform
  ) {
      
    }



     async initialize(){
      const { status } = await AdMob.trackingAuthorizationStatus();
    
      if (status === 'notDetermined') {
        /**
         * If you want to explain TrackingAuthorization before showing the iOS dialog,
         * you can show the modal here.
         * ex)
         * const modal = await this.modalCtrl.create({
         *   component: RequestTrackingPage,
         * });
         * await modal.present();
         * await modal.onDidDismiss();  // Wait for close modal
         **/
      }
     
      AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
        initializeForTesting: true,
      });
    }
    
    private options: BannerAdOptions = {
      adId: 'ca-app-pub-2428515290968728/5688669745',
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false
      // npa: true
    };

    private iOSBanner: BannerAdOptions = {
      adId: 'ca-app-pub-2428515290968728/3472137038',
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false
    }
  
      private intOptions: AdOptions = {
      adId: 'ca-app-pub-2428515290968728/6461791400',
      // isTesting: true
      // npa: true
    }

    private iOSOptions: AdOptions ={
      adId: 'ca-app-pub-2428515290968728/2339681472',
      // isTesting: true
      // npa: true
    }


    async ShowBanner(){
      await this.platform.ready().then(() => {
        if(this.platform.is('android')){
           AdMob.showBanner(this.options);
          console.log("running in toilet!");
        }
        else if(this.platform.is('ios')){
          AdMob.showBanner(this.iOSBanner);
          console.log("running in iFode!");
        }
        else if (this.platform.is('mobileweb')) {
          console.log("running in a browser on mobile!");
      }
      else if (this.platform.is('desktop')) {
        console.log("running in desktop");
    }
      
    });
      
    }

    async HideBanner(){
       await AdMob.hideBanner();
       
      
    }

    async prepareInterstitial(){
      await this.platform.ready().then(() => {
        if(this.platform.is('android')){
           AdMob.prepareInterstitial(this.intOptions);
          console.log("running in toilet!");
        }
        else if(this.platform.is('ios')){
          AdMob.prepareInterstitial(this.iOSOptions);
          console.log("running in iFode!");
        }
        else if (this.platform.is('mobileweb')) {
          console.log("running in a browser on mobile!");
      }
      else if (this.platform.is('desktop')) {
        console.log("running in desktop");
    }
  });
    }


    async ShowInterstitial(){
      
      AdMob.showInterstitial();
    
    }

}

