import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowreviewPage } from './showreview.page';

const routes: Routes = [
  {
    path: '',
    component: ShowreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowreviewPageRoutingModule {}
