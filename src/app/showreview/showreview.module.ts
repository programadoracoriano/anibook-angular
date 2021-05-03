import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowreviewPageRoutingModule } from './showreview-routing.module';

import { ShowreviewPage } from './showreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowreviewPageRoutingModule
  ],
  declarations: [ShowreviewPage]
})
export class ShowreviewPageModule {}
