# Tutorial de Layout (Angular 20)

Esta guia explica el layout base (layout + nav + footer) y los estilos basicos que trae.

## Objetivo

Tener una estructura base consistente:

- Nav arriba
- Contenido de rutas en el centro
- Footer abajo

## Archivos implicados

- Layout: [src/app/layouts/main-layout/main-layout.ts](../../src/app/layouts/main-layout/main-layout.ts)
- Estilos del layout: [src/app/layouts/main-layout/main-layout.css](../../src/app/layouts/main-layout/main-layout.css)
- Nav: [src/app/components/nav-bar/navbar.ts](../../src/app/components/nav-bar/navbar.ts)
- Estilos del nav: [src/app/components/nav-bar/navbar.css](../../src/app/components/nav-bar/navbar.css)
- Footer: [src/app/components/footer/footer.ts](../../src/app/components/footer/footer.ts)
- Estilos del footer: [src/app/components/footer/footer.css](../../src/app/components/footer/footer.css)

## Como funciona el layout

El layout principal es la estructura base de la app. Renderiza:

1) Navegacion
2) Router outlet (contenido de pagina)
3) Footer

Estructura clave del template:

```html
<div class="main-layout">
  <app-navbar />
  <main>
    <router-outlet />
  </main>
  <app-footer />
</div>
```

Este layout se registra en el router para que cada ruta se renderice dentro de el. Mira [src/app/app.routes.ts](../../src/app/app.routes.ts).

## Componente Nav

El nav usa router links para navegar entre paginas.

```html
<nav class="navbar">
  <a routerLink="/">Home</a>
  <a routerLink="/products">Products</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>
```

## Componente Footer

El footer es un contenedor simple para el texto de copyright y un logo.

```html
<footer class="footer">
  <p>...texto de copyright...</p>
  <img ... />
</footer>
```

Nota: el logo actual es una imagen base64 inline. Si cambias a un archivo estatico, usa NgOptimizedImage como recomienda Angular.

## Estilos basicos

Layout:

```css
.main-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100dvh;
}
```

Nav:

```css
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navbar a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
```

Footer:

```css
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem;
  width: 90dvw;
  text-decoration: none;
  font-weight: bold;
}
```

## Por que esta estructura

- El layout mantiene el nav y el footer visibles en todas las paginas.
- Router outlet maneja el cambio de paginas sin recargar toda la app.
- Los estilos basicos con flex dan una estructura limpia para ampliar despues.

## Ideas siguientes (opcional)

- Agregar estilos para la ruta activa en el nav.
- Hacer el nav responsive con menu movil.
- Reemplazar el logo del footer por un asset estatico con NgOptimizedImage.
