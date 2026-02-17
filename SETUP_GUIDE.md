# 🚀 Configuración de Estilos y Linting - Angular 20

¡Hola! He configurado completo el proyecto con **Prettier** (formateador) y **ESLint** (linter). Aquí está guía rápida:

## 📋 Scripts Disponibles

### Formateo (Prettier)

```bash
npm run format        # Formatea automáticamente todos los archivos
npm run format:check  # Verifica sin modificar
```

### Linting (ESLint)

```bash
npm run lint      # Revisa el código en busca de problemas
npm run lint:fix  # Intenta corregir automáticamente
```

### Desarrollo

```bash
npm start         # Inicia servidor de desarrollo
npm test          # Ejecuta tests
```

---

## 🎯 Flujo recomendado mientras desarrollas:

1. **Escribe código** - Haz cambios normalmente
2. **Guarda (Ctrl+S)** - Prettier y ESLint corrigen automáticamente
3. **Verifica antes de commit:**
   ```bash
   npm run format:check
   npm run lint
   ```
4. **Si hay problemas, corrige:**
   ```bash
   npm run format
   npm run lint:fix
   ```

---

## 📚 Archivos de Tutorial

Creé dos tutoriales detallados para aprender:

- **[PRETTIER_TUTORIAL.md](PRETTIER_TUTORIAL.md)** - Guía completa de Prettier
  - ¿Qué es Prettier?
  - Explicación de cada opción
  - Ejemplos prácticos

- **[ESLINT_TUTORIAL.md](ESLINT_TUTORIAL.md)** - Guía completa de ESLint
  - ¿Qué es ESLint?
  - Cada regla explicada
  - Cómo usarlo en VS Code

- **[LAYOUT_TUTORIAL.md](LAYOUT_TUTORIAL.md)** - Layout base (nav + contenido + footer)
   - Estructura del layout
   - Componentes de nav y footer
   - Estilos básicos

- **[PRODUCTOS_TUTORIAL.md](PRODUCTOS_TUTORIAL.md)** - Feature de productos
   - Servicio de productos
   - Pagina y componente de lista
   - Flujo de datos y rutas

- **[DETAIL_CARD_TUTORIAL.md](DETAIL_CARD_TUTORIAL.md)** - Detalle de producto
   - Componente detail card
   - Pagina de detalle
   - Estilos basicos

- **[SPINNER_TUTORIAL.md](SPINNER_TUTORIAL.md)** - Estados de carga
   - Componente spinner
   - Uso en lista y detalle
   - Estilos basicos

- **[VIEW_TRANSITIONS_TUTORIAL.md](VIEW_TRANSITIONS_TUTORIAL.md)** - Transiciones de rutas
   - Activacion en el router
   - Estilos globales

---

## ⚙️ Archivos de Configuración

| Archivo                                        | Propósito           |
| ---------------------------------------------- | ------------------- |
| [.prettierrc.json](.prettierrc.json)           | Reglas de formateo  |
| [.prettierignore](.prettierignore)             | Archivos a ignorar  |
| [eslint.config.js](eslint.config.js)           | Reglas de linting   |
| [.vscode/settings.json](.vscode/settings.json) | Integración VS Code |

---

## 🔌 Extensiones recomendadas

Instala en VS Code para mejor experiencia:

1. **Prettier - Code formatter** (esbenp.prettier-vscode)
   - Formateo automático al guardar
2. **ESLint** (dbaeumer.vscode-eslint)
   - Muestra errores en el editor
   - Corrección automática al guardar

O usa el comando en VS Code:

```
Ctrl+Shift+X (Extensions) → Busca y instala
```

---

## 📊 Versiones instaladas

```json
{
  "prettier": "^4.0.0",
  "eslint": "^9.39.2",
  "typescript-eslint": "^8.0.0",
  "@angular-eslint/eslint-plugin": "^21.2.0"
}
```

---

## 🎓 ¿Quieres aprender más?

Abre los archivos de tutorial según lo que necesites:

- **Empezando:** Lee [PRETTIER_TUTORIAL.md](PRETTIER_TUTORIAL.md) primero
- **Errores en código:** Mira las reglas en [ESLINT_TUTORIAL.md](ESLINT_TUTORIAL.md)
- **Configuración:** Edita [eslint.config.js](eslint.config.js) o [.prettierrc.json](.prettierrc.json)
- **Estructura de la app:** Lee [LAYOUT_TUTORIAL.md](LAYOUT_TUTORIAL.md)
- **Feature de productos:** Lee [PRODUCTOS_TUTORIAL.md](PRODUCTOS_TUTORIAL.md)
- **Detalle de producto:** Lee [DETAIL_CARD_TUTORIAL.md](DETAIL_CARD_TUTORIAL.md)
- **Estados de carga:** Lee [SPINNER_TUTORIAL.md](SPINNER_TUTORIAL.md)
- **Transiciones de rutas:** Lee [VIEW_TRANSITIONS_TUTORIAL.md](VIEW_TRANSITIONS_TUTORIAL.md)

---

## 💡 Tips finales

1. **No ignores los warnings** de ESLint - te enseñan a escribir mejor código
2. **Aprovecha el auto-fix** - presiona Ctrl+S y deja que las herramientas hagan el trabajo
3. **Antes de commitear**, siempre ejecuta:
   ```bash
   npm run format:check && npm run lint
   ```

---

¡Listo! Tu proyecto está configurado profesionalmente para seguir las mejores prácticas de Angular 20 👏
