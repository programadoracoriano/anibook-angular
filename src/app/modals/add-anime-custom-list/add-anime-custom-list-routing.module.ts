import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnimeCustomListPage } from './add-anime-custom-list.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnimeCustomListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnimeCustomListPageRoutingModule {}
