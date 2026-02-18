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
        path: 'products',
        loadComponent: () => import('./pages/products/products').then((m) => m.ProductsPage),
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import('./pages/detail-product-page/detail-product-page').then(
            (m) => m.DetailProductPage
          ),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.AboutPage),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage),
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then((m) => m.RegisterPage),
      },
    ],
  },
];
