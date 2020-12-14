import { Component, OnInit } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { DashboardService } from 'src/app/services/dashboard.service'
import { ChartType } from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboard: Array<Dashboard> = []
  loading: boolean
  etiquetasDona
  tipos
  tipoSafety
  datosDona
  etiquetasLinea
  tipoLinea
  datosLinea
  datosTrend
  arregloLinea
  lineChartLegend
  datosSafety
  etiquetasSafety
  datoStatus
  etiquetaStatus
  tipoStatus
  tipoBasic

  constructor(private dashInjectado: DashboardService) {}

  ngOnInit() {
    this.insertarDash()
  }

  insertarDash() {
    try {
      this.loading = true
      this.dashInjectado
        .obtenerDash()
        .subscribe((dashdesdeapi: Array<Dashboard>) => {
          this.dashboard.push(dashdesdeapi[0])
          this.dona()
          this.graficaLinea()
          this.graficaSafety()
          this.graficaStatus()
          this.graficaTrend()
          this.graficaMapa()
          this.loading = false
        })
    } catch (error) {}
  }

  dona() {
    let descripcionDona = this.dashboard[0].fleetSizes.map((d) => {
      return d.name
    })
    let valorDona = this.dashboard[0].fleetSizes.map((o) => {
      return o.value
    })

    this.etiquetasDona = descripcionDona
    this.tipos = 'doughnut'
    this.datosDona = valorDona
  }

  graficaLinea() {
    let descripcionSatisfactory = this.dashboard[0].ratedSatis.map((x) => {
      return x.name
    })

    let descripcionUnrated = this.dashboard[0].ratedUnra.map((x) => {
      return x.name
    })

    let descripcionConditional = this.dashboard[0].ratedCondicion.map((x) => {
      return x.name
    })

    let descripcionUnsatisfactory = this.dashboard[0].ratedUnsatis.map((x) => {
      return x.name
    })

    let valorSatisfactory = this.dashboard[0].ratedSatisfactory.map((x) => {
      return x.value
    })

    let valorUnrated = this.dashboard[0].ratedUnrated.map((x) => {
      return x.value
    })

    let valorConditional = this.dashboard[0].ratedConditional.map((x) => {
      return x.value
    })

    let valorUnsatisfactory = this.dashboard[0].ratedUnsatisfactory.map((x) => {
      return x.value
    })

    this.datosLinea = [
      { data: valorSatisfactory, label: descripcionSatisfactory },
      { data: valorUnrated, label: descripcionUnrated },
      { data: valorConditional, label: descripcionConditional },
      { data: valorUnsatisfactory, label: descripcionUnsatisfactory },
    ]

    this.tipoLinea = 'line'

    this.arregloLinea = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ]
  }

  graficaSafety() {
    let valorSafety = this.dashboard[0].MyCarrierSafety.map((h) => {
      return h.value
    })
    let descripcionSafety = this.dashboard[0].MyCarrierSafety.map((i) => {
      return i.name
    })
    this.tipoSafety = 'doughnut'

    this.datosSafety = valorSafety
    this.etiquetasSafety = descripcionSafety
  }

  graficaStatus() {
    let descripcionStatus = this.dashboard[0].carrierStatus.map((v) => {
      return v.name
    })

    let valorStatus = this.dashboard[0].carrierStatus.map((b) => {
      return b.value
    })

    this.datoStatus = valorStatus
    this.etiquetaStatus = descripcionStatus
    this.tipoStatus = 'doughnut'
  }

  graficaTrend() {
    this.arregloLinea = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ]

    this.tipoLinea = 'line'

    let descripcionDriving = this.dashboard[0].trendDriving.map((x) => {
      return x.name
    })

    let descripcionCompliance = this.dashboard[0].trendCompliance.map((x) => {
      return x.name
    })

    let descripcionVehicle = this.dashboard[0].trendVehicle.map((x) => {
      return x.name
    })

    let descripcionSubstances = this.dashboard[0].ratedSubstances.map((x) => {
      return x.name
    })

    let descripcionFitness = this.dashboard[0].ratedFitness.map((x) => {
      return x.name
    })

    this.datosTrend = [
      { data: '', label: descripcionDriving },
      { data: '', label: descripcionCompliance },
      { data: '', label: descripcionVehicle },
      { data: '', label: descripcionSubstances },
      { data: '', label: descripcionFitness },
    ]
  }

  graficaMapa() {
    let descripcionUnsafe = this.dashboard[0].basicUnsafe.map((x) => {
      return x.name
    })

    let valorUnsafe = this.dashboard[0].basicUnsafeValue.map((x) => {
      return x.value
    })

    let descripcionHOS = this.dashboard[0].basicHOS.map((x) => {
      return x.name
    })

    let valorHOS = this.dashboard[0].basicHOSValue.map((x) => {
      return x.value
    })

    let descripcionVehiculo = this.dashboard[0].basicVehicle.map((x) => {
      return x.name
    })

    let valorVehicle = this.dashboard[0].basicVehicleValue.map((x) => {
      return x.value
    })

    let descripcionControlled = this.dashboard[0].basicControlled.map((x) => {
      return x.name
    })

    let valueControlled = this.dashboard[0].basicControlledValue.map((x) => {
      return x.value
    })

    let descripcionDriver = this.dashboard[0].basicDriver.map((x) => {
      return x.name
    })

    let valueDriver = this.dashboard[0].basicDriverValue.map((x) => {
      return x.value
    })

    let valueSecondUnsafe = this.dashboard[0].basicUnsafeValueSecond.map(
      (x) => {
        return x.value
      }
    )

    let valueSecondHos = this.dashboard[0].basicHOSValueSecond.map((x) => {
      return x.value
    })

    let valueSecondVehicle = this.dashboard[0].basicVehicleValueSecond.map(
      (x) => {
        return x.value
      }
    )

    let valueSecondControlled = this.dashboard[0].basicControlledValueSecond.map(
      (x) => {
        return x.value
      }
    )

    let valueSecondDriver = this.dashboard[0].basicDriverValueSecond.map(
      (x) => {
        return x.value
      }
    )

    this.tipoBasic = {
      series: [
        {
          name: 'January',
          data: [
            {
              x: descripcionUnsafe,
              y: valorUnsafe,
            },
            {
              x: descripcionHOS,
              y: valorHOS,
            },
            {
              x: descripcionVehiculo,
              y: valorVehicle,
            },
            {
              x: descripcionControlled,
              y: valueControlled,
            },
            {
              x: descripcionDriver,
              y: valueDriver,
            },
          ],
        },
        {
          name: 'February',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'March',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'April',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'May',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'June',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'July',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'August',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'September',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'October',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'November',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'December',
          data: [
            {
              x: descripcionUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: descripcionHOS,
              y: valueSecondHos,
            },
            {
              x: descripcionVehiculo,
              y: valueSecondVehicle,
            },
            {
              x: descripcionControlled,
              y: valueSecondControlled,
            },
            {
              x: descripcionDriver,
              y: valueSecondDriver,
            },
          ],
        },
      ],
      chart: {
        height: 280,
        width: 300,

        type: 'heatmap',
      },
      colors: ['#008FFB'],
    }
  }
}
