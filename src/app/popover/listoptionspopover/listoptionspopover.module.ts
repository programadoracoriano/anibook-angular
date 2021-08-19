import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListoptionspopoverPageRoutingModule } from './listoptionspopover-routing.module';

import { ListoptionspopoverPage } from './listoptionspopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListoptionspopoverPageRoutingModule
  ],
  declarations: [ListoptionspopoverPage]
})
export class ListoptionspopoverPageModule {}
