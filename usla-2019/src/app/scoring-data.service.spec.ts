import { TestBed } from '@angular/core/testing';

import { ScoringDataService } from './scoring-data.service';

describe('ScoringDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoringDataService = TestBed.get(ScoringDataService);
    expect(service).toBeTruthy();
  });
});
