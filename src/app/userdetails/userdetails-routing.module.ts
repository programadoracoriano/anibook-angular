import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdetailsPage } from './userdetails.page';

const routes: Routes = [
  {
    path: '',
    component: UserdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdetailsPageRoutingModule {}
