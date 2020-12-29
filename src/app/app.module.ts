// Angular Modules
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {environment} from 'environments/environment';

// Third Party Module
import {OnsenModule} from 'ngx-onsenui';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

// Application Modules
import {AppRoutingModule} from './app-routing.module';

// Declarations
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {HomeModule} from './modules/home/home.module';
import {FavouritesModule} from './modules/favourites/favourites.module';
import {AccountModule} from './modules/account/account.module';
import {OrderModule} from './modules/order/order.module';
import { MerchantModule } from './modules/merchant/merchant.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OnsenModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HomeModule,
    FavouritesModule,
    AccountModule,
    OrderModule,
    MerchantModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
