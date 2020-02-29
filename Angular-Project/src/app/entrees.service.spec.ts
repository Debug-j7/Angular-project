import { TestBed } from '@angular/core/testing';

import { EntreesService } from './entrees.service';

describe('EntreesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntreesService = TestBed.get(EntreesService);
    expect(service).toBeTruthy();
  });
});
