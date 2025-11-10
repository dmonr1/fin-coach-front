import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Plan } from '../../../interfaces/planes';
import { Chart, registerables } from 'chart.js';
import { CrearMeta } from '../../metas/crear-meta/crear-meta';

Chart.register(...registerables);

interface Meta {
  nombre: string;
  icon: string;
  target: number;
  current: number;
  progreso: number;
  deadline: string;
}

interface KPI {
  title: string;
  value: number | string;
  subtitle: string;
  icon: string;
  type: 'income' | 'expense' | 'warning' | 'info';
  positive?: boolean;
  negative?: boolean;
}

type Trans = {
  commerce?: string;
  date: string | Date;
  description?: string;
  amount: number;
  type: 'DEBIT' | 'CREDIT'
};

@Component({
  selector: 'app-panel-inicial',
  standalone: true,
  imports: [CommonModule, CrearMeta],
  templateUrl: './panel-inicial.html',
  styleUrl: './panel-inicial.scss',
})

export class PanelInicial {

  kpis: KPI[] = [
    { title: 'Balance total', value: 'S/ 12,450.35', subtitle: 'Saldo disponible', icon: 'fa-wallet', type: 'info', positive: true },
    { title: 'Gasto este mes', value: 'S/ 1,520.50', subtitle: 'Total gastos', icon: 'fa-arrow-down', type: 'expense', positive: true },
    { title: 'Ingresos', value: 'S/ 2,500.00', subtitle: 'Total ingresos', icon: 'fa-arrow-up', type: 'income', positive: true },
    { title: 'Metas completadas', value: 2, subtitle: 'Este año', icon: 'fa-bullseye', type: 'warning', positive: true }
  ];

  plans: Plan[] = [
    { title: 'Plan Básico', badge: 'Básico', icon: 'fas fa-star', price: 'S/ 19.90', description: 'Ideal para empezar a organizar tus finanzas.', features: [] },
    { title: 'Plan Intermedio', badge: 'Intermedio', icon: 'fas fa-gem', price: 'S/ 29.90', description: 'Seguimiento de metas y recomendaciones personalizadas.', features: [] },
    { title: 'Plan Premium', badge: 'Premium', icon: 'fas fa-crown', price: 'S/ 39.90', description: 'Todo lo anterior + asesoría financiera y alertas avanzadas.', features: [] }
  ];

  tips = [
    { icon: "fa-solid fa-piggy-bank", text: "Ahorra al menos el 10% de tus ingresos." },
    { icon: "fa-solid fa-credit-card", text: "Evita deudas con intereses altos." },
    { icon: "fa-solid fa-shield-heart", text: "Ten un fondo de emergencia de 3 a 6 meses." },
    { icon: "fa-solid fa-receipt", text: "Revisa tus gastos y elimina los innecesarios." }
  ];

  activeTip = 0;
  currentPlan: Plan = this.plans[2];

  recentTransactions: Trans[] = [
    { commerce: 'Plaza Vea', date: new Date(), description: 'Supermercado', amount: 120.50, type: 'DEBIT' },
    { commerce: 'Recibo Sueldo', date: new Date(Date.now() - 86400000 * 2), description: 'Pago Nómina', amount: 2500.00, type: 'CREDIT' },
    { commerce: 'Uber', date: new Date(Date.now() - 86400000 * 3), description: 'Viaje', amount: 18.20, type: 'DEBIT' },
    { commerce: 'Netflix', date: new Date(Date.now() - 86400000 * 5), description: 'Suscripción Mensual', amount: 35.00, type: 'DEBIT' },
    { commerce: 'Starbucks', date: new Date(Date.now() - 86400000 * 7), description: 'Café', amount: 12.75, type: 'DEBIT' },
    { commerce: 'Amazon', date: new Date(Date.now() - 86400000 * 10), description: 'Compra en línea', amount: 85.40, type: 'DEBIT' }
  ];

  metas: Meta[] = [
    { nombre: 'Ahorro mensual', icon: 'fa-piggy-bank', target: 1000, current: 650, progreso: 65, deadline: '2025-12-01' },
    { nombre: 'Viaje a Cusco', icon: 'fa-plane', target: 2500, current: 1100, progreso: 44, deadline: '2026-01-10' },
    { nombre: 'Laptop nueva', icon: 'fa-laptop', target: 3500, current: 700, progreso: 20, deadline: '2026-03-01' },
    { nombre: 'Fondo de emergencia', icon: 'fa-briefcase-medical', target: 5000, current: 3000, progreso: 60, deadline: '2025-11-15' },
    { nombre: 'Curso de programación', icon: 'fa-code', target: 800, current: 400, progreso: 50, deadline: '2025-10-20' }
  ];

  planEndDate = '30/12/2025';

  constructor(private router: Router) { }

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  ngOnInit() {
    setInterval(() => {
      this.activeTip = (this.activeTip + 1) % this.tips.length;
      this.scrollTips();
    }, 3500);
  }

  scrollTips() {
    const container = document.querySelector('.tips-carousel');
    const width = (container as any)?.clientWidth;
    container?.scrollTo({ left: width * this.activeTip, behavior: 'smooth' });
  }

  ngAfterViewInit() {
    this.renderInstalacionesChart();
    this.renderVersionesChart();
  }

  renderInstalacionesChart() {
    new Chart("instalacionesChart", {
      type: 'bar',
      data: {
        labels: ['Cliente A', 'Cliente B', 'Cliente C', 'Cliente D'],
        datasets: [{
          label: 'Software Instalado',
          data: [12, 19, 7, 14],
          backgroundColor: '#89D631', 
          borderRadius: 8
        }]
      },
      options: {
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: true },
          title: {
            display: false
          }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.08)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
  
  renderVersionesChart() {
    new Chart("versionesChart", {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
        datasets: [{
          label: 'Actualizaciones por Mes',
          data: [2, 5, 4, 6, 8],
          fill: true,
          backgroundColor: 'rgba(137,214,49,0.25)',
          borderColor: '#89D631',
          borderWidth: 2.6,
          tension: 0.45,
          pointRadius: 0
        }]
      },
      options: {
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.08)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }
  
  cerrarModal() {
    this.mostrarModal = false;
  }
  
}