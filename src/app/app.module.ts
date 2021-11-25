import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { LoginguardService } from './services/loginguard.service';
import { ReverseloginService } from './services/reverselogin.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdmobService } from './services/admob.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
let l:string;

if(localStorage.getItem("lang") == 'pt'){
  l = 'pt-PT';
  registerLocaleData(localePt);
}
else if(localStorage.getItem("lang") == 'br'){
  l = 'pt-BR';
  registerLocaleData(localePt);
}
else if(localStorage.getItem("lang") == 'en'){
  l = 'en-us';
}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  LoginguardService,
ReverseloginService,
AdmobService,
{provide: LOCALE_ID,      useValue: l    } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
