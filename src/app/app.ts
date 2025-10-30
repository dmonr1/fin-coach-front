import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  isCollapsed = false;

  constructor(
    private router: Router,
  ) {

  }

  isLoginPage(): boolean {
    return this.router.url === '/main' || this.router.url === '/';
  }
}



