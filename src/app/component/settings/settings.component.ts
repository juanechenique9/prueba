import { Component, OnInit } from '@angular/core'
import { Settings } from 'src/app/model/settings'
import { SettingsService } from 'src/app/services/settings.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings
  loading: boolean
  constructor(public settingInjection: SettingsService) {}

  ngOnInit(): void {
    this.settingService()
  }

  settingService() {
    this.loading = true
    this.settingInjection.getSetting().subscribe((settingsList) => {
      this.settings = settingsList
      this.loading = false
    })
  }
}
