import { Component } from '@angular/core';
import { ListProductsComponent } from '../../components/list-products/list-product';

@Component({
  selector: 'app-products',
  template: `
    <h2>Productos</h2>
    <app-list-products></app-list-products>
  `,
  imports: [ListProductsComponent],
})
export class ProductsPage {}
