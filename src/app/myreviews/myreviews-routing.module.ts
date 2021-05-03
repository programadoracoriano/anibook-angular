import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyreviewsPage } from './myreviews.page';

const routes: Routes = [
  {
    path: '',
    component: MyreviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyreviewsPageRoutingModule {}
