import { Component } from '@angular/core';
import { CommonModule, DecimalPipe, PercentPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Plan } from '../../../interfaces/planes';


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
  imports: [CommonModule],
  templateUrl: './panel-inicial.html',
  styleUrl: './panel-inicial.scss',
})
export class PanelInicial {

  kpis: KPI[] = [
    {
      title: 'Balance total',
      value: 'S/ 12,450.35',
      subtitle: 'Saldo disponible',
      icon: 'fa-wallet',
      type: 'info',
      positive: true
    },
    {
      title: 'Gasto este mes',
      value: 'S/ 1,520.50',
      subtitle: 'Total gastos',
      icon: 'fa-arrow-down',
      type: 'expense',
      positive: true
    },
    {
      title: 'Ingresos',
      value: 'S/ 2,500.00',
      subtitle: 'Total ingresos',
      icon: 'fa-arrow-up',
      type: 'income',
      positive: true
    },
    {
      title: 'Metas completadas',
      value: 2,
      subtitle: 'Este año',
      icon: 'fa-bullseye',
      type: 'warning',
      positive: true
    }
  ];
  plans: Plan[] = [
    {
      title: 'Plan Básico',
      badge: 'Básico',
      icon: 'fas fa-star',
      price: 'S/ 19.90',
      description: 'Ideal para empezar a organizar tus finanzas.',
      features: [
        { name: 'Dashboard financiero', available: true },
        { name: 'Alertas', available: true },
        { name: 'Recomendaciones', available: true },
        { name: 'Asesoría personal', available: false },
        { name: 'Integración bancaria', available: false }
      ]
    },
    {
      title: 'Plan Intermedio',
      badge: 'Intermedio',
      icon: 'fas fa-gem',
      price: 'S/ 29.90',
      description: 'Seguimiento de metas y recomendaciones personalizadas.',
      features: [
        { name: 'Dashboard financiero', available: true },
        { name: 'Alertas', available: true },
        { name: 'Recomendaciones', available: true },
        { name: 'Asesoría personal', available: false },
        { name: 'Integración bancaria', available: true }
      ]
    },
    {
      title: 'Plan Premium',
      badge: 'Premium',
      icon: 'fas fa-crown',
      price: 'S/ 39.90',
      description: 'Todo lo anterior + asesoría financiera y alertas avanzadas.',
      features: [
        { name: 'Dashboard financiero', available: true },
        { name: 'Alertas', available: true },
        { name: 'Recomendaciones', available: true },
        { name: 'Asesoría personal', available: true },
        { name: 'Integración bancaria', available: true }
      ]
    }
  ];

  
  currentPlan: Plan = this.plans[2]; // o el índice dinámico que tengas

  recentTransactions: Trans[] = [
    { commerce: 'Plaza Vea', date: new Date(), description: 'Supermercado', amount: 120.50, type: 'DEBIT' },
    { commerce: 'Recibo Sueldo', date: new Date(Date.now() - 86400000 * 2), description: 'Pago Nómina', amount: 2500.00, type: 'CREDIT' },
    { commerce: 'Uber', date: new Date(Date.now() - 86400000 * 3), description: 'Viaje', amount: 18.20, type: 'DEBIT' },
    { commerce: 'Plaza Vea', date: new Date(), description: 'Supermercado', amount: 120.50, type: 'DEBIT' },
    { commerce: 'Recibo Sueldo', date: new Date(Date.now() - 86400000 * 2), description: 'Pago Nómina', amount: 2500.00, type: 'CREDIT' },
    { commerce: 'Uber', date: new Date(Date.now() - 86400000 * 3), description: 'Viaje', amount: 18.20, type: 'DEBIT' }
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
}
