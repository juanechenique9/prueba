import { TestBed, getTestBed } from '@angular/core/testing'
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing'
import { GruposdeService } from './gruposde.service'

describe('GruposdeService', () => {
  let service: GruposdeService
  let injector: TestBed
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    injector = getTestBed()
    service = TestBed.inject(GruposdeService)
    httpMock = injector.get(HttpTestingController)
  })

  fit('should return an Observable', () => {
    const service: GruposdeService = TestBed.get(GruposdeService)
    const groupsArray = [
      { id: 1, name: 'Resfer Carriers', descripcion: 'Resfer Carriers' },
      { id: 2, name: 'My group for instance', descripcion: 'Resfer Carriers' },
    ]

    service.getGroup().subscribe((group) => {
      expect(group).toEqual(groupsArray)
    })

    const req = httpMock.expectOne(
      'https://run.mocky.io/v3/ee9c6d5b-1c48-41e7-b97e-b20183be1be8'
    )
    expect(req.request.method).toBe('GET')
    req.flush(groupsArray)
  })
})
