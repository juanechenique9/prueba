import { Injectable } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  ruta: string = 'https://run.mocky.io/v3/d57a39d8-fbef-4311-bb5a-98e01a46f2e2'

  constructor(private http: HttpClient) {}

  obtenerDash(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.ruta)
  }
}
