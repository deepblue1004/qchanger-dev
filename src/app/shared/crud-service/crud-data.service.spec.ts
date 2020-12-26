import { TestBed } from '@angular/core/testing';

import { CrudDataService } from './crud-data.service';

describe('CrudDataService', () => {
  let service: CrudDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
