import { TestBed, getTestBed } from '@angular/core/testing'
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing'
import { CarriersService } from './carriers.service'

describe('CarrierService', () => {
  let service: CarriersService
  let injector: TestBed
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    injector = getTestBed()
    service = TestBed.inject(CarriersService)
    httpMock = injector.get(HttpTestingController)
  })

  fit('should return an Observable', () => {
    const service: CarriersService = TestBed.get(CarriersService)

    const carriersArray = [
      {
        id: 1,
        titulo: '001 NUMBER 1 PLUS A PLUS AAVON ASPE',
        titulodos: 'DATA BY USDOT',
        titulotres: 'FMCSA',
        titulocuatro: 'BASIC SCORES',
        FMCSACarrierType: 'General',
        MCNumber: 'Not found',
        DOTNumber: 1787634,
        DOTInsurance: 'Not found',
        MCAuthority: 'Not found',
        SafetyRating: false as false,
        UnsafeDriving: 0,
        HOSCompliance: 0,
        DriverFitness: 0,
        ControlledSubstance: 0,
        VehicleMaintenance: 0,
        contactname: 'carlos',
        CarrierAddress: '4005 BLUE PINE CIRCLE',
        Cityandstate: 'LITTLETON,COLORADO',
        Postalcode: 80126,
        verified: true as true,
        verificadorDocumento: false as false,
        isQualified: true as true,
        dms: [
          {
            id_demo: 1,
            DocumentsName: 'Driver',
            RequestDate: '2020-06-15',
            RequestDate2: '2020-03-15',
            ReceivedDate: '2020-04-16',
            ExpirationDate: '2020-11-15',
            status: 'Missing',
          },

          {
            id_demo: 2,
            DocumentsName: 'Driver',
            RequestDate: '2020-06-15',
            RequestDate2: '2020-03-15',
            ReceivedDate: '2020-04-16',
            ExpirationDate: '2020-11-15',
            status: 'Missing',
          },

          {
            id_demo: 3,
            DocumentsName: 'Auto Liability',
            RequestDate: '2020-06-15',
            RequestDate2: '2020-03-15',
            ReceivedDate: '2020-04-16',
            ExpirationDate: '2020-11-15',
            status: 'Missing',
          },

          {
            id_demo: 4,
            DocumentsName: 'Driver',
            RequestDate: '2020-06-15',
            RequestDate2: '2020-03-15',
            ReceivedDate: '2020-04-16',
            ExpirationDate: '2020-11-15',
            status: 'Missing',
          },

          {
            id_demo: 5,
            DocumentsName: 'Temperature',
            RequestDate: '2020-06-15',
            RequestDate2: '2020-03-15',
            ReceivedDate: '2020-04-16',
            ExpirationDate: '2020-11-15',
            status: 'Missing',
          },

          {
            id_demo: 6,
            DocumentsName: 'Cargo Insurance Certificate TEMPLATE',
            RequestDate: '2020-06-15',
            RequestDate2: '2020-03-15',
            ReceivedDate: '2020-04-16',
            ExpirationDate: '2020-11-15',
            status: 'Missing',
          },
        ],
      },
    ]

    service.getCarriers().subscribe((carriers) => {
      expect(carriers).toEqual(carriersArray)
    })

    const req = httpMock.expectOne(
      'https://run.mocky.io/v3/721c5a5d-cfb2-41aa-a545-1ad74230b324'
    )

    expect(req.request.method).toBe('GET')
    req.flush(carriersArray)
  })
})
