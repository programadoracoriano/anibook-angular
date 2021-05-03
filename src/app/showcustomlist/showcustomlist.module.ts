import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcustomlistPageRoutingModule } from './showcustomlist-routing.module';

import { ShowcustomlistPage } from './showcustomlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcustomlistPageRoutingModule
  ],
  declarations: [ShowcustomlistPage]
})
export class ShowcustomlistPageModule {}
