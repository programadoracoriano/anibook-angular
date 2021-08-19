import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportmodalPageRoutingModule } from './reportmodal-routing.module';

import { ReportmodalPage } from './reportmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportmodalPageRoutingModule
  ],
  declarations: [ReportmodalPage]
})
export class ReportmodalPageModule {}
