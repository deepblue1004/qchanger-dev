import { TestBed } from '@angular/core/testing';

import { PromotionTypeService } from './promotion-type.service';

describe('PromotionTypeService', () => {
  let service: PromotionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
