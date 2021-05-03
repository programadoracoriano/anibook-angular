import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimedetailsPageRoutingModule } from './animedetails-routing.module';

import { AnimedetailsPage } from './animedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimedetailsPageRoutingModule
  ],
  declarations: [AnimedetailsPage]
})
export class AnimedetailsPageModule {}
