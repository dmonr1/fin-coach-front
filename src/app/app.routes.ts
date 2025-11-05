import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Main } from './pages/main/main';
import { Login } from './pages/login/login';
import { AgregarTransaccion } from './pages/finanzas/agregar-transaccion/agregar-transaccion';
import { PanelFinanzas } from './pages/finanzas/panel-finanzas/panel-finanzas';
import { ReportesFinanzas } from './pages/finanzas/reportes-finanzas/reportes-finanzas';
import { HistorialActividades } from './pages/historial/historial-actividades/historial-actividades';
import { PanelInicial } from './pages/inicio/panel-inicial/panel-inicial';
import { CrearMeta } from './pages/metas/crear-meta/crear-meta';
import { DetalleMeta } from './pages/metas/detalle-meta/detalle-meta';
import { ListaMetas } from './pages/metas/lista-metas/lista-metas';
import { Configuracion } from './pages/perfil/configuracion/configuracion';
import { MiPerfil } from './pages/perfil/mi-perfil/mi-perfil';
import { PanelProgreso } from './pages/progreso/panel-progreso/panel-progreso';
import { CrearTarea } from './pages/tareas/crear-tarea/crear-tarea';
import { ListaTareas } from './pages/tareas/lista-tareas/lista-tareas';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },

  { path: 'welcome', component: Welcome },
  { path: 'main', component: Main },
  { path: 'login', component: Login },

  { path: 'inicio', component: PanelInicial },

  { path: 'metas', component: ListaMetas },
  { path: 'metas/crear', component: CrearMeta },
  { path: 'metas/detalle', component: DetalleMeta },

  { path: 'tareas', component: ListaTareas },
  { path: 'tareas/crear', component: CrearTarea },

  { path: 'finanzas', component: PanelFinanzas },
  { path: 'finanzas/agregar', component: AgregarTransaccion },
  { path: 'finanzas/reportes', component: ReportesFinanzas },

  { path: 'progreso', component: PanelProgreso },

  { path: 'historial', component: HistorialActividades },

  { path: 'perfil', component: MiPerfil },
  { path: 'perfil/configuracion', component: Configuracion },
];



/*
<div class="custom-sidebar" [class.active]="!isCollapsed">
  <div class="sidebar-header">

    <div class="logo-container" (click)="toggleSidebar()">
      <img src="assets/logo-blanco.png" alt="Logo" class="logo-img" />
    </div>

    <span class="header-trigger-side" *ngIf="!isCollapsed" (click)="toggleSidebar()">
      <nz-icon class="trigger" [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"></nz-icon>
    </span>
  </div>

  <ul class="sidebar-menu">

    <!-- Inicio -->
    <li routerLink="/inicio" routerLinkActive="active">
      <i class="fas fa-house"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Inicio</span>
    </li>

    <!-- Metas -->
    <li routerLink="/metas" routerLinkActive="active">
      <i class="fas fa-bullseye"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Metas</span>
    </li>

    <!-- Tareas -->
    <li routerLink="/tareas" routerLinkActive="active">
      <i class="fas fa-list-check"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Tareas</span>
    </li>

    <!-- Finanzas -->
    <li routerLink="/finanzas" routerLinkActive="active">
      <i class="fas fa-wallet"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Finanzas</span>
    </li>

    <!-- Progreso -->
    <li routerLink="/progreso" routerLinkActive="active">
      <i class="fas fa-chart-line"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Progreso</span>
    </li>

    <!-- Historial -->
    <li routerLink="/historial" routerLinkActive="active">
      <i class="fas fa-clock-rotate-left"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Historial</span>
    </li>

    <!-- Perfil -->
    <li routerLink="/perfil" routerLinkActive="active">
      <i class="fas fa-user"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Perfil</span>
    </li>

    <li class="has-submenu" (click)="!isCollapsed && toggleConfig()"
    (mouseenter)="isCollapsed && onMouseEnterItem('config')"
    (mouseleave)="isCollapsed && onMouseLeaveItem('config')" style="position: relative;">
    <i class="fas fa-cogs"></i>
    <span class="menu-text" [class.hidden]="isCollapsed">Configuración</span>
    <i class="fa-solid fa-chevron-down submenu-icon" [class.rotated]="configExpanded && !isCollapsed"
      *ngIf="!isCollapsed"></i>

    <div class="flyout-submenu" *ngIf="isCollapsed && hoveredItem==='config'"
      (mouseenter)="onMouseEnterFlyout('config')" (mouseleave)="onMouseLeaveFlyout('config')">
      <li routerLink="/gestion-privilegios">Gestión de Privilegios</li>
      <li routerLink="/gestion-roles">Asignación de Privilegios</li>
      <li routerLink="/motivos">Motivos</li>
      <li routerLink="/usuario-responsable">Personal Técnico</li>
    </div>
  </li>

    <!-- Configuración -->
    <li routerLink="/perfil/configuracion" routerLinkActive="active">
      <i class="fas fa-gear"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Configuración</span>
    </li>

    <!-- Darkmode -->
    <li class="darkmode-item">
      <i class="fas fa-moon" (click)="isCollapsed && toggleDarkModeFromIcon()" [class.clickable]="isCollapsed"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Modo oscuro</span>
      <label class="switch" *ngIf="!isCollapsed">
        <input type="checkbox" [checked]="isDarkMode" (change)="toggleDarkMode($event)">
        <span class="slider">
          <i class="fa-solid fa-sun"></i>
          <i class="fa-solid fa-moon"></i>
        </span>
      </label>
    </li>

    <!-- Logout -->
    <li (click)="logout()">
      <i class="fas fa-sign-out-alt"></i>
      <span class="menu-text" [class.hidden]="isCollapsed">Salir</span>
    </li>

  </ul>
</div>
*/