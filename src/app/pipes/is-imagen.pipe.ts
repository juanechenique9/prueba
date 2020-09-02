import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'isImagen',
})
export class IsImagenPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase()
    let nombres = value.split(' ')

    if (todas) {
      nombres = nombres.map((nombres) => {
        return nombres[0].toUpperCase() + nombres.substr(1)
      })
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1)
    }

    return nombres.join(' ')
  }
}
