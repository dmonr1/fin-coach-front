import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CrearMeta } from '../crear-meta/crear-meta';

@Component({
  selector: 'app-lista-metas',
  standalone: true,
  imports: [CommonModule, CrearMeta],
  templateUrl: './lista-metas.html',
  styleUrl: './lista-metas.scss',
})

export class ListaMetas {

  metas = [
    { titulo: 'Ahorrar laptop', descripcion: 'Tecnología / Trabajo', progreso: 70, estado: 'proceso', fecha_objetivo: new Date(2025,9,30), prioridad: 2, icon: 'fa-solid fa-laptop' },
    { titulo: 'Emergencia', descripcion: 'Estabilidad financiera', progreso: 20, estado: 'cancelada', fecha_objetivo: new Date(2026,2,10), prioridad: 1, icon: 'fa-solid fa-piggy-bank' },
    { titulo: 'Pagar tarjeta', descripcion: 'Deuda cero', progreso: 92, estado: 'cumplida', fecha_objetivo: new Date(2025,7,22), prioridad: 1, icon: 'fa-solid fa-credit-card' },
    { titulo: 'Curso Angular', descripcion: 'Capacitación profesional', progreso: 40, estado: 'activa', fecha_objetivo: new Date(2025,5,18), prioridad: 3, icon: 'fa-solid fa-code' },
    { titulo: 'Viaje', descripcion: 'Vacaciones soñadas', progreso: 10, estado: 'activa', fecha_objetivo: new Date(2025,12,1), prioridad: 2, icon: 'fa-solid fa-plane' },
    { titulo: 'Renovar auto', descripcion: 'Transporte personal', progreso: 55, estado: 'proceso', fecha_objetivo: new Date(2026,4,15), prioridad: 2, icon: 'fa-solid fa-car' },
    { titulo: 'Fondo de inversión', descripcion: 'Crecimiento financiero', progreso: 30, estado: 'activa', fecha_objetivo: new Date(2026,6,30), prioridad: 1, icon: 'fa-solid fa-chart-line' },
    { titulo: 'Salud', descripcion: 'Gastos médicos', progreso: 80, estado: 'cancelada', fecha_objetivo: new Date(2025,3,5), prioridad: 1, icon: 'fa-solid fa-heartbeat' },
    { titulo: 'Educación', descripcion: 'Cursos y talleres', progreso: 25, estado: 'activa', fecha_objetivo: new Date(2025,11,20), prioridad: 3, icon: 'fa-solid fa-graduation-cap' },
    { titulo: 'Hogar', descripcion: 'Mejoras en casa', progreso: 60, estado: 'proceso', fecha_objetivo: new Date(2026,1,10), prioridad: 2, icon: 'fa-solid fa-house' },
    { titulo: 'Negocio propio', descripcion: 'Emprendimiento', progreso: 15, estado: 'activa', fecha_objetivo: new Date(2026,8,25), prioridad: 1, icon: 'fa-solid fa-briefcase'},
    { titulo: 'Retiro', descripcion: 'Ahorro a largo plazo', progreso: 50, estado: 'cancelada', fecha_objetivo: new Date(2030,12,31), prioridad: 1, icon: 'fa-solid fa-tree' },
    { titulo: 'Boda', descripcion: 'Evento especial', progreso: 35, estado: 'activa', fecha_objetivo: new Date(2025,9,15), prioridad: 2, icon: 'fa-solid fa-ring' },
    { titulo: 'Vacaciones familiares', descripcion: 'Tiempo de calidad', progreso: 45, estado: 'proceso', fecha_objetivo: new Date(2025,7,20), prioridad: 2, icon: 'fa-solid fa-umbrella-beach' },
    { titulo: 'Renovación del hogar', descripcion: 'Mejoras y remodelaciones', progreso: 65, estado: 'proceso', fecha_objetivo: new Date(2026,3,30), prioridad: 2, icon: 'fa-solid fa-tools' },
    { titulo: 'Fondo para hijos', descripcion: 'Educación y bienestar', progreso: 40, estado: 'cancelada', fecha_objetivo: new Date(2030,5,15), prioridad: 1, icon: 'fa-solid fa-child' },
    { titulo: 'Adquisición de vivienda', descripcion: 'Comprar casa propia', progreso: 75, estado: 'proceso', fecha_objetivo: new Date(2027,11,1), prioridad: 1, icon: 'fa-solid fa-home' }
  ];

  constructor(private router: Router) {}

  goToDetalle(meta:any) {
    this.router.navigate(['/metas/detalle'], { state: meta });
  }

  goToCrear() {
    this.router.navigate(['/metas/crear']);
  }


  formatEstado(estado:string) {
    const map:any = {
      activa: 'Activa',
      proceso: 'En Proceso',
      cancelada: 'Cancelada',
      cumplida: 'Completada'
    };
    return map[estado] || estado;
  }

  mostrarModal = false;

abrirModal() {
  this.mostrarModal = true;
}

cerrarModal() {
  this.mostrarModal = false;
}

onMetaGuardada() {
  this.cerrarModal();
  // refrescar data si quieres
}
}

