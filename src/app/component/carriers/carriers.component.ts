import { Component, OnInit } from '@angular/core'
import { Habilidades } from 'src/app/model/habilidades'
import { CarriersService } from 'src/app/services/carriers.service'
import { lista } from 'src/app/model/Lista'
import { ListaService } from 'src/app/services/lista.service'

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css'],
  providers: [ListaService],
})
export class CarriersComponent implements OnInit {
  carriers: Array<Habilidades> = new Array<Habilidades>()
  copyCarriers: Array<Habilidades> = new Array<Habilidades>()
  public selectedList: lista = { id: 0, nombre: '' }
  public listName: lista[]
  loading: boolean

  constructor(
    private CarrierInjection: CarriersService,
    private dataSvc: ListaService
  ) {}

  ngOnInit() {
    this.carrierService()
    this.filterQualified()
  }

  filterQualified() {
    this.listName = this.dataSvc.getListar()
  }

  selectFilter(id: number) {
    if (id == 0) {
      this.copyCarriers = this.carriers
    }
    if (id == 1) {
      this.copyCarriers = this.carriers.filter((item) => {
        return item.isQualified == true
      })
    } else if (id == 2) {
      this.copyCarriers = this.carriers.filter((item) => {
        return item.isQualified == false
      })
    }
  }

  /**
   *
   * @param nombre
   */
  carrierService(nombre?: string) {
    this.loading = true
    this.CarrierInjection.getCarriers().subscribe(
      (carrierList) => {
        this.copyCarriers = carrierList
        this.carriers = carrierList
        this.loading = false
      },
      (error) => console.log(error)
    )
  }

  searchCarriers(event) {
    let nameCarrier: string = event.target.value

    if (nameCarrier === '') {
      this.copyCarriers = this.carriers
    } else {
      this.copyCarriers = this.carriers.filter((x) => {
        return x.titulo.toLowerCase().includes(nameCarrier.toLowerCase())
      })
    }
  }
}
