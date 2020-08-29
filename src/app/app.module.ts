///Componentes
import { AppComponent } from './app.component'
import { CarriersComponent } from './component/carriers/carriers.component'
import { ListasComponent } from './component/listas/listas.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { ReportComponent } from './component/report/report.component'
import { MygroupsComponent } from './component/mygroups/mygroups.component'
import { ProspectsComponent } from './component/prospects/prospects.component'
import { DMSComponent } from './component/dms/dms.component'
import { MessagingComponent } from './component/messaging/messaging.component'
import { SettingsComponent } from './component/settings/settings.component'
import { SupportComponent } from './component/support/support.component'
import { InicioComponent } from './component/inicio/inicio.component'
import { Habilidades } from './model/habilidades'
import { GroupsEditarComponent } from './component/mygroups/groups-editar.component'

////Pipes///
import { CambiarPipe } from './pipes/cambiar.pipe'
import { IsImagenPipe } from './pipes/is-imagen.pipe'
import { FilterPipe } from './pipes/filter.pipe'

////Servicios
import { GruposdeService } from './services/gruposde.service'
import { CarriersService } from './services/carriers.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
<<<<<<< HEAD
=======
import {DmsService} from './services/dms.service'
import {DocumentosService} from './services/documentos.service'
>>>>>>> 5ed27f6... version 5

//Modulos
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { ModalModule } from 'ngx-bootstrap/modal'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { GrupoAgregarComponent } from './component/mygroups/grupo-agregar.component'
import { NgxPaginationModule } from 'ngx-pagination'
<<<<<<< HEAD
=======
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
>>>>>>> 5ed27f6... version 5

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
    GrupoAgregarComponent
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
<<<<<<< HEAD
    NgxPaginationModule
=======
    TabsModule.forRoot(),
    NgxPaginationModule,
    BsDropdownModule.forRoot()
   
>>>>>>> 5ed27f6... version 5
  ],

  entryComponents: [GrupoAgregarComponent],

<<<<<<< HEAD
  providers: [CarriersService, GruposdeService],
=======
  providers: [CarriersService, GruposdeService,DmsService,DocumentosService],
>>>>>>> 5ed27f6... version 5
  bootstrap: [AppComponent]
})
export class AppModule {}
