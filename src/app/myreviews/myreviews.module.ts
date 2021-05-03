import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyreviewsPageRoutingModule } from './myreviews-routing.module';

import { MyreviewsPage } from './myreviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyreviewsPageRoutingModule
  ],
  declarations: [MyreviewsPage]
})
export class MyreviewsPageModule {}
