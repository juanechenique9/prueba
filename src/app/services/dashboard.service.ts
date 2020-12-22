import { Injectable } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  ruta: string = 'https://run.mocky.io/v3/1acb1c07-42ea-414b-9bec-3218305eee22'

  constructor(private http: HttpClient) {}

  getDash(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.ruta)
  }
}
