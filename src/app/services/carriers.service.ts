import { Injectable } from '@angular/core';
import { Habilidades } from '../model/habilidades';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarriersService {

  habilidades: Habilidades = new Habilidades();
  constructor(private http: HttpClient) { }


 

  leerNoticias() : Observable<Habilidades[]>{
    
  return  this.http.get<Habilidades[]>('https://run.mocky.io/v3/3cff91a7-5b72-4958-94ce-87356c97cd47')
}

}
