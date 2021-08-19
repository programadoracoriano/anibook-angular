import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToswarningService {

  constructor(
    public router: Router,
    public alertController: AlertController
  ) { }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning',
      subHeader: 'ToS and EULA',
      message: 'In order to use our app, you need to accept the EULA/ToS on the Terms and Conditions page!',
      buttons: ['ToS Page']
    });

    await alert.present();

    this.router.navigate(["/tos"]);
    
  }
}
