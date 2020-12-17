import { FavouritesMainComponent } from './modules/favourites/favourites-main/favourites-main.component';
import { HomeMainComponent } from './modules/home/home-main/home-main.component';
import { FooterComponent } from './layout/footer/footer.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
