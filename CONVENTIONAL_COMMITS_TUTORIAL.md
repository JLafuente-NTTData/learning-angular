# 📝 Tutorial: Conventional Commits

Guía completa para escribir commits profesionales siguiendo el estándar **Conventional Commits**.

---

## ¿Qué son Conventional Commits?

**Conventional Commits** es una convención para escribir mensajes de commit de forma clara, consistente y automáticamente parseable.

### Beneficios:

✅ Historial legible y organizado  
✅ Genera automáticamente changelog  
✅ Facilita el versionado automático (semver)  
✅ Estándar en equipos profesionales  
✅ Tu código es más profesional

---

## 📋 Formato Básico

```
<tipo>(<scope>): <descripción corta>

<descripción detallada (opcional)>

<footer (opcional)>
```

### Desglose:

- **`tipo`** - Qué tipo de cambio es (obligatorio)
- **`scope`** - En qué parte del código (opcional pero recomendado)
- **`descripción corta`** - Qué hiciste en máximo 50 caracteres (obligatorio)
- **`descripción detallada`** - Más detalles si es necesario (opcional)
- **`footer`** - Referencias a issues, breaking changes, etc. (opcional)

---

## 🏷️ Tipos de Cambios

### `feat` - Nueva funcionalidad

**Uso:** Cuando agregas una nueva característica al proyecto.

```bash
git commit -m "feat: agregar componente de autenticación"
```

**Ejemplo detallado:**

```bash
git commit -m "feat(auth): agregar login con Google

Se implementó autenticación con Google OAuth2.
El usuario puede iniciar sesión usando su cuenta de Google.

Closes #123"
```

---

### `fix` - Corrección de errores

**Uso:** Cuando corriges un bug o problema existente.

```bash
git commit -m "fix: resolver error de validación en formulario"
```

**Ejemplo detallado:**

```bash
git commit -m "fix(forms): resolver validación de email duplicado

El formulario no validaba correctamente emails duplicados.
Se agregó validación asincrónica en el backend.

Fixes #456"
```

---

### `docs` - Documentación

**Uso:** Cambios solo en documentación (README, comentarios, guías).

```bash
git commit -m "docs: actualizar instrucciones de instalación"
```

**Ejemplo:**

```bash
git commit -m "docs(readme): agregar guía de configuración

Se agregó sección sobre cómo configurar las variables de entorno.
Se incluyen ejemplos de .env.example"
```

---

### `style` - Formateo y estilos

**Uso:** Cambios que NO afectan la lógica (formateo, espacios, comillas, etc.).

**¡IMPORTANTE!** Con Prettier:

```bash
git commit -m "style: aplicar prettier al proyecto"
```

**NO es para CSS/HTML, es para formato de código:**

```bash
# ✅ CORRECTO - Cambios de formato
git commit -m "style: aplicar estándar de indentación"

# ❌ INCORRECTO - Cambios de CSS
git commit -m "style: cambiar color del botón a azul"
# Esto debería ser:
git commit -m "feat(button): cambiar color a azul"
```

---

### `refactor` - Refactorización

**Uso:** Cambios que mejoran el código SIN cambiar funcionalidad.

```bash
git commit -m "refactor: simplificar lógica de autenticación"
```

**Ejemplo:**

```bash
git commit -m "refactor(auth): extraer validación a servicio

Se movió la lógica de validación de usuario a un servicio separado
para mejorar reutilización y testabilidad.

No hay cambios en funcionalidad."
```

---

### `perf` - Rendimiento

**Uso:** Cambios que mejoran velocidad o eficiencia.

```bash
git commit -m "perf: optimizar carga de imágenes"
```

**Ejemplo:**

```bash
git commit -m "perf(images): implementar lazy loading

Se implementó lazy loading en galería de imágenes.
Mejora de rendimiento: 45% más rápido en carga inicial."
```

---

### `test` - Tests

**Uso:** Agregar o modificar tests (sin cambiar código producción).

```bash
git commit -m "test: agregar tests para componente de login"
```

**Ejemplo:**

```bash
git commit -m "test(auth): cobertura completa de validaciones

Se agregaron tests parametrizados para todas las validaciones.
Cobertura: 95%"
```

---

### `chore` - Tareas de mantenimiento

**Uso:** Cambios que no afectan código producción (dependencias, config, etc.).

```bash
git commit -m "chore: actualizar dependencias"
```

**Ejemplo:**

