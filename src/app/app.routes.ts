import { Routes } from '@angular/router';
import { LayoutpageComponent } from './components/layoutpage/layoutpage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sindurgp',
    pathMatch: 'full',
  },
  {
    path: 'sindurgp',
    component: LayoutpageComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'geographic-info',
        loadComponent: () =>
          import('./pages/geographic/geographic.component').then(
            (m) => m.GeographicComponent
          ),
      },
    ],
  },
];
