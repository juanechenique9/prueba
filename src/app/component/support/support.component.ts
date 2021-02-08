import { Component, OnInit } from '@angular/core'
import { Support } from 'src/app/model/support'
import { SoporteService } from 'src/app/services/soporte.service'

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  support
  loading: boolean
  constructor(public supportInjection: SoporteService) {}

  ngOnInit(): void {
    this.supportService()
  }

  supportService() {
    this.loading = true
    this.supportInjection.getSupport().subscribe((supportList) => {
      this.support = supportList
      this.loading = false
    })
  }
}
