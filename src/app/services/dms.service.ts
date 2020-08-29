import { Injectable } from '@angular/core';
import {listaCarrier} from 'src/app/model/listaCarrier'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DmsService {

  dms: listaCarrier = new listaCarrier()

  ruta: string = 'https://run.mocky.io/v3/cebc2e92-5504-46df-b75a-3dbd6a676f5c'

  constructor(private http: HttpClient) { }


  leerDms(): Observable<listaCarrier[]>{
    return this.http.get<listaCarrier[]>(this.ruta)
  }

}
