import {Component, OnInit, Input} from '@angular/core';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  @Input() ordersInDec: Order[];
  @Input() ordersInNov: Order[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
