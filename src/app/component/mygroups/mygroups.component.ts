import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core'
import { Grupos } from 'src/app/model/grupos'
import { GruposdeService } from 'src/app/services/gruposde.service'
import { GrupoAgregarComponent } from 'src/app/component/mygroups/grupo-agregar.component'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css'],
})
export class MygroupsComponent implements OnInit {
  groups
  copyGroups
  loading: boolean
  isEditable = []

  bsModalRef: BsModalRef
  paginador: number
  itemsPerPage = 4

  @ViewChild('enfocarNombre') enfocarNombre: any

  constructor(
    public groupInjection: GruposdeService,
    private modalService: BsModalService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.groupService()
  }

  groupService() {
    this.loading = true
    this.groupInjection.getGroup().subscribe(
      (groupList) => {
        this.groups = groupList
        this.copyGroups = groupList
        this.loading = false
      },
      (error) => console.error(error)
    )
  }

  searchGroup(event) {
    const nameGroup: string = event.target.value

    if (nameGroup === '') {
      this.copyGroups = this.groups
    } else {
      this.copyGroups = this.groups.filter((v) => {
        return v.name.toLowerCase().includes(nameGroup)
      })
    }
  }

  deleteGroup(id) {
    this.copyGroups = this.copyGroups.filter((k) => {
      return k.id !== id
    })
  }

  editGroups(i: number) {
    this.isEditable = []
    this.isEditable[i] = !this.isEditable[i]
    this.cd.detectChanges()
    this.enfocarNombre?.nativeElement.focus()
  }

  handlePageChange(event) {
    this.paginador = event
    this.isEditable = []
  }

  addGroup() {
    const initialState = {
      title: 'Agregar',
    }
    this.bsModalRef = this.modalService.show(GrupoAgregarComponent, {
      initialState,
    })
    this.bsModalRef.content.closeBtnName = 'Close'

    this.bsModalRef.content.data.subscribe((result) => {
      console.log('results', result)

      this.copyGroups.push(result)
    })
  }
}
