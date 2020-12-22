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
  nameFleet
  typeFleet
  dataFleet
  typeSafety
  etiquetasLinea
  typeRated
  dataRated
  dataReport
  DateRated
  dateTrend
  lineChartLegend
  dataSafety
  typeTrend
  labelSafety
  dataStatus
  nameStatus
  typeStatus
  tipoBasic

  constructor(private dashInjection: DashboardService) {}

  ngOnInit() {
    this.dashService()
  }

  dashService() {
    try {
      this.loading = true
      this.dashInjection.getDash().subscribe((dashApi: Array<Dashboard>) => {
        this.dashboard.push(dashApi[0])
        this.fleetSizes()
        this.ratedCarriers()
        this.carriersSafety()
        this.carrierStatus()
        this.trendReport()
        this.scoreMean()
        this.loading = false
      })
    } catch (error) {}
  }

  fleetSizes() {
    let labelFleet = this.dashboard[0].fleetSizes.map((d) => {
      return d.name
    })
    let valueFleet = this.dashboard[0].fleetSizes.map((o) => {
      return o.value
    })

    this.nameFleet = labelFleet
    this.typeFleet = 'doughnut'
    this.dataFleet = valueFleet
  }

  ratedCarriers() {
    let nameSatisfactory = this.dashboard[0].ratedSatis.map((x) => {
      return x.name
    })

    let nameUnrated = this.dashboard[0].ratedUnra.map((x) => {
      return x.name
    })

    let nameConditional = this.dashboard[0].ratedCondicion.map((x) => {
      return x.name
    })

    let nameUnsatisfactory = this.dashboard[0].ratedUnsatis.map((x) => {
      return x.name
    })

    let valueSatisfactory = this.dashboard[0].ratedSatisfactory.map((x) => {
      return x.value
    })

    let valueUnrated = this.dashboard[0].ratedUnrated.map((x) => {
      return x.value
    })

    let valueConditional = this.dashboard[0].ratedConditional.map((x) => {
      return x.value
    })

    let valueUnsatisfactory = this.dashboard[0].ratedUnsatisfactory.map((x) => {
      return x.value
    })

    this.dataRated = [
      { data: valueSatisfactory, label: nameSatisfactory },
      { data: valueUnrated, label: nameUnrated },
      { data: valueConditional, label: nameConditional },
      { data: valueUnsatisfactory, label: nameUnsatisfactory },
    ]

    this.typeRated = 'line'

    this.DateRated = [
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

  carriersSafety() {
    let valueSafety = this.dashboard[0].MyCarrierSafety.map((h) => {
      return h.value
    })
    let nameSafety = this.dashboard[0].MyCarrierSafety.map((i) => {
      return i.name
    })
    this.typeSafety = 'doughnut'

    this.dataSafety = valueSafety
    this.labelSafety = nameSafety
  }

  carrierStatus() {
    let labelStatus = this.dashboard[0].carrierStatus.map((v) => {
      return v.name
    })

    let valueStatus = this.dashboard[0].carrierStatus.map((b) => {
      return b.value
    })

    this.dataStatus = valueStatus
    this.nameStatus = labelStatus
    this.typeStatus = 'doughnut'
  }

  trendReport() {
    this.dateTrend = [
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

    this.typeTrend = 'line'

    let labelDriving = this.dashboard[0].trendDriving.map((x) => {
      return x.name
    })

    let labelCompliance = this.dashboard[0].trendCompliance.map((x) => {
      return x.name
    })

    let labelVehicle = this.dashboard[0].trendVehicle.map((x) => {
      return x.name
    })

    let labelSubstances = this.dashboard[0].ratedSubstances.map((x) => {
      return x.name
    })

    let labelFitness = this.dashboard[0].ratedFitness.map((x) => {
      return x.name
    })

    this.dataReport = [
      { data: '', label: labelDriving },
      { data: '', label: labelCompliance },
      { data: '', label: labelVehicle },
      { data: '', label: labelSubstances },
      { data: '', label: labelFitness },
    ]
  }

  scoreMean() {
    let labelUnsafe = this.dashboard[0].basicUnsafe.map((x) => {
      return x.name
    })

    let valueUnsafe = this.dashboard[0].basicUnsafeValue.map((x) => {
      return x.value
    })

    let labelHOS = this.dashboard[0].basicHOS.map((x) => {
      return x.name
    })

    let valueHOS = this.dashboard[0].basicHOSValue.map((x) => {
      return x.value
    })

    let labelVehicle = this.dashboard[0].basicVehicle.map((x) => {
      return x.name
    })

    let valueVehicle = this.dashboard[0].basicVehicleValue.map((x) => {
      return x.value
    })

    let labelControlled = this.dashboard[0].basicControlled.map((x) => {
      return x.name
    })

    let valueControlled = this.dashboard[0].basicControlledValue.map((x) => {
      return x.value
    })

    let labelDriver = this.dashboard[0].basicDriver.map((x) => {
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
              x: labelUnsafe,
              y: valueUnsafe,
            },
            {
              x: labelHOS,
              y: valueHOS,
            },
            {
              x: labelVehicle,
              y: valueVehicle,
            },
            {
              x: labelControlled,
              y: valueControlled,
            },
            {
              x: labelDriver,
              y: valueDriver,
            },
          ],
        },
        {
          name: 'February',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'March',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'April',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'May',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'June',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'July',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'August',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'September',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'October',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'November',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
              y: valueSecondDriver,
            },
          ],
        },
        {
          name: 'December',
          data: [
            {
              x: labelUnsafe,
              y: valueSecondUnsafe,
            },
            {
              x: labelHOS,
              y: valueSecondHos,
            },
            {
              x: labelVehicle,
              y: valueSecondVehicle,
            },
            {
              x: labelControlled,
              y: valueSecondControlled,
            },
            {
              x: labelDriver,
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
