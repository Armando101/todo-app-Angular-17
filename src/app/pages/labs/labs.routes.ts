import { Routes } from '@angular/router';

export const labsRoutes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./components/counter/counter.component').then(
        (m) => m.CounterComponent
      ),
  },
  {
    path: 'properties',
    loadComponent: () =>
      import('./components/properties/properties.component').then(
        (m) => m.PropertiesComponent
      ),
  },
  {
    path: 'user-info',
    loadComponent: () =>
      import('./components/user-info/user-info.component').then(
        (m) => m.UserInfoComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/counter/counter.component').then(
        (m) => m.CounterComponent
      ),
  },
];
