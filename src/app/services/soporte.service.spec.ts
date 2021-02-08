import { TestBed, getTestBed } from '@angular/core/testing'
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing'
import { SoporteService } from './soporte.service'

describe('SoporteService', () => {
  let service: SoporteService
  let injector: TestBed
  let httpMock: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    injector = getTestBed()
    service = TestBed.inject(SoporteService)
    httpMock = injector.get(HttpTestingController)
  })

  fit('should return an observable', () => {
    const service: SoporteService = TestBed.get(SoporteService)
    const supportArray = [
      {
        id: 1,
        Pregunta:
          'How does FMCSA designate Carrier Types, e.g General carriers from HAZMAT carriers?',
        Respuesta:
          'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt',
      },
      {
        id: 2,
        Pregunta: 'What does each Safety Rating mean?',
        Respuesta:
          'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
      },
    ]

    service.getSupport().subscribe((support) => {
      expect(support).toEqual(supportArray)
    })

    const req = httpMock.expectOne(
      'https://run.mocky.io/v3/2fe31326-a8f5-472e-94a4-ba8e51480829'
    )

    expect(req.request.method).toBe('GET')
    req.flush(supportArray)
  })
})
