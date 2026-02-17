# 🎨 Tutorial de Prettier en Angular 20

## ¿Qué es Prettier?

**Prettier** es un formateador de código automático. Su propósito es garantizar que todo tu código tenga un estilo consistente, sin importar quién lo escriba o cómo lo escriba inicialmente.

Es como un "corrector de estilo" automático que se asegura de que:

- Todas las líneas tengan máximo X caracteres
- Las comillas sean consistentes (simples o dobles)
- La indentación sea uniforme
- Los espacios estén en los lugares correctos

### ¿Por qué usar Prettier?

1. **Consistencia**: Todo el equipo escribe código con el mismo estilo
2. **Menos conflictos**: No hay discusiones sobre cómo formatear el código
3. **Ahorro de tiempo**: No dedicas tiempo manual a formatear
4. **Enfoque en lógica**: Te concentras en escribir código funcional, no en el formato
5. **Integración CI/CD**: Puedes verificar que el código cumple con el estilo antes de hacer merge

---

## 📦 Paso 1: Instalación

### ¿Qué hicimos?

```bash
npm install --save-dev prettier
```

### ¿Qué significa esto?

- `npm install` - Comando para descargar paquetes
- `--save-dev` - Guarda Prettier como dependencia de **desarrollo** (solo se necesita en desarrollo, no en producción)
- `prettier` - El nombre del paquete a instalar

### ¿Dónde se guardó?

Se guardó en `node_modules/` y se registró en el archivo `package.json` bajo `"devDependencies"`.

---

## ⚙️ Paso 2: Archivos de Configuración

### 📄 Archivo: `.prettierrc.json`

Este archivo contiene todas las reglas de formato. Veamos cada opción:

```json
{
  "printWidth": 100,
```

**¿Qué hace?** Define el máximo de caracteres por línea. Si una línea supera 100 caracteres, Prettier la divide en varias líneas.

```json
  "tabWidth": 2,
```

**¿Qué hace?** Define cuántos espacios usa para la indentación. Aquí usamos 2 espacios (muy común en Angular y JavaScript).

```json
  "useTabs": false,
```

**¿Qué hace?** Si fuera `true`, usaría tabulaciones (`\t`). Aquí `false` significa que usa espacios en lugar de tabulaciones.

```json
  "semi": true,
```

**¿Qué hace?** Si es `true`, añade punto y coma (`;`) al final de las instrucciones. Si fuera `false`, no lo haría.

**Ejemplo:**

- Con `semi: true` → `const name = 'John';`
- Con `semi: false` → `const name = 'John'`

```json
  "singleQuote": true,
```

**¿Qué hace?** Usa comillas simples (`'`) en lugar de comillas dobles (`"`).

**Ejemplo:**

- Con `singleQuote: true` → `const name = 'John';`
- Con `singleQuote: false` → `const name = "John";`

```json
  "quoteProps": "as-needed",
```

**¿Qué hace?** Solo añade comillas a las propiedades de objetos cuando sea necesario.

**Ejemplo:**

- Con `as-needed` → `{ name: 'John', 'class-name': 'active' }`
- Con `always` → `{ "name": "John", "class-name": "active" }`

```json
  "jsxSingleQuote": false,
```

**¿Qué hace?** En JSX (y Angular templates), usa comillas dobles en lugar de simples. Aunque aquí desactivamos porque usaremos comillas específicas del parser Angular.

```json
  "trailingComma": "es5",
```

**¿Qué hace?** Añade comas finales cuando es válido en ES5.

**Ejemplo:**

- Con `es5` → `const arr = [1, 2, 3,];` (nota la coma final)
- Con `none` → `const arr = [1, 2, 3];` (sin coma final)

```json
  "bracketSpacing": true,
```

**¿Qué hace?** Añade espacios dentro de llaves en objetos.

**Ejemplo:**

- Con `true` → `{ name: 'John' }`
- Con `false` → `{name: 'John'}`

```json
  "bracketSameLine": false,
```

**¿Qué hace?** En JSX/HTML, si es `false`, la etiqueta de cierre va en nueva línea.

**Ejemplo:**

```jsx
// Con false:
<button
  onClick={handleClick}
>
  Click me
</button>

// Con true:
<button
  onClick={handleClick}>
  Click me
</button>
```

```json
  "arrowParens": "always",
```

**¿Qué hace?** Siempre añade paréntesis a funciones flecha, incluso con un solo parámetro.

**Ejemplo:**

- Con `always` → `(x) => x * 2`
- Con `avoid` → `x => x * 2`

```json
  "endOfLine": "lf",
```

**¿Qué hace?** Define qué carácter de salto de línea usar (`lf` = Line Feed, usado en Linux/Mac; `crlf` = Carriage Return + Line Feed, usado en Windows).

```json
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular",
        "printWidth": 100
      }
    },
    {
      "files": "*.component.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
```

**¿Qué hace?** Define excepciones para ciertos tipos de archivo.

- Para archivos `.html` y `.component.html`, usamos el parser `angular` que entiende la sintaxis especial de Angular.

---

### 📄 Archivo: `.prettierignore`

Este archivo lista los archivos y carpetas que Prettier **NO** debe formatear:

```
node_modules/          # No formatear dependencias
dist/                  # No formatear código compilado
.angular/              # No formatear caché de Angular
.env                   # No formatear variables de entorno
angular.json           # Archivo de configuración (no lo tocamos)
README.md              # Documentación
```

---

### 📁 Archivo: `.vscode/settings.json`

