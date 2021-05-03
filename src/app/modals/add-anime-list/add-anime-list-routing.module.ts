import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnimeListPage } from './add-anime-list.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnimeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnimeListPageRoutingModule {}
