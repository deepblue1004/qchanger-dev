import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-progress',
  templateUrl: './queue-progress.component.html',
  styleUrls: ['./queue-progress.component.css']
})
export class QueueProgressComponent implements OnInit {

  waitingPercent: Number = 70;
  constructor() { }

  ngOnInit(): void {
  }

  getWaitingTime() {
    return 30;
  }
}
