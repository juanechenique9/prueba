import { Component, OnInit } from '@angular/core'
import { Settings } from 'src/app/model/settings'
import { SettingsService } from 'src/app/services/settings.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings: Array<Settings> = new Array<Settings>()
  loading: boolean
  constructor(private settingInjectado: SettingsService) {}

  ngOnInit(): void {
    this.insectarSettings()
  }

  insectarSettings() {
    this.loading = true
    this.settingInjectado.leerSettings().subscribe((settingsdesdeapi) => {
      this.settings = settingsdesdeapi
      this.loading = false
    })
  }
}
