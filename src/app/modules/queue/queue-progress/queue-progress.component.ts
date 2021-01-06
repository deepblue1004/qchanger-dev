import { AuthService } from 'app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueueService } from 'app/services/queue.service';

@Component({
  selector: 'app-queue-progress',
  templateUrl: './queue-progress.component.html',
  styleUrls: ['./queue-progress.component.css']
})
export class QueueProgressComponent implements OnInit {

  waitingPercent: Number = 70;
  merchantId: string = "";
  waitingTime: Promise<number>;

  constructor(
    private route: ActivatedRoute,
    private queueService: QueueService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.merchantId = params['merchantId'];
      this.initialisePromise();
    });
  }

  initialisePromise() {
    this.waitingTime = new Promise<number>(resolve => {
      this.auth.createUser().then(currentUser => {
        new Promise<string>(resolve => {
          if(!this.merchantId) {
            this.queueService.getFastestMerchant(currentUser.id).then(merchantId => {
              this.merchantId = merchantId;
              resolve(this.merchantId);
            })
          }
          else {
            resolve(this.merchantId);
          }
        }).then((merchantId) => {
          this.queueService.getUserPosition(currentUser.id, merchantId).then(no => {
            resolve(no * 5);
          });
        });

      });
    });
  }

  routeToQueuePage() {
    this.router.navigate([`/queue/${this.merchantId}`]);
  }
}
