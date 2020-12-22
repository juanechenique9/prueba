import { Component, OnInit } from '@angular/core'
import { Support } from 'src/app/model/support'
import { SoporteService } from 'src/app/services/soporte.service'

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  support: Array<Support> = new Array<Support>()
  loading: boolean
  constructor(private supportInjection: SoporteService) {}

  ngOnInit(): void {
    this.supportService()
  }

  supportService() {
    this.loading = true
    this.supportInjection.getSupport().subscribe((supportApi) => {
      this.support = supportApi
      this.loading = false
    })
  }
}
