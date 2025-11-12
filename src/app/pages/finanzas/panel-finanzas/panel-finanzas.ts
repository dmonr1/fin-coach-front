import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesFinanzas } from '../reportes-finanzas/reportes-finanzas';
import { AgregarTransaccion } from '../agregar-transaccion/agregar-transaccion';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-panel-finanzas',
  standalone: true,
  imports: [CommonModule, AgregarTransaccion],
  templateUrl: './panel-finanzas.html',
  styleUrl: './panel-finanzas.scss',
})
export class PanelFinanzas {

  totalIngresos = 3500;
  totalGastos = 1800;
  balance = this.totalIngresos - this.totalGastos;

  modalAbierto = false;

  transacciones = [
    { descripcion: 'Venta de proyecto', fecha: '12/11/2025', monto: 1200, tipo: 'ingreso' },
    { descripcion: 'Compra laptop', fecha: '11/11/2025', monto: 850, tipo: 'gasto' },
    { descripcion: 'Cliente mantenimiento', fecha: '10/11/2025', monto: 500, tipo: 'ingreso' }
  ];

  abrirModal() { this.modalAbierto = true; }
  cerrarModal() { this.modalAbierto = false; }

  guardarTransaccion(tx: any) {
    this.transacciones.unshift(tx);
    this.cerrarModal();
  }

  ngOnInit(): void {
    this.renderCharts();
  }

  renderCharts() {
    new Chart('chartGastos', {
      type: 'doughnut',
      data: {
        labels: ['Casa', 'Comida', 'Servicios', 'Otros'],
        datasets: [{
          data: [500, 300, 200, 100]
        }]
      }
    });

    new Chart('chartBalance', {
      type: 'bar',
      data: {
        labels: ['Ingresos', 'Gastos'],
        datasets: [{
          data: [this.totalIngresos, this.totalGastos]
        }]
      }
    });
  }
}
