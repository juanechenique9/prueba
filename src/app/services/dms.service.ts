import { Injectable } from '@angular/core'
import { listaCarrier } from 'src/app/model/listaCarrier'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DmsService {
  dms: listaCarrier = new listaCarrier()

  ruta: string = 'https://run.mocky.io/v3/75af022a-68cc-4e2a-bd28-196621b2691c'

  constructor(private http: HttpClient) {}

  leerDms(): Observable<listaCarrier[]> {
    return this.http.get<listaCarrier[]>(this.ruta)
  }
}
