import { TestBed } from '@angular/core/testing';

import { FinderService } from './finder-service.service';

describe('FinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinderService = TestBed.get(FinderService);
    expect(service).toBeTruthy();
  });
});
