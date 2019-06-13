import { TestBed } from '@angular/core/testing';

import { JobsGraphInterfaceService } from './jobs-graph-interface.service';

describe('JobsGraphInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsGraphInterfaceService = TestBed.get(JobsGraphInterfaceService);
    expect(service).toBeTruthy();
  });
});
