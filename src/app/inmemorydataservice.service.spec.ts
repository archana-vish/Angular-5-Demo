import { TestBed, inject } from '@angular/core/testing';

import { InmemorydataserviceService } from './inmemorydataservice.service';

describe('InmemorydataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmemorydataserviceService]
    });
  });

  it('should be created', inject([InmemorydataserviceService], (service: InmemorydataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
