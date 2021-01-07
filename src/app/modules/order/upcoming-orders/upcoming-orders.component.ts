import { DocRef } from './../../../shared/enum/DocRef.enum';
import { User } from './../../../models/user';
import { QueueService } from './../../../services/queue.service';
import { FirestoreService } from './../../../services/firestore.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import {Component, OnInit, Input} from '@angular/core';
import {Order} from '../../../models/order';
import { Merchant } from 'app/models/merchant';

@Component({
  selector: 'app-upcoming-orders',
  templateUrl: './upcoming-orders.component.html',
  styleUrls: ['./upcoming-orders.component.css']
})
export class UpcomingOrdersComponent implements OnInit {

  //@Input() orders: Order[];
  currentUser: User;
  orders: Order[] = [];
  selectedOrder: Order;

  constructor(
    private auth: AuthService,
    private router: Router,
    private merchantService: FirestoreService<Merchant>,
    private queueService: QueueService
  ) {
  }

  ngOnInit(): void {
    this.setList();
  }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

  onCancel(order: Order): void {
    console.log(this.currentUser.id, order.merchantId);
    this.queueService.cancelQueue(this.currentUser.id, order.merchantId).then(() => {

      this.setList();
    })
    //this.orders = this.orders.filter(currentOrder => order.id !== currentOrder.id)
  }

  onSelectToCancel(order: Order): void {
    const option = window.confirm('Do you really want to cancel it?')
    if (option === true) {
      this.onCancel(order)
    }
  }

  setList() {
    this.orders = [];
    this.auth.createUser().then(user => {
      this.currentUser = user;
      this.queueService.getUserQueueList(user.id).then(mids => {
        mids.forEach(mid => {
          this.merchantService.getById(mid, DocRef.MERCHANT).subscribe(data => {
            if(data.payload.data()) {
              let order: Order = new Order();
              order.merchantId = data.payload.id;
              order.merchantName = data.payload.data()['name'];
              order.location = data.payload.data()['area'];
              order.merchantStars = [0, 1, 2, 3];
              order.merchantIcon = data.payload.data()['setting']['bannerImageUrl'];
              order.currentQueueNumber = 1
              this.queueService.getUserPosition(user.id, mid).then(no => {
                order.myQueueNumber = no;
                order.estimatedTimeOfArrival = no * 5
                if (this.orders.every(o => o.merchantName != data.payload.data()['name']))
                {
                  this.orders.push(order);
                }
              });
            }
          })
        });
      });
    });
  }

  routeToQueue(merchantId: string) {
    this.router.navigate([`queue/${merchantId}`]);
  }
}