Configuración específica de VS Code:

```json
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
```

**¿Qué significa?**

- `[html]` - Aplica estas reglas solo a archivos HTML
- `"editor.defaultFormatter": "esbenp.prettier-vscode"` - Usa la extensión de Prettier para VS Code como formateador por defecto
- `"editor.formatOnSave": true` - Formatea automáticamente cuando guardas el archivo

Lo mismo aplica para `[typescript]`, `[javascript]`, `[json]` y `[css]`.

---

## 🚀 Paso 3: Scripts NPM

Se agregaron dos scripts al `package.json`:

```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

### Script 1: `npm run format`

```bash
npm run format
```

**¿Qué hace?** Formatea automáticamente todos los archivos que encontré y los modifica (`--write`).

**Ejemplo de salida:**

```
src/app/app.ts 6ms
src/app/app.html 101ms
src/main.ts 3ms
```

### Script 2: `npm run format:check`

```bash
npm run format:check
```

**¿Qué hace?** Verifica si los archivos cumplen con el formato de Prettier SIN modificarlos (`--check`).

**Uso práctico:** Útil en CI/CD para asegurar que el código tiene el formato correcto antes de hacer merge.

---

## 🔧 Paso 4: Configuración de VS Code (Extensión)

### ¿Qué es la extensión?

La extensión `esbenp.prettier-vscode` integra Prettier directamente en VS Code.

### Beneficios:

1. **Formateo al guardar**: Cuando presionas `Ctrl+S`, el archivo se formatea automáticamente
2. **Feedback visual**: Ves cambios en tiempo real
3. **Sin necesidad de terminal**: No tienes que correr `npm run format` manualmente

### Instalación de la extensión:

1. Abre VS Code
2. Ve a Extensions (`Ctrl+Shift+X`)
3. Busca "Prettier"
4. Instala `Prettier - Code formatter` por Prettier

---

## 💡 Paso 5: Pruebas

### Test 1: Verificar formato

```bash
npm run format:check
```

**Si hay problemas**, verás un listado:

```
[warn] src/app/app.ts
[warn] src/app/app.html
Code style issues found in 2 files. Run Prettier with --write to fix.
```

### Test 2: Formatear archivos

```bash
npm run format
```

**Si todo está bien**, verás:

```
src/app/app.ts 6ms
src/app/app.html 101ms (unchanged)
```

### Test 3: Formateo automático en VS Code

1. Abre cualquier archivo TypeScript o HTML
2. Dale un formato incorrecto (por ejemplo, deja líneas muy largas, comillas inconsistentes)
3. Presiona `Ctrl+S` para guardar
4. Prettier formateará automáticamente

---

## 📋 Flujo de trabajo recomendado

### En desarrollo:

1. Instala la extensión Prettier en VS Code
2. El formateador automático se ejecuta al guardar
3. No tienes que preocuparte por el formato manualmente

### Antes de hacer commit:

```bash
npm run format:check
```

Si falla, ejecuta:

```bash
npm run format
```

### En CI/CD (en servidor):

```bash
npm run format:check
```

Si falla, rechaza el pull request. Así garantizas que todo código tenga el formato correcto.

---

## 🎯 Resumen de opciones elegidas y por qué

| Opción           | Valor  | Razón                                                |
| ---------------- | ------ | ---------------------------------------------------- |
| `printWidth`     | 100    | Estándar en Angular, legible en pantallas modernas   |
| `tabWidth`       | 2      | Estándar de Angular, menos indentación anidada       |
| `useTabs`        | false  | Espacios son más compatibles y portables             |
| `semi`           | true   | Estándar en TypeScript, evita bugs sutiles           |
| `singleQuote`    | true   | Menos caracteres, más legible en TypeScript          |
| `trailingComma`  | es5    | Reduce conflictos en Git cuando se agregan elementos |
| `bracketSpacing` | true   | Más legible: `{ x }` vs `{x}`                        |
| `arrowParens`    | always | Consistencia, evita cambios al refactorizar          |
| `endOfLine`      | lf     | Estándar en proyectos modernos                       |

---

## 🔗 Recursos útiles

- [Documentación oficial de Prettier](https://prettier.io/docs/en/index.html)
- [Configuración recomendada para Angular](https://prettier.io/docs/en/rationale.html)
- [Integración VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

---

## ❓ Preguntas frecuentes

### P: ¿Prettier reemplaza a ESLint?

**R:** No, son complementarios. ESLint verifica errores y problemas de código, Prettier solo formatea el código.

### P: ¿Puedo personalizar más las reglas?

**R:** Sí, todas las opciones en `.prettierrc.json` se pueden ajustar según tus necesidades.

### P: ¿Afecta el rendimiento de mi aplicación?

**R:** No, Prettier solo es para desarrollo. No afecta el código producción.

### P: ¿Puedo excluir algunos archivos?

**R:** Sí, usando `.prettierignore` como hicimos.

### P: ¿Qué pasa si trabajo en equipo?

**R:** Excelente pregunta. Prettier garantiza que todos tengan el mismo estilo, reduciendo conflictos en Git.

---

## 🎓 ¡Repaso final!

✅ Instalamos Prettier  
✅ Configuramos las reglas de formato  
✅ Agregamos scripts para formatear  
✅ Configuramos VS Code para formateo automático  
✅ Entendemos para qué sirve cada opción

¡Ya tienes Prettier completamente configurado y funcionando en tu proyecto Angular 20! 🚀
