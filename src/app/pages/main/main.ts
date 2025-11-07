import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Indicador } from '../../interfaces/indicador';
import { Servicios } from '../../interfaces/servicios';
import { PromoImage } from '../../interfaces/promoImage';
import { Plan } from '../../interfaces/planes';
import { Feature } from '../../interfaces/features';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})

export class Main implements OnInit, OnDestroy, AfterViewInit {

  images: string[] = ['/assets/her1.png', '/assets/her2.png', '/assets/her3.png'];
  currentIndex = 0;
  intervalId: any;

  @ViewChild('plansSection', { static: false }) plansSection!: ElementRef;
  plansVisible = false;

  @ViewChild('indicatorsSection') indicatorsSection!: ElementRef;
  private hasAnimated = false;

  constructor(private router: Router) {

  }

  indicators: Indicador[] = [
    { title: 'Balance total', value: 12450, animated: 0, prefix: 'S/ ', badge: 'Actual', type: '', icon: 'fas fa-wallet' },
    { title: 'Gasto del mes', value: -1520, animated: 0, prefix: '- S/ ', badge: 'Mes', type: 'danger', icon: 'fas fa-arrow-trend-down' },
    { title: 'Ingresos del mes', value: 2500, animated: 0, prefix: 'S/ ', badge: 'Mes', type: 'success', icon: 'fas fa-arrow-trend-up' },
    { title: 'Metas activas', value: 3, animated: 0, prefix: '', badge: 'Activas', type: '', icon: 'fas fa-bullseye' },
    { title: 'Ahorro este mes', value: 980, animated: 0, prefix: 'S/ ', badge: 'Mes', type: 'success', icon: 'fas fa-piggy-bank' },
    { title: 'Suscripciones activas', value: 5, animated: 0, prefix: '', badge: 'Activas', type: '', icon: 'fas fa-repeat' }
  ];

  services: Servicios[] = [
    { icon: 'savings', title: 'Ahorro', text: 'Aprende a ahorrar de forma eficiente.' },
    { icon: 'trending_up', title: 'Inversiones', text: 'Invierte con estrategias reales.' },
    { icon: 'shield', title: 'Seguridad financiera', text: 'Protege tu futuro económico.' },
    { icon: 'calculate', title: 'Planificación', text: 'Define objetivos y metas claras.' },
    { icon: 'credit_card', title: 'Crédito', text: 'Mejora tu acceso crediticio.' },
    { icon: 'school', title: 'Educación financiera', text: 'Cursos y capacitaciones.' },
  ];

  promoSmallImages: PromoImage[] = [
    { src: '/assets/f1.jpg', title: 'Inversiones' },
    { src: '/assets/f2.jpg', title: 'Crédito Inteligente' },
    { src: '/assets/f3.jpg', title: 'Ahorro' },
    { src: '/assets/f4.jpg', title: 'Educación Financiera' }
  ];

  promoBigImage: string = '/assets/f6.jpg';

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
  

  goLogin() {
    this.router.navigate(['/login']);
  }

  goRegister() {
    this.router.navigate(['/login'], { queryParams: { mode: 'register' } });
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  ngAfterViewInit() {
    const observerIndicators = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.indicators.forEach(i => this.animateNumber(i));
          observerIndicators.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observerIndicators.observe(this.indicatorsSection.nativeElement);

    const observerPlans = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.plansVisible = true; 
          observerPlans.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (this.plansSection) {
      observerPlans.observe(this.plansSection.nativeElement);
    }
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  animateNumber(ind: Indicador) {
    const duration = 1500;
    let start = 0;
    const end = ind.value;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      ind.animated = Math.floor(start);

      const finished =
        (increment >= 0 && start >= end) ||
        (increment < 0 && start <= end);

      if (finished) {
        ind.animated = end;
        clearInterval(timer);
      }
    }, 16);
  }

  goToSlide(i: number) {
    this.currentIndex = i;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  get transformValue(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}