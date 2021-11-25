import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AdmobService } from './services/admob.service';
import { LanguageService } from './services/language.service';
import { AdMob } from '@capacitor-community/admob';
import { SplashScreen, StatusBar } from '@capacitor/core';
// Events (iOS only)
window.addEventListener('statusTap', function () {
  console.log("statusbar tapped");
});

//API





@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private eventOnAdSize;
  private appMargin = 0;
  public strings:any;
  public idi:string = this.language.detectLang(localStorage.getItem("lang"));
  constructor(
    private menu: MenuController,
    private admob: AdmobService,
    public language:LanguageService
  ) {
    AdMob.initialize();
    
    StatusBar.setBackgroundColor({
    color: "#7e57c2",
    });
    SplashScreen.show({
      showDuration: 2000,
      autoHide: true
    });

    this.eventOnAdSize = AdMob.addListener('onAdSize', (info: any) => {
      this.appMargin = parseInt(info.height, 10);
      if (this.appMargin > 0) {
        const app: HTMLElement = document.querySelector('ion-router-outlet');
        app.style.marginBottom = this.appMargin + 'px';
      }
    });
    
  }

  ngOnInit() :void{
    this.strings = this.language.setStrings();
    this.admob.ShowBanner();
  }

  closeFirst() {
    this.menu.enable(true, 'first');
    this.menu.close('first');
  }

  
}
