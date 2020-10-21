import { Injectable } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  ruta: string = 'https://run.mocky.io/v3/61881f12-a930-4b82-a438-9679a69a5753'

  constructor(private http: HttpClient) {}

  obtenerDash(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.ruta)
  }
}
