# Tutorial de Debugger (Angular 20)

Esta guia explica como depurar una app Angular con VS Code y Chrome/Edge.

## Objetivo

- Usar breakpoints en TypeScript
- Inspeccionar variables en tiempo real
- Depurar navegacion y servicios

## Archivo clave

- Configuracion de debug: [.vscode/launch.json](../../.vscode/launch.json)

## Paso 1: Configurar VS Code

Ejemplo recomendado para Angular 20:

```jsonc
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "pwa-chrome",
      "request": "launch",
      "preLaunchTask": "npm: start",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceFolder}",
    },
    {
      "name": "ng test",
      "type": "pwa-chrome",
      "request": "launch",
      "preLaunchTask": "npm: test",
      "url": "http://localhost:9876/debug.html",
      "webRoot": "${workspaceFolder}",
    },
  ],
}
```

## Paso 2: Ejecutar el debugger

1. Abre la vista Run and Debug en VS Code
2. Selecciona "ng serve"
3. Pulsa Start
4. Pon breakpoints en archivos .ts

## Paso 3: Usar "debugger;"

Puedes forzar la pausa con una linea en el codigo:

```ts
ngOnInit() {
  debugger;
}
```

## Opcion alternativa: Chrome DevTools

1. Abre http://localhost:4200
2. F12 -> Sources
3. Busca el archivo .ts en webpack://
4. Coloca breakpoints y recarga

## Tips utiles

- Usa "ng serve" para sourcemaps en desarrollo.
- Si no funciona el breakpoint, revisa webRoot.
- Evita builds optimizados cuando depuras.
