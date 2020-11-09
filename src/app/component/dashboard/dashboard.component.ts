import { Component, OnInit,ViewChild, AfterViewInit, ElementRef, AfterContentChecked } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { DashboardService } from 'src/app/services/dashboard.service'
import { Chart } from 'chart.js';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements  OnInit,  AfterViewInit {
 
  @ViewChild('Mychart')
   chartRef: ElementRef;
  chart = []
  dashboard: Array<Dashboard> = new Array<Dashboard>()
  loading: boolean
  



  constructor(private dashInjectado: DashboardService) {}

  ngOnInit(){
    this.insertarDash()
   
      
   
  }

  ngAfterViewInit() {
   
    this.dona();
    
  }


  insertarDash() {
    this.loading = true
    this.dashInjectado.obtenerDash().subscribe((dashdesdeapi) => {
      this.dashboard = dashdesdeapi
      
     this.loading = false      
     
    })

    
  }

  dona(){ 

    
  
  let etiqueta = this.dashboard[0]?.fleetSizes.map(d=> {return d.name})
  let valor = this.dashboard[0]?.fleetSizes.map(o=> {return o.value})
  
  
this.chart.push(new Chart(this.chartRef?.nativeElement, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valor,
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
        ],
        label: 'Dataset 1'
      }],
      labels: etiqueta
    },
    options: {
      responsive: true,
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
}));

  

   
   
  
  }

}




  
  
 
    
 
  

