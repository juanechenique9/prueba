import { TestBed, getTestBed } from '@angular/core/testing'
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing'
import { GruposdeService } from './gruposde.service'
import { SettingsService } from './settings.service'

describe('SettingsService', () => {
  let service: SettingsService
  let injector: TestBed
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(SettingsService)
    injector = getTestBed()
    httpMock = injector.get(HttpTestingController)
  })

  fit('should return an Observable', () => {
    const service: SettingsService = TestBed.get(SettingsService)
    const settingArray = [
      {
        authorityLost: false as false,
        operatingReinstated: true as true,
        insuranceExpired: true as true,
        insuranceReinstated: true as true,
        turnSatisfactory: true as true,
        turnConditional: false as false,
        turnUnsatisfactory: true as true,
        turnRated: false as false,
        isSatisfactory: true as true,
        isConditional: true as true,
        isUnsatisfactory: true as true,
        isRated: true as true,
        vehicleAverage: true as true,
        driverAverage: true as true,
        absoluteValueBasicScore: [
          {
            unsafeDriving: [
              {
                general: 5,
                hazmat: 7,
                ignore: false as false,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],
            hosCompliance: [
              {
                general: 3,
                hazmat: 8,
                ignore: true as true,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],
            driverFitness: [
              {
                general: 6,
                hazmat: 2,
                ignore: false as false,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],

            controlledAlcohol: [
              {
                general: 3,
                hazmat: 7,
                ignore: false as false,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],

            vehicleMaintenance: [
              {
                general: 10,
                hazmat: 8,
                ignore: true as true,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],

            unsafeDrivingDos: [
              {
                general: 4,
                hazmat: 3,
                ignore: false as false,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],

            hosComplianceDos: [
              {
                general: 7,
                hazmat: 9,
                ignore: false as false,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],

            driverFitnessDos: [
              {
                general: 3,
                hazmat: 2,
                ignore: true as true,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],

            controlledAlcoholDos: [
              {
                general: 5,
                hazmat: 9,
                ignore: false as false,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],

            vehicleMaintenanceDos: [
              {
                general: 2,
                hazmat: 5,
                ignore: false as false,
                listaNumero: [
                  {
                    numero: 1,
                  },
                  { numero: 2 },
                  { numero: 3 },
                  { numero: 4 },
                  { numero: 5 },
                  { numero: 6 },
                  { numero: 7 },
                  { numero: 8 },
                  { numero: 9 },
                  { numero: 10 },
                ],
              },
            ],
          },
        ],
      },
    ]

    service.getSetting().subscribe((setting) => {
      expect(setting).toEqual(settingArray)
    })

    const req = httpMock.expectOne(
      'https://run.mocky.io/v3/0d43be61-09e8-47e0-afe3-07f086e7c68d'
    )

    expect(req.request.method).toBe('GET')
    req.flush(settingArray)
  })
})
