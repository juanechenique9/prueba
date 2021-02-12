import { Component, OnInit } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { DashboardService } from 'src/app/services/dashboard.service'
import { ChartType } from 'chart.js'
import { Fleet } from 'src/app/model/fleet'
import { Safety } from 'src/app/model/safety'
import { carrierStatus } from 'src/app/model/carrierStatus'
import { expiredDocument } from 'src/app/model/expiredDocument'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboard: Array<Dashboard> = new Array<Dashboard>()
  fleet: Array<Fleet> = new Array<Fleet>()
  safety: Array<Safety> = new Array<Safety>()
  carrierstatus: Array<carrierStatus> = new Array<carrierStatus>()
  expiredocument: Array<expiredDocument> = new Array<expiredDocument>()
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

  constructor(public dashInjection: DashboardService) {}

  ngOnInit() {
    this.dashService()
    this.fleetService()
    this.safetyService()
    this.statusService()
    this.expiredService()
  }

  dashService() {
    this.loading = true
    this.dashInjection.getDash().subscribe((dashList) => {
      this.dashboard = dashList
      this.fleetSizes()
      this.ratedCarriers()
      this.carriersSafety()
      this.carrierStatus()
      this.trendReport()
      this.scoreMean()
      this.loading = false
    })
  }

  fleetService() {
    this.dashInjection.getFleet().subscribe((fleetList) => {
      this.fleet = fleetList
    })
  }

  safetyService() {
    this.dashInjection.getSafety().subscribe((safetList) => {
      this.safety = safetList
    })
  }

  statusService() {
    this.dashInjection.getCarrier().subscribe((statusList) => {
      this.carrierstatus = statusList
    })
  }

  expiredService() {
    this.dashInjection.getExpired().subscribe((expiredList) => {
      this.expiredocument = expiredList
    })
  }

  fleetSizes() {
    if (this.dashboard[0] && this.dashboard[0].fleetSizes) {
      this.nameFleet = this.dashboard[0].fleetSizes.map((d: any) => {
        return d.name
      })
      this.dataFleet = this.dashboard[0].fleetSizes.map((o: any) => {
        return o.value
      })

      this.typeFleet = 'doughnut'
    }
  }

  ratedCarriers() {
    if (
      this.dashboard &&
      this.dashboard[0].ratedSatis &&
      this.dashboard[0].ratedUnra &&
      this.dashboard[0].ratedCondicion &&
      this.dashboard[0].ratedUnsatis &&
      this.dashboard[0].ratedSatisfactory &&
      this.dashboard[0].ratedUnrated &&
      this.dashboard[0].ratedConditional &&
      this.dashboard[0].ratedUnsatisfactory
    ) {
      let nameSatisfactory = this.dashboard[0].ratedSatis.map((x: any) => {
        return x.name
      })

      let nameUnrated = this.dashboard[0].ratedUnra.map((x: any) => {
        return x.name
      })

      let nameConditional = this.dashboard[0].ratedCondicion.map((x: any) => {
        return x.name
      })

      let nameUnsatisfactory = this.dashboard[0].ratedUnsatis.map((x: any) => {
        return x.name
      })

      let valueSatisfactory = this.dashboard[0].ratedSatisfactory.map(
        (x: any) => {
          return x.value
        }
      )

      let valueUnrated = this.dashboard[0].ratedUnrated.map((x: any) => {
        return x.value
      })

      let valueConditional = this.dashboard[0].ratedConditional.map(
        (x: any) => {
          return x.value
        }
      )

      let valueUnsatisfactory = this.dashboard[0].ratedUnsatisfactory.map(
        (x: any) => {
          return x.value
        }
      )

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
  }

  carriersSafety() {
    if (this.dashboard && this.dashboard[0].MyCarrierSafety) {
      let valueSafety = this.dashboard[0].MyCarrierSafety.map((h: any) => {
        return h.value
      })
      let nameSafety = this.dashboard[0].MyCarrierSafety.map((i: any) => {
        return i.name
      })
      this.typeSafety = 'doughnut'

      this.dataSafety = valueSafety
      this.labelSafety = nameSafety
    }
  }

  carrierStatus() {
    if (this.dashboard && this.dashboard[0].carrierStatus) {
      let labelStatus = this.dashboard[0].carrierStatus.map((v: any) => {
        return v.name
      })

      let valueStatus = this.dashboard[0].carrierStatus.map((b: any) => {
        return b.value
      })

      this.dataStatus = valueStatus
      this.nameStatus = labelStatus
      this.typeStatus = 'doughnut'
    }
  }

  trendReport() {
    if (
      this.dashboard &&
      this.dashboard[0].trendDriving &&
      this.dashboard[0].trendCompliance &&
      this.dashboard[0].trendVehicle &&
      this.dashboard[0].ratedSubstances &&
      this.dashboard[0].ratedFitness
    ) {
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

      let labelDriving = this.dashboard[0].trendDriving.map((x: any) => {
        return x.name
      })

      let labelCompliance = this.dashboard[0].trendCompliance.map((x: any) => {
        return x.name
      })

      let labelVehicle = this.dashboard[0].trendVehicle.map((x: any) => {
        return x.name
      })

      let labelSubstances = this.dashboard[0].ratedSubstances.map((x: any) => {
        return x.name
      })

      let labelFitness = this.dashboard[0].ratedFitness.map((x: any) => {
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
  }

  scoreMean() {
    if (
      this.dashboard &&
      this.dashboard[0].basicUnsafe &&
      this.dashboard[0].basicUnsafeValue &&
      this.dashboard[0].basicHOS &&
      this.dashboard[0].basicHOSValue &&
      this.dashboard[0].basicVehicle &&
      this.dashboard[0].basicVehicleValue &&
      this.dashboard[0].basicControlled &&
      this.dashboard[0].basicControlledValue &&
      this.dashboard[0].basicDriver &&
      this.dashboard[0].basicDriverValue &&
      this.dashboard[0].basicUnsafeValueSecond &&
      this.dashboard[0].basicHOSValueSecond &&
      this.dashboard[0].basicVehicleValueSecond &&
      this.dashboard[0].basicControlledValueSecond &&
      this.dashboard[0].basicDriverValueSecond
    ) {
      let labelUnsafe = this.dashboard[0].basicUnsafe.map((x: any) => {
        return x.name
      })

      let valueUnsafe = this.dashboard[0].basicUnsafeValue.map((x: any) => {
        return x.value
      })

      let labelHOS = this.dashboard[0].basicHOS.map((x: any) => {
        return x.name
      })

      let valueHOS = this.dashboard[0].basicHOSValue.map((x: any) => {
        return x.value
      })

      let labelVehicle = this.dashboard[0].basicVehicle.map((x: any) => {
        return x.name
      })

      let valueVehicle = this.dashboard[0].basicVehicleValue.map((x: any) => {
        return x.value
      })

      let labelControlled = this.dashboard[0].basicControlled.map((x: any) => {
        return x.name
      })

      let valueControlled = this.dashboard[0].basicControlledValue.map(
        (x: any) => {
          return x.value
        }
      )

      let labelDriver = this.dashboard[0].basicDriver.map((x: any) => {
        return x.name
      })

      let valueDriver = this.dashboard[0].basicDriverValue.map((x: any) => {
        return x.value
      })

      let valueSecondUnsafe = this.dashboard[0].basicUnsafeValueSecond.map(
        (x: any) => {
          return x.value
        }
      )

      let valueSecondHos = this.dashboard[0].basicHOSValueSecond.map(
        (x: any) => {
          return x.value
        }
      )

      let valueSecondVehicle = this.dashboard[0].basicVehicleValueSecond.map(
        (x: any) => {
          return x.value
        }
      )

      let valueSecondControlled = this.dashboard[0].basicControlledValueSecond.map(
        (x: any) => {
          return x.value
        }
      )

      let valueSecondDriver = this.dashboard[0].basicDriverValueSecond.map(
        (x: any) => {
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
}
