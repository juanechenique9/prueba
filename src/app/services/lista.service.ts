import { Injectable } from '@angular/core';
import {lista} from '../model/Lista';

@Injectable()
export class ListaService {

private listar: lista[] = [
  {
    id:0,
    nombre:'Filter by All'
  },

  {
    id:1,
    nombre:'Filter by Qualified'
  },

  {
    id:2,
    nombre:'Filter by Unqualified'
  }
]

  getListar(): lista[]{
    return this.listar;
  }
}

