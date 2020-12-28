import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/order';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.css']
})
export class OrderMainComponent implements OnInit {
  selectedTabIndex: number;
  upcomingOrders: Order[] = [];
  oldOrdersInNov: Order[] = [];
  oldOrdersInDec: Order[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.selectedTabIndex = 0;
    this.getUpcomingOrders();
    this.getOldOrdersInNov();
    this.getOldOrdersInDec();
  }

  onSelectTab(index: number): void {
    this.selectedTabIndex = index;
  }

  getUpcomingOrders(): void {
    this.orderService.getUnacknowledgedOrders()
      .subscribe(orders => this.upcomingOrders = orders);
  }

  getOldOrdersInNov(): void {
    this.orderService.getAcknowledgedOrdersByMonth(2020, 11)
      .subscribe(orders => this.oldOrdersInNov = orders);
  }

  getOldOrdersInDec(): void {
    this.orderService.getAcknowledgedOrdersByMonth(2020, 12)
      .subscribe(orders => this.oldOrdersInDec = orders);
  }
}
