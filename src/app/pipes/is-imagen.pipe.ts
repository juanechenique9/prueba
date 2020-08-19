import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'isImagen',
})
export class IsImagenPipe implements PipeTransform {
  transform(value: boolean): any {
    let img = document.createElement('img')

    if (value == true) {
      img.setAttribute('src', 'assets/img/qualifi.png')
      img.setAttribute('alt', 'image')
      document.body.appendChild(img)
    } else {
      img.setAttribute('src', 'assets/img/quialifin.png')
      img.setAttribute('alt', 'image')
      document.body.appendChild(img)
    }

    console.log(img)

    return img
  }
}
