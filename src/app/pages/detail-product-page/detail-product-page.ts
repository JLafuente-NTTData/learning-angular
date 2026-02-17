import { Component, inject, signal, OnInit } from '@angular/core';
import { DetailProductCard } from '../../components/detail-product-card/detail-product-card';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../../services/product'; // Importamos el servicio para obtener los detalles del producto

@Component({
  selector: 'app-detail-product-page',
  standalone: true,
  imports: [DetailProductCard],
  template: `
    <h2>Product Detail</h2>
    <p>This is the product detail page.</p>
    @if (product(); as product) {
      <app-detail-product-card [product]="product"></app-detail-product-card>
    } @else {
      <p>Cargando producto</p>
    }
  `,
})
export class DetailProductPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product = signal<Product | null>(null);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe({
        next: (data) => {
          this.product.set(data);
        },
      });
    });
  }
}
