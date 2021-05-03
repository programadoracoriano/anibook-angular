import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowerupdatePageRoutingModule } from './followerupdate-routing.module';

import { FollowerupdatePage } from './followerupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowerupdatePageRoutingModule
  ],
  declarations: [FollowerupdatePage]
})
export class FollowerupdatePageModule {}
