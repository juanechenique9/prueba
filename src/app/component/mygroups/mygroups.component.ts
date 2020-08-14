import { Component, OnInit } from '@angular/core';
import{Grupos} from 'src/app/model/grupos';
import{GruposdeService} from 'src/app/services/gruposde.service';
import { GroupsEditarComponent } from './groups-editar.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent implements OnInit {

  grupos: Array<Grupos> =new Array<Grupos>()
  copygrupos: Array<Grupos> = new Array<Grupos>();
  bsModalRef: BsModalRef;


  constructor(private grupoInjectado:GruposdeService,private modalService: BsModalService) { }

  ngOnInit(): void {

    this.insertar();

  }

  
  insertar(){
    this.grupoInjectado.LeerGrupos().subscribe(gruposdesdeapi =>{
      this.grupos = gruposdesdeapi
      this.copygrupos = gruposdesdeapi
    },
     error => console.error(error)
     
     
    )

  }

  buscarGrupo(event){

   let nombreGrupo: string = event.target.value

   if(nombreGrupo===""){

    this.copygrupos = this.grupos;

   }else{

  this.copygrupos = this.grupos.filter(v=>{
    return v.name.toLowerCase().includes(nombreGrupo)
  })

   }

  }

 

editarGrupo(grupo:Grupos) {
  
  this.bsModalRef = this.modalService.show(GroupsEditarComponent,{


    initialState:{
      title:'Editar Grupo',
      data:{Name: grupo.name, Descripciòn: grupo.descripcion}
    }


  });

  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.setClass('modal-sm');

}

}


