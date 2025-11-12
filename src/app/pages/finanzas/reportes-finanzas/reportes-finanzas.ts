import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-reportes-finanzas',
  imports: [],
  templateUrl: './reportes-finanzas.html',
  styleUrl: './reportes-finanzas.scss',
})
export class ReportesFinanzas implements AfterViewInit {
  ngAfterViewInit() { 
    new Chart(document.getElementById('chart1') as any, 
    { type: 'bar', data: { labels: ['Ene', 'Feb', 'Mar'], 
      datasets: [{ data: [300, 500, 200] }] } }); 
      
    new Chart(document.getElementById('chart2') as any, 
    { type: 'line', data: { labels: ['Ene', 'Feb', 'Mar'], datasets: 
      [{ data: [200, 400, 300] }] } }); }

}


