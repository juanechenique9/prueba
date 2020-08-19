import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './component/inicio/inicio.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { ReportComponent } from './component/report/report.component'
import { CarriersComponent } from './component/carriers/carriers.component'
import { MygroupsComponent } from './component/mygroups/mygroups.component'
import { ProspectsComponent } from './component/prospects/prospects.component'
import { DMSComponent } from './component/dms/dms.component'
import { MessagingComponent } from './component/messaging/messaging.component'
import { SettingsComponent } from './component/settings/settings.component'
import { SupportComponent } from './component/support/support.component'
import { GroupsEditarComponent } from './component/mygroups/groups-editar.component'

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'carriers', component: CarriersComponent },
  { path: 'groups', component: MygroupsComponent },
  { path: 'prospect', component: ProspectsComponent },
  { path: 'Dms', component: DMSComponent },
  { path: 'Messaging', component: MessagingComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'Support', component: SupportComponent },
  { path: '**', component: InicioComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
