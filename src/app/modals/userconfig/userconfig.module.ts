import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserconfigPageRoutingModule } from './userconfig-routing.module';

import { UserconfigPage } from './userconfig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserconfigPageRoutingModule
  ],
  declarations: [UserconfigPage]
})
export class UserconfigPageModule {}
