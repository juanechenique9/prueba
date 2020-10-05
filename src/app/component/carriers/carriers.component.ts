import { Component, OnInit } from '@angular/core'
import { Habilidades } from 'src/app/model/habilidades'
import { CarriersService } from 'src/app/services/carriers.service'
import { lista } from 'src/app/model/Lista'
import { ListaService } from 'src/app/services/lista.service'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css'],
  providers: [ListaService],
})
export class CarriersComponent implements OnInit {
  habilidades: Array<Habilidades> = new Array<Habilidades>()
  copyHabilidades: Array<Habilidades> = new Array<Habilidades>()
  public selectedLista: lista = { id: 0, nombre: '' }
  public listarNombre: lista[]
  loading: boolean

  constructor(
    private CarrierInjectado: CarriersService,
    private dataSvc: ListaService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.injectar()
    this.Mostrar()
  }

  Mostrar() {
    this.listarNombre = this.dataSvc.getListar()
  }

  onSelect(id: number) {
    if (id == 0) {
      this.copyHabilidades = this.habilidades
    }
    if (id == 1) {
      this.copyHabilidades = this.habilidades.filter((item) => {
        return item.isQualified == true
      })
    } else if (id == 2) {
      this.copyHabilidades = this.habilidades.filter((item) => {
        return item.isQualified == false
      })
    }
  }

  /**
   *
   * @param nombre
   */
  injectar(nombre?: string) {
    this.loading = true
    this.CarrierInjectado.leerNoticias().subscribe(
      (habilidadesdesdeapi) => {
        this.copyHabilidades = habilidadesdesdeapi
        this.habilidades = habilidadesdesdeapi
        this.loading = false
      },
      (error) => console.log(error)
    )
  }

  buscarCarriers(event) {
    let nombreBuscar: string = event.target.value

    if (nombreBuscar === '') {
      this.copyHabilidades = this.habilidades
    } else {
      this.copyHabilidades = this.habilidades.filter((x) => {
        return x.titulo.toLowerCase().includes(nombreBuscar.toLowerCase())
      })
    }
  }
}
