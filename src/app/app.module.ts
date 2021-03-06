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
import { DmsAgregarComponent } from './component/dms/dms-agregar.component'

////Pipes///
import { CambiarPipe } from './pipes/cambiar.pipe'
import { IsImagenPipe } from './pipes/is-imagen.pipe'
import { FilterPipe } from './pipes/filter.pipe'

////Servicios
import { GruposdeService } from './services/gruposde.service'
import { CarriersService } from './services/carriers.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { SoporteService } from 'src/app/services/soporte.service'
import { DmsService } from './services/dms.service'
import { DocumentosService } from './services/documentos.service'

//Modulos
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ChartsModule } from 'ng2-charts'
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
import { UiSwitchModule } from 'ngx-ui-switch'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { NgxSpinnerModule } from 'ngx-spinner'
import { SortablejsModule } from 'ngx-sortablejs'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { NgApexchartsModule } from 'ng-apexcharts'

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
    GrupoAgregarComponent,
    DmsAgregarComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    UiSwitchModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgbModule,
    ButtonsModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 }),
    NgxPaginationModule,
    TabsModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule,
    BsDropdownModule.forRoot(),
    NgxChartsModule,
    DragDropModule,
    ScrollingModule,
    NgApexchartsModule,
  ],

  entryComponents: [GrupoAgregarComponent],

  providers: [
    CarriersService,
    GruposdeService,
    DmsService,
    DocumentosService,
    SoporteService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
