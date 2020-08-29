import { Component, OnInit } from '@angular/core'
<<<<<<< HEAD
=======
import { Habilidades } from 'src/app/model/habilidades'
import { CarriersService } from 'src/app/services/carriers.service'
import { DmsService } from 'src/app/services/dms.service'
>>>>>>> 5ed27f6... version 5

@Component({
  selector: 'app-dms',
  templateUrl: './dms.component.html',
  styleUrls: ['./dms.component.css'],
})
export class DMSComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}

  ngOnInit(): void {}
=======
  habilidades: Array<Habilidades> = new Array<Habilidades>()
  copyHabilidades: Array<Habilidades> = new Array<Habilidades>()
  estado = []

  constructor(private CarrierInjectado: CarriersService) {}

  ngOnInit(): void {
    this.injectar()
  }

  cambiarEstado(i: number) {
    this.estado[i] = !this.estado[i]
  }

  injectar(nombre?: string) {
    this.CarrierInjectado.leerNoticias().subscribe(
      (habilidadesdesdeapi) => {
        this.copyHabilidades = habilidadesdesdeapi
        this.habilidades = habilidadesdesdeapi
      },
      (error) => console.log(error)
    )
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
>>>>>>> 5ed27f6... version 5
}
