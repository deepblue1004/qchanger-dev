import { QueueConfirmComponent } from './modules/queue/queue-confirm/queue-confirm.component';
import { AuthLoginComponent } from './modules/auth/auth-login/auth-login.component';
import { AccountMainComponent } from './modules/account/account-main/account-main.component';
import { FavouritesMainComponent } from './modules/favourites/favourites-main/favourites-main.component';
import { HomeMainComponent } from './modules/home/home-main/home-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderMainComponent } from './modules/order/order-main/order-main.component';
import { MerchantMainComponent } from './modules/merchant/merchant-main/merchant-main.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    // Page with footer
    path: '',
    children: [
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
      }
    ],
    component: MainLayoutComponent
  },
  // Page without footer
  {
    path: 'merchant/:id',
    component: MerchantMainComponent,
    children: []
  },
  {
    path: 'login/:redirectUrl',
    component: AuthLoginComponent,
    children: []
  },
  {
    path: 'login',
    component: AuthLoginComponent,
    children: []
  },
  {
    path: 'queue/:merchantId',
    component: QueueConfirmComponent,
    children: []
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
