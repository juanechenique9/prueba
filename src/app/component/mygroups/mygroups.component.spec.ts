import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing'
import { GruposdeService } from 'src/app/services/gruposde.service'
import { MygroupsComponent } from './mygroups.component'
import { HttpClientModule } from '@angular/common/http'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalModule } from 'ngx-bootstrap/modal'
import { NgxPaginationModule } from 'ngx-pagination'
import { of } from 'rxjs'
import { Grupos } from 'src/app/model/grupos'
import { delay } from 'rxjs/operators'

describe('Groups Component', () => {
  let component: MygroupsComponent
  let fixture: ComponentFixture<MygroupsComponent>
  let groups: Grupos
  let groupInjection: GruposdeService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ModalModule.forRoot(), NgxPaginationModule],
      providers: [BsModalService, GruposdeService],
      declarations: [MygroupsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MygroupsComponent)
    component = fixture.componentInstance
    groupInjection = TestBed.get(GruposdeService)
    groups = new Grupos()
  })

  fit('should test Groups ', fakeAsync(() => {
    spyOn(groupInjection, 'getGroup').and.returnValue(
      of([groups]).pipe(delay(1))
    )

    component.groupService()

    expect(component.groups).toEqual([])
    expect(groupInjection.getGroup).toHaveBeenCalledWith()

    tick(1)

    expect(component.groups).toEqual([groups])
  }))
})