```bash
git commit -m "chore(deps): actualizar Angular a v20.3.16

- @angular/core: 20.3.0 → 20.3.16
- @angular/cli: 20.3.0 → 20.3.16
- rxjs: 7.8.0 → 7.8.1"
```

---

## 🎯 Scope (Alcance)

El **scope** indica **en qué parte** del código se hace el cambio.

### Ejemplos de scopes en Angular:

```bash
feat(auth): ...           # Relacionado con autenticación
feat(navbar): ...         # Relacionado con navbar
feat(forms): ...          # Validación de formularios
feat(api): ...            # Llamadas a API
feat(styles): ...         # Sistema de estilos global
feat(dashboard): ...      # Página dashboard
```

### Cómo elegir el scope:

1. Mira qué componente, servicio o módulo modificaste
2. Usa nombre descriptivo pero corto
3. Si es muy grande, puede ser sin scope

```bash
# Con scope - Específico
git commit -m "feat(login): agregar recuperación de contraseña"

# Sin scope - Cambio general
git commit -m "feat: reorganizar estructura de carpetas"
```

---

## 📝 Descripción Corta

Sigue estas reglas:

✅ **Máximo 50 caracteres**  
✅ **Empieza con minúscula** (excepto si es un nombre propio)  
✅ **Imperativo, no pasado** ("agregar" no "agregado")  
✅ **Sin punto al final**  
✅ **Claro y específico**

### Ejemplos correctos:

```bash
git commit -m "feat: agregar autenticación con Google"           # ✅ Bueno
git commit -m "feat: add google auth"                           # ✅ También bien
git commit -m "fix: resolver error en validación de email"      # ✅ Claro
git commit -m "refactor: simplificar lógica de carrito"         # ✅ Específico
```

### Ejemplos incorrectos:

```bash
git commit -m "feat: agregada autenticación"                    # ❌ Pasado
git commit -m "FEAT: AGREGAR AUTH"                              # ❌ Mayúsculas
git commit -m "feat: actualizar cosas varias."                  # ❌ Vago + punto
git commit -m "wip: trabajo en progreso"                        # ❌ No descriptivo
git commit -m "feat: agregar autenticación, validación, etc"    # ❌ Muy largo
```

---

## 📄 Descripción Detallada (Cuerpo)

Se usa cuando necesitas explicar **POR QUÉ** hiciste el cambio, no el QUÉ.

### Formato:

```bash
git commit -m "feat(auth): agregar login con Google

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna.

- Implementado OAuth2 de Google
- Agregada validación de token
- Sincronización con base de datos"
```

### Cuándo usarlo:

✅ Cambios complejos que necesitan explicación  
✅ Decisiones técnicas importantes  
✅ Breaking changes  
✅ Múltiples cambios en un commit

### Cuándo NO usarlo:

❌ Cambios simples y obvios  
❌ Un solo cambio pequeño  
❌ Cuando la descripción corta es suficiente

### Ejemplos:

**CON descripción detallada:**

```bash
git commit -m "refactor(auth): cambiar estrategia de tokens

La estrategia anterior con cookies no era compatible con CORS.
Se implementó JWT en lugar de cookies para mejor compatibilidad.

Cambios:
- Removidas rutas de cookie
- Implementado JWT con expiracion
- Actualizado guard de autenticación

BREAKING CHANGE: Los tokens ahora son JWT, no cookies"
```

**SIN descripción (simple):**

```bash
git commit -m "docs: actualizar versión en README"
```

---

## 🔗 Footer (Pie de página)

Se usa para referencias externas como issues, PRs, o breaking changes.

### Tipos de footers:

#### Closes / Fixes (Cierra issue)

```bash
git commit -m "feat: agregar recuperación de contraseña

Closes #123"
```

**Github entiende esto y cierra automáticamente el issue.**

#### Multiple issues:

```bash
git commit -m "fix: resolver validación

Closes #123
Closes #456"
```

#### Breaking Change:

```bash
git commit -m "feat!: cambiar API de login

BREAKING CHANGE: El endpoint /login ahora requiere JWT en header.
Antes: Authorization: Bearer token
Ahora: X-API-Key: token"
```

---

## 🚀 Ejemplos Completos

### Ejemplo 1 - Cambio simple

```bash
git commit -m "feat: agregar componente de loading"
```

### Ejemplo 2 - Con scope

```bash
git commit -m "fix(navbar): resolver menu no responsivo"
```

