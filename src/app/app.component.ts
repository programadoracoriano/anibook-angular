import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {AdmobService } from './services/admob.service';

// Events (iOS only)
window.addEventListener('statusTap', function () {
  console.log("statusbar tapped");
});

//API
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';

const { AdMob } = Plugins;
const { StatusBar } = Plugins;
const { SplashScreen } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private eventOnAdSize;
  private appMargin = 0;
  constructor(
    private menu: MenuController,
    private admob: AdmobService,
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
    
    this.admob.ShowBanner();
    this.admob.ShowBanner();
  }

  closeFirst() {
    this.menu.enable(true, 'first');
    this.menu.close('first');
  }

  
}
