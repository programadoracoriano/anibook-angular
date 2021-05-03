import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudioanimePage } from './studioanime.page';

const routes: Routes = [
  {
    path: '',
    component: StudioanimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudioanimePageRoutingModule {}
