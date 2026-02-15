# 🔍 Tutorial de ESLint en Angular 20

## ¿Qué es ESLint?

**ESLint** es una herramienta que analiza tu código de JavaScript/TypeScript en busca de problemas.

### Diferencia entre Prettier y ESLint

| Herramienta  | Función                                       | Ejemplo                                     |
| ------------ | --------------------------------------------- | ------------------------------------------- |
| **Prettier** | Formatea el código (espacios, comillas, etc.) | `name = 'John'` vs `name = "John"`          |
| **ESLint**   | Encuentra errores y problemas de código       | Variable sin usar, `console.log()` olvidado |

### ¿Por qué usar ESLint?

1. **Encuentra bugs temprano**: Detecta variables sin usar, tipos incorrectos
2. **Mejora calidad**: Refuerza mejores prácticas de Angular
3. **Consistencia de equipo**: Todos siguen las mismas reglas
4. **Educación**: Te enseña patrones correctos mientras escribes

---

## 📦 Instalación

### Paquetes instalados:

```bash
npm install --save-dev \
  eslint \
  @angular-eslint/eslint-plugin \
  @angular-eslint/eslint-plugin-template \
  typescript-eslint \
  eslint-config-prettier
```

### ¿Qué es cada uno?

- **eslint**: Core de ESLint
- **@angular-eslint/\***: Reglas específicas de Angular
- **typescript-eslint**: Soporte para TypeScript
- **eslint-config-prettier**: Integración con Prettier

---

## ⚙️ Configuración: `eslint.config.js`

### Estructura base

```javascript
export default [
  {
    ignores: [
      'node_modules/**', // No revisar dependencies
      'dist/**', // No revisar código compilado
      '.angular/**', // No revisar caché de Angular
    ],
  },
  // ... configuración de reglas
];
```

### Configuración de TypeScript

```javascript
{
  files: ['**/*.ts'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
}
```

### Explicación de cada regla:

#### `'no-console': ['warn', { allow: ['warn', 'error'] }]`

**¿Qué hace?** Advierte sobre `console.log()` pero permite `console.warn()` y `console.error()`.

**Razón:** No queremos olvidar debugging statements en producción, pero sí queremos logs importantes.

```typescript
console.log('debug'); // ⚠️ Advertencia
console.warn('warning'); // ✅ Permitido
console.error('error'); // ✅ Permitido
```

#### `'no-debugger': 'warn'`

**¿Qué hace?** Advierte si dejas un `debugger;` en el código.

```typescript
debugger; // ⚠️ Advertencia - ¡Lo olvidaste en producción!
```

#### `'no-var': 'error'`

**¿Qué hace?** Obliga a usar `let` o `const` en lugar de `var`.

```typescript
var name = 'John'; // ❌ Error
let age = 30; // ✅ Correcto
const city = 'NYC'; // ✅ Correcto
```

**Razón:** `var` tiene comportamiento extraño (hoisting), `let` y `const` son más predecibles.

#### `'prefer-const': 'error'`

**¿Qué hace?** Si una variable no cambia, debe ser `const`.

```typescript
let name = 'John'; // ❌ Error - debería ser const
const age = 30; // ✅ Correcto

let count = 0; // ✅ Correcto - la modificas luego
count++;
```

**Razón:** Hacer que el código sea más claro. Si es `const`, sabes que no cambia.

#### `'@typescript-eslint/no-explicit-any': 'warn'`

**¿Qué hace?** Advierte cuando usas `any` en TypeScript.

```typescript
let value: any; // ⚠️ Advertencia
let value: unknown; // ✅ Mejor - más seguro
```

**Razón:** `any` desactiva la validación de tipos de TypeScript. `unknown` es más seguro.

---

## 📝 Scripts NPM

Se agregaron dos scripts al `package.json`:

### `npm run lint`

```bash
npm run lint
```

**¿Qué hace?** Revisa todos los archivos TypeScript sin modificarlos.

**Salida example:**

```
/src/server.ts
  59:5  warning  Unexpected console statement  no-console

✖ 1 problem (0 errors, 1 warning)
```

### `npm run lint:fix`

```bash
npm run lint:fix
```

**¿Qué hace?** Intenta corregir automáticamente los errores encontrados.

**Ejemplo:**

```typescript
// Antes:
var name = 'John';

// Después de npm run lint:fix:
const name = 'John';
```

---

## 🔧 Integración con VS Code

### Configuración en `.vscode/settings.json`:

