import { TestBed } from '@angular/core/testing';

import { FinderServiceService } from './finder-service.service';

describe('FinderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinderServiceService = TestBed.get(FinderServiceService);
    expect(service).toBeTruthy();
  });
});
