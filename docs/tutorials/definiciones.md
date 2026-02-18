
# Definiciones rápidas — Angular

Este documento recoge definiciones concisas de conceptos clave de Angular organizadas por relación: Reactividad → Inyección de dependencias → HTTP → UI → Plantillas. Pídeme que añada más términos cuando los necesites.

---

## Reactividad

### signals
- **Qué es:** Un primitivo reactivo que almacena un valor y notifica a sus dependientes cuando cambia.
- **Para qué sirve:** Gestionar estado local de forma reactiva en componentes y servicios, con bajo coste y trazabilidad.
- **Uso básico:** `signal(initialValue)`; leer con `mySignal()` y actualizar con `mySignal.set()` o `mySignal.update()`.
- **Enlace oficial:** https://v20.angular.dev/essentials/signals

Ejemplo:

```ts
import { signal } from '@angular/core';

const count = signal(0);
count.set(1);
```

### computed
- **Qué es:** Un valor derivado reactivo que se recalcula automáticamente cuando cambian sus dependencias (`signals`).
- **Para qué sirve:** Evitar cálculos duplicados en la plantilla o lógica, mantener la representación derivada consistente.
- **Uso básico:** `computed(() => /* expresión que usa signals */)`; es de solo lectura.
- **Enlace oficial:** https://v20.angular.dev/essentials/signals

Ejemplo:

```ts
import { signal, computed } from '@angular/core';

const count = signal(2);
const double = computed(() => count() * 2);

console.log(double()); // 4
```

### effect (breve)

Ejemplo:

```ts
import { signal, effect } from '@angular/core';

const count = signal(0);
effect(() => console.log('count cambió a', count()));
```

### observable
- **Qué es:** Un primitivo para representar flujos de valores asíncronos, proporcionado por RxJS; Angular lo usa ampliamente (p. ej. `HttpClient` devuelve `Observable`).
- **Para qué sirve:** Modelar eventos, respuestas HTTP, timers y cualquier stream de datos de forma composable y cancelable.
- **Uso básico:** crear con creadores (`of`, `from`, `new Observable`) y transformar con operadores (p. ej. `map`, `filter`).
- **Enlace:** https://rxjs.dev/guide/observable  —  https://v20.angular.dev/guide/observables

Ejemplo:

```ts
import { of } from 'rxjs';

const obs = of(1, 2, 3);
obs.subscribe(v => console.log(v));
```

### subscribe / unsubscribe
- **Qué es:** `subscribe` conecta un `Observer` al `Observable` para recibir valores; `unsubscribe` cancela esa conexión.
- **Para qué sirve:** Consumir valores del stream y liberar recursos para evitar fugas de memoria.
- **Uso básico:** `const sub = obs.subscribe(next, error, complete); sub.unsubscribe();`
- **Enlace:** https://rxjs.dev/guide/subscription

Ejemplo:

```ts
const sub = obs.subscribe({ next: v => console.log(v) });
sub.unsubscribe();
```

---

## Inyección de dependencias

### inject
- **Qué es:** Función para obtener dependencias en contexto sin usar el constructor (inyección explícita fuera de clases).
- **Para qué sirve:** Acceder a servicios desde funciones, fábricas o configuraciones de forma simple.
- **Uso básico:** `const svc = inject(MyService);`
- **Enlace oficial:** https://v20.angular.dev/guide/dependency-injection

Ejemplo:

```ts
import { inject } from '@angular/core';
import { MyService } from './my.service';

const svc = inject(MyService);
```

---

## HTTP

### interceptor
- **Qué es:** Clase que implementa `HttpInterceptor` para interceptar y transformar solicitudes y respuestas HTTP.
- **Para qué sirve:** Añadir cabeceras, manejar errores globales, autenticar peticiones, registrar tráfico.
- **Uso básico:** Proveer el interceptor en `providers` con `HTTP_INTERCEPTORS`.
- **Enlace oficial:** https://v20.angular.dev/guide/http

Ejemplo (esquema):

```ts
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler) {
		const cloned = req.clone({ setHeaders: { Authorization: 'Bearer ...' } });
		return next.handle(cloned);
	}
}
```

---

## UI / Navegación

### viewTransition
- **Qué es:** API para animaciones de transición entre vistas (View Transitions API del navegador). Angular puede integrarla para transiciones suaves entre rutas/vistas.
- **Para qué sirve:** Mejorar la experiencia visual al cambiar de vista con animaciones de página.
- **Referencia (API del navegador):** https://developer.mozilla.org/docs/Web/API/View_Transitions_API

Nota: La integración en Angular puede requerir utilidades o pequeñas adaptaciones en componentes y rutas.

---

## Plantillas

### pipe
- **Qué es:** Transformador de datos que se aplica en plantillas para formatear valores (`|`), p. ej. `date`, `currency` o pipes personalizados.
- **Para qué sirve:** Separar lógica de formato de la plantilla y reutilizar transformaciones.
- **Uso básico:** `{{ value | myPipe:arg }}` y declarar con `@Pipe`.
- **Enlace oficial:** https://v20.angular.dev/guide/pipes

Ejemplo:

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
	transform(value: string, length = 20) {
		return value.length > length ? value.slice(0, length) + '…' : value;
	}
}
```

---

Solicita más términos y los añado con enlace a la documentación oficial (p. ej. `NgOptimizedImage`, `router`, `signals` avanzados).


