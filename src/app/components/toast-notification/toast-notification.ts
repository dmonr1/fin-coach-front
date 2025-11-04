import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-toast-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-notification.html',
  styleUrls: ['./toast-notification.scss']
})
export class ToastNotification {

  @Input() message: string = '';
  @Input() type: ToastType = 'info';
  @Input() duration: number = 1500;

  visible = false;

  show(message?: string, type?: ToastType) {
    if (message) this.message = message;
    if (type) this.type = type;

    this.visible = true;
    setTimeout(() => this.hide(), this.duration);
  }

  hide() {
    this.visible = false;
  }

  get borderColor() {
    switch (this.type) {
      case 'success': return '#16a34a';
      case 'error': return '#dc2626';
      case 'warning': return '#f59e0b';
      default: return '#3b82f6';
    }
  }

  get iconClass() {
    switch (this.type) {
      case 'success': return 'fa-solid fa-circle-check';
      case 'error': return 'fa-solid fa-circle-xmark';
      case 'warning': return 'fa-solid fa-circle-exclamation';
      default: return 'fa-solid fa-circle-info';
    }
  }

  get textColor() {
    return this.borderColor;
  }
}
