# Tutorial de Detail Card (Angular 20)

Esta guia explica el componente de tarjeta de detalle y su uso dentro de la pagina de detalle.

## Objetivo

- Mostrar la informacion completa de un producto
- Separar la UI del detalle en un componente reutilizable

## Archivos implicados

- Componente: [src/app/components/detail-product-card/detail-product-card.ts](../../src/app/components/detail-product-card/detail-product-card.ts)
- Estilos: [src/app/components/detail-product-card/detail-product-card.css](../../src/app/components/detail-product-card/detail-product-card.css)
- Pagina detalle: [src/app/pages/detail-product-page/detail-product-page.ts](../../src/app/pages/detail-product-page/detail-product-page.ts)

## Flujo de datos (resumen)

1. Se navega a /products/:id
2. DetailProductPage lee el id desde la ruta
3. El servicio obtiene el producto
4. Se pasa el producto a DetailProductCard
5. El componente renderiza los datos

## Paso 1: Componente de tarjeta

El componente recibe un producto por input y renderiza su contenido.

```typescript
@Component({
  selector: 'app-detail-product-card',
  standalone: true,
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
```

Ideas clave:

- El input es obligatorio con input.required.
- El componente solo muestra datos, no hace llamadas HTTP.

## Paso 2: Pagina de detalle

La pagina obtiene los datos y los pasa al componente.

```typescript
@Component({
  selector: 'app-detail-product-page',
  standalone: true,
  imports: [DetailProductCard, SpinnerComponent],
  template: `
    @if (product(); as product) {
      <app-detail-product-card [product]="product"></app-detail-product-card>
    } @else {
      <app-spinner [isLoading]="isLoading()"></app-spinner>
    }
  `,
})
export class DetailProductPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product = signal<Product | null>(null);
  isLoading = signal(true);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe({
        next: (data) => {
          this.product.set(data);
          this.isLoading.set(false);
        },
      });
    });
  }
}
```

Ideas clave:

- La pagina es la responsable de leer el id y pedir el producto.
- El componente de tarjeta se mantiene simple y reutilizable.
- Se muestra un spinner mientras se cargan los datos.

## Estilos basicos

```css
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  strong {
    color: #02468f;
  }
}
```

## Buenas practicas

- Mantener el componente enfocado en renderizar.
- Dejar la logica de datos en la pagina.
- Usar signals para estado local y UI reactiva.
