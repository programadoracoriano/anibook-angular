import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowerslistPageRoutingModule } from './followerslist-routing.module';

import { FollowerslistPage } from './followerslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowerslistPageRoutingModule
  ],
  declarations: [FollowerslistPage]
})
export class FollowerslistPageModule {}
