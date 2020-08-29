import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { Grupos } from 'src/app/model/grupos'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-grupo-agregar',
  templateUrl: './grupo-agregar.component.html',
  styleUrls: ['./grupo-agregar.component.css']
})
export class GrupoAgregarComponent implements OnInit {
  forma: FormGroup
  title: string
  closeBtnName: string
  public data: Subject<any>

  constructor (public fb: FormBuilder, public bsModalRef: BsModalRef) {
    this.forma = fb.group({
<<<<<<< HEAD
=======
      id: Math.random(),
>>>>>>> 5ed27f6... version 5
      name: '',
      descripcion: ''
    })
  }

  ngOnInit (): void {
    this.data = new Subject()
  }

  agregarGrupos () {
    console.log(this.forma.value)

    this.data.next(this.forma.value)

    this.bsModalRef.hide()
  }
}
