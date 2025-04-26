# Instalacion de paquetes
Comandos a ejecutar
```bash
npm create vite@latest
cd project
npm install
```

Instalacion de plugin de react de vite
```bash
npm install @vitejs/plugin -E
```

Instalar dependencias de React
```bash
npm install react react-dom -E
```

Crear entrada react en main.jsx
```javascript
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))

root.render(
  <h1>Proyecto React</h1>
)
```

Agregar linter en package.json
```bash
npm install standard -E
```
```json
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```