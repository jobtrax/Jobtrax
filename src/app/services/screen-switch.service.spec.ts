import { TestBed } from '@angular/core/testing';

import { ScreenSwitchService } from './screen-switch.service';

describe('ScreenSwitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenSwitchService = TestBed.get(ScreenSwitchService);
    expect(service).toBeTruthy();
  });
});
