import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueConfirmComponent } from './queue-confirm/queue-confirm.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { QueueProgressComponent } from './queue-progress/queue-progress.component';

@NgModule({
  declarations: [QueueConfirmComponent, QueueProgressComponent],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot()
  ],
  exports: [
    QueueProgressComponent
  ]
})
export class QueueModule { }
