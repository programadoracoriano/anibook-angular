import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomlistPage } from './customlist.page';

const routes: Routes = [
  {
    path: '',
    component: CustomlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomlistPageRoutingModule {}
