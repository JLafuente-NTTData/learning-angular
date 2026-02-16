import { Component, inject, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <h2>Productos</h2>
    @if (products().length === 0) {
      <p>Cargando productos...</p>
    } @else {
      <ul>
        @for (product of products(); track product.id) {
          <li>{{ product.title }}</li>
        }
      </ul>
    }
  `,
  styleUrls: ['./product.css'],
})
export class ProductComponent {
  private productService = inject(ProductService);

  //usamos signals para el estado reactivo de los productos
  products = signal<Product[]>([]);
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
    });
  }
}
