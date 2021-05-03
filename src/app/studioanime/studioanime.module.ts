import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudioanimePageRoutingModule } from './studioanime-routing.module';

import { StudioanimePage } from './studioanime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudioanimePageRoutingModule
  ],
  declarations: [StudioanimePage]
})
export class StudioanimePageModule {}
