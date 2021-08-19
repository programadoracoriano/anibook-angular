import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserpopoverPageRoutingModule } from './userpopover-routing.module';

import { UserpopoverPage } from './userpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserpopoverPageRoutingModule
  ],
  declarations: [UserpopoverPage]
})
export class UserpopoverPageModule {}
