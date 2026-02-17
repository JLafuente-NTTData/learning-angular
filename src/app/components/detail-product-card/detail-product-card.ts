import { Component, inject, input, signal, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product-card',
  standalone: true, // Convertido a Standalone
  template: `
    <h3>Detalle del producto</h3>

    @if (product) {
      <div class="product-card">
        <img [src]="product.image" [alt]="product.title" style="width: 100px;" />
        <h4>{{ product.title }}</h4>
        <p>{{ product.description }}</p>
        <p><strong>Precio:</strong> {{ product.price }}</p>
        <p>ID del producto: {{ product.id }}</p>
      </div>
    } @else {
      <p>Cargando producto o no encontrado...</p>
    }
  `,
  styleUrls: ['./detail-product-card.css'],
})
export class DetailProductCard implements OnInit {
  product: Product | null = null;
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  ngOnInit() {
    const id = 1;
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }
}
