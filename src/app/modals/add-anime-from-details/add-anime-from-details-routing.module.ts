import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnimeFromDetailsPage } from './add-anime-from-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnimeFromDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnimeFromDetailsPageRoutingModule {}
