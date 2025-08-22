import { Routes } from '@angular/router';

export const dashboard: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadComponent: () => import('./default/default').then(m => m.Default),
        data: {
          title: 'Default Dashboard',
          breadcrumb: 'Default',
          des:'Welcome back! Let’s start from where you left'
        },
      },
      {
        path: 'ecommerce',
        loadComponent: () => import('./ecommerce/ecommerce').then(m => m.Ecommerce),
        data: {
          title: 'Ecommerce Dashboard',
          breadcrumb: 'Ecommerce Dashboard',
          des:'"Welcome back! Continue your journey."'
        }
      },
      {
        path: 'education',
        loadComponent: () => import('./education/education').then(m => m.Education),
        data: {
          title: 'Education Dashboard',
          breadcrumb: 'Education Dashboard',
          des:'"Welcome back to your educational adventure!"'
        },
      },
    ],
  }
];