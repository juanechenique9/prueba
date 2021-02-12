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

  rutaSafety: string =
    'https://run.mocky.io/v3/2c4c5d4e-c610-42e2-a4df-ed7277e27df8'

  rutaCarrier: string =
    'https://run.mocky.io/v3/e44f26ab-d22d-48eb-bab3-b6f825752814'

  rutaExpired: string =
    'https://run.mocky.io/v3/420877ef-6ac3-41cb-9bef-43e8b310d9e2'

  constructor(private http: HttpClient) {}

  getDash(): Observable<any> {
    return this.http.get<any>(this.ruta)
  }

  getFleet(): Observable<any> {
    return this.http.get<any>(this.rutaFleet)
  }

  getSafety(): Observable<any> {
    return this.http.get<any>(this.rutaSafety)
  }

  getCarrier(): Observable<any> {
    return this.http.get<any>(this.rutaCarrier)
  }

  getExpired(): Observable<any> {
    return this.http.get<any>(this.rutaExpired)
  }
}
