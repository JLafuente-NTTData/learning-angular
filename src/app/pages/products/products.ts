import { Component } from '@angular/core';
import { ListProductsComponent } from '../../components/list-products/list-product';

@Component({
  selector: 'app-products',
  template: `
    <h1>Products Page</h1>
    <p>This is the products page.</p>
    <app-list-products></app-list-products>
  `,
  imports: [ListProductsComponent],
})
export class ProductsPage {}
