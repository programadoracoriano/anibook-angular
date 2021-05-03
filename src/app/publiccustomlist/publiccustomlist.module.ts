import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubliccustomlistPageRoutingModule } from './publiccustomlist-routing.module';

import { PubliccustomlistPage } from './publiccustomlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubliccustomlistPageRoutingModule
  ],
  declarations: [PubliccustomlistPage]
})
export class PubliccustomlistPageModule {}
