import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PluginListenerHandle, Plugins } from '@capacitor/core';
import { AdOptions, AdSize, AdPosition } from '@capacitor-community/admob';
import { AddAnimeListPageModule } from '../modals/add-anime-list/add-anime-list.module';

const { AdMob } = Plugins;
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
    
    private options: AdOptions = {
      adId: 'ca-app-pub-2428515290968728/5688669745',
      adSize: AdSize.BANNER,
      position: AdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false
      // npa: true
    };

    private iOSBanner: AdOptions = {
      adId: 'ca-app-pub-2428515290968728/3472137038',
      adSize: AdSize.BANNER,
      position: AdPosition.BOTTOM_CENTER,
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


    private eventOnAdSize: PluginListenerHandle;


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

    async ShowInterstitial(){
      await this.platform.ready().then(() => {
      if(this.platform.is('android')){
         AdMob.prepareInterstitial(this.intOptions);
         AdMob.showInterstitial();
        console.log("running in toilet!");
      }
      else if(this.platform.is('ios')){
        AdMob.prepareInterstitial(this.iOSOptions);
         AdMob.showInterstitial();
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

}

