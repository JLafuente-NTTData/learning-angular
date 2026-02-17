# Tutorial de Spinner (Angular 20)

Esta guia explica el componente Spinner y como se usa para mostrar estados de carga.

## Objetivo

- Mostrar feedback visual cuando se cargan datos
- Reutilizar un componente simple en varias paginas

## Archivos implicados

- Componente: [src/app/components/spinner/spinner.ts](../../src/app/components/spinner/spinner.ts)
- Estilos: [src/app/components/spinner/spinner.css](../../src/app/components/spinner/spinner.css)
- Uso en lista: [src/app/components/list-products/list-product.ts](../../src/app/components/list-products/list-product.ts)
- Uso en detalle: [src/app/pages/detail-product-page/detail-product-page.ts](../../src/app/pages/detail-product-page/detail-product-page.ts)

## Componente Spinner

El componente recibe un booleano y muestra el overlay si esta cargando.

```typescript
@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    @if (isLoading()) {
      <div class="spinner-overlay">
        <div class="spinner">
          <div class="circle"></div>
        </div>
      </div>
    }
  `,
  styleUrls: ['./spinner.css'],
})
export class SpinnerComponent {
  isLoading = input(false);
}
```

## Estilos basicos

```css
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
}

.circle {
  width: 100%;
  height: 100%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## Uso en la lista de productos

```typescript
@Component({
  selector: 'app-list-products',
  imports: [RouterLink, SpinnerComponent],
  template: `
    <app-spinner [isLoading]="isLoading()"></app-spinner>
    @if (!isLoading()) {
      ...
    }
  `,
})
export class ListProductsComponent {
  isLoading = signal(true);

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
      this.isLoading.set(false);
    });
  }
}
```

## Uso en el detalle

```typescript
@Component({
  selector: 'app-detail-product-page',
  imports: [DetailProductCard, SpinnerComponent],
  template: `
    @if (product(); as product) {
      <app-detail-product-card [product]="product"></app-detail-product-card>
    } @else {
      <app-spinner [isLoading]="isLoading()"></app-spinner>
    }
  `,
})
export class DetailProductPage {
  isLoading = signal(true);
}
```

## Buenas practicas

- Mantener el spinner desacoplado de los datos.
- Reutilizarlo en cualquier pagina que necesite carga.
- Mostrarlo solo mientras el estado lo indique.
