import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantMainComponent } from './merchant-main.component';

describe('MerchantMainComponent', () => {
  let component: MerchantMainComponent;
  let fixture: ComponentFixture<MerchantMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
