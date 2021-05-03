import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCustomListPage } from './create-custom-list.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCustomListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCustomListPageRoutingModule {}
