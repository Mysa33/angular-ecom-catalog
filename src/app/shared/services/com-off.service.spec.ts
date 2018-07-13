import { TestBed, inject } from '@angular/core/testing';

import { ComOffService } from './com-off.service';

describe('ComOffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComOffService]
    });
  });

  it('should be created', inject([ComOffService], (service: ComOffService) => {
    expect(service).toBeTruthy();
  }));
});
