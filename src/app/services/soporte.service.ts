import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Support } from 'src/app/model/support'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class SoporteService {
  ruta: string = 'https://run.mocky.io/v3/2fe31326-a8f5-472e-94a4-ba8e51480829'

  constructor(private http: HttpClient) {}

  getSupport(): Observable<Support[]> {
    return this.http.get<Support[]>(this.ruta)
  }
}
