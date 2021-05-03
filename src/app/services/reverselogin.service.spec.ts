import { TestBed } from '@angular/core/testing';

import { ReverseloginService } from './reverselogin.service';

describe('ReverseloginService', () => {
  let service: ReverseloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
