import { TestBed } from '@angular/core/testing';

import { TiktokServiceService } from './tiktok-service.service';

describe('TiktokServiceService', () => {
  let service: TiktokServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiktokServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
