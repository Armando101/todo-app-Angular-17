import { Routes } from '@angular/router';
import { labsRoutes } from './pages/labs/labs.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'labs',
    loadComponent: () => import('./pages/labs/labs.component'),
    children: labsRoutes,
  },
];
