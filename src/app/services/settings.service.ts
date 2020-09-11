import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Settings } from 'src/app/model/settings'

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = new Settings()

  ruta: string = 'https://run.mocky.io/v3/0d43be61-09e8-47e0-afe3-07f086e7c68d'

  constructor(private http: HttpClient) {}

  leerSettings(): Observable<Settings[]> {
    return this.http.get<Settings[]>(this.ruta)
  }
}
