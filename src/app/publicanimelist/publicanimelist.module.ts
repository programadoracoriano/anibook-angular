import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicanimelistPageRoutingModule } from './publicanimelist-routing.module';

import { PublicanimelistPage } from './publicanimelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicanimelistPageRoutingModule
  ],
  declarations: [PublicanimelistPage]
})
export class PublicanimelistPageModule {}
