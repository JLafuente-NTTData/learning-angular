import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product';

@Component({
  selector: 'app-products',
  template: `
    <h1>Products Page</h1>
    <p>This is the products page.</p>
    <app-product></app-product>
  `,
  imports: [ProductComponent],
})
export class ProductsPage {}
