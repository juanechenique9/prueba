import { Injectable } from '@angular/core'
import { Habilidades } from '../model/habilidades'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CarriersService {
  habilidades: Habilidades = new Habilidades()
  constructor(private http: HttpClient) {}

  getCarriers(): Observable<any> {
    return this.http.get<any>(
      'https://run.mocky.io/v3/721c5a5d-cfb2-41aa-a545-1ad74230b324'
    )
  }
}
