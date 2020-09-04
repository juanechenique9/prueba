import { Component, OnInit } from '@angular/core'
import { Habilidades } from 'src/app/model/habilidades'
import { CarriersService } from 'src/app/services/carriers.service'
import { DmsService } from 'src/app/services/dms.service'
import { listaCarrier } from 'src/app/model/listaCarrier'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { DmsAgregarComponent } from 'src/app/component/dms/dms-agregar.component'

@Component({
  selector: 'app-dms',
  templateUrl: './dms.component.html',
  styleUrls: ['./dms.component.css'],
})
export class DMSComponent implements OnInit {
  habilidades: Array<Habilidades> = new Array<Habilidades>()
  copyHabilidades: Array<Habilidades> = new Array<Habilidades>()
  dms: Array<listaCarrier> = new Array<listaCarrier>()
  copiDms: Array<listaCarrier> = new Array<listaCarrier>()
  isEditado = []
  bsModalRef: BsModalRef
  e: number
  itemsPerPage: number = 4

  constructor(
    private CarrierInjectado: CarriersService,
    private DmsInjectado: DmsService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.injectar()
    this.mostrarDms()
  }

  verifyDocuments() {
    this.copyHabilidades.forEach((habilidad) => {
      habilidad.verified = habilidad.dms.every(
        (document) => document.status === 'Request'
      )
    })
  }

  cambiarEstado(id: number, id_demo: number) {
    this.copyHabilidades.map((copi) => {
      if (copi.id == id) {
        return copi.dms.map((mensaje) => {
          if (mensaje.id_demo == id_demo) {
            return (mensaje.status = 'Request')
          }
        })
      }
    })
    this.verifyDocuments() // updateVerification
  }

  injectar(nombre?: string) {
    this.CarrierInjectado.leerNoticias().subscribe(
      (habilidadesdesdeapi) => {
        this.copyHabilidades = habilidadesdesdeapi
        this.habilidades = habilidadesdesdeapi
        this.verifyDocuments()
      },
      (error) => console.log(error)
    )
  }

  mostrarDms() {
    this.DmsInjectado.leerDms().subscribe((dmsdesdeapi) => {
      this.copiDms = dmsdesdeapi
      this.dms = dmsdesdeapi
    })
  }

  buscarDms(event) {
    let buscarDocumento: string = event.target.value

    if (buscarDocumento == ' ') {
      this.copiDms = this.dms
    } else {
      this.copiDms = this.dms.filter((v) => {
        return v.documentName.toLocaleLowerCase().includes(buscarDocumento)
      })
    }
  }

  editDocuments(p: number) {
    this.isEditado = []

    this.isEditado[p] = !this.isEditado[p]
  }

  buscarCarrier(event) {
    let nombreBuscar: string = event.target.value

    if (nombreBuscar === '') {
      this.copyHabilidades = this.habilidades
    } else {
      this.copyHabilidades = this.habilidades.filter((x) => {
        return x.titulo.toLowerCase().includes(nombreBuscar)
      })
    }
  }

  agregarDocuments() {
    const initialState = {
      title: 'Agregar',
    }
    this.bsModalRef = this.modalService.show(DmsAgregarComponent, {
      initialState,
    })
    this.bsModalRef.content.closeBtnName = 'Close'

    this.bsModalRef.content.data.subscribe((result) => {
      console.log('results', result)

      this.copiDms.push(result)
    })
  }

  handlePageChange(event) {
    this.e = event
    this.isEditado = []
  }
}
