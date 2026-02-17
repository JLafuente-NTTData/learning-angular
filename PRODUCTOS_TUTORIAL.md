# Tutorial de Productos (Angular 20)

Esta guia explica la feature de productos paso a paso: servicio, pagina, componente de lista y rutas.

## Objetivo

- Cargar productos desde una API
- Mostrar listado en una pagina dedicada
- Navegar al detalle por ID

## Archivos implicados

- Servicio: [src/app/services/product.ts](src/app/services/product.ts)
- Pagina: [src/app/pages/products/products.ts](src/app/pages/products/products.ts)
- Componente lista: [src/app/components/list-products/list-product.ts](src/app/components/list-products/list-product.ts)
- Rutas: [src/app/app.routes.ts](src/app/app.routes.ts)

## Flujo de datos (resumen)

1) El usuario entra a /products
2) Se carga ProductsPage
3) ProductsPage renderiza el componente de lista
4) ListProductsComponent pide datos al servicio
5) El servicio llama a la API y devuelve productos
6) La lista se renderiza con enlaces al detalle

## Paso 1: Servicio de productos

El servicio centraliza las llamadas HTTP y define la estructura del producto.

```typescript
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
```

Ideas clave:

- El servicio es singleton con providedIn: 'root'.
- El tipado de Product evita any y mejora autocompletado.

## Paso 2: Pagina de productos

La pagina se encarga de componer la vista con componentes.

```typescript
@Component({
  selector: 'app-products',
  template: `
    <h2>Productos</h2>
    <app-list-products></app-list-products>
  `,
  imports: [ListProductsComponent],
})
export class ProductsPage {}
```

Punto importante:

- La pagina no obtiene datos. Solo compone la UI.

## Paso 3: Componente de lista

El componente lista obtiene los datos y los pinta.

```typescript
@Component({
  selector: 'app-list-products',
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
})
export class ListProductsComponent {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  isLoading = signal(true);

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
      this.isLoading.set(false);
    });
  }
}
```

Ideas clave:

- Se usan signals para el estado local.
- El routerLink construye rutas dinamicas a /products/:id.
- Se muestra un estado de carga basico.

## Paso 4: Rutas

Las rutas enlazan la pagina y el detalle.

```typescript
{
  path: 'products',
  loadComponent: () => import('./pages/products/products').then((m) => m.ProductsPage),
},
{
  path: 'products/:id',
  loadComponent: () =>
    import('./pages/detail-product-page/detail-product-page').then((m) => m.DetailProductPage),
},
```

## Buenas practicas

- Mantener el servicio enfocado en datos y HTTP.
- Separar pagina (composicion) de componente (logica).
- Usar signals y templates simples.

## Siguiente paso

- Implementar el detalle del producto en una pagina dedicada.
- Reutilizar un componente de tarjeta de detalle.
