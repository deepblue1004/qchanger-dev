import {Component, OnInit, Input} from '@angular/core';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-upcoming-orders',
  templateUrl: './upcoming-orders.component.html',
  styleUrls: ['./upcoming-orders.component.css']
})
export class UpcomingOrdersComponent implements OnInit {

  @Input() orders: Order[];
  selectedOrder: Order;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

  onCancel(order: Order): void {
    this.orders = this.orders.filter(currentOrder => order.id !== currentOrder.id)
  }
}
