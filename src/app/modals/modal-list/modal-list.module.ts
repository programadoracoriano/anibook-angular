import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalListPageRoutingModule } from './modal-list-routing.module';

import { ModalListPage } from './modal-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalListPageRoutingModule
  ],
  declarations: [ModalListPage]
})
export class ModalListPageModule {}
