import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCustomListPageRoutingModule } from './create-custom-list-routing.module';

import { CreateCustomListPage } from './create-custom-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCustomListPageRoutingModule
  ],
  declarations: [CreateCustomListPage]
})
export class CreateCustomListPageModule {}
