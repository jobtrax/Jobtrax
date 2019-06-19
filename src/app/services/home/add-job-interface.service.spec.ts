import { TestBed } from '@angular/core/testing';

import { AddJobInterfaceService } from './add-job-interface.service';

describe('AddJobInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddJobInterfaceService = TestBed.get(AddJobInterfaceService);
    expect(service).toBeTruthy();
  });
});
