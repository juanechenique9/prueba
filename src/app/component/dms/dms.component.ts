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
  carriers: Array<Habilidades> = new Array<Habilidades>()
  copyCarriers: Array<Habilidades> = new Array<Habilidades>()
  dms: Array<listaCarrier> = new Array<listaCarrier>()
  copyDms: Array<listaCarrier> = new Array<listaCarrier>()
  isEditado = []
  bsModalRef: BsModalRef
  e: number
  itemsPerPage: number = 4
  loading: boolean
  constructor(
    private CarrierInjectado: CarriersService,
    private DmsInjectado: DmsService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.carrierInjection()
    this.dmsInjection()
  }

  verifyDocuments() {
    this.copyCarriers.forEach((x) => {
      x.verified = x.dms.every((document) => document.status === 'Request')
    })
  }

  changeState(id: number, id_demo: number) {
    this.copyCarriers.map((x) => {
      if (x.id == id) {
        return x.dms.map((z) => {
          if (z.id_demo == id_demo) {
            return (z.status = 'Request')
          }
        })
      }
    })
    this.verifyDocuments() // updateVerification
  }

  carrierInjection(nombre?: string) {
    this.loading = true
    this.CarrierInjectado.leerNoticias().subscribe(
      (carrierApi) => {
        this.copyCarriers = carrierApi
        this.copyCarriers = carrierApi
        this.loading = false
        this.verifyDocuments()
      },
      (error) => console.log(error)
    )
  }

  dmsInjection() {
    this.DmsInjectado.leerDms().subscribe((dmsApi) => {
      this.copyDms = dmsApi
      this.dms = dmsApi
    })
  }

  searchDms(event) {
    let searchDocument: string = event.target.value

    if (searchDocument == ' ') {
      this.copyDms = this.dms
    } else {
      this.copyDms = this.dms.filter((v) => {
        return v.documentName.toLocaleLowerCase().includes(searchDocument)
      })
    }
  }

  editDocuments(p: number) {
    this.isEditado = []

    this.isEditado[p] = !this.isEditado[p]
  }

  searchCarrier(event) {
    let searchName: string = event.target.value

    if (searchName === '') {
      this.copyCarriers = this.carriers
    } else {
      this.copyCarriers = this.carriers.filter((x) => {
        return x.titulo.toLowerCase().includes(searchName)
      })
    }
  }

  addDocuments() {
    const initialState = {
      title: 'Agregar',
    }
    this.bsModalRef = this.modalService.show(DmsAgregarComponent, {
      initialState,
    })
    this.bsModalRef.content.closeBtnName = 'Close'

    this.bsModalRef.content.data.subscribe((result) => {
      console.log('results', result)

      this.copyDms.push(result)
    })
  }

  handlePageChange(event) {
    this.e = event
    this.isEditado = []
  }
}
