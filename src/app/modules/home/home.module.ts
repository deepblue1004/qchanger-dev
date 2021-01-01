import { QueueModule } from './../queue/queue.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeFilterComponent } from './home-filter/home-filter.component';
import { OnsenModule } from 'ngx-onsenui';
import { HomeCategoryComponent } from './home-category/home-category.component';

@NgModule({
  declarations: [
    HomeMainComponent,
    HomeFilterComponent,
    HomeCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OnsenModule,
    QueueModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomeModule { }
