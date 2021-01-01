import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueProgressComponent } from './queue-progress.component';

describe('QueueProgressComponent', () => {
  let component: QueueProgressComponent;
  let fixture: ComponentFixture<QueueProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
