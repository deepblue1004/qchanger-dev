import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingOrdersComponent } from './upcoming-orders.component';

describe('UpcomingOrdersComponent', () => {
  let component: UpcomingOrdersComponent;
  let fixture: ComponentFixture<UpcomingOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
