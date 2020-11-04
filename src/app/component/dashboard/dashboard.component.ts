import { Component, OnInit,ViewChild, AfterViewInit, ElementRef } from '@angular/core'
import { Dashboard } from 'src/app/model/dashboard'
import { DashboardService } from 'src/app/services/dashboard.service'
import { Chart } from 'chart.js';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
 
  
  dashboard: Array<Dashboard> = new Array<Dashboard>()
  loading: boolean
  chart = [];
  @ViewChild('myCanvas') myCanvas;


  constructor(private dashInjectado: DashboardService) {}

  ngOnInit(): void {
    this.insertarDash()
    setTimeout(() => {
      this.dona();
    }, 1000);
    
  }

  

  insertarDash() {
    this.loading = true
    this.dashInjectado.obtenerDash().subscribe((dashdesdeapi) => {
      this.dashboard = dashdesdeapi

      
    
     this.loading = false
     
    })
  }


  dona(){ 
  
  let etiqueta = this.dashboard.map(v=>{
    return v.fleetSizes.map(d=> {return d.name})
  })

  console.log(etiqueta)


   let valor = this.dashboard.map(r=>{
    return r.fleetSizes.map(o=> {return o.value})
  }) 

  
   console.log(valor) 

   var canvas = <HTMLCanvasElement> document.getElementById("canvas");
var ctx = canvas.getContext("2d");

   new Chart(ctx,{
    type: 'doughnut',
    data: {
      labels: [
        'Red',
        'Yellow',
        'Blue'
    ],
        datasets: [{
            
          data: [10, 20, 30],
          backgroundColor: [
                'blue',
                'red',
                'green'
                
          ],
          borderColor: [
            'blue',
            'pink',
            'green'
          ],
          borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      
     
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  }); 
   
  
  }

}

  
  
 
    
 
  

