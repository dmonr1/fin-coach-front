import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrls: ['./main.scss'], // corregido styleUrls
})
export class Main implements OnInit, OnDestroy {
  // Carrusel hero
  images = ['/assets/her1.png', '/assets/her2.png', '/assets/her3.png'];
  currentIndex = 0;
  intervalId: any;

  // Servicios
  services = [
    { icon: 'savings', title: 'Ahorro', text: 'Aprende a ahorrar de forma eficiente.' },
    { icon: 'trending_up', title: 'Inversiones', text: 'Invierte con estrategias reales.' },
    { icon: 'shield', title: 'Seguridad financiera', text: 'Protege tu futuro económico.' },
    { icon: 'calculate', title: 'Planificación', text: 'Define objetivos y metas claras.' },
    { icon: 'credit_card', title: 'Crédito', text: 'Mejora tu acceso crediticio.' },
    { icon: 'school', title: 'Educación financiera', text: 'Cursos y capacitaciones.' },
  ];

  // Promo
  promoSmallImages = [
    '/assets/f1.jpg',
    '/assets/f2.jpg',
    '/assets/f3.jpg',
    '/assets/f4.jpg'
  ];
  promoBigImage = '/assets/f6.jpg';

  ngOnInit() {
    // Autoplay del carrusel
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  goToSlide(i: number) {
    this.currentIndex = i;
  }

  get transformValue(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
