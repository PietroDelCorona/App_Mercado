import { TestBed } from '@angular/core/testing';

import { PageListaService } from './page-lista.service';

describe('PageListaService', () => {
  let service: PageListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
