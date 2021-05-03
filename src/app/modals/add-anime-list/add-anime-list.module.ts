import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnimeListPageRoutingModule } from './add-anime-list-routing.module';

import { AddAnimeListPage } from './add-anime-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnimeListPageRoutingModule
  ],
  declarations: [AddAnimeListPage]
})
export class AddAnimeListPageModule {}
