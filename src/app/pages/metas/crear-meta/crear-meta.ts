import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-meta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-meta.html',
  styleUrls: ['./crear-meta.scss']
})
export class CrearMeta {

  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<any>();

  meta = {
    titulo: '',
    monto: null,
    fecha_objetivo: '',
    prioridad: 2,
    icon: 'fa-solid fa-flag'
  };

  showIconPicker = false;

  iconList = [
    'fa-solid fa-flag', 'fa-solid fa-laptop', 'fa-solid fa-piggy-bank', 
    'fa-solid fa-credit-card', 'fa-solid fa-code', 'fa-solid fa-plane',
    'fa-solid fa-car', 'fa-solid fa-chart-line', 'fa-solid fa-heart', 
    'fa-solid fa-graduation-cap', 'fa-solid fa-house', 'fa-solid fa-briefcase',
    'fa-solid fa-tree', 'fa-solid fa-ring', 'fa-solid fa-umbrella-beach',
    'fa-solid fa-tools', 'fa-solid fa-child', 'fa-solid fa-home'
  ];

  elegirIcono(icon: string) {
    this.meta.icon = icon;
    this.showIconPicker = false;
  }

  guardarMeta() {
    this.guardar.emit(this.meta);
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}
