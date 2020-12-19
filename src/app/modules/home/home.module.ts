import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeFilterComponent } from './home-filter/home-filter.component';
import { OnsenModule } from 'ngx-onsenui';

@NgModule({
  declarations: [
    HomeMainComponent,
    HomeFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OnsenModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomeModule { }
