import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangPage } from './lang.page';

const routes: Routes = [
  {
    path: '',
    component: LangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangPageRoutingModule {}
