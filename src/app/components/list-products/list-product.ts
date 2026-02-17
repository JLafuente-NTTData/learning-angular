import { Component, inject, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Productos</h2>
    @if (products().length === 0) {
      <p>Cargando productos...</p>
    } @else {
      <ul>
        @for (product of products(); track product.id) {
          <li>
            <a [routerLink]="['/products', product.id]">
              {{ product.title }}
            </a>
          </li>
        }
      </ul>
    }
  `,
  styleUrls: ['./list-products.css'],
})
export class ListProductsComponent {
  private productService = inject(ProductService);

  //usamos signals para el estado reactivo de los productos
  products = signal<Product[]>([]);
  idSelectedProduct = signal<number | null>(null);
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
    });
  }
}
