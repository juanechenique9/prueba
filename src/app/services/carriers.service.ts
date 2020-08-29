import { Injectable } from '@angular/core'
import { Habilidades } from '../model/habilidades'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

<<<<<<< HEAD
=======

>>>>>>> 5ed27f6... version 5
@Injectable({
  providedIn: 'root'
})
export class CarriersService {
  habilidades: Habilidades = new Habilidades()
  constructor (private http: HttpClient) {}
<<<<<<< HEAD

  leerNoticias (): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(
      'https://run.mocky.io/v3/8ea71824-11a9-415d-8b38-6c4a4c81c054'
    )
  }
=======
 
  leerNoticias (): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(
      'https://run.mocky.io/v3/8d9ae8ff-8a1c-4c1c-b980-8fb118030612'
    )
  }

  

>>>>>>> 5ed27f6... version 5
}
