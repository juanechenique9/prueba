import { Injectable } from '@angular/core'
import { listaCarrier } from 'src/app/model/listaCarrier'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DmsService {
  ruta: string = 'https://run.mocky.io/v3/47164501-a3a6-4ad0-8bc8-2a23a2b22d25'

  constructor(private http: HttpClient) {}

  getDms(): Observable<listaCarrier[]> {
    return this.http.get<listaCarrier[]>(this.ruta)
  }
}
