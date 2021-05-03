import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnimeFromDetailsPageRoutingModule } from './add-anime-from-details-routing.module';

import { AddAnimeFromDetailsPage } from './add-anime-from-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnimeFromDetailsPageRoutingModule
  ],
  declarations: [AddAnimeFromDetailsPage]
})
export class AddAnimeFromDetailsPageModule {}
