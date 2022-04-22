import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginguardService } from "./services/loginguard.service";
import { ReverseloginService } from "./services/reverselogin.service";
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'modal-list',
    loadChildren: () => import('./modals/modal-list/modal-list.module').then( m => m.ModalListPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule),
    
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [ReverseloginService],
  },
  {
    path: 'animedetails/:id',
    loadChildren: () => import('./animedetails/animedetails.module').then( m => m.AnimedetailsPageModule),
  },
  {
    path: 'userdetails/:id',
    loadChildren: () => import('./userdetails/userdetails.module').then( m => m.UserdetailsPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'followerslist',
    loadChildren: () => import('./followerslist/followerslist.module').then( m => m.FollowerslistPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'followinglist',
    loadChildren: () => import('./followinglist/followinglist.module').then( m => m.FollowinglistPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'customlist',
    loadChildren: () => import('./customlist/customlist.module').then( m => m.CustomlistPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'publiccustomlist/:id',
    loadChildren: () => import('./publiccustomlist/publiccustomlist.module').then( m => m.PubliccustomlistPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'showcustomlist/:id',
    loadChildren: () => import('./showcustomlist/showcustomlist.module').then( m => m.ShowcustomlistPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'publiclist/:id',
    loadChildren: () => import('./publicanimelist/publicanimelist.module').then( m => m.PublicanimelistPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'searchuser',
    loadChildren: () => import('./searchuser/searchuser.module').then( m => m.SearchuserPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then( m => m.DatabasePageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'reviews/:id',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'showreview/:id',
    loadChildren: () => import('./showreview/showreview.module').then( m => m.ShowreviewPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'add-anime-list',
    loadChildren: () => import('./modals/add-anime-list/add-anime-list.module').then( m => m.AddAnimeListPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'review-modal',
    loadChildren: () => import('./modals/review-modal/review-modal.module').then( m => m.ReviewModalPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'create-custom-list',
    loadChildren: () => import('./modals/create-custom-list/create-custom-list.module').then( m => m.CreateCustomListPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'add-anime-custom-list',
    loadChildren: () => import('./modals/add-anime-custom-list/add-anime-custom-list.module').then( m => m.AddAnimeCustomListPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'myreviews',
    loadChildren: () => import('./myreviews/myreviews.module').then( m => m.MyreviewsPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'add-anime-from-details',
    loadChildren: () => import('./modals/add-anime-from-details/add-anime-from-details.module').then( m => m.AddAnimeFromDetailsPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'studioanime/:id',
    loadChildren: () => import('./studioanime/studioanime.module').then( m => m.StudioanimePageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'followerupdate',
    loadChildren: () => import('./followerupdate/followerupdate.module').then( m => m.FollowerupdatePageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'randomizer',
    loadChildren: () => import('./randomizer/randomizer.module').then( m => m.RandomizerPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'tos',
    loadChildren: () => import('./tos/tos.module').then( m => m.TosPageModule)
  },
  {
    path: 'userconfig',
    loadChildren: () => import('./modals/userconfig/userconfig.module').then( m => m.UserconfigPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'userpopover',
    loadChildren: () => import('./popover/userpopover/userpopover.module').then( m => m.UserpopoverPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'reportmodal',
    loadChildren: () => import('./modals/reportmodal/reportmodal.module').then( m => m.ReportmodalPageModule),
    canActivate: [LoginguardService],
  },

  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'listtab',
    loadChildren: () => import('./animelist/animelist.module').then( m => m.AnimelistPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'create-topic',
    loadChildren: () => import('./modals/create-topic/create-topic.module').then( m => m.CreateTopicPageModule)
  },
  {
    path: 'listoptionspopover',
    loadChildren: () => import('./popover/listoptionspopover/listoptionspopover.module').then( m => m.ListoptionspopoverPageModule),
    canActivate: [LoginguardService],
  },
  {
    path: 'lang',
    loadChildren: () => import('./lang/lang.module').then( m => m.LangPageModule)
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
