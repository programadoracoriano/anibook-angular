import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowerupdatePage } from './followerupdate.page';

const routes: Routes = [
  {
    path: '',
    component: FollowerupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowerupdatePageRoutingModule {}
