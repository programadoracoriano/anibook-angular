import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomlistPageRoutingModule } from './customlist-routing.module';

import { CustomlistPage } from './customlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomlistPageRoutingModule
  ],
  declarations: [CustomlistPage]
})
export class CustomlistPageModule {}
