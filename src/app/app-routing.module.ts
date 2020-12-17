import { AccountMainComponent } from './modules/account/account-main/account-main.component';
import { ListMainComponent } from './modules/list/list-main/list-main.component';
import { FavouritesMainComponent } from './modules/favourites/favourites-main/favourites-main.component';
import { HomeMainComponent } from './modules/home/home-main/home-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: HomeMainComponent,
    children: []
  },
  {
    path: 'favourites',
    component: FavouritesMainComponent,
    children: []
  },
  {
    path: 'list',
    component: ListMainComponent,
    children: []
  },
  {
    path: 'account',
    component: AccountMainComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
