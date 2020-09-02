import { Component, OnInit } from '@angular/core'
import { Habilidades } from 'src/app/model/habilidades'
import { CarriersService } from 'src/app/services/carriers.service'
import { DmsService } from 'src/app/services/dms.service'
import { listaCarrier } from 'src/app/model/listaCarrier'

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

  constructor(
    private CarrierInjectado: CarriersService,
    private DmsInjectado: DmsService
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
}
