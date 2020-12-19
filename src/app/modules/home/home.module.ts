import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeFilterComponent } from './home-filter/home-filter.component';

@NgModule({
  declarations: [HomeMainComponent, HomeFilterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
