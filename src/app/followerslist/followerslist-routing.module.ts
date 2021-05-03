import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowerslistPage } from './followerslist.page';

const routes: Routes = [
  {
    path: '',
    component: FollowerslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowerslistPageRoutingModule {}
