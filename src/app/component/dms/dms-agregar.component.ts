import { Component, OnInit } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-dms-agregar',
  templateUrl: './dms-agregar.component.html',
  styleUrls: ['./dms-agregar.component.css'],
})
export class DmsAgregarComponent implements OnInit {
  forma: FormGroup
  title: string
  closeBtnName: string
  valueChange = false
  public data: Subject<any>
  constructor(public fb: FormBuilder, public bsModalRef: BsModalRef) {
    this.forma = fb.group({
      id: Math.random(),
      documentName: '',
      providerType: '',
      value: false,
    })
  }

  ngOnInit(): void {
    this.data = new Subject()
  }

  agregarDocumentos() {
    console.log(this.forma.value)

    this.data.next(this.forma.value)

    this.bsModalRef.hide()
  }

  onValueChange(value: boolean) {
    this.valueChange = value
  }
}
