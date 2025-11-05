import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  isCollapsed = false;
  isCollapsedHover = false;
  hoveredItem: string | null = null;
  reportsExpanded = false;
  configExpanded = false;
  isDarkMode = false;

  hideLayout = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url.split('?')[0]; 
        const params = new URLSearchParams(this.router.url.split('?')[1]);
        const mode = params.get('mode');

        this.hideLayout = url === '/login' || url === '/main' || (url === '/login' && mode === 'register');
      });
  }

  isMainPage(): boolean {
    return this.hideLayout;
  }

  toggleReports() {
    this.reportsExpanded = !this.reportsExpanded;
  }

  onMouseEnterItem(name: string) {
    if (this.isCollapsed) {
      this.hoveredItem = name;
    }
  }



  onMouseLeaveItem(name: string) {
    if (this.isCollapsed && this.hoveredItem === name) {
      this.hoveredItem = null;
    }
  }

  onMouseEnterFlyout(name: string) {
    this.hoveredItem = name;
  }

  onMouseLeaveFlyout(name: string) {
    if (this.hoveredItem === name) {
      this.hoveredItem = null;
    }
  }

  toggleConfig() {
    this.configExpanded = !this.configExpanded;
  }

  toggleDarkMode(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.isDarkMode = checked;
    if (checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
    }
  }

  onMouseEnter() {
    if (this.isCollapsed) this.isCollapsedHover = true;
  }

  onMouseLeave() {
    if (this.isCollapsed) this.isCollapsedHover = false;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;

    if (!this.isCollapsed) {
      this.isCollapsedHover = false;
    }
  }

  toggleDarkModeFromIcon() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
    }
  }

  logout(): void {
    this.router.navigate(['/main']);
  }
}
