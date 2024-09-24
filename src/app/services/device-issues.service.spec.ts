import { TestBed } from '@angular/core/testing';

import { DeviceIssuesService } from './device-issues.service';

describe('DeviceIssuesService', () => {
  let service: DeviceIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
