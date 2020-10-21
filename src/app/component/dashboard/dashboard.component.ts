import { Component, OnInit } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'
import { DashboardService } from 'src/app/services/dashboard.service'

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboard: Array<Dashboard> = new Array<Dashboard>()
  loading: boolean
  options: GridsterConfig

  constructor(private dashInjectado: DashboardService) {}

  ngOnInit(): void {
    this.insertarDash()
  }

  insertarDash() {
    this.loading = true
    this.dashInjectado.obtenerDash().subscribe((dashdesdeapi) => {
      this.dashboard = dashdesdeapi
      this.loading = false
    })
  }

  onDropped(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
