import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PluginListenerHandle, Plugins } from '@capacitor/core';
import { AdOptions, AdSize, AdPosition } from '@capacitor-community/admob';

const { AdMob } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  private bannerPosition: 'top' | 'bottom';
  public isPrepareBanner = false;
  private appMargin = 0;


private options: AdOptions = {
    adId: 'ca-app-pub-2428515290968728/5688669745',
    adSize: AdSize.SMART_BANNER,
    position: AdPosition.BOTTOM_CENTER,
    margin: 0,
     isTesting: true
    // npa: true
  };

  constructor(
    
  ) {

    }
    



    private eventOnAdSize: PluginListenerHandle;





    async ShowBanner(){
      await AdMob.showBanner(this.options);
      
      AdMob.addListener('onAdLoaded', (info: boolean) => {
        console.log(info);
      });

      AdMob.addListener('onAdSize', (info: boolean) => {
        console.log(info);
      });

    }

    async HideBanner(){
       await AdMob.hideBanner();
       
      
    }
    
  }

  

