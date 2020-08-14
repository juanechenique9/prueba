import { Component, OnInit } from '@angular/core';
import { Grupos } from 'src/app/model/grupos';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormBuilder,FormGroup} from '@angular/forms'
import { RunGuardsAndResolvers } from '@angular/router';




@Component({
  selector: 'app-groups-editar',
  templateUrl: './groups-editar.component.html',
  styleUrls: ['./groups-editar.component.css']
})
export class GroupsEditarComponent implements OnInit {

  forma: FormGroup;

  data:Grupos;
  title: string;
  closeBtnName: string; 

  constructor(public fb:FormBuilder,public bsModalRef: BsModalRef ) {

    this.forma = fb.group({
      'name': this.data.name,
      'descripcion': this.data.descripcion
    });

   }

  

  ngOnInit(): void {
  }

  guardarCambios(){

  }

}