### Ejemplo 3 - Con detalles

```bash
git commit -m "feat(checkout): agregar métodos de pago

Se implementaron múltiples métodos de pago:
- Tarjeta de crédito
- PayPal
- Transferencia bancaria

Se agregó validación de seguridad en cada método.

Closes #789"
```

### Ejemplo 4 - Con breaking change

```bash
git commit -m "feat!: reescribir sistema de autenticación

Se reescribió completamente el sistema de autenticación
para mejorar seguridad y rendimiento.

BREAKING CHANGE: El formato del JWT cambió
- Campo 'user' ahora es 'userId'
- Campo 'exp' es obligatorio"
```

### Ejemplo 5 - Configuración (como hicimos)

```bash
git commit -m "chore: configure Prettier and ESLint for Angular 20

- Install and setup Prettier with Angular-optimized rules
- Install and configure ESLint 9
- Integrate Prettier and ESLint in VS Code settings
- Add npm scripts for formatting and linting
- Create comprehensive tutorials"
```

---

## 📊 Resumen Rápido

| Tipo       | Cuándo usar         | Ejemplo                             |
| ---------- | ------------------- | ----------------------------------- |
| `feat`     | Nueva funcionalidad | `feat(auth): agregar Google login`  |
| `fix`      | Corregir error      | `fix(form): resolver validación`    |
| `docs`     | Documentación       | `docs: actualizar README`           |
| `style`    | Formateo código     | `style: aplicar prettier`           |
| `refactor` | Mejorar código      | `refactor: simplificar lógica`      |
| `perf`     | Rendimiento         | `perf(images): lazy loading`        |
| `test`     | Tests               | `test(auth): agregar unit tests`    |
| `chore`    | Mantenimiento       | `chore(deps): actualizar librerías` |

---

## 💡 Tips para escribir buenos commits

### ✅ HACES:

1. **Un cambio por commit** - Si hiciste 3 cosas, son 3 commits
2. **Commits pequeños** - Fácil de revertir si hay problemas
3. **Descripción clara** - Que otros entiendan sin preguntar
4. **Scope específico** - Saben exactamente dónde fue el cambio

### ❌ EVITAS:

1. **Commits gigantes** - "Hice 50 cosas" - Mala práctica
2. **Descripciones vagas** - "actualizar archivos" - Sin contexto
3. **Mezclar tipos** - No hagas feat+fix en un commit
4. **Mensajes en mayúsculas** - "AGREGAR FEATURE" - Poco profesional

---

## 🔄 Flujo de trabajo recomendado

### Paso 1: Haz cambios pequeños y enfocados

```bash
# Cambio 1: Crear componente
git add src/app/login/
git commit -m "feat(login): crear componente de autenticación"

# Cambio 2: Agregar estilos
git add src/app/login/login.component.css
git commit -m "style(login): agregar estilos responsivos"

# Cambio 3: Agregar tests
git add src/app/login/login.component.spec.ts
git commit -m "test(login): agregar unit tests"
```

### Paso 2: Antes de push, verifica

```bash
git log --oneline -5
# Deberías ver algo así:
# abc1234 test(login): agregar unit tests
# def5678 style(login): agregar estilos responsivos
# ghi9012 feat(login): crear componente de autenticación
```

### Paso 3: Push

```bash
git push origin main
```

---

## 🎓 Práctica

Intenta escribir commits para estos escenarios:

**Escenario 1:** Agregaste un servicio para llamadas HTTP

**Escenario 2:** Corregiste un bug donde los botones no respondían en móvil

**Escenario 3:** Actualizaste la documentación del proyecto

**Escenario 4:** Optimizaste la carga de la página

**Respuestas sugeridas:**

```bash
# Escenario 1
git commit -m "feat(api): crear servicio HTTP para llamadas"

# Escenario 2
git commit -m "fix(buttons): resolver no responsividad en móvil"

# Escenario 3
git commit -m "docs(readme): agregar guía de instalación"

# Escenario 4
git commit -m "perf: optimizar tiempo de carga inicial"
```

---

## 📚 Recursos

- [Conventional Commits Oficial](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-guidelines)
- [Semantic Versioning](https://semver.org/)

---

## 🎯 Siguiente paso

Una vez domines esto, instalaremos **Commitizen** que guiará este proceso de forma interactiva.

¡Ahora ya sabes escribir profesionalmente tus commits! 🚀
