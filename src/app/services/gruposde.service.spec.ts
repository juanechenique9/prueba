import { TestBed } from '@angular/core/testing';

import { GruposdeService } from './gruposde.service';

describe('GruposdeService', () => {
  let service: GruposdeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruposdeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
