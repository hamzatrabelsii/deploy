import { TestBed } from '@angular/core/testing';

import { ReelsCounterService } from './reels-counter.service';

describe('ReelsCounterService', () => {
  let service: ReelsCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReelsCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
