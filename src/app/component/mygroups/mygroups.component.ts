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
  grupos: Array<Grupos> = new Array<Grupos>()
  copygrupos: Array<Grupos> = new Array<Grupos>()
  loading: boolean
  isEditable = []

  bsModalRef: BsModalRef
  p: number
  itemsPerPage = 4

  @ViewChild('enfocarNombre') enfocarNombre: any

  constructor(
    private grupoInjectado: GruposdeService,
    private modalService: BsModalService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.insertar()
  }

  insertar() {
    this.loading = true
    this.grupoInjectado.LeerGrupos().subscribe(
      (gruposdesdeapi) => {
        this.grupos = gruposdesdeapi
        this.copygrupos = gruposdesdeapi
        this.loading = false
      },
      (error) => console.error(error)
    )
  }

  buscarGrupo(event) {
    const nombreGrupo: string = event.target.value

    if (nombreGrupo === '') {
      this.copygrupos = this.grupos
    } else {
      this.copygrupos = this.grupos.filter((v) => {
        return v.name.toLowerCase().includes(nombreGrupo)
      })
    }
  }

  eliminarGrupo(id) {
    this.copygrupos = this.copygrupos.filter((k) => {
      return k.id !== id
    })
  }

  editarGrupo(i: number) {
    this.isEditable = []
    this.isEditable[i] = !this.isEditable[i]
    this.cd.detectChanges()
    this.enfocarNombre?.nativeElement.focus()
  }

  handlePageChange(event) {
    this.p = event
    this.isEditable = []
  }

  agregarGrupo() {
    const initialState = {
      title: 'Agregar',
    }
    this.bsModalRef = this.modalService.show(GrupoAgregarComponent, {
      initialState,
    })
    this.bsModalRef.content.closeBtnName = 'Close'

    this.bsModalRef.content.data.subscribe((result) => {
      console.log('results', result)

      this.copygrupos.push(result)
    })
  }
}
