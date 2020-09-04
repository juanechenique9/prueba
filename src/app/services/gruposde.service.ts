import { Injectable } from '@angular/core'
import { Grupos } from 'src/app/model/grupos'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GruposdeService {
  grupos: Grupos = new Grupos()

  ruta: string = 'https://run.mocky.io/v3/ee9c6d5b-1c48-41e7-b97e-b20183be1be8'

  constructor(private http: HttpClient) {}

  LeerGrupos(): Observable<Grupos[]> {
    return this.http.get<Grupos[]>(this.ruta)
  }
}
