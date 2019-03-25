import { TestBed } from '@angular/core/testing';

import { BatService } from './bat.service';

describe('BatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatService = TestBed.get(BatService);
    expect(service).toBeTruthy();
  });
});
