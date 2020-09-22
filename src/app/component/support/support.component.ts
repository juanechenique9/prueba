import { Component, OnInit } from '@angular/core'
import { Support } from 'src/app/model/support'
import { SoporteService } from 'src/app/services/soporte.service'

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  soporte: Array<Support> = new Array<Support>()

  constructor(private soporteInjectado: SoporteService) {}

  ngOnInit(): void {
    this.mostrarSoporte()
  }

  mostrarSoporte() {
    this.soporteInjectado.ObtenerSupport().subscribe((soportedesdeapi) => {
      this.soporte = soportedesdeapi
    })
  }
}
