import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
  flush,
} from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { DashboardComponent } from './dashboard.component'
import { Dashboard } from 'src/app/model/dashboard'
import { delay } from 'rxjs/operators'
import { DashboardService } from 'src/app/services/dashboard.service'
import { of } from 'rxjs'
import { Fleet } from 'src/app/model/fleet'
import { Safety } from 'src/app/model/safety'
import { carrierStatus } from 'src/app/model/carrierStatus'
import { expiredDocument } from 'src/app/model/expiredDocument'
describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>
  let dashInjection: DashboardService
  let dashboard: Dashboard
  let fleet: Fleet
  let safety: Safety
  let carrierstatus: carrierStatus
  let expiredocument: expiredDocument

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DashboardService],
      declarations: [DashboardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    dashInjection = TestBed.get(DashboardService)
    dashboard = new Dashboard()
    fleet = new Fleet()
    safety = new Safety()
    carrierstatus = new carrierStatus()
    expiredocument = new expiredDocument()
  })

  fit('should test Dashboard', fakeAsync(() => {
    spyOn(dashInjection, 'getDash').and.returnValue(
      of([dashboard]).pipe(delay(1))
    )

    component.dashService()

    expect(component.dashboard).toEqual([])
    expect(dashInjection.getDash).toHaveBeenCalledWith()

    tick(1)

    expect(component.dashboard).toEqual([dashboard])
  }))

  fit('Should test Fleetsize', fakeAsync(() => {
    spyOn(dashInjection, 'getFleet').and.returnValue(of([fleet]).pipe(delay(1)))

    component.fleetService()

    expect(component.fleet).toEqual([])
    expect(dashInjection.getFleet).toHaveBeenCalledWith()

    tick(2)

    expect(component.fleet).toEqual([fleet])
  }))

  fit('should test safetyCarriers', fakeAsync(() => {
    spyOn(dashInjection, 'getSafety').and.returnValue(
      of([safety]).pipe(delay(1))
    )

    component.safetyService()

    expect(component.safety).toEqual([])
    expect(dashInjection.getSafety).toHaveBeenCalledWith()

    tick(3)

    expect(component.safety).toEqual([safety])
  }))

  fit('should test carrierStatus', fakeAsync(() => {
    spyOn(dashInjection, 'getCarrier').and.returnValue(
      of([carrierstatus]).pipe(delay(1))
    )

    component.statusService()

    expect(component.carrierstatus).toEqual([])
    expect(dashInjection.getCarrier).toHaveBeenCalledWith()

    tick(4)

    expect(component.carrierstatus).toEqual([carrierstatus])
  }))

  fit('should test expiredDocument', fakeAsync(() => {
    spyOn(dashInjection, 'getExpired').and.returnValue(
      of([expiredocument]).pipe(delay(1))
    )

    component.expiredService()

    expect(component.expiredocument).toEqual([])
    expect(dashInjection.getExpired).toHaveBeenCalledWith()

    tick(5)

    expect(component.expiredocument).toEqual([expiredocument])
  }))
})
