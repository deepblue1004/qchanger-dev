import { AuthService } from 'app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queue-progress',
  templateUrl: './queue-progress.component.html',
  styleUrls: ['./queue-progress.component.css']
})
export class QueueProgressComponent implements OnInit {

  waitingPercent: Number = 70;
  merchantId: string = "";

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.auth.createUser().then(currentUser => {
      this.merchantId = currentUser.queueing[0];
    })
  }

  getWaitingTime() {
    return 30;
  }

  routeToQueuePage() {
    this.router.navigate([`/queue/${this.merchantId}`]);
  }
}
