import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangPageRoutingModule } from './lang-routing.module';

import { LangPage } from './lang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangPageRoutingModule
  ],
  declarations: [LangPage]
})
export class LangPageModule {}
