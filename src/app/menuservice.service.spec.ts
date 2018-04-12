import { TestBed, inject } from '@angular/core/testing';

import { MenuserviceService } from './menuservice.service';

describe('MenuserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuserviceService]
    });
  });

  it('should be created', inject([MenuserviceService], (service: MenuserviceService) => {
    expect(service).toBeTruthy();
  }));
});
