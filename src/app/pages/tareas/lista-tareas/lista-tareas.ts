import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearTarea } from '../crear-tarea/crear-tarea';

type Tarea = {
  id?: number;
  titulo: string;
  descripcion?: string;
  fecha_limite?: string | null;
  estado?: 'pendiente' | 'en_proceso' | 'completada' | 'cancelada';
  prioridad?: number;
  vinculada_meta?: number | null;
  creado_en?: Date;     // ✅ ahora opcional
  expanded?: boolean;
};

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule, CrearTarea],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.scss',
})
export class ListaTareas {
  
  tareas: Tarea[] = [
    { id: 1, titulo: 'Revisar gastos semanales', descripcion: 'Analizar movimientos de la semana', fecha_limite: this.isoDateOffset(0), estado: 'pendiente', prioridad: 2, expanded: false, creado_en: new Date() },
    { id: 2, titulo: 'Depositar fondo emergencia', descripcion: 'Transferir S/200', fecha_limite: this.isoDateOffset(3), estado: 'en_proceso', prioridad: 1, vinculada_meta: 1, expanded: false, creado_en: new Date() },
    {
      id: 3, titulo: 'Pagar tarjeta', descripcion: 'Pagar el total para evitar intereses', fecha_limite: this.isoDateOffset(7), estado: 'pendiente', prioridad: 1, expanded: false, creado_en: new Date(),
    },
    { id: 4, titulo: 'Actualizar presupuesto mensual', descripcion: 'Incluir nuevos gastos fijos', fecha_limite: this.isoDateOffset(5), estado: 'completada', prioridad: 3, expanded: false, creado_en: new Date() },
    { id: 5, titulo: 'Configurar alertas de gastos', descripcion: 'Establecer notificaciones para gastos altos', fecha_limite: this.isoDateOffset(10), estado: 'pendiente', prioridad: 2, expanded: false, creado_en: new Date() },
    { id: 6, titulo: 'Revisar suscripciones', descripcion: 'Cancelar las que no uso', fecha_limite: this.isoDateOffset(2), estado: 'cancelada', prioridad: 3, expanded: false, creado_en: new Date() },
  ];

  mostrarModal = false;
  tareaEnEdicion: Tarea | null = null;
  private nextId = 100;

  constructor(private router: Router) {}

  abrirCrear() {
    this.tareaEnEdicion = null;
    this.mostrarModal = true;
  }

  abrirEditar(t: Tarea) {
    this.tareaEnEdicion = { ...t }; // copia para no mutar antes de guardar
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.tareaEnEdicion = null;
  }

  onTareaGuardada(tarea: Tarea) {
    if (tarea.id) {
      const idx = this.tareas.findIndex(x => x.id === tarea.id);
      if (idx > -1) 
        this.tareas[idx] = { ...tarea, expanded: false };
    } else {
      tarea.id = ++this.nextId;
      tarea.creado_en = new Date(); // ✅ asigna fecha cuando se crea
      this.tareas.unshift({ ...tarea, expanded: false });
    }
    this.cerrarModal();
  }

  toggleEstado(t: Tarea) {
    t.estado = (t.estado === 'completada') ? 'pendiente' : 'completada';
  }

  eliminar(t: Tarea) {
    if (!confirm('¿Eliminar tarea?')) return;
    this.tareas = this.tareas.filter(x => x !== t);
  }

  // ✅ despliega tarjeta
  toggleExpand(t: Tarea) {
    t.expanded = !t.expanded;
  }

  // ✅ colores prioridad
  getPrioridadColor(p?: number) {
    return p === 1 ? 'prio-1' : p === 3 ? 'prio-3' : 'prio-2';
  }

  getTextoPrioridad(p?: number) {
    return p === 1 ? 'Alta' : p === 3 ? 'Baja' : 'Media';
  }

  // ✅ helper fechas
  private isoDateOffset(days = 0) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }
}
