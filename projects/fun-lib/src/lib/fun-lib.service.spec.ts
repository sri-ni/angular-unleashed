import { TestBed } from '@angular/core/testing';

import { FunLibService } from './fun-lib.service';

describe('FunLibService', () => {
  let service: FunLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
