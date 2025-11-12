import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-transaccion.html',
  styleUrl: './agregar-transaccion.scss',
})

export class AgregarTransaccion {
  @Output() cerrar = new EventEmitter();
  @Output() guardar = new EventEmitter<any>();

  descripcion = '';
  monto: any = null;
  tipo = 'ingreso';

  guardarTransaccion() {
    if (!this.descripcion || !this.monto) return;

    this.guardar.emit({
      descripcion: this.descripcion,
      monto: Number(this.monto),
      tipo: this.tipo,
      fecha: new Date().toLocaleDateString()
    });
  }
}

