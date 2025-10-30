import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit, OnDestroy {
  
  images: string[] = [
    'assets/imga.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
