import { TestBed } from '@angular/core/testing';

import { ToswarningService } from './toswarning.service';

describe('ToswarningService', () => {
  let service: ToswarningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToswarningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
