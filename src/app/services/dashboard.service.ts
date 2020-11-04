import { Injectable } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  ruta: string = 'https://run.mocky.io/v3/27327a51-e39e-4ef7-b4c4-cbf56782b2e0'

  constructor(private http: HttpClient) {}

  obtenerDash(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.ruta)
  }
}
