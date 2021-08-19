import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportmodalPage } from './reportmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ReportmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportmodalPageRoutingModule {}
