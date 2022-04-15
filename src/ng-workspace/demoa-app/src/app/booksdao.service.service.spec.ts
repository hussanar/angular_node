import { TestBed } from '@angular/core/testing';

import { BookdaoService } from './booksdao.service.service';

describe('Booksdao.ServiceService', () => {
  let service: BookdaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookdaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
