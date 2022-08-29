import { TestBed } from '@angular/core/testing';

import { NgxReactiveFileInputService } from './ngx-reactive-file-input.service';

describe('NgxReactiveFileInputService', () => {
  let service: NgxReactiveFileInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReactiveFileInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
