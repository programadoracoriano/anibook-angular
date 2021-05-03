import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicanimelistPage } from './publicanimelist.page';

const routes: Routes = [
  {
    path: '',
    component: PublicanimelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicanimelistPageRoutingModule {}
