import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
// Events (iOS only)
window.addEventListener('statusTap', function () {
  console.log("statusbar tapped");
});

//API
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';

const { StatusBar } = Plugins;
const { SplashScreen } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menu: MenuController,
  ) {
    StatusBar.setBackgroundColor({
    color: "#7e57c2",
    });
    SplashScreen.show({
      showDuration: 2000,
      autoHide: true
    });
  }

  closeFirst() {
    this.menu.enable(true, 'first');
    this.menu.close('first');
  }
}
