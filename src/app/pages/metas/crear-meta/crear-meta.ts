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
    // Finanzas / Ahorro
    'fa-solid fa-piggy-bank', 'fa-solid fa-sack-dollar', 'fa-solid fa-wallet',
    'fa-solid fa-coins', 'fa-solid fa-money-bill-wave', 'fa-solid fa-chart-line',

    // Trabajo / Tecnología / Estudio
    'fa-solid fa-briefcase', 'fa-solid fa-building', 'fa-solid fa-user-graduate',
    'fa-solid fa-laptop', 'fa-solid fa-code', 'fa-solid fa-book', 'fa-solid fa-certificate',
    'fa-solid fa-brain', 'fa-solid fa-lightbulb',

    // Personal / Salud / Lifestyle
    'fa-solid fa-heart', 'fa-solid fa-dumbbell', 'fa-solid fa-spa', 'fa-solid fa-apple-whole',
    'fa-solid fa-bed', 'fa-solid fa-bolt', 'fa-solid fa-mug-hot', 'fa-solid fa-music',

    // Viajes / Transporte
    'fa-solid fa-plane', 'fa-solid fa-car', 'fa-solid fa-motorcycle', 'fa-solid fa-ship',
    'fa-solid fa-train', 'fa-solid fa-umbrella-beach', 'fa-solid fa-route', 'fa-solid fa-mountain',

    // Hogar / Familia / Vida
    'fa-solid fa-house', 'fa-solid fa-home', 'fa-solid fa-tree', 'fa-solid fa-baby',
    'fa-solid fa-child', 'fa-solid fa-ring', 'fa-solid fa-paw', 'fa-solid fa-bath',

    // Objetos / Compras
    'fa-solid fa-mobile-screen-button', 'fa-solid fa-camera', 'fa-solid fa-tv',
    'fa-solid fa-headphones', 'fa-solid fa-gamepad', 'fa-solid fa-shopping-cart',

    // Logros / Metas / Control
    'fa-solid fa-flag', 'fa-solid fa-bullseye', 'fa-solid fa-trophy', 'fa-solid fa-medal',
    'fa-solid fa-fire', 'fa-solid fa-check', 'fa-solid fa-stopwatch',

    // Extras / Creatividad
    'fa-solid fa-palette', 'fa-solid fa-film', 'fa-solid fa-guitar', 'fa-solid fa-pen-nib'
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
