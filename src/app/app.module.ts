import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  LoginguardService,
ReverseloginService,
AdmobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
