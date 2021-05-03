import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserconfigPage } from './userconfig.page';

const routes: Routes = [
  {
    path: '',
    component: UserconfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserconfigPageRoutingModule {}
