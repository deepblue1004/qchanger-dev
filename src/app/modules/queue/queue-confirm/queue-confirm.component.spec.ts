import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueConfirmComponent } from './queue-confirm.component';

describe('QueueConfirmComponent', () => {
  let component: QueueConfirmComponent;
  let fixture: ComponentFixture<QueueConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
