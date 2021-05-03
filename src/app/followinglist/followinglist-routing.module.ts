import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowinglistPage } from './followinglist.page';

const routes: Routes = [
  {
    path: '',
    component: FollowinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowinglistPageRoutingModule {}
