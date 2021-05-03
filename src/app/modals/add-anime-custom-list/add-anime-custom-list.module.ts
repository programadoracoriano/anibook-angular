import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnimeCustomListPageRoutingModule } from './add-anime-custom-list-routing.module';

import { AddAnimeCustomListPage } from './add-anime-custom-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnimeCustomListPageRoutingModule
  ],
  declarations: [AddAnimeCustomListPage]
})
export class AddAnimeCustomListPageModule {}
