import { TestBed } from '@angular/core/testing';

import { NgxGanttDataService } from './ngx-gantt-data.service';

describe('NgxGanttDataService', () => {
  let service: NgxGanttDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGanttDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
