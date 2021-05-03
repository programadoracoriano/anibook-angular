import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubliccustomlistPage } from './publiccustomlist.page';

const routes: Routes = [
  {
    path: '',
    component: PubliccustomlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubliccustomlistPageRoutingModule {}
