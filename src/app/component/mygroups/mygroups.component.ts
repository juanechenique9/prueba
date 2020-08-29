import { Component, OnInit } from '@angular/core'
import { Grupos } from 'src/app/model/grupos'
import { GruposdeService } from 'src/app/services/gruposde.service'
import { GrupoAgregarComponent } from 'src/app/component/mygroups/grupo-agregar.component'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent implements OnInit {
  grupos: Array<Grupos> = new Array<Grupos>()
  copygrupos: Array<Grupos> = new Array<Grupos>()
<<<<<<< HEAD
  isEditable: boolean = false
  bsModalRef: BsModalRef
  pageActual: number
=======
  isEditable = []
  bsModalRef: BsModalRef
  p: number
  itemsPerPage: number = 4
>>>>>>> 5ed27f6... version 5

  constructor (
    private grupoInjectado: GruposdeService,
    private modalService: BsModalService
  ) {}

  ngOnInit (): void {
    this.insertar()
  }

  insertar () {
    this.grupoInjectado.LeerGrupos().subscribe(
      gruposdesdeapi => {
        this.grupos = gruposdesdeapi
        this.copygrupos = gruposdesdeapi
      },
      error => console.error(error)
    )
  }

  buscarGrupo (event) {
    let nombreGrupo: string = event.target.value

    if (nombreGrupo === '') {
      this.copygrupos = this.grupos
    } else {
      this.copygrupos = this.grupos.filter(v => {
        return v.name.toLowerCase().includes(nombreGrupo)
      })
    }
  }

<<<<<<< HEAD
  eliminarGrupo (i: number) {
    if ((this.pageActual = this.pageActual)) {
      this.copygrupos.splice(i, 1)
    } else {
      this.copygrupos = this.copygrupos.filter(k => {
        return k.id !== i
      })
    }
  }

  editarGrupo () {
    this.isEditable = !this.isEditable
=======
  eliminarGrupo (id: number) {
    
    this.copygrupos = this.copygrupos.filter(k => {
      return k.id !== id
    })
    
  }

  editarGrupo (i: number) {
    this.isEditable = []

    this.isEditable[i] = !this.isEditable[i]
  }

  handlePageChange (event) {
    this.p = event
    this.isEditable = []
>>>>>>> 5ed27f6... version 5
  }

  agregarGrupo () {
    const initialState = {
      title: 'Agregar'
    }
    this.bsModalRef = this.modalService.show(GrupoAgregarComponent, {
      initialState
    })
    this.bsModalRef.content.closeBtnName = 'Close'

    this.bsModalRef.content.data.subscribe(result => {
      console.log('results', result)

      this.copygrupos.push(result)
    })
  }
}
