///Componentes
import { AppComponent } from './app.component';
import { CarriersComponent } from './component/carriers/carriers.component';
import { ListasComponent } from './component/listas/listas.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReportComponent } from './component/report/report.component';
import { MygroupsComponent } from './component/mygroups/mygroups.component';
import { ProspectsComponent } from './component/prospects/prospects.component';
import { DMSComponent } from './component/dms/dms.component';
import { MessagingComponent } from './component/messaging/messaging.component';
import { SettingsComponent } from './component/settings/settings.component';
import { SupportComponent } from './component/support/support.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { Habilidades } from "./model/habilidades";
import { GroupsEditarComponent } from './component/mygroups/groups-editar.component';


////Pipes///
import { CambiarPipe } from './pipes/cambiar.pipe';
import { IsImagenPipe } from './pipes/is-imagen.pipe';
import { FilterPipe } from './pipes/filter.pipe';

////Servicios
import {GruposdeService} from './services/gruposde.service';
import {CarriersService} from "./services/carriers.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

//Modulos
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({

  

  declarations: [
    AppComponent,
    CarriersComponent,
    ListasComponent,
    DashboardComponent,
    ReportComponent,
    MygroupsComponent,
    ProspectsComponent,
    DMSComponent,
    MessagingComponent,
    SettingsComponent,
    SupportComponent,
    InicioComponent,
    FilterPipe,
    CambiarPipe,
    IsImagenPipe,
    
    
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgbModule,
    ButtonsModule.forRoot(),
   
    
  ],


  entryComponents:[GroupsEditarComponent],

  providers: [
    CarriersService,
    GruposdeService
  ],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
