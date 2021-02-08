import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { SoporteService } from 'src/app/services/soporte.service'
import { SupportComponent } from './support.component'
import { HttpClientModule } from '@angular/common/http'
import { of } from 'rxjs'

describe('SupportComponent', () => {
  let component: SupportComponent
  let fixture: ComponentFixture<SupportComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SoporteService],
      declarations: [SupportComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  fit('should return an Observable', () => {
    const support = [
      {
        id: 1,
        Pregunta:
          'How does FMCSA designate Carrier Types, e.g General carriers from HAZMAT carriers?',
        Respuesta:
          'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt',
      },
    ]
    spyOn(component.supportInjection, 'getSupport').and.returnValue(
      of({ support })
    )
    component.supportService()
    expect(component.support).toEqual({ support })
  })
})
