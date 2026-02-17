import { Component, input } from '@angular/core';
import { Product } from '../../services/product';

@Component({
  selector: 'app-detail-product-card',
  standalone: true, // Convertido a Standalone
  template: `
    <h3>Detalle del producto</h3>

    <section class="product-card">
      <img [src]="product().image" [alt]="product().title" style="width: 100px;" />
      <h4>{{ product().title }}</h4>
      <p>{{ product().description }}</p>
      <p><strong>Precio:</strong> {{ product().price }} €</p>
    </section>
  `,
  styleUrls: ['./detail-product-card.css'],
})
export class DetailProductCard {
  product = input.required<Product>();
}
