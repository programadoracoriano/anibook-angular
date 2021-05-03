import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicsPageRoutingModule } from './topics-routing.module';

import { TopicsPage } from './topics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicsPageRoutingModule
  ],
  declarations: [TopicsPage]
})
export class TopicsPageModule {}
