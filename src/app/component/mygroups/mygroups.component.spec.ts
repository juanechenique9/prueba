import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { GruposdeService } from 'src/app/services/gruposde.service'
import { MygroupsComponent } from './mygroups.component'
import { HttpClientModule } from '@angular/common/http'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalModule } from 'ngx-bootstrap/modal'
import { ReactiveFormsModule, FormBuilder } from '@angular/forms'
import { of } from 'rxjs'

describe('when groupService() is called', () => {
  let component: MygroupsComponent
  let fixture: ComponentFixture<MygroupsComponent>
  const formBuilder: FormBuilder = new FormBuilder()

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ModalModule.forRoot(), ReactiveFormsModule],
      providers: [BsModalService, GruposdeService],
      declarations: [MygroupsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MygroupsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('All should  ', () => {
    const groups = [1, 2, 3]
    spyOn(component.groupInjection, 'getGroup').and.returnValue(of({ groups }))
    component.groupService()
    expect(component.groups).toEqual(groups)
  })
})