```json
{
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "eslint.validate": ["javascript", "typescript"],
  "eslint.format.enable": true
}
```

### ¿Qué significa?

- `"source.fixAll.eslint": "explicit"` - Cuando presionas `Ctrl+S`, corrige automáticamente los errores que ESLint puede arreglar
- `"eslint.validate"` - Tipos de archivo que ESLint debe revisar
- `"eslint.format.enable": true` - Habilita ESLint como formateador

### Instalación de extensión:

1. Abre VS Code
2. Ve a Extensions (`Ctrl+Shift+X`)
3. Busca "ESLint"
4. Instala "ESLint" por Dirk Baeumer

---

## 🚀 Flujo de trabajo recomendado

### En desarrollo:

1. Instala la extensión ESLint en VS Code
2. Cuando cometas un error, ESLint lo muestra en rojo
3. Presiona `Ctrl+S` para guardar
4. ESLint intenta corregir automáticamente

**Ejemplo visual en VS Code:**

```typescript
var count = 0; // 🔴 Error rojo - 'no-var'
count++;

// Presionas Ctrl+S
// Automáticamente se convierte en:
const count = 0;
```

### Antes de hacer commit:

```bash
npm run lint
npm run format:check
```

Si fallan, ejecuta:

```bash
npm run lint:fix
npm run format
```

### En CI/CD (servidor):

```bash
npm run lint
npm run format:check
```

Si falla, rechaza el PR para que el desarrollador lo corrija.

---

## 📊 Niveles de severidad

Las reglas en ESLint pueden ser:

| Nivel     | Símbol | Significado                       |
| --------- | ------ | --------------------------------- |
| `"off"`   | ⚪     | No revisar esta regla             |
| `"warn"`  | 🟡     | Advertencia (no detiene el build) |
| `"error"` | 🔴     | Error (detiene el build)          |

### Ejemplos:

```javascript
// Ej 1: Permitir console.log
'no-console': 'off'

// Ej 2: Advertencia si usas var
'no-var': 'warn'

// Ej 3: Error obligatorio si usas any
'@typescript-eslint/no-explicit-any': 'error'
```

---

## 🎯 Reglas comunes en Angular 20

### Reglas TypeScript básicas

| Regla             | Nivel | Razón                        |
| ----------------- | ----- | ---------------------------- |
| `no-console`      | warn  | Evitar olvidos en producción |
| `no-debugger`     | warn  | Evitar breakpoints olvidados |
| `no-var`          | error | Obligar let/const            |
| `prefer-const`    | error | Claridad del código          |
| `no-explicit-any` | warn  | Seguridad de tipos           |

### Reglas Angular específicas

Se pueden agregar (si configuras angular-eslint):

```javascript
'@angular-eslint/use-lifecycle-interface': 'error',
'@angular-eslint/no-host-metadata-property': 'error',
'@angular-eslint/component-selector': 'error',
'@angular-eslint/directive-selector': 'error',
```

---

## ❓ Preguntas frecuentes

### P: ¿Prettier y ESLint se pelean?

**R:** Por eso instalamos `eslint-config-prettier`. Desactiva las reglas de ESLint que conflictúan con Prettier, así no se interfieren.

### P: ¿Puedo ignorar una regla específica?

**R:** Sí, en una línea específica:

```typescript
// eslint-disable-next-line no-console
console.log('Important debug info');
```

O en un archivo completo (al inicio):

```typescript
/* eslint-disable no-console */
```

### P: ¿Por qué ESLint aviso pero no Error?

**R:** Los `warn` no detienen el build. Los `error` sí. Usamos `warn` para avisos que no son críticos.

### P: ¿Qué si lo corrijo manualmente?

**R:** Está bien, pero `npm run lint:fix` es más rápido y consistente.

### P: ¿Puedo modificar las reglas?

**R:** Sí, edita `eslint.config.js` y busca la regla que quieras cambiar.

---

## 🔗 Archivos importantes

- [eslint.config.js](eslint.config.js) - Configuración
- [.vscode/settings.json](.vscode/settings.json) - Integración con VS Code
- [PRETTIER_TUTORIAL.md](PRETTIER_TUTORIAL.md) - Guía de Prettier

---

## 📝 Resumen

✅ ESLint revisa tu código en busca de problemas  
✅ Prettier formatea el código  
✅ Juntos garantizan código limpio y consistente  
✅ Integración con VS Code para feedback automático  
✅ Scripts para verificar y corregir antes de commit

¡Ahora tienes linting profesional en tu proyecto Angular 20! 🚀
