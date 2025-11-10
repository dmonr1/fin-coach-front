import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Tarea = {
  id?: number;
  titulo: string;
  descripcion?: string;
  fecha_limite?: string | null;
  estado?: 'pendiente' | 'en_proceso' | 'completada' | 'cancelada';
  prioridad?: number;
  vinculada_meta?: number | null;
};

@Component({
  selector: 'app-crear-tarea',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.scss',
})

export class CrearTarea {
  @Input() tarea: Tarea | null = null;
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardado = new EventEmitter<Tarea>();

  // copia local para evitar mutaciones hasta guardar
  local: Tarea = this.empty();

  ngOnChanges() {
    // cuando cambia input, copiar
    this.local = this.tarea ? { ...this.tarea } : this.empty();
  }

  empty(): Tarea {
    return { titulo: '', descripcion: '', fecha_limite: null, estado: 'pendiente', prioridad: 2, vinculada_meta: null };
  }

  guardar() {
    if (!this.local.titulo || this.local.titulo.trim().length < 1) {
      alert('Agrega un título para la tarea');
      return;
    }
    // emitir la tarea (si tiene id será edición)
    this.guardado.emit({ ...this.local });
  }

  cerrarModal() {
    this.cerrar.emit();
  }

  // alias para template
  cerrarAlias() { this.cerrarModal(); }
}



