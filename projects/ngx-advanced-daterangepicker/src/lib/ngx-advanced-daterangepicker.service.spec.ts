import { TestBed } from '@angular/core/testing';

import { NgxAdvancedDaterangepickerService } from './ngx-advanced-daterangepicker.service';

describe('NgxAdvancedDaterangepickerService', () => {
  let service: NgxAdvancedDaterangepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAdvancedDaterangepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
