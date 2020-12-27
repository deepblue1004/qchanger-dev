import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Order} from '../models/order';
import {ORDERS} from '../mock-data/mock-orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {
  }

  getOrders(): Observable<Order[]> {
    return of(ORDERS);
  }

  getUnacknowledgedOrders(): Observable<Order[]> {
    return of(ORDERS.filter(order => order.acknowledged === false));
  }

  getAcknowledgedOrdersByMonth(year: number, month: number): Observable<Order[]> {
    return of(ORDERS.filter(order =>
      order.acknowledged === true &&
      order.acknowledgedTime.getFullYear() === year &&
      order.acknowledgedTime.getMonth() === month - 1
    ));
  }

  getOrder(id: number): Observable<Order> {
    return of(ORDERS.find(order => order.id === id));
  }
}
