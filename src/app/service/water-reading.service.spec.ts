import { TestBed } from '@angular/core/testing';

import { WaterReadingService } from './water-reading.service';

describe('WaterReadingFormService', () => {
  let service: WaterReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
