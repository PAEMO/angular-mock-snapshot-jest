import { TestBed } from '@angular/core/testing';

import { DependencyChildService } from './dependency-child.service';

describe('DependencyChildServiceService', () => {
  let service: DependencyChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependencyChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
