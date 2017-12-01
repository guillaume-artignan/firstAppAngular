import { TestBed, inject } from '@angular/core/testing';

import { PersonnesService } from './personnes.service';

describe('PersonnesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonnesService]
    });
  });

  it('should be created', inject([PersonnesService], (service: PersonnesService) => {
    expect(service).toBeTruthy();
  }));
});
