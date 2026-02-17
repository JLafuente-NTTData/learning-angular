# Tutorial de View Transitions (Angular 20)

Esta guia explica como activar transiciones de rutas con View Transitions y donde definir los estilos globales.

## Objetivo

- Activar transiciones suaves entre paginas
- Definir estilos globales para la animacion

## Archivos implicados

- Configuracion del router: [src/app/app.config.ts](src/app/app.config.ts)
- Estilos globales: [src/styles.css](src/styles.css)

## Paso 1: Activar View Transitions en el router

En Angular 20 se habilita con `withViewTransitions()` dentro de `provideRouter`.

```typescript
import { provideRouter, withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
  ],
};
```

Idea clave:

- Esto es un *progressive enhancement*. Si el navegador no lo soporta, la app sigue funcionando sin animacion.

## Paso 2: Estilos globales

Las animaciones deben vivir en el archivo global porque los pseudo-elementos de view transitions no funcionan bien con el encapsulamiento de estilos.

Ejemplo basico:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 300ms;
}
```

Puedes crear animaciones mas personalizadas usando `@keyframes` y asignando `view-transition-name` a elementos concretos.

## Buenas practicas

- Mantener los estilos de view transitions en `src/styles.css`.
- Empezar con una animacion simple y luego mejorar.
- No bloquear la navegacion esperando datos.

## Nota importante

View Transitions esta en *developer preview* en Angular 20 y depende del soporte del navegador.
