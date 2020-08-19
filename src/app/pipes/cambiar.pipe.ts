import { Pipe, PipeTransform } from '@angular/core'
import { Habilidades } from '../model/habilidades'

@Pipe({
  name: 'cambiar'
})
export class CambiarPipe implements PipeTransform {
  transform (value: string): string {
    value = value.toUpperCase()
    let manda_palabra
    let palabra
    let a: ''
    let b: ''
    let manda

    palabra = value.split(' ')

    console.log(palabra)

    if (palabra.length == 1) {
      a = palabra[0]

      manda = '' + a.charAt(0)

      return manda
    } else {
      a = palabra[0]
      b = palabra[1]

      manda_palabra = '' + a.charAt(0) + '' + '' + b.charAt(0) + ''

      return manda_palabra
    }
  }
}
