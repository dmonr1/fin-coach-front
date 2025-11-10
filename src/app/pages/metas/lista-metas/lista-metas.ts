import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CrearMeta } from '../crear-meta/crear-meta';
import { DetalleMeta } from '../detalle-meta/detalle-meta';

@Component({
  selector: 'app-lista-metas',
  standalone: true,
  imports: [CommonModule, CrearMeta, DetalleMeta],
  templateUrl: './lista-metas.html',
  styleUrl: './lista-metas.scss',
})

export class ListaMetas {

  metas = [
    { titulo: 'Ahorrar laptop', descripcion: 'Tecnología / Trabajo', progreso: 70, estado: 'proceso', fecha_objetivo: new Date(2025, 9, 30), prioridad: 2, icon: 'fa-solid fa-laptop' },
    { titulo: 'Emergencia', descripcion: 'Estabilidad financiera', progreso: 20, estado: 'cancelada', fecha_objetivo: new Date(2026, 2, 10), prioridad: 1, icon: 'fa-solid fa-piggy-bank' },
    { titulo: 'Pagar tarjeta', descripcion: 'Deuda cero', progreso: 92, estado: 'cumplida', fecha_objetivo: new Date(2025, 7, 22), prioridad: 1, icon: 'fa-solid fa-credit-card' },
    { titulo: 'Curso Angular', descripcion: 'Capacitación profesional', progreso: 40, estado: 'activa', fecha_objetivo: new Date(2025, 5, 18), prioridad: 3, icon: 'fa-solid fa-code' },
    { titulo: 'Viaje', descripcion: 'Vacaciones soñadas', progreso: 10, estado: 'activa', fecha_objetivo: new Date(2025, 12, 1), prioridad: 2, icon: 'fa-solid fa-plane' },
    { titulo: 'Renovar auto', descripcion: 'Transporte personal', progreso: 55, estado: 'proceso', fecha_objetivo: new Date(2026, 4, 15), prioridad: 2, icon: 'fa-solid fa-car' },
  ];

  constructor(private router: Router) { }

  mostrarModal = false;
  mostrarDetalle = false;
  metaSeleccionada: any = null;

  formatEstado(estado: string) {
    const map: any = {
      activa: 'Activa',
      proceso: 'En Proceso',
      cancelada: 'Cancelada',
      cumplida: 'Completada'
    };
    return map[estado] || estado;
  }


  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  abrirDetalle(meta: any) {
    this.metaSeleccionada = { ...meta };
    this.mostrarDetalle = true;
  }

  cerrarDetalle() {
    this.mostrarDetalle = false;
    this.metaSeleccionada = null;
  }

  actualizarMeta(metaEditada: any) {
    const index = this.metas.findIndex(m => m.titulo === metaEditada.titulo);
    if (index !== -1) this.metas[index] = metaEditada;

    this.cerrarDetalle();
  }

  eliminarMeta(meta: any) {
    this.metas = this.metas.filter(m => m.titulo !== meta.titulo);
    this.cerrarDetalle();
  }
  onMetaGuardada() {
    this.cerrarModal();
  }
}



