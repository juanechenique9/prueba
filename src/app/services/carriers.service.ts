import { Injectable } from '@angular/core'
import { Habilidades } from '../model/habilidades'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CarriersService {
  habilidades: Habilidades = new Habilidades()
  constructor (private http: HttpClient) {}

  leerNoticias (): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(
      'https://run.mocky.io/v3/8ea71824-11a9-415d-8b38-6c4a4c81c054'
    )
  }
}
