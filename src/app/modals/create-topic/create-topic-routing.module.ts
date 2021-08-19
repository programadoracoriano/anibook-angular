import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTopicPage } from './create-topic.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTopicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTopicPageRoutingModule {}
