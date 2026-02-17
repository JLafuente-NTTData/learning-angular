import { Component, inject, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (products().length === 0) {
      <p>Cargando productos...</p>
    } @else {
      <section class="section-products">
        <ol>
          @for (product of products(); track product.id) {
            <li>
              <a [routerLink]="['/products', product.id]">
                <article>
                  <div class="product-body">
                    <div>
                      <img src="{{ product.image }}" alt="{{ product.title }}" />
                    </div>
                    <div>
                      {{ product.title }}
                    </div>
                  </div>
                  <div class="product-price">{{ product.price }} €</div>
                </article>
              </a>
            </li>
          }
        </ol>
      </section>
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
