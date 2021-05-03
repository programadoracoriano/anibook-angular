import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowinglistPageRoutingModule } from './followinglist-routing.module';

import { FollowinglistPage } from './followinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowinglistPageRoutingModule
  ],
  declarations: [FollowinglistPage]
})
export class FollowinglistPageModule {}
