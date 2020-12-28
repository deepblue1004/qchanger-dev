import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingOrdersComponent } from './upcoming-orders/upcoming-orders.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderMainComponent } from './order-main/order-main.component';



@NgModule({
  declarations: [UpcomingOrdersComponent, OrderHistoryComponent, OrderMainComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
