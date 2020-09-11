import { Component, OnInit, ViewChild } from '@angular/core'
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

  isEditable = []

  bsModalRef: BsModalRef
  p: number
  itemsPerPage: number = 4

  @ViewChild('nombre') enfocarNombre: any

  constructor(
    private grupoInjectado: GruposdeService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.insertar()
  }

  insertar() {
    this.grupoInjectado.LeerGrupos().subscribe(
      (gruposdesdeapi) => {
        this.grupos = gruposdesdeapi
        this.copygrupos = gruposdesdeapi
      },
      (error) => console.error(error)
    )
  }

  buscarGrupo(event) {
    let nombreGrupo: string = event.target.value

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
    this.enfocarNombre[i].nativeElement.focus()

    console.log(this.enfocarNombre)
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
