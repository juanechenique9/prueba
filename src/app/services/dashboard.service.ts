import { Injectable } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  ruta: string = 'https://run.mocky.io/v3/1acb1c07-42ea-414b-9bec-3218305eee22'
  rutaFleet: string =
    'https://run.mocky.io/v3/a702d369-e767-4237-ac85-4c9274a28a3c'

  constructor(private http: HttpClient) {}

  getDash(): Observable<any> {
    return this.http.get<any>(this.ruta)
  }

  getFleet(): Observable<any> {
    return this.http.get<any>(this.rutaFleet)
  }
}
