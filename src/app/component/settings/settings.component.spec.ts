import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { of } from 'rxjs'
import { SettingsComponent } from './settings.component'
import { HttpClientModule } from '@angular/common/http'
import { SettingsService } from 'src/app/services/settings.service'

describe('SettingsComponent', () => {
  let component: SettingsComponent
  let fixture: ComponentFixture<SettingsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SettingsService],
      declarations: [SettingsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  fit('should return an Observable', () => {
    const settings = [
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

    spyOn(component.settingInjection, 'getSetting').and.returnValue(
      of({ settings })
    )

    component.settingService()
    expect(component.settings).toEqual({ settings })
  })
})
