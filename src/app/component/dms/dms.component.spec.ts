import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing'
import { Habilidades } from 'src/app/model/habilidades'
import { delay } from 'rxjs/operators'
import { DMSComponent } from './dms.component'
import { CarriersService } from 'src/app/services/carriers.service'
import { of } from 'rxjs'
import { HttpClientModule } from '@angular/common/http'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalModule } from 'ngx-bootstrap/modal'
import { NgxPaginationModule } from 'ngx-pagination'
import { DmsService } from 'src/app/services/dms.service'
import { listaCarrier } from 'src/app/model/listaCarrier'

describe('DMSComponent', () => {
  let component: DMSComponent
  let fixture: ComponentFixture<DMSComponent>
  let carriers: Habilidades
  let CarrierInjectado: CarriersService
  let dms: listaCarrier
  let DmsInjectado: DmsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ModalModule.forRoot(), NgxPaginationModule],
      declarations: [DMSComponent],
      providers: [BsModalService],
    }).compileComponents()

    fixture = TestBed.createComponent(DMSComponent)
    component = fixture.componentInstance
    CarrierInjectado = TestBed.get(CarriersService)
    carriers = new Habilidades()
    dms = new listaCarrier()
    DmsInjectado = TestBed.get(DmsService)
  })

  fit('should test Carriers', fakeAsync(() => {
    spyOn(CarrierInjectado, 'getCarriers').and.returnValue(
      of([carriers]).pipe(delay(1))
    )

    component.carrierInjection()

    expect(component.carriers).toEqual([])
    expect(CarrierInjectado.getCarriers).toHaveBeenCalledWith()

    tick(1)

    expect(component.carriers).toEqual([carriers])
  }))

  fit('should test DMS', fakeAsync(() => {
    spyOn(DmsInjectado, 'getDms').and.returnValue(of([dms]).pipe(delay(1)))

    component.dmsInjection()

    expect(component.carriers).toEqual([])
    expect(DmsInjectado.getDms).toHaveBeenCalledWith()

    tick(1)

    expect(component.dms).toEqual([dms])
  }))
})
