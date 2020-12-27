import {AccountMainComponent} from './modules/account/account-main/account-main.component';
import {FavouritesMainComponent} from './modules/favourites/favourites-main/favourites-main.component';
import {HomeMainComponent} from './modules/home/home-main/home-main.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrderMainComponent} from './modules/order/order-main/order-main.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeMainComponent,
    children: [],
    data: {
      animation: 'HomePage'
    }
  },
  {
    path: 'favourites',
    component: FavouritesMainComponent,
    children: [],
    data: {
      animation: 'FavPage'
    }
  },
  {
    path: 'order',
    component: OrderMainComponent,
    children: [],
    data: {
      animation: 'OrderPage'
    }
  },
  {
    path: 'account',
    component: AccountMainComponent,
    children: [],
    data: {
      animation: 'AccountPage'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',         // 404 page
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
