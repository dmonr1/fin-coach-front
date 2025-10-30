import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Main } from './pages/main/main';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'welcome', component: Welcome},
  { path: 'main', component: Main }
];
