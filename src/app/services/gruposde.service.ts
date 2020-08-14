import { Injectable } from '@angular/core';
import {Grupos} from 'src/app/model/grupos';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class GruposdeService {

  grupos: Grupos = new Grupos();

  constructor(private http: HttpClient) {}


    LeerGrupos() : Observable<Grupos[]>{

      return this.http.get<Grupos[]>('https://run.mocky.io/v3/48bd5473-8208-4932-8666-d2c3829716e4')

    }

   
}
