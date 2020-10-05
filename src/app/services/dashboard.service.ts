import { Injectable } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  ruta: string = 'https://run.mocky.io/v3/0fa2e5c6-16da-4cee-8ff9-f14d2e167567'

  constructor(private http: HttpClient) {}

  obtenerDash(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.ruta)
  }
}
