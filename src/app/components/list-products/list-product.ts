import { Component, inject, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterLink, SpinnerComponent],
  template: `
    <app-spinner [isLoading]="isLoading()"></app-spinner>
    @if (!isLoading()) {
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
  isLoading = signal(true);

  idSelectedProduct = signal<number | null>(null);
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
      this.isLoading.set(false);
    });
  }
}
