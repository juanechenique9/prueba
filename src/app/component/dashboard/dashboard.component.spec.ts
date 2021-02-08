import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { DashboardComponent } from './dashboard.component'
import { Dashboard } from 'src/app/model/dashboard'
import { delay } from 'rxjs/operators'
import { DashboardService } from 'src/app/services/dashboard.service'
import { of } from 'rxjs'
import { Fleet } from 'src/app/model/fleet'
describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>
  let dashInjection: DashboardService
  let dashboard: Dashboard
  let fleet: Fleet

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
  })

  fit('should test Dashboard', fakeAsync(() => {
    spyOn(dashInjection, 'getDash').and.returnValue(
      of([dashboard]).pipe(delay(1))
    )

    fixture.detectChanges()

    expect(component.dashboard).toEqual([])
    expect(dashInjection.getDash).toHaveBeenCalledWith()

    tick()

    expect(component.dashboard).toEqual([dashboard])
  }))

  fit('Should test Fleetsize', fakeAsync(() => {
    spyOn(dashInjection, 'getFleet').and.returnValue(of([fleet]).pipe(delay(3)))

    fixture.detectChanges()

    expect(component.fleet).toEqual([])
    expect(dashInjection.getFleet).toHaveBeenCalledWith()

    tick()

    expect(component.fleet).toEqual([fleet])
  }))
})
