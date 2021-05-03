import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchuserPage } from './searchuser.page';

const routes: Routes = [
  {
    path: '',
    component: SearchuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchuserPageRoutingModule {}
