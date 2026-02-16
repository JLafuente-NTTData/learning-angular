import { Routes } from '@angular/router';
import { AppMainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: AppMainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.HomePage),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.AboutPage),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage),
      },
    ],
  },
];
