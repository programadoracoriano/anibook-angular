import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchuserPageRoutingModule } from './searchuser-routing.module';

import { SearchuserPage } from './searchuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchuserPageRoutingModule
  ],
  declarations: [SearchuserPage]
})
export class SearchuserPageModule {}
