import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTopicPageRoutingModule } from './create-topic-routing.module';

import { CreateTopicPage } from './create-topic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTopicPageRoutingModule
  ],
  declarations: [CreateTopicPage]
})
export class CreateTopicPageModule {}
